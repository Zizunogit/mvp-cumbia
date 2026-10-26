# Cumbia.bet 2.0 · protótipo

Protótipo navegável do **Cumbia.bet 2.0**, direção visual "La Pista", seguindo o manual de marca v3 e o wireframe. O site está em **espanhol neutro com "tú"**, para o **mercado México** (pesos, CURP, SPEI, OXXO, Liga MX).

**Versão:** v5 · Ronda 1 aplicada (26/10/2026).

É um site estático: HTML, CSS e JavaScript puros. Não precisa de build, de dependências nem de servidor próprio.

## Abrir no computador

Os navegadores bloqueiam a fonte quando o `index.html` é aberto direto do disco. Por isso, sirva a pasta:

```bash
python3 -m http.server 8000
```

Depois abra http://localhost:8000.

## Publicar no GitHub Pages

1. Crie o repositório e suba os arquivos (veja a seção abaixo).
2. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. O endereço fica `https://<usuário>.github.io/<repositório>/`. Todos os caminhos são relativos, então funciona dentro da subpasta do repositório.

O arquivo `.nojekyll` desliga o processamento do Jekyll. É opcional: o site também funciona sem ele.

## Subir pelo navegador (limite de 100 arquivos por envio)

O GitHub aceita até 100 arquivos por envio na página **Add file → Upload files**. O repositório tem 121 arquivos, então envie em duas levas:

1. **Tudo menos `img/`:** `index.html`, `favicon.svg`, `README.md`, `.nojekyll`, `.gitignore` e as pastas `css/`, `js/` e `fonts/` (28 arquivos).
2. **A pasta `img/` inteira:** 93 arquivos em 4 subpastas.

No macOS e no Windows, os arquivos que começam com ponto (`.nojekyll`, `.gitignore`) costumam ficar ocultos e não entram no arrastar e soltar. Se faltarem, crie-os no GitHub com **Add file → Create new file**. Podem ficar vazios.

Pelo terminal não há limite:

```bash
git init && git add . && git commit -m "Cumbia.bet 2.0 · v5"
git branch -M main
git remote add origin https://github.com/<usuário>/<repositório>.git
git push -u origin main
```

## Estrutura

```
index.html        página única; as telas são montadas pelo JavaScript
favicon.svg
css/              tokens, glyphs, base, home, casino, sport, money, conta, conta2, auth (nesta ordem)
js/               imgd, data, core, shell, home, casino, sport, money, conta, conta2, auth, boot (nesta ordem)
fonts/            Bricolage Grotesque (variável, woff2)
img/c/            elenco (Maestro, Tigre, Conejo, Ratón, Jaguar, Dragón, Zeus, Panda, Oso, Mapache, Buey) + versão pequena (-s)
img/g/            capas dos jogos (600 × 800)
img/pv/           logos das provedoras (usados como máscara de cor)
img/s/            cenas dos banners, torneios e painéis + versão pequena (-s)
```

- `core.js`: utilitários, formatos es-MX (`mxn`, `fmtOdd`, `MASK`), componentes (cartão de jogo, carrossel, painéis, avisos) e o roteador por hash.
- `data.js`: catálogo, partidas, ligas, banners e o usuário de demonstração (todos dados de exemplo).
- Cada módulo guarda os seus textos num dicionário `TXT`. Para trocar um texto, edite o valor; as chaves não mudam.

## Navegação

As telas são endereços com `#`. Por exemplo: `#inicio`, `#slots`, `#categoria:top10`, `#esportes`, `#evento:ame-gdl`, `#turbinadas`, `#deposito`, `#saque`, `#transacoes`, `#apostas`, `#bonus`, `#vip`, `#missoes`, `#indique`, `#perfil`, `#seguranca`, `#limites` e `#ajuda`.

- O site abre como visitante. O login e o registro avançam com qualquer dado, porque não há servidor.
- A contraseña `000000` simula um erro, e um correo com "pausa" simula uma conta em pausa.
- A sessão fica só nesta aba do navegador (`sessionStorage`).

## Antes de ir para produção

- **Dados por confirmar** (aparecem como "[por confirmar]" no site): permiso SEGOB, razón social, domínio final, linha de apoio, mínimos e máximos, validade da referência OXXO e consulta RENAPO.
- **Pagamentos:** o depósito com cartão de crédito depende de confirmação do jurídico. Todos os pagamentos são simulados.
- **Catálogo:** jogos, capas e logos das provedoras são de exemplo. As capas dos clássicos foram recriadas na identidade Cumbia e precisam de aprovação das provedoras, e o uso dos logos precisa de licença.
- **Código:** cerca de 600 KB de JS + CSS legível. Na produção, minificar e dividir por tela.
- **Indexação:** a página tem `noindex` por ser um protótipo. Retire antes de publicar o site real.
- O site é só para maiores de 18 anos. Os avisos de jogo responsável e o "+18" precisam continuar visíveis.
