# Integração ctresb-leis

A área `public/legislacao.html` disponibiliza navegação e leitura sob demanda do
acervo público `leoparreira21/ctresb-leis`, sem importar normas para o Firebase.
O menu e um bloco de apresentação em `public/index.html` levam à nova área.

## Arquivos

- `public/legislacao.html`: página independente, sem SDK Firebase ou scripts do minerador.
- `public/assets/css/legislacao.css`: estilos responsivos próprios.
- `public/assets/js/legislacao-api.mjs`: consultas GET anônimas, validação de caminhos,
  limites de tamanho, timeout de 15 segundos e cache em memória de até 30 entradas.
- `public/assets/js/legislacao.js`: navegação por hash, diretórios, leitor de texto,
  acessibilidade e tratamento de erros.
- `tests/legislacao.test.mjs`: verificações com Node.js, sem instalar dependências.

## Dados e segurança

Não há migrações, gravações em banco ou uso de localStorage/sessionStorage.
Autenticação, funções, contratos, perfis e minerador não são modificados.
O texto remoto é inserido com `textContent`, sem executar HTML/JavaScript do acervo.
Links de fonte aceitam somente HTTPS sem credenciais embutidas. São fontes
indicadas pelo repositório externo, não uma certificação de autenticidade.
As consultas são enviadas diretamente ao GitHub, que recebe os dados normais de
uma conexão HTTP; não são incluídos cookies ou tokens da aplicação.

## Versão e limitações

Revisão fixada: `15eb09b618ff08a38c4dfee06a91bd139d093f5d`.
Para atualizar, revise a nova origem, altere `REVISION` em `legislacao-api.mjs` e o
texto de fallback no HTML, execute os testes e valide documentos reais antes do deploy.
Nenhuma atualização automática de conteúdo é executada.

A API pública do GitHub limita consultas anônimas e retorna no máximo 1.000 itens
por pasta. A interface informa esse limite e oferece acesso direto ao GitHub.
Documentos acima dos limites da API/2 MiB são encaminhados à origem. Não há índice
de busca integral hospedado: a pesquisa abre o GitHub, pode exigir login e consulta
a branch padrão atual, conforme informado na interface.

O acervo contém conversões automáticas e OCR. É informativo e não substitui o Diário
Oficial nem comprova a vigência de uma norma. Metadados e texto são preservados.
As normas são atos oficiais; os scripts upstream têm licença MIT. Não foram
copiados scripts upstream para este projeto.

## Validação e publicação

Execute `node --test tests/legislacao.test.mjs` e `node --check public/assets/js/legislacao.js`.
Sirva a pasta `public` por HTTP; não abra o HTML por `file://`, pois usa módulos.
Valide navegação, leitura, voltar, busca externa, erro de caminho e visual em tela pequena.
Firebase já publica `public`; nenhuma alteração de regras ou configuração é necessária.
Na Vercel, preserve a configuração existente e confirme que o diretório servido é `public`.

Estado anterior preservado na branch `backup/pre-ctresb-2026-10-31`, commit
`0593b290ebe53275d511f0a75d0d4d65e9490bf0`. Para desfazer, reverta apenas o commit
da integração e republique pelo processo normal. Não reescreva o histórico ou restaure
o repositório inteiro por cima de alterações posteriores.
