import {loadPath, validPath, repositoryUrl, officialSource, REPOSITORY, REVISION} from './legislacao-api.mjs';

const byId = id => document.getElementById(id);
const labels = {federal: 'Legislação federal', estaduais: 'Estados e Distrito Federal', municipais: 'Legislação municipal', reguladores: 'Órgãos reguladores', jurisprudencia: 'Jurisprudência', tratados: 'Tratados internacionais', 'constituicao.md': 'Constituição Federal'};
let activeRequest;

function hashLink(path, label) {
  const link = document.createElement('a');
  link.href = '#' + encodeURIComponent(path);
  link.textContent = label;
  return link;
}

function breadcrumbs(path) {
  const nav = byId('breadcrumbs');
  nav.replaceChildren(hashLink('', 'Acervo'));
  const parts = path.split('/').filter(Boolean);
  parts.forEach((part, index) => {
    const separator = document.createElement('span');
    separator.textContent = '/';
    separator.setAttribute('aria-hidden', 'true');
    const label = labels[part] || part.replaceAll('-', ' ');
    const link = hashLink(parts.slice(0, index + 1).join('/'), label);
    if (index === parts.length - 1) link.setAttribute('aria-current', 'page');
    nav.append(separator, link);
  });
}

async function navigate() {
  activeRequest?.abort();
  const request = new AbortController();
  activeRequest = request;
  const status = byId('status');
  byId('directory').replaceChildren();
  byId('reader').hidden = true;
  byId('document-text').textContent = '';
  byId('retry').hidden = true;
  byId('official-source').hidden = true;
  byId('github-path').hidden = true;
  try {
    let path;
    try { path = decodeURIComponent(location.hash.slice(1)); } catch { throw new Error('Endereço de consulta inválido. Volte ao acervo.'); }
    if (path === 'explorador') path = '';
    if (!validPath(path)) throw new Error('Endereço de consulta inválido. Volte ao acervo.');
    breadcrumbs(path);
    byId('github-path').href = repositoryUrl(path);
    byId('github-path').textContent = path.endsWith('.md') ? 'Abrir documento no GitHub ↗' : 'Abrir esta pasta no GitHub ↗';
    byId('github-path').hidden = false;
    status.textContent = 'Carregando conteúdo do acervo…';
    byId('explorador').setAttribute('aria-busy', 'true');
    const result = await loadPath(path, {signal: request.signal});
    if (activeRequest !== request) return;
    if (result.kind === 'directory') {
      const fragment = document.createDocumentFragment();
      for (const entry of result.entries) {
        const link = hashLink(entry.path, '');
        link.className = 'entry';
        const icon = document.createElement('span');
        icon.className = 'entry-icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = entry.type === 'dir' ? '▱' : '§';
        const name = document.createElement('span');
        name.className = 'entry-name';
        name.textContent = labels[entry.path] || entry.name;
        const hint = document.createElement('small');
        hint.textContent = entry.type === 'dir' ? 'Explorar pasta →' : 'Ler documento →';
        name.append(hint);
        link.append(icon, name);
        fragment.append(link);
      }
      byId('directory').append(fragment);
      status.textContent = result.limited ? 'O GitHub mostra até 1.000 itens por pasta. Esta listagem pode estar incompleta; consulte a pasta no GitHub para acessar os demais.' : `${result.entries.length} pastas e documentos disponíveis nesta pasta.`;
      if (!result.entries.length) status.textContent = 'Nenhum documento disponível nesta pasta nesta versão. Consulte o projeto no GitHub para acompanhar a cobertura.';
    } else {
      const title = byId('document-title');
      title.textContent = labels[path] || path.split('/').pop();
      byId('document-text').textContent = result.text;
      byId('reader').hidden = false;
      const source = officialSource(result.text);
      if (source) {
        byId('official-source').href = source;
        byId('official-source').hidden = false;
      }
      status.textContent = 'Documento carregado. Confira a fonte indicada e a publicação oficial antes de citar.';
      title.focus();
    }
  } catch (error) {
    if (activeRequest !== request) return;
    status.textContent = error.message || 'Não foi possível carregar o acervo. Abra o conteúdo no GitHub.';
    byId('retry').hidden = false;
    if (!byId('github-path').hasAttribute('href')) breadcrumbs('');
  } finally {
    if (activeRequest === request) byId('explorador').setAttribute('aria-busy', 'false');
  }
}

byId('search-form').addEventListener('submit', event => {
  event.preventDefault();
  const term = byId('search-term').value.trim();
  if (!term) return;
  const url = new URL('https://github.com/search');
  // Remove qualifier syntax so a query cannot silently escape this repository.
  const words = term.replace(/[^\p{L}\p{N}\s.-]/gu, ' ').replace(/\s+/g, ' ').trim();
  if (!words) return;
  url.searchParams.set('q', `repo:${REPOSITORY} ${words}`);
  url.searchParams.set('type', 'code');
  window.open(url.href, '_blank', 'noopener,noreferrer');
});
byId('revision').textContent = `Versão do acervo: ${REVISION.slice(0, 12)} · Sem sincronização automática.`;
byId('retry').addEventListener('click', navigate);
window.addEventListener('hashchange', navigate);
navigate();
