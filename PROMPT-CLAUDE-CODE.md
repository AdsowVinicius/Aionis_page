Reformule a landing page da Aionis Solutions que está nesta pasta (index.html, styles.css, script.js). Site estático: mantenha HTML/CSS/JS puros, sem framework e sem build. Antes de editar, copie os 3 arquivos para *.old.* para comparação. Leia tudo antes de mudar.

OBJETIVO
Página de conversão (gerar conversa no WhatsApp e pedido de visita de diagnóstico) que passe credibilidade técnica para times de TI e continue clara para donos de pequenas e médias empresas. O leigo entende em 10 s o que a Aionis resolve; o técnico encontra profundidade em seção própria, com acordeões.

REGRAS DE CONTEÚDO
- Não inventar números, clientes, depoimentos, logos ou métricas. Use só o que está aqui.
- Remover: o card "+68% de eficiência" (sem fonte), "100% Sob medida" (conflita com "Soluções prontas"), as frases genéricas "Tecnologia que impulsiona resultados" e "Confiança de quem precisa de tecnologia que funciona", e as repetições de "Agilidade".
- Dado que faltar: marcar [PREENCHER: ...] com destaque amarelo tracejado e listar no final. Nada com colchetes vai para produção.
- Não citar os clientes da P&G.
- Títulos dizem a conclusão, não rótulos genéricos.

BUGS A CORRIGIR
1. Links de redes sociais com href="#" no rodapé: remover ou marcar [PREENCHER].
2. Texto cru de proteção de e-mail do Cloudflare aparecendo no rodapé.
3. Texto solto "Soluções e Consultoria em TI" no fim da página.
4. CTAs dos cards de serviço sem destino.
5. Formulário que só abre mailto: trocar por Web3Forms (access key [PREENCHER]). Sem a chave, o envio abre o WhatsApp com os dados preenchidos. Adicionar campo WhatsApp e checkbox LGPD.

IDENTIDADE (igual à apresentação institucional)
- Variáveis em :root: marinho #0A0F2E, ciano #00B8FD (CTA/destaque), teal #007F92 (acento em fundo claro), fundo claro #F6F7FB, texto #0E1430, cinza #4E566B.
- Fontes: Sora (títulos, no lugar da Space Grotesk) + Inter.
- Ícones dentro de círculos. Manter os logos atuais (Aionis logo_sem_fundo.png, Icon_Ionis_sem_fundo.png).
- Remover .grad-text (texto em gradiente): destaque em ciano sólido.

ESTRUTURA E TEXTOS (nesta ordem)
Header fixo: logo · Soluções · Projetos · Clientes · Como trabalhamos · Contato · botão "Falar no WhatsApp". No mobile, botão de WhatsApp fixo embaixo, reservando espaço para não cobrir conteúdo.

1. Hero
- H1: "Tecnologia sob medida para a sua operação"
- Sub: "Sistemas, automação, dados e infraestrutura de TI para indústria, serviços e comércio."
- CTA principal: "Agendar visita de diagnóstico gratuita" (WhatsApp). Secundário: "Ver projetos".
- Apoio: "Visita de 2 horas, sem custo e sem compromisso · Retorno em até 1 dia útil."
- Visual: print real de projeto em moldura de dispositivo (prints/print-aionis-finance.png).

2. O problema
- Título: "Sua operação roda em planilhas, papel e sistemas que não conversam."
- 3 dores: informação espalhada e retrabalho de digitação; falta de rastreio (onde está o material, quem movimentou); decisão tomada com dado atrasado.
- Fecho: "A Aionis conecta isso."

3. Soluções (4 cards; o 1º em destaque ciano; cada CTA abre WhatsApp com mensagem citando a linha)
1) Sistemas sob medida: seu processo sai do papel e da planilha para um sistema rastreável (estoque, kanban e transferências por leitura de código, inventário cego, etiquetas, perfis e histórico).
2) Dados e BI: indicadores de ERP, planilhas e apontamentos em painéis, em Power BI ou web.
3) Financeiro e automação: contas, conciliação e notas em dia; leitura de documentos por IA com revisão humana antes de lançar no ERP.
4) Infraestrutura e redes: IP fixo e VPN entre unidades, servidor local integrado à nuvem, rede mesh, Wi-Fi interno separado do de visitantes, CFTV com mapa de cabos. Toda implantação inclui documentação técnica completa.

4. Clientes
- Título: "Quem já trabalha com a Aionis"
- P&G Engenharia: empresa de engenharia e construção civil. Atuação: implantação de automação fiscal integrada ao ERP com conciliação bancária; infraestrutura com servidor local + nuvem, rede mesh, Wi-Fi segmentado e VPN entre duas sedes, tudo documentado; projeto de CFTV e mapa de passagem de cabos; sistemas internos de gestão financeira (Python, FastAPI, PostgreSQL); aplicativos internos sobre AWS. Resultado: rede dimensionada para até 35 usuários em 2 sedes. Logo: [PREENCHER: logo autorizado da P&G]; enquanto não houver autorização, mostrar só o nome em texto, sem logo.
- Mr Foods (hamburgueria, Moreira César, Pindamonhangaba): cliente interno. O fundador usa no próprio negócio o que a Aionis cria. Cardápio digital por link no WhatsApp, PDV com estoque e painel que consolida vendas de iFood, 99Food e WhatsApp; módulo financeiro em beta. Link: mrfoodsburguer.com.br. Print: prints/print-mrfoods.png.
- Mostrar a Mr Foods com o selo "Cliente interno", com a frase de apoio "Usamos no nosso próprio negócio o que entregamos aos clientes."

