# Portfólio TM21 — provas, escopo e posicionamento

**Versão:** 23/10/2026 — apoio interno, não página pública.

## 1. Regra de apresentação

LinkedIn: **onde trabalhei, responsabilidades, resultados medidos e trajetória**.

Portfólio: **qual problema investiguei, quais decisões tomei, como trabalhei, qual artefato produzi, qual foi minha contribuição e o que não está validado**.

Evitar um site com dez caixas de ferramentas, nomes de frameworks ou depoimentos fictícios. Diferenciar execução própria, colaboração, pesquisa e ideia não publicada.

## 2. Mapa da experiência para cases

| Área do LinkedIn | Case que complementa | Prova/artefato recomendado |
|---|---|---|
| Levantamento de requisitos e interface negócio–tecnologia na Exe | Automações e fluxos de negócio | Diagrama **reconstruído e ilustrativo**, com entrada, regras, decisões, exceções e revisão humana |
| Conteúdo, CRM e operação digital na Exe | Operação digital e comunidades | Descrição de arquitetura da comunidade Circle, jornada de entrada e mapa de plataformas — sem métricas inventadas |
| Produto, mercado e tomada de decisão | Gestão do Personal | Matriz de análise competitiva anonimizada, perguntas de discovery e critérios de validação |
| Modelagem de produto, requisitos e conteúdo | JobUp | Exemplo **anônimo** de skill, nível de proficiência, requisito de avaliação e questão, somente com material liberado |
| UX, interpretação gerencial e indicadores | Controladoria Inteligente | Comparação de alternativas de interface e justificativa para visão estratégica/tática, sem informação financeira real |
| Engenharia de produção e operações | MOLDAR | Fluxo de cálculo e simulador com dados explicitamente demonstrativos |
| Engenharia econômica e análise de investimentos | Strategic Flexibility | Repositório/caderno com premissas, fórmulas e limitações do modelo |
| Presença digital e construção de sites | Emily Sehn | Link e print da página publicada (com consentimento quando necessário) |

## 3. Como comprovar o que não está mais acessível

Nem toda experiência precisa de screenshot, mas toda afirmação pública deve ser defensável.

### Circle — Exe Insights

- Descrever o objetivo da comunidade, estrutura de espaços e percurso do membro, de acordo com o que realmente foi feito.
- Produzir um **mapa reconstruído** com nomenclaturas genéricas e indicação "Exemplo ilustrativo da arquitetura de comunidade".
- Não apresentar tela criada hoje como se fosse print de uma comunidade existente ou prometer número de membros.

### Hotmart e infoprodutos

- Contar o processo em que houve participação: organização de conteúdo, estrutura de curso, edição/publicação, acesso, suporte ou jornada de compra, somente nas etapas realmente executadas.
- Se houver antigos e-mails, roteiros, arquivos de aula, planilhas e propostas que possam ser mostrados, preparar amostras desidentificadas.
- Não exibir faturamento, vendas ou lançamentos inexistentes ou não preservados.

### Tráfego pago

- Separar "participei de planejamento/operacionalização/acompanhamento" de "geri orçamento/otimizei campanhas/entreguei ROI".
- Sem acesso ao histórico de anúncios, não anunciar CPC, CPA, ROAS, volume de leads ou tamanho de verba.
- Demonstrar conhecimento com raciocínio sobre objetivo, canal, público, criativo, destino, evento de conversão e rotina de mensuração. Se usar exemplo, declarar como **simulação**.

### n8n e clientes confidenciais

- Descrever a tua função: investigação, entendimento do processo, desenho funcional, regras de negócio, integração e participação parcial em implementação/testes.
- Desenhar um fluxograma genérico ou fictício **depois** de eliminar dados do cliente; identificar como "fluxo ilustrativo, sem conexão com projeto real".
- Não divulgar workflow JSON, tokens, credenciais, endpoints, mensagens, nomes de pessoas, números ou logotipos.
- Em caso de autorização formal, apresentar somente o trecho especificamente aprovado pelo cliente.

## 4. O que o case Gestão do Personal sustenta

A pesquisa documentada inclui dossiês de MFIT, Tecnofit, NextPersonal e ProFit Control; leitura de comentários públicos de usuários e análise do Panorama Fitness Brasil 2026. Documentos anteriores do produto registram requisitos aprovados e uma operação inicial; a pesquisa de usuários proposta **não equivale a entrevistas realizadas**.

O relatório EP-QUAL de 23/10 registra 355 testes em PR #48 com CI verde, mas **nada dessa entrega estava publicado na data do relatório**. A auditoria também identificou backup real pendente, migrações 0009/0010 não aplicadas e necessidade de aprovação. Não atribuir automaticamente a Thiago a autoria dos testes, do backend ou da implantação integral. Seu papel documentado pode destacar a definição de objetivos, controles de qualidade, riscos e critérios de aceitação do trabalho técnico colaborativo.

## 5. Privacidade nas imagens

- **Não usar somente `filter: blur(...)` sobre dados reais.** O arquivo-fonte pode continuar acessível em alta resolução, cache e DevTools.
- Preferir um ambiente de teste com dados fictícios; segunda opção é gerar uma imagem sanitizada, removendo de verdade nome, CPF, endereço, dados bancários e preços confidenciais ANTES de incluí-la em `/assets`.
- Não publicar anexos, contratos, e-mails, notas fiscais, DREs ou planilhas originais de clientes.
- Verificar metadados, URLs e texto alternativo; remover referência que identifique um cliente anônimo.

## 6. Níveis de prova (não confundir)

1. **Público e verificável:** site publicado, link público, repositório aberto, case autorizado.
2. **Documento produzido:** matriz, backlog, fluxo, protótipo, roteiro, decisão — com liberação de uso.
3. **Relato profissional próprio:** participação passada no Circle, Hotmart, anúncios ou integrações. Pode constar como experiência, sem declarar resultado quantitativo.
4. **Exemplo ilustrativo:** material reconstruído para explicar método; sempre rotulado.
5. **Hipótese / backlog:** produto e trabalho ainda não implementados; nunca confundir com entrega.

## 7. Blog oculto

Na V2, links para `/blog/` foram removidos das páginas do portfólio e de menus/rodapés da parte institucional. O conteúdo foi **preservado**. Isso **não o torna privado nem garante desindexação**: URLs antigas continuam acessíveis e podem aparecer em mecanismos de busca. Se o objetivo futuro for ocultar também da indexação, precisa haver uma decisão explícita de SEO e uma implementação separada.

## 8. Antes de publicar

- [ ] Confirmar que a bio representa a formação acadêmica e a trajetória do LinkedIn sem divergências.
- [ ] Escolher foto pessoal real e autorizada.
- [ ] Conferir consentimento de divulgação de logos, parceiros, telas e links.
- [ ] Validar se os exemplos de skills e quiz da JobUp podem ser publicados.
- [ ] Substituir ou remover qualquer print de sistemas com dados reais.
- [ ] Revisar URLs públicas e links para aplicativos que possam ter mudado.
- [ ] Realizar QA em navegador com URL real, inclusive SEO, indexação, links, menu e mobile.
- [ ] Publicar em branch separada, sem substituir automaticamente o portfólio anterior.
