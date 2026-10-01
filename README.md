# TM21 Portfolio

Versão revisada do portfólio TM21 em HTML, CSS e JavaScript puro.

## Estrutura

- `index.html`: conteúdo, SEO básico e marcação semântica.
- `css/styles.css`: identidade visual, layout, filtros de portfólio e responsividade.
- `js/main.js`: preloader, menu mobile, animações, filtro Páginas/Plataformas, WhatsApp e formulário via `mailto:`.
- `assets/`: screenshots reais dos projetos, otimizados em WebP.
- `favicon.svg`: favicon tipográfico provisório TM21.
- `robots.txt`: libera indexação.

## Organização do portfólio

O portfólio foi separado em duas categorias selecionáveis:

- **Páginas**: Penafiel & Magalhães, Dr. Jair Kautzmann e BreadVale.
- **Plataformas**: Moldar, THG Learn, Controladoria / BPO Financeiro e JobUp.

As telas foram simplificadas para priorizar enquadramento e leitura: em geral uma interface principal e, quando faz sentido, uma versão mobile ou detalhe de apoio.

## Conteúdo institucional

Foram adicionadas duas seções voltadas ao valor comercial do trabalho:

- benefícios de uma presença digital própria;
- processo de leitura de posicionamento, identidade, Instagram, SEO básico/local, contato e mensuração.

Na trajetória profissional, JobUp aparece apenas como projeto no portfólio. A experiência profissional permanece concentrada em **Exe Business**.

## Rodar localmente

Pode abrir `index.html` diretamente no navegador. Para testar em ambiente semelhante ao deploy, rode um servidor local, por exemplo:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Antes de publicar

1. Definir o domínio.
2. Inserir canonical, `og:url` e `og:image` com URLs absolutas.
3. Fazer teste final em 360, 390, 430, 768, 1366 e 1440 px.
4. Testar a troca entre Páginas e Plataformas.
5. Testar WhatsApp, e-mail, LinkedIn e todos os links de projetos.
6. Rodar Lighthouse/PageSpeed após a publicação.
7. Configurar Search Console e Analytics quando o domínio estiver ativo.
8. Se houver autorização ou mudanças de status dos projetos demonstrativos/conceituais, atualizar as classificações no HTML.

## Formulário

Nesta versão o formulário valida os campos e abre o aplicativo de e-mail do visitante com destinatário, assunto e corpo preenchidos. A lógica está isolada em `js/main.js`, facilitando a troca futura por Formspree, Web3Forms ou backend próprio.