5. Projetos desenvolvidos pela Aionis
- Sub: "Soluções construídas por nós, algumas já em uso na nossa própria operação."
- Mr Foods: PDV, cardápio digital e financeiro (selo "Em uso na operação própria").
- Aionis Finance (selo "Em beta test"): notas e comprovantes enviados por WhatsApp, lidos e classificados por IA. Link: aionisfinance.com.br. Print: prints/print-aionis-finance.png.
- Controle de estoque e Kanban por leitura de código (selo "Protótipo funcional"): transferências, inventário cego, etiquetas e rastreio, perfis e histórico. Sem print (confidencialidade).
- Rodapé da seção: "Demonstração disponível na visita."

6. Quem entrega
- Adsow Batista, fundador. Foto circular [PREENCHER: foto]; sem foto boa, fica só o nome.
- Formação: Tecnólogo em Análise e Desenvolvimento de Sistemas, Fatec Taubaté (2025) · Pós-graduação em Computação Quântica, PUC Minas (em andamento, conclusão prevista 07/2027). As duas com o mesmo peso visual.
- Certificações: Cisco CCNA · AWS Academy.
- Diferencial: "Você fala com quem constrói."
- Não criar nenhum serviço de computação quântica.

7. Para quem vai avaliar a parte técnica (acordeões, fechados por padrão)
- Stack: Python, FastAPI, PostgreSQL, React, Docker, AWS, Power BI.
- Propriedade: código, dados e documentação técnica são do cliente, inclusive no fim do contrato.
- Qualidade: primeira versão com testes automatizados e escopo fechado no diagnóstico.
- IA com controle: revisão humana antes de lançar no ERP.
- Acesso: perfis por usuário e histórico de movimentações.
- Integração: com o ERP e as ferramentas que a empresa já usa, via API.
- LGPD e segurança: [PREENCHER: só o que é garantido de fato].

8. Como trabalhamos (linha do tempo)
1) Diagnóstico: visita sem custo, sem compromisso.
2) MVP: primeira versão em até 2 semanas, com escopo fechado no diagnóstico.
3) Implantação: treinamento, migração de dados e ajustes.
4) Suporte: mensalidade com SLA de resposta em até 4 horas úteis.

9. FAQ
- Quanto custa? Depende do escopo; o diagnóstico é gratuito e sai com proposta fechada.
- Atendem fora do Vale do Paraíba? Sim, remoto para outras regiões.
- O sistema fica preso a vocês? Não: código, dados e documentação são do cliente.
- Precisa trocar o ERP? Não; integramos com o que já existe.

10. Contato
- Título: "Vamos conversar sobre a sua operação."
- Oferta: "Visita de diagnóstico de 2 horas, sem custo e sem compromisso." · "Retorno em até 1 dia útil."
- Botões: WhatsApp (12) 99604-9308 (https://wa.me/5512996049308?text=...) · contato@aionissolutions.com.br.
- Atendimento: Vale do Paraíba e região (SP), a partir de Pindamonhangaba; remoto para outras regiões.
- Formulário: Nome, Empresa, WhatsApp (com máscara), E-mail, "O que você quer resolver?" (select com as 4 linhas + Outro), Mensagem (opcional), consentimento LGPD com link para política [PREENCHER].

Rodapé: logo, "Soluções e Consultoria em TI", navegação, contatos, CNPJ [PREENCHER], © ano atual. Sem links vazios.

REGRAS DE UI/UX (todas obrigatórias)
- Nada sobrepõe texto. Área de toque ≥ 44×44 px. Contraste ≥ 4,5:1 (texto grande ≥ 3:1).
- :focus-visible visível na cor da marca; ::selection e caret-color na cor da marca.
- Números com font-variant-numeric: tabular-nums.
- :active com scale(.96), 120 ms, cubic-bezier(.23,1,.32,1). Nunca transition: all. Animações < 300 ms. Tratar prefers-reduced-motion. Sem animação infinita decorativa.
- Inputs com fonte ≥ 16px no mobile. Navegação com scroll-spy.
- Proibido: texto pequeno acima do título (sobrancelha), texto em gradiente, borda grossa colorida na lateral de cards, emoji como ícone.
- HTML semântico, um H1, alt em todas as imagens, tudo navegável por teclado.

SEO E DESEMPENHO
- Novo title e meta description (soluções de TI, sistemas sob medida, Vale do Paraíba).
- Open Graph com imagem. Schema.org ProfessionalService com área atendida e contatos.
- Imagens em WebP, lazy-load abaixo da dobra, width/height definidos.
- Meta: Lighthouse mobile ≥ 90 nas 4 categorias.

PROCESSO
1. Servir local (python -m http.server). Prints ANTES com Playwright em 390×844 e 1440×900: topo, soluções, clientes, projetos, contato e menu mobile aberto.
2. Implementar.
3. Prints DEPOIS nos mesmos pontos. Listar os 3 piores problemas restantes, corrigir; no máximo 1 rodada extra.
4. Rodar Lighthouse mobile.

ENTREGA
Antes/depois lado a lado, lista do que mudou, notas do Lighthouse e lista de todos os [PREENCHER]. Termine com uma pergunta sobre o próximo passo.
