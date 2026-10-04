# TM21 — V17

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
