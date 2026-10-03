# TM21 — V12 Clareza, Portfólio e Conteúdo

Site oficial: **https://tm21.com.br**

A V12 mantém SEO e mensuração da V11, reduz redundância na home, destaca entregáveis e projetos e transforma o guia de preço em conteúdo editorial principal do blog.


## Ajustes de experiência da V12

- home mais curta: removidos blocos redundantes de benefícios, posicionamento e conhecimentos;
- entregáveis agrupados e colocados logo após o portfólio;
- processo/metodologia vem imediatamente depois da entrega;
- e-mail deixou de aparecer como CTA público; o formulário continua enviando para o e-mail operacional;
- portfólio ganhou chamada explícita e badge para abrir projetos publicados;
- textos dos projetos foram reduzidos para deixar as telas carregarem mais a prova visual;
- `/quanto-custa-criar-um-site/` passou a ser tratado como guia editorial, com `BlogPosting`, data, autoria, links internos e CTA;
- o guia de preço virou o primeiro destaque na home, no índice do blog e no RSS.

## Google Search Console

A propriedade de domínio `tm21.com.br` já foi verificada via DNS no Registro.br e o sitemap está publicado em:

- `https://tm21.com.br/sitemap.xml`

O registro TXT de verificação do Search Console deve permanecer no DNS.

## Google Analytics 4

ID de medição instalado em todas as páginas:

- `G-1WBRRW7W12`

A Google tag é carregada diretamente em cada página e o arquivo `/js/analytics.js` concentra os eventos de negócio.

### Eventos instrumentados

- `click_whatsapp` — clique em qualquer CTA do WhatsApp;
- `click_linkedin` — clique no LinkedIn;
- `view_project` — abertura de projeto externo a partir do portfólio;
- `generate_lead` — enviado somente depois de o formulário ser aceito pelo FormSubmit;
- `form_submit_success` — confirmação operacional do formulário;
- `form_submit_error` — falha de envio do formulário;
- `page_not_found` — acesso a uma rota inexistente/404.

Os eventos não enviam nome, e-mail, telefone nem texto livre ao Analytics.

A medição otimizada do GA4 pode permanecer ligada para page_view, scroll e demais eventos automáticos compatíveis.

## Formulário

O formulário segue usando FormSubmit via AJAX. O evento `generate_lead` só é disparado depois de uma resposta de sucesso do endpoint, evitando contar tentativa de envio como lead.

## Estrutura SEO preservada

- domínio canônico `https://tm21.com.br`;
- title e description exclusivos;
- um H1 por página;
- Open Graph;
- JSON-LD conforme a página;
- sitemap.xml e robots.txt;
- OAI-SearchBot permitido;
- RSS do blog;
- links internos;
- fila editorial em `content/queue.yml`;
- QA automático no GitHub Actions.

## Teste após o deploy

1. Abra o Google Analytics > Relatórios > Tempo real.
2. Visite `https://tm21.com.br` em uma aba anônima.
3. Confirme que aparece 1 usuário ativo.
4. Clique em um CTA do WhatsApp e confirme o evento `click_whatsapp` no tempo real/DebugView quando disponível.
5. Faça um envio de teste no formulário e confirme `generate_lead` e `form_submit_success`.
6. Abra uma URL inexistente, por exemplo `/teste-404-tm21`, e confirme `page_not_found`.

## Próximos passos no Google

Depois de validar a coleta:

1. marcar `generate_lead` como evento principal/key event no GA4;
2. vincular Search Console e GA4, garantindo que o mesmo usuário tenha permissões suficientes nos dois produtos;
3. acompanhar consultas, páginas, origem e conversão antes de ampliar a produção do blog;
4. cadastrar Bing Webmaster/IndexNow quando entrar o pipeline recorrente de publicação.

## Regra de privacidade

Não adicionar dados pessoais enviados pelo usuário como parâmetros de eventos do Analytics. Nome, e-mail, telefone e mensagem do formulário ficam fora da camada de mensuração.
