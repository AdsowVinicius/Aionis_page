# Aionis Solutions — Landing Page

Site estático de uma página (HTML/CSS/JS puros, sem framework, sem build) da **Aionis Solutions**, empresa de soluções e consultoria em TI (Pindamonhangaba/SP, Vale do Paraíba). Objetivo: converter visitantes em conversa no WhatsApp e pedido de visita de diagnóstico gratuita.

## Arquivos
- `index.html` — marcação (header, hero, soluções, "por que a Aionis", contato, rodapé). Idioma `pt-BR`.
- `styles.css` — estilos; variáveis de marca em `:root`.
- `script.js` — menu mobile, ano do rodapé, formulário (hoje abre `mailto:`).
- `Aionis logo_sem_fundo.png`, `Icon_Ionis_sem_fundo.png` (favicon) — logos em uso. `Aionis logo.jpeg` é o logo antigo.
- `prints/` — prints reais para o hero/projetos: `print-aionis-finance.png`, `print-mrfoods.png`.
- `PROMPT-CLAUDE-CODE.md` — **briefing vigente** da reformulação (estrutura, textos, regras de UI/UX, SEO). Fonte da verdade.
- `PROMPT-MELHORIAS.md` — versão anterior e mais longa do briefing; consultar só para contexto.

## Estado atual
Reformulação de `PROMPT-CLAUDE-CODE.md` aplicada (10 seções). Versão antiga em `*.old.*`. Imagens WebP em `img/`. Marcadores `[PREENCHER]` ficam ocultos em produção e visíveis com `?dev` ou em localhost. Chave Web3Forms: `WEB3FORMS_KEY` em `script.js` (vazia = formulário abre o WhatsApp). Lighthouse ainda não rodado.

## Como rodar
```bash
python -m http.server 8000
```
Testar em 390×844 (mobile) e 1440×900 (desktop).

## Identidade visual (alvo da reformulação)
- Marinho `#0A0F2E`, ciano `#00B8FD` (CTA/destaque), teal `#007F92` (acento em fundo claro), fundo claro `#F6F7FB`, texto `#0E1430`, cinza `#4E566B`.
- Fontes: **Sora** (títulos) + **Inter** (texto). Ícones SVG dentro de círculos.
- Sem texto em gradiente (remover `.grad-text`).

## Contatos / dados fixos
- WhatsApp: (12) 99604-9308 → `https://wa.me/5512996049308?text=...`
- E-mail: contato@aionissolutions.com.br
- Fundador: Adsow Batista. Clientes/projetos: P&G Engenharia (não citar clientes da P&G), Mr Foods (mrfoodsburguer.com.br), Aionis Finance (aionisfinance.com.br).

## Regras de conteúdo
- Nunca inventar números, clientes, depoimentos, logos ou métricas.
- Dado ausente → `[PREENCHER: ...]` com destaque amarelo tracejado em dev; listar na entrega; nada com colchetes em produção.
- Títulos dizem a conclusão. Sem frases genéricas, sem repetir "Agilidade".
- Não criar serviço de computação quântica.

## Regras de UI/UX (obrigatórias)
- Toque ≥ 44×44 px; contraste ≥ 4,5:1 (texto grande 3:1); inputs ≥ 16px no mobile.
- `:focus-visible` na cor da marca; `::selection`/`caret-color` na marca; `tabular-nums` em números.
- `:active` scale(.96), 120 ms, `cubic-bezier(.23,1,.32,1)`; nunca `transition: all`; animações < 300 ms; tratar `prefers-reduced-motion`.
- Proibido: sobrancelha acima de título, texto em gradiente, borda grossa colorida lateral em cards, emoji como ícone.
- HTML semântico, um H1, `alt` em imagens, navegação por teclado, scroll-spy, botão WhatsApp fixo no mobile reservando espaço.
- Imagens WebP, lazy-load abaixo da dobra, width/height definidos. Meta: Lighthouse mobile ≥ 90.

## Processo
Copiar arquivos para `*.old.*` antes de editar → prints antes → implementar → prints depois → Lighthouse. Commits em português, curtos.
