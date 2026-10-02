# TM21 Portfolio

Versão revisada do portfólio TM21 em HTML, CSS e JavaScript puro.

## Estrutura

- `index.html`: conteúdo, SEO básico e marcação semântica.
- `css/styles.css`: identidade visual, layout, filtros de portfólio e responsividade.
- `js/main.js`: preloader, menu mobile, animações, filtro Páginas/Plataformas, WhatsApp, máscara brasileira de telefone e envio assíncrono do formulário.
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

A V5 envia o formulário diretamente pela página usando o endpoint AJAX do FormSubmit. O visitante não precisa abrir Outlook, Gmail ou outro aplicativo de e-mail.

O campo de WhatsApp mantém `+55` fixo, exibe a bandeira do Brasil e aplica máscara automática para DDD + número.

### Ativação única do FormSubmit

O FormSubmit não exige cadastro, mas o primeiro envio para `thiagomartsan@gmail.com` gera um e-mail de confirmação. Antes de divulgar o portfólio:

1. publique a V5;
2. faça um envio de teste pelo formulário;
3. abra o e-mail de ativação recebido em `thiagomartsan@gmail.com`;
4. clique no link de confirmação;
5. faça um segundo envio e confirme que chegou normalmente à caixa de entrada.

Depois dessa confirmação, os próximos contatos são encaminhados normalmente. A lógica de integração está isolada em `js/main.js` caso no futuro o formulário seja migrado para Web3Forms, Resend ou backend próprio.
