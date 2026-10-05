# TM21 — V25

Pacote completo de 04/10/2026 (horário de Brasília): página de Santa Catarina no padrão visual e estrutural do RS, conteúdo regional próprio e alinhamento de visitas nas duas páginas. Inclui todas as alterações da V24 e os ajustes de privacidade, termos, dúvidas e consentimento anteriores.

## O que muda nesta versão

- `/santa-catarina/`: hero, mapa, consulta por cidade, entregáveis, SEO local, listas regionais, dúvidas e CTAs ao longo da página.
- Mapa municipal de SC com geometria simplificada do IBGE e ampliação da Grande Florianópolis para leitura no celular.
- Nove municípios em azul para avaliar visitas sob combinação. Os outros 13 municípios do entorno recebidos na referência aparecem como atendimento online; o restante do estado também é online.
- Consulta local aos 295 municípios de SC, com nomes sem acentos e reconhecimento de “Floripa”. Nenhuma localização do navegador é solicitada.
- Conteúdo sobre Grande Florianópolis, Vale do Itajaí, Norte, Oeste, Meio-Oeste, Serra, Sul e Planalto Norte, com exemplos de serviços e cidades.
- Visitas descritas como possibilidade a avaliar, sem inventar escritório, clientes ou histórico de atendimento presencial em SC.
- RS, SC e Dúvidas Frequentes deixam explícito que transporte, pedágios, estacionamento e eventual hospedagem precisam ser conversados antes da confirmação. O orçamento do site não inclui automaticamente despesas de viagem; custos e responsabilidades são alinhados previamente.
- `css/regions.css` e `js/regions.js` atendem as duas páginas com configuração local por estado. Nomes, cidades, mensagens e WhatsApp mantêm o contexto correto.
- Metadados, canonical, Service/areaServed, links internos e sitemap de SC revisados; os cards regionais da home seguem a mesma política de visitas.

## Substituir e publicar a V25

1. Extraia `tm21-portfolio-v25.zip`.
2. Copie o conteúdo da pasta extraída `tm21-portfolio` para dentro do repositório existente, aceitando substituir os arquivos. Preserve a pasta `.git` local; ela não está no ZIP.
3. Abra o Git CMD e execute:

```cmd
cd /d "C:\Users\Admin\Desktop\Currículos\Thiago\Sites\Portfólio - Thiago\tm21-portfolio"
git status
git add .
git commit -m "Atualiza pagina de Santa Catarina e custos de visitas para V25"
git push
```

Alternativamente, após copiar os arquivos para o repositório, execute `ATUALIZAR-V25.cmd` dentro dele. O arquivo usa sua própria pasta como diretório de trabalho, interrompe em erros do Git e mantém o resultado aberto. Use apenas um dos métodos de envio.

4. Aguarde o deploy da Vercel. Confira `/santa-catarina/`, `/rio-grande-do-sul/` e `/duvidas-frequentes/`. Recarregue com `Ctrl + F5` se a aba mantiver uma versão anterior.
5. Consulte “Floripa”, “São José” e “Águas Mornas” para a possibilidade de visita, e “Joinville”, “Tijucas” e “Garopaba” para online. Confira também Taquara e Pelotas no RS.
6. Teste a pausa do mapa, a seleção das áreas, os CTAs e a regra de despesas de viagem.

## Validação da V25

Render real com Chromium e fontes do site em 320, 360, 390, 430, 768 e 1440 px nas duas páginas. Interações de mapa e botões, teclado, consulta por cidade com e sem acentos, apelido “Floripa”, erro de município não encontrado, reset da mensagem ao editar a consulta e WhatsApp com contexto de município/estado verificados.

Sem overflow horizontal nos controles e no conteúdo revisado, inclusive com todas as listas de municípios abertas. Pausa, movimento reduzido, fallback sem JavaScript, listas e menu mobile conferidos. Geometria e nomes verificados: 295 municípios de SC, nove em destaque e 22 na lista regional; os 497 municípios da consulta e os 98 da cobertura regional do RS permanecem.

Links internos, âncoras, IDs, arquivos locais, JSON-LD, SVG e sitemap conferidos. Os 18 rodapés preservam “Informações e ajuda”. A consulta digitada não gera evento de Analytics. Consentimento antes/depois do aceite, revogação, sincronização entre abas, armazenamento bloqueado e formulário após recusa passaram novamente, com a tag e o envio simulados para não gerar dados reais de teste.

Checagens locais disponíveis:

```bash
python scripts/validate_site.py
node --check js/regions.js
node --check js/main.js
node --check js/analytics.js
node --check js/consent.js
```

Fontes dos mapas e recortes: `content/sc-map-source.md` e `content/rs-map-source.md`. Os mapas são locais; não consultam APIs em produção. SEO básico e conteúdo útil não garantem indexação, posição ou contatos em cada município. Não foram alteradas configurações privadas do Search Console, Analytics ou Perfil da Empresa.

Referências técnicas:

- https://servicodados.ibge.gov.br/api/docs/malhas?versao=3
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br
- https://developers.google.com/search/docs/essentials/spam-policies
- https://schema.org/Service
- https://schema.org/areaServed

---

## Histórico anterior

### V24

Página do Rio Grande do Sul com mapa, regiões, municípios, entregáveis, SEO e CTAs; rodapés com acesso institucional mais visível. A V25 preserva essas alterações e adiciona a orientação prévia sobre custos de visita.


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
