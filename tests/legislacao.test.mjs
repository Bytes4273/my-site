import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {loadPath, validPath, officialSource, repositoryUrl, REVISION} from '../public/assets/js/legislacao-api.mjs';

const json = data => new Response(JSON.stringify(data), {headers: {'Content-Type': 'application/json'}});

test('rejects traversal, non-acervo roots, malformed paths and script sources', () => {
  for (const path of ['../profile.html', 'federal/../api', 'scripts/run.py', 'federal//a', 'federal\\a', 'federal/\x00']) assert.equal(validPath(path), false);
  for (const path of ['', 'constituicao.md', 'estaduais/SP/leis-ordinarias/2002/10406.md']) assert.equal(validPath(path), true);
  assert.throws(() => repositoryUrl('../login.html'));
  assert.equal(officialSource('---\nfonte: "javascript:alert(1)"\n---\n# Lei'), null);
  assert.equal(officialSource('---\nfonte: "https://example.gov.br/lei"\n---\n# Lei'), 'https://example.gov.br/lei');
});

test('loads pinned directories, excludes unrelated files and uses anonymous requests', async () => {
  const result = await loadPath('', {fetcher: async (url, options) => {
    assert.ok(url.endsWith(`?ref=${REVISION}`));
    assert.equal(options.credentials, 'omit');
    return json([{name: 'scripts', path: 'scripts', type: 'dir'}, {name: 'federal', path: 'federal', type: 'dir'}, {name: 'constituicao.md', path: 'constituicao.md', type: 'file'}, {name: 'outside.md', path: 'federal/outside.md', type: 'file'}]);
  }});
  assert.deepEqual(result.entries.map(x => x.path), ['federal', 'constituicao.md']);
});

test('preserves Unicode, metadata and markup exactly as source text', async () => {
  const text = '---\nfonte: "https://example.gov.br"\n---\n# Constituição\nArt. 1º <script>alert(1)</script> — ação';
  const result = await loadPath('constituicao.md', {fetcher: async () => json({type: 'file', size: Buffer.byteLength(text), encoding: 'base64', content: Buffer.from(text).toString('base64')})});
  assert.equal(result.text, text);
  const ui = await readFile(new URL('../public/assets/js/legislacao.js', import.meta.url), 'utf8');
  assert.ok(ui.includes("byId('document-text').textContent = result.text"));
  assert.doesNotMatch(ui, /innerHTML|localStorage|sessionStorage|firebase/);
});

test('handles rate limits, missing documents, large files and cancellation', async () => {
  await assert.rejects(loadPath('federal/limit.md', {fetcher: async () => new Response('', {status: 429})}), /limitou/);
  await assert.rejects(loadPath('federal/missing.md', {fetcher: async () => new Response('', {status: 404})}), /não está disponível/);
  await assert.rejects(loadPath('federal/large.md', {fetcher: async () => json({type: 'file', size: 3000000, encoding: 'base64', content: 'YQ=='})}), /diretamente no GitHub/);
  const controller = new AbortController(); controller.abort();
  await assert.rejects(loadPath('federal/cancel.md', {signal: controller.signal, fetcher: async (_, {signal}) => {signal.throwIfAborted();}}), /interrompida/);
});

test('warns when GitHub caps a directory at 1000 entries', async () => {
  const result = await loadPath('estaduais', {fetcher: async () => json(Array.from({length: 1000}, (_, i) => ({name: String(i), path: `estaduais/${i}`, type: 'dir'})))});
  assert.equal(result.limited, true);
  assert.equal(result.entries.length, 1000);
});
