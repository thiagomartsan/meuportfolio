# TM21 — V24

Pacote completo de 05/10/2026: nova página do Rio Grande do Sul, acesso institucional mais visível no rodapé e preservação dos ajustes anteriores de privacidade, termos, dúvidas e consentimento.

## O que muda nesta versão

- `/rio-grande-do-sul/`: conteúdo comercial, entregáveis, busca local, regiões, municípios, perguntas frequentes e CTAs ao longo da página.
- Mapa vetorial local com geometria simplificada do IBGE: seis áreas azuis para avaliar encontros presenciais sob combinação e demais áreas em cinza para atendimento online.
- Animação suave com pausa, seleção de regiões por botão/teclado ou mapa e respeito à preferência de movimento reduzido.
- Consulta local aos 497 municípios do RS, sem geolocalização do navegador e sem enviar o texto pesquisado ao Analytics.
- Listas expansíveis dos 98 municípios da área destacada, organizadas em sete grupos com nomes familiares.
- Metadados, canonical, dados estruturados de Service e areaServed e atualização do sitemap. Nenhuma unidade ou coordenada de escritório é inventada.
- Bloco “Informações e ajuda” nos 18 rodapés: dúvidas frequentes, privacidade, termos e preferências de cookies.
- Resumo do atendimento no card do RS da home e correção de uma âncora duplicada nos Termos de Uso.

O conteúdo regional permanece no HTML inicial; mapa, listas e contatos ficam disponíveis sem JavaScript. Os controles adicionais aparecem quando o script está disponível. O CSS regional é carregado somente na página do RS. Santa Catarina receberá sua revisão de conteúdo em uma próxima etapa.

## Substituir e publicar a V24

1. Extraia `tm21-portfolio-v24.zip`.
2. Copie o conteúdo da pasta extraída `tm21-portfolio` para dentro do repositório existente, aceitando substituir os arquivos. Preserve a pasta `.git` local; o ZIP não contém essa pasta.
3. Abra o Git CMD e execute:

```cmd
cd /d "C:\Users\Admin\Desktop\Currículos\Thiago\Sites\Portfólio - Thiago\tm21-portfolio"
git status
git add .
git commit -m "Atualiza pagina do RS e navegacao do rodape para V24"
git push
```

Alternativamente, depois de copiar os arquivos para o repositório existente, execute `ATUALIZAR-V24.cmd` dentro dele. O arquivo usa sua própria pasta como diretório de trabalho, interrompe em erros do Git e mantém o resultado aberto. Não execute os dois métodos se o primeiro já concluiu o envio.

4. Aguarde o deploy da Vercel. Confira `/rio-grande-do-sul/` e o bloco “Informações e ajuda” no rodapé. Se a aba antiga continuar mostrando a versão anterior, recarregue com `Ctrl + F5`.
5. Teste a consulta com Taquara (presencial sob combinação + online) e Pelotas (online), a pausa do mapa e os links do rodapé.

## Validação da V24

Render real com Chromium e fontes do site em 320, 360, 390, 430, 768 e 1440 px; sem overflow horizontal nos controles e no conteúdo revisado. Seleção por teclado, SVG e botões, busca com e sem acentos, mensagem de município não encontrado, links de WhatsApp por contexto, listas expansíveis, versão sem JavaScript e movimento reduzido verificados.

Links internos, âncoras, arquivos locais, JSON-LD, SVG e sitemap conferidos. Rodapés verificados nas 18 páginas. Consentimento antes/depois do aceite, revogação, sincronização entre abas, armazenamento bloqueado e formulário após recusa passaram novamente, com Google Analytics e envio de formulário simulados para não gerar dados reais de teste.

Checagens locais disponíveis:

```bash
python scripts/validate_site.py
node --check js/regions.js
node --check js/main.js
node --check js/analytics.js
node --check js/consent.js
```

O mapa não depende de API externa em produção. Fonte e recorte: `content/rs-map-source.md`. As referências de SEO são o guia inicial do Google e suas políticas sobre conteúdo repetido por região e excesso de palavras-chave:

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br
- https://developers.google.com/search/docs/essentials/spam-policies
- https://support.google.com/business/answer/9157481?hl=pt-BR
- https://schema.org/Service
- https://schema.org/areaServed

A base técnica e o conteúdo ajudam a tornar o serviço compreensível para visitantes e buscadores; não garantem indexação, posição ou contatos em cada município. As configurações privadas do Search Console e do Perfil da Empresa não foram alteradas por este pacote.

---

## Histórico anterior

### TM21 — V17

Versão focada em diferenciação visual da home, equilíbrio de blocos, privacidade e consentimento.

