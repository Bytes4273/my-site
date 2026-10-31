export const REPOSITORY = 'leoparreira21/ctresb-leis';
export const REVISION = '15eb09b618ff08a38c4dfee06a91bd139d093f5d';
export const ROOTS = ['federal', 'estaduais', 'municipais', 'reguladores', 'jurisprudencia', 'tratados'];
const MAX_BYTES = 2 * 1024 * 1024;
const cache = new Map();

export function validPath(path) {
  if (typeof path !== 'string' || path.length > 600 || /[\\\x00-\x1f]/.test(path)) return false;
  if (path === '' || path === 'constituicao.md') return true;
  const parts = path.split('/');
  return ROOTS.includes(parts[0]) && parts.every(part => part && part !== '.' && part !== '..');
}

export function repositoryUrl(path = '') {
  if (!validPath(path)) throw new Error('Caminho inválido.');
  return `https://github.com/${REPOSITORY}/tree/${REVISION}${path ? '/' + path.split('/').map(encodeURIComponent).join('/') : ''}`;
}

export function officialSource(text) {
  const header = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  const value = header?.[1].match(/^fonte:\s*(.+)$/m)?.[1].trim().replace(/^(["'])(.*)\1$/, '$2');
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : null;
  } catch { return null; }
}

export async function loadPath(path, {signal, fetcher = fetch} = {}) {
  if (!validPath(path)) throw new Error('Caminho inválido.');
  if (cache.has(path)) return cache.get(path);
  const controller = new AbortController();
  const abort = () => controller.abort();
  signal?.addEventListener('abort', abort, {once: true});
  if (signal?.aborted) abort();
  const timer = setTimeout(abort, 15000);
  try {
    const encoded = path.split('/').map(encodeURIComponent).join('/');
    const url = `https://api.github.com/repos/${REPOSITORY}/contents/${encoded}?ref=${REVISION}`;
    const response = await fetcher(url, {signal: controller.signal, credentials: 'omit', headers: {Accept: 'application/vnd.github+json'}});
    if (response.status === 403 || response.status === 429) throw new Error('O GitHub limitou temporariamente as consultas. Aguarde e tente novamente ou abra o acervo no GitHub.');
    if (response.status === 404) throw new Error('Este conteúdo não está disponível nesta versão do acervo.');
    if (!response.ok) throw new Error('O acervo está indisponível no momento. Tente novamente.');
    // Limit the response body as well as the source document size.
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let bytes = 0, body = '';
    while (true) {
      const {value, done} = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_BYTES * 2) {
        await reader.cancel();
        throw new Error('Este conteúdo é grande demais para leitura aqui. Abra-o no GitHub.');
      }
      body += decoder.decode(value, {stream: true});
    }
    body += decoder.decode();
    const data = JSON.parse(body);
    let result;
    if (Array.isArray(data)) {
      const entries = data.filter(item => {
        const name = item.path?.slice(path ? path.length + 1 : 0);
        return validPath(item.path) && name && !name.includes('/') &&
          (item.type === 'dir' || (item.type === 'file' && item.name.endsWith('.md')));
      }).map(({name, path, type}) => ({name, path, type}));
      entries.sort((a, b) => (b.type === 'dir') - (a.type === 'dir') || a.name.localeCompare(b.name, 'pt-BR', {numeric: true}));
      result = {kind: 'directory', entries, limited: data.length >= 1000};
    } else {
      if (data.type !== 'file' || !path.endsWith('.md') || data.encoding !== 'base64' || data.size > MAX_BYTES || !data.content) {
        throw new Error('Este documento deve ser consultado diretamente no GitHub.');
      }
      const binary = atob(data.content.replace(/\s/g, ''));
      result = {kind: 'document', text: new TextDecoder().decode(Uint8Array.from(binary, c => c.charCodeAt(0)))};
    }
    // Bounded memory cache; no browser storage or existing application data is used.
    if (cache.size >= 30) cache.delete(cache.keys().next().value);
    cache.set(path, result);
    return result;
  } catch (error) {
    if (controller.signal.aborted) throw new Error('A consulta foi interrompida ou demorou demais. Tente novamente.');
    throw error;
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener('abort', abort);
  }
}
