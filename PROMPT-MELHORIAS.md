# Prompt — Reformulação do site aionissolutions.com.br

Você vai reformular o site institucional da **Aionis Solutions** (https://aionissolutions.com.br). Antes de mudar qualquer coisa, leia o repositório/código atual inteiro (templates, estilos, scripts, deploy) e me diga em 5 linhas qual é a stack e como o deploy funciona.

## 1. Objetivo

Transformar o site em uma página de **conversão** (gerar conversa no WhatsApp e pedido de visita de diagnóstico), que ao mesmo tempo:
- passe **credibilidade técnica** para gestores e times de TI de outras empresas, que vão avaliar o site;
- continue **acessível para o público leigo** (dono de pequena e média empresa), sem jargão na camada principal.

Regra de ouro: o leigo entende em 10 segundos o que a Aionis resolve; o técnico encontra profundidade se quiser procurar (seção própria, detalhes expansíveis), sem que isso polua a página.

## 2. Regras de conteúdo (obrigatórias)

- **Não inventar** números, clientes, logos, depoimentos, métricas, prazos ou certificações. Use só o conteúdo deste prompt.
- **Remover** do site atual:
  - o card "+68% de eficiência / Desempenho em tempo real" (número sem fonte);
  - "100% Sob medida" (conflita com "Soluções prontas");
  - frases genéricas sem prova ("Tecnologia que impulsiona resultados", "Confiança de quem precisa de tecnologia que funciona");
  - repetições de "Agilidade" (aparece 3 vezes).
- Onde faltar dado, use `[PREENCHER: descrição]`, com destaque visual amarelo tracejado no ambiente de desenvolvimento, e liste na entrega. Nada com colchetes vai para produção: campo sem dado é removido.
- Não citar nome de empresas onde o fundador atua nem de clientes delas.
- Títulos dizem a conclusão, não rótulos genéricos.

## 3. Bugs do site atual a corrigir

1. Links de redes sociais vazios (`href="#"`) no rodapé: remover ou preencher com `[PREENCHER]`.
2. Texto cru do caminho de proteção de e-mail do Cloudflare aparecendo no rodapé.
3. Texto solto "Soluções e Consultoria em TI" no fim da página.
4. CTAs dos cards de serviço sem destino: todo CTA precisa levar a algum lugar (âncora, WhatsApp ou formulário).
5. Formulário sem telefone/WhatsApp, sem aviso de privacidade (LGPD) e sem prazo de retorno.

## 4. Identidade visual (manter)

- Azul-marinho `#0A0F2E` (fundos escuros), ciano `#00B8FD` (destaque/CTA), teal `#007F92` (acentos em fundo claro), fundo claro `#F6F7FB`, texto `#0E1430`, cinza de texto `#4E566B` (contraste AA garantido).
- Fontes: **Sora** (títulos) e **Inter** (texto).
- Ícones dentro de círculos (círculo marinho com ícone ciano, ou o inverso).
- Mesmo visual da apresentação institucional que já existe.

## 5. Estrutura da nova página (em ordem, com o texto)

**Header fixo:** logo · Soluções · Projetos · Como trabalhamos · Contato · botão "Falar no WhatsApp".
No mobile: menu compacto e **botão de WhatsApp fixo no rodapé da tela** (sem cobrir conteúdo; reservar espaço).

**1. Hero**
- H1: "Tecnologia sob medida para a sua operação"
- Sub: "Sistemas, automação, dados e infraestrutura de TI para indústria, serviços e comércio."
- CTA principal: "Agendar visita de diagnóstico gratuita" (WhatsApp com mensagem pronta).
- CTA secundário: "Ver projetos" (âncora).
- Linha de apoio: "Visita de 2 horas, sem custo e sem compromisso · Retorno em até 1 dia útil."
- Visual: print real de um projeto (Aionis Finance ou cardápio Mr Foods) dentro de moldura de dispositivo, em vez de card com métrica inventada.

**2. O problema**
- Título: "Sua operação roda em planilhas, papel e sistemas que não conversam."
- 3 dores: informação espalhada e retrabalho de digitação · falta de rastreio (onde está o material, quem movimentou) · decisão tomada com dado atrasado.
- Fecho: "A Aionis conecta isso."

**3. Soluções (4 linhas, nesta ordem de destaque)**
1. **Sistemas sob medida** (card em destaque, ciano): seu processo sai do papel e da planilha para um sistema rastreável. Ex.: controle de estoque, kanban e transferências por leitura de código, inventário cego, etiquetas e rastreio, perfis e histórico.
2. **Dados e BI**: indicadores de várias fontes (ERP, planilhas, apontamentos) reunidos em painéis, em Power BI ou web.
3. **Financeiro e automação**: contas, conciliação e notas em dia, com menos digitação. Leitura de notas e documentos por IA, **com revisão humana antes de lançar no ERP**.
4. **Infraestrutura e redes**: links com IP fixo e VPN entre unidades, servidor local integrado à nuvem, rede mesh, Wi-Fi interno separado do de visitantes, CFTV com mapa de passagem de cabos. Toda implantação inclui documentação técnica completa.

Cada card tem CTA para o WhatsApp com mensagem pré-preenchida citando aquela linha (ex.: "Olá! Quero conversar sobre Sistemas sob medida.").

**4. Projetos desenvolvidos pela Aionis**
Sub: "Soluções construídas por nós, algumas já em uso na nossa própria operação."
- **Mr Foods: PDV, cardápio digital e financeiro.** Selo: "Em uso na operação própria". Cardápio digital por link no WhatsApp, PDV com estoque e painel que consolida vendas de iFood, 99Food e WhatsApp. Módulo financeiro em beta. Link: mrfoodsburguer.com.br. Prints: cardápio + admin `[PREENCHER: prints do admin]`.
- **Aionis Finance.** Selo: "Em beta test". Notas e comprovantes enviados por WhatsApp, lidos e classificados por IA. Link: aionisfinance.com.br. Print: tela de lançamentos.
- **Controle de estoque e Kanban por leitura de código.** Selo: "Protótipo funcional". Transferências, inventário cego, etiquetas e rastreio, perfis e histórico de movimentação. **Sem print** (motivo de confidencialidade).
- Rodapé da seção: "Demonstração disponível na visita."

**5. Experiência real em operação industrial**
- Título: "Na prática, hoje."
- Texto: "O fundador atua como consultor de TI em uma empresa de engenharia e construção civil que atende clientes industriais, com:"
  - Implantação de automação fiscal: integração com ERP para lançamento de cupons fiscais e notas auxiliares, com conciliação bancária
  - Infraestrutura: servidor local integrado à nuvem, rede mesh, Wi-Fi segmentado e VPN entre duas sedes, tudo documentado
  - Projeto de CFTV e mapa de passagem de cabos
  - Sistemas internos de gestão financeira (Python, FastAPI, PostgreSQL)
  - Aplicativos internos sobre AWS e outros serviços
- Resultado: "Rede dimensionada para até 35 usuários em 2 sedes."

**6. Quem entrega**
- Adsow Batista, fundador. Foto circular `[PREENCHER: foto]` (se não houver foto boa, sem círculo, só o nome).
- Formação: Tecnólogo em Análise e Desenvolvimento de Sistemas, Fatec Taubaté (2025) · Pós-graduação em Computação Quântica, PUC Minas (em andamento, conclusão prevista 07/2027). Mesmo peso visual, sem selo.
- Certificações: Cisco CCNA · AWS Academy (selos discretos).
- Experiência: desenvolvimento de sistemas, nuvem e machine learning, com atuação diária em empresa de engenharia e construção civil que atende clientes industriais.
- Diferencial "Você fala com quem constrói" (já existe no site; manter aqui).
- Não criar nenhum serviço de computação quântica.

**7. Para o time de TI (camada técnica, em acordeões fechados por padrão)**
Título sugerido: "Para quem vai avaliar a parte técnica". Itens:
- **Stack:** Python, FastAPI, PostgreSQL, React, Docker, AWS, Power BI.
- **Propriedade:** código, dados e documentação técnica são do cliente, inclusive no fim do contrato.
- **Qualidade:** primeira versão com testes automatizados e escopo fechado no diagnóstico.
- **IA com controle:** leitura de documentos com revisão humana antes de lançar no ERP.
- **Acesso:** perfis de acesso por usuário e histórico de movimentações.
- **Infra:** toda implantação de rede entregue documentada.
- **Integração:** integração com o ERP e ferramentas que a empresa já usa, via API.
- **LGPD/segurança:** `[PREENCHER: o que você garante de fato — ex.: backups, hospedagem, criptografia]`. Não escrever nada que não seja verdade.

**8. Como trabalhamos (linha do tempo)**
1. Diagnóstico: visita sem custo, sem compromisso.
2. MVP: primeira versão em até 2 semanas, com escopo fechado no diagnóstico.
3. Implantação: treinamento, migração de dados e ajustes.
4. Suporte: mensalidade com SLA de resposta em até 4 horas úteis.

**9. FAQ curto (reduz objeção)**
- "Quanto custa?" → depende do escopo; o diagnóstico é gratuito e sai com proposta fechada. `[PREENCHER: faixa de preço, se quiser divulgar]`
- "Vocês atendem fora do Vale do Paraíba?" → sim, remoto para outras regiões.
- "O sistema fica preso a vocês?" → não: código, dados e documentação são do cliente.
- "Precisa trocar o ERP?" → não; a ideia é integrar com o que já existe.

**10. Contato / CTA final**
- Título: "Vamos conversar sobre a sua operação."
- Oferta: "Visita de diagnóstico de 2 horas, sem custo e sem compromisso." · "Retorno em até 1 dia útil."
- Botões grandes: WhatsApp (12) 99604-9308 (`https://wa.me/5512996049308?text=...`) · e-mail contato@aionissolutions.com.br `[CONFIRMAR endereço]` · site.
- Atendimento: Vale do Paraíba e região (SP), a partir de Pindamonhangaba. Remoto para outras regiões.
- Formulário curto: Nome · Empresa · WhatsApp (com máscara) · E-mail · "O que você quer resolver?" (select: Sistemas sob medida / Dados e BI / Financeiro e automação / Infraestrutura e redes / Outro) · Mensagem (opcional) · checkbox de consentimento LGPD com link para a política de privacidade `[PREENCHER: criar página simples de política]`. Mensagem de sucesso com prazo de retorno.

**Rodapé:** logo, slogan "Soluções e Consultoria em TI", navegação, contatos, CNPJ `[PREENCHER]`, © 2026. Sem links vazios.

## 6. Regras de UI/UX (verificáveis, todas obrigatórias)

- Nenhum elemento sobrepõe texto. Botão flutuante reserva espaço (padding) na área dele.
- Área de toque de pelo menos 44×44 px.
- Contraste mínimo 4,5:1 no texto normal e 3:1 no texto grande.
- `:focus-visible` com contorno visível na cor da marca; `::selection` e `caret-color` na cor da marca.
- Números com `font-variant-numeric: tabular-nums`.
- Clique: `scale(.95–.98)` no `:active`, 100–160 ms, `cubic-bezier(.23,1,.32,1)`. Nunca `scale(0)`, nunca `transition: all`.
- Animações de interface abaixo de 300 ms. `prefers-reduced-motion` sempre tratado.
- Animação infinita só se carregar informação.
- Campos de formulário no mobile com fonte de pelo menos 16px (evita zoom do iPhone).
- Navegação com scroll-spy (item ativo acompanha a rolagem).
- **Não usar:** sobrancelha (texto pequeno acima do título), texto em gradiente, borda colorida grossa na lateral de cards, emoji no lugar de ícone.
- HTML semântico, um único H1, hierarquia correta de títulos, `alt` descritivo nas imagens, navegação 100% por teclado.

## 7. Técnico / SEO / desempenho

- `<title>` e meta description novos, focados em "soluções de TI / sistemas sob medida / Vale do Paraíba".
- Open Graph e Twitter Card com imagem de compartilhamento.
- Schema.org `ProfessionalService` com área atendida (Vale do Paraíba, SP) e contatos reais.
- Imagens em WebP/AVIF, `loading="lazy"` abaixo da dobra, dimensões fixas (sem layout shift).
- Meta: Lighthouse ≥ 90 em Performance, Acessibilidade, Boas práticas e SEO, no mobile.
- Eventos de clique nos CTAs (WhatsApp, formulário, e-mail) se houver analytics. Se não houver, pergunte antes de adicionar.

## 8. Processo de trabalho

1. Ler o projeto e servir localmente.
2. **Print do ANTES** com Playwright em 390×844 (deviceScaleFactor 2) e 1440×900: topo, meio, seção de projetos, contato, menu mobile aberto e foco por Tab.
3. Implementar a nova estrutura.
4. **Print do DEPOIS** nos mesmos estados. Listar os 3 piores problemas restantes (quebra de uso → visível → acabamento), corrigir, e fazer no máximo 1 rodada extra.
5. Rodar Lighthouse mobile e reportar as notas.

## 9. Entrega

1. Imagens antes/depois lado a lado (mobile e desktop).
2. Lista curta do que mudou.
3. Notas do Lighthouse.
4. **Pendências de conteúdo** (todos os `[PREENCHER]`): foto, prints do admin Mr Foods, e-mail confirmado, CNPJ, política de privacidade, redes sociais, itens de LGPD/segurança.
5. Uma pergunta: qual o próximo passo.

Assets que vou te enviar: logo da Aionis (PNG transparente), print do cardápio Mr Foods, print do Aionis Finance (tela de lançamentos e landing), foto do fundador (se houver).