## Principais mudanças
- Hero com composição cinética de projetos, sem repetir o carrossel do portfólio.
- Portfólio com seleção Páginas/Plataformas horizontal e prévia em carrossel único.
- CTA da JobUp corrigido para “Conhecer a JobUp”.
- Entregáveis reescritos em linguagem mais comercial e nota de 60 dias em largura total.
- Processo reorganizado em fluxo animado de largura total.
- Seção “Além de sites” com fundo cinza-azulado mais confortável.
- Atendimento com bandeiras reais do RS, SC e Brasil e globo animado leve.
- Bloco de conteúdo removido da home; o blog permanece como hub editorial.
- Página `/privacidade/` criada.
- Banner de cookies com opção “Somente necessários” ou “Aceitar análise”.
- Google Analytics 4 passa a carregar somente após aceite de cookies de análise.
- Política de Privacidade e preferências de cookies adicionadas ao rodapé.

## QA
Execute:

```bash
python scripts/validate_site.py
node --check js/main.js
node --check js/analytics.js
node --check js/consent.js
```


## V18 — Blog Content Hub
- Reestrutura a home do blog com destaque editorial, busca local, filtros por assunto, grade de artigos e hub de links internos.
- Ajusta metadata e JSON-LD da CollectionPage.
- Mantém categorias como filtros, sem criar páginas finas de categoria enquanto o volume de artigos ainda é pequeno.
- Acrescenta autoria e contexto editorial, além de alt text descritivo nas capas.

## Atualização de 04/10/2026 — Privacidade, termos e dúvidas

- Reescreve `/privacidade/` a partir dos campos e serviços usados pelo site: Vercel, FormSubmit, Gmail, Google Fonts e Google Analytics 4.
- Identifica o responsável como pessoa física, inclui contato direto, finalidades, bases legais, cookies, critérios de conservação, fornecedores e direitos do titular.
- Cria `/termos-de-uso/` para uso das páginas e conteúdo. Condições específicas de contratação permanecem na proposta/contrato.
- Cria `/duvidas-frequentes/` com respostas sobre orçamento, prazo, pagamento, custos de terceiros e limites do acompanhamento de 60 dias.
- Adiciona as duas páginas ao sitemap e os links a todos os rodapés.
- Corrige revogação de análise na página já aberta, bloqueia eventos personalizados depois da recusa e sincroniza a preferência entre abas.
- Mantém o Analytics sem carregamento antes do aceite. Sinais de publicidade e personalização de anúncios são desativados na configuração da tag.
- Oferece aceitar e recusar com o mesmo destaque. Mostra a escolha atual e preserva o uso de formulário/WhatsApp sem análise.
- O CSS de leitura das três páginas fica em `css/institutional.css`, carregado somente nelas.

### Substituição no Windows

Extraia o ZIP e copie o conteúdo da pasta `tm21-portfolio` por cima do repositório local existente, aceitando a substituição. Preserve a pasta `.git` local. O pacote de entrega não contém `.git`.

Abra o Git CMD e execute:

```cmd
cd /d "C:\Users\Admin\Desktop\Currículos\Thiago\Sites\Portfólio - Thiago\tm21-portfolio"
git status
git add .
git commit -m "Atualiza privacidade, termos, duvidas frequentes e consentimento"
git push
```

### Conferência após a publicação

Abra `/privacidade/`, `/termos-de-uso/` e `/duvidas-frequentes/`. Teste os links do rodapé, as perguntas expansíveis e a alteração de cookies. Em uma janela sem preferência salva, a tag GA4 deve aparecer na rede somente depois do aceite; ao recusar novamente, novos envios de análise devem parar.

### Referências consultadas

- LGPD: https://planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm
- ANPD, guia de cookies: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais
- ANPD, agentes de pequeno porte: https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022
- Google, controles de privacidade: https://developers.google.com/tag-platform/security/guides/privacy?hl=pt-br
- Google, cookies GA4: https://support.google.com/analytics/answer/11397207?hl=pt-BR
- Fornecedores: https://vercel.com/legal/privacy-notice e https://formsubmit.co/privacy.pdf
- Referências de apresentação: políticas da Globo e da Folha, artigo da RD Station, documentos do G4 fornecidos pelo usuário.
- Discussões de contexto no Reddit: https://www.reddit.com/r/webdev/comments/w9ywa0/ e https://www.reddit.com/r/webdev/comments/w9ih47/ (não usadas como autoridade jurídica).

A política descreve o código inspecionado e os canais divulgados. Configurações privadas de retenção no GA4, caixa de e-mail e contratos de fornecedores não foram auditadas nesta atualização; não há declaração de conformidade jurídica integral.
