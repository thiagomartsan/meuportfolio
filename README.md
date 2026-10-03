# TM21 — V10 SEO+

Site oficial: **https://tm21.com.br**

Esta versão mantém a identidade visual do portfólio e amplia a arquitetura para aquisição orgânica. A ideia não é transformar a TM21 em um blog genérico, e sim criar páginas úteis para intenções comerciais, nichos, regiões e dúvidas de decisão.

## Estrutura principal

- `/` — home comercial + portfólio
- `/criacao-de-sites/`
- `/landing-pages/`
- `/sites-institucionais/`
- `/rio-grande-do-sul/`
- `/santa-catarina/`
- `/site-para-advogados/`
- `/site-para-dentistas/`
- `/quanto-custa-criar-um-site/`
- `/blog/`

### Conteúdos iniciais

- `/blog/site-precisa-pagar-mensalidade/`
- `/blog/instagram-substitui-site/`
- `/blog/quanto-tempo-demora-criar-site/`
- `/blog/como-colocar-site-no-google/`

## SEO técnico

- domínio canônico `https://tm21.com.br` em todas as páginas;
- title e description exclusivos;
- um H1 por página;
- Open Graph;
- JSON-LD `WebSite` + `Person` na home;
- `WebPage`, `Service`, `BreadcrumbList` e `BlogPosting` quando aplicável;
- `sitemap.xml`;
- `robots.txt`;
- OAI-SearchBot permitido;
- RSS em `/blog/feed.xml`;
- links internos entre serviços, regiões e conteúdo;
- página 404 com `noindex`;
- imagem social em `/assets/og-tm21.png`.

Não foi criado `llms.txt`: não é prioridade frente a sitemap, conteúdo, links internos, crawl e mensuração.

## Fila editorial

`content/queue.yml` registra intenção, palavra-chave, página relacionada, região, CTA, evidência e status antes da produção. Isso prepara a automação futura sem transformar o domínio em uma fábrica de conteúdo.

Fluxo planejado:

**pesquisa → pauta → geração assistida → validação → publicação → sitemap/IndexNow → GSC/GA4 → aprendizado**

A etapa de geração automática ainda não foi ligada à API. Isso será feito somente depois de configurar chave segura no GitHub e a regra de revisão/publicação.

## QA automático

`.github/workflows/seo-qa.yml` roda `scripts/validate_site.py` a cada push/PR e falha se encontrar:

- página sem title/description/canonical;
- quantidade de H1 diferente de 1;
- referência ao domínio antigo da Vercel;
- placeholders óbvios.

## Próximos passos depois do deploy

1. Confirmar `tm21.com.br` como Production na Vercel.
2. Manter `www.tm21.com.br` e `tm21-eta.vercel.app` redirecionando por 308 para o domínio canônico.
3. Criar propriedade de domínio no Google Search Console.
4. Verificar por TXT no Registro.br.
5. Enviar `https://tm21.com.br/sitemap.xml`.
6. Configurar GA4 e eventos de clique no WhatsApp/formulário.
7. Cadastrar Bing Webmaster/IndexNow quando o pipeline de publicação recorrente entrar.
8. Usar Search Console para decidir novas páginas por impressões, intenção, CTR e posição.

## Formulário

O formulário continua usando FormSubmit via AJAX. Faça a ativação do destinatário e teste real antes de divulgar.

## Regra editorial

Conteúdo não é publicado porque “SEO gosta de frequência”. A pauta precisa responder a uma intenção útil e se conectar a serviço, nicho, região ou decisão comercial. Profissões regulamentadas e afirmações que dependem de fonte atual exigem revisão antes de publicação.
