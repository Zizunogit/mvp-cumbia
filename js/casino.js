/* casino.js · Cassino (#slots), Categoria (#categoria:<k>) e Busca (#busca:<termo>) · wireframe §5.2–5.4 e §6.4. Prefixo cs-.
   Regras: só jogos únicos de GAMES (sem repetir para encher grade); o destaque do jackpot é a única coisa que se move;
   cotações não aparecem aqui; um laranja por tela fica com a casca (luz:false). */
TXT.cs = {
  /* cassino */
  'k': 'Casino', 't': 'Casino en línea.', 's': 'Slots, crash y mesas en vivo. La pista es tuya.',
  'jp.k': 'Jackpot acumulado', 'jp.sr': 'Jackpot acumulado: cerca de {v}. El monto crece en cada ronda.',
  'jp.jogos': 'Se acumula en El Coro del Ratón y El Trueno de Zeus.', 'jp.ver': 'Ver jackpots',
  'lobby': 'Juegos del casino',
  'f.l': 'Tipo de juego', 'f.todos': 'Todos', 'f.slots': 'Slots', 'f.crash': 'Crash', 'f.ladders': 'Escaleras', 'f.fav': 'Favoritos',
  'f.fav.motivo': 'Entra para ver tus favoritos.',
  'pv.b': 'Proveedor', 'pv.todas': 'Todos', 'pv.t': 'Proveedores.', 'pv.busca': 'Buscar proveedor', 'pv.ph': 'Nombre del proveedor',
  'pv.nada': 'Ningún proveedor con “{q}”. Revisa cómo se escribe o mira todos.', 'pv.casa': 'De la casa', 'pv.casa.n': 'Originales de la casa',
  'pv.n': '{n} juegos', 'pv.n1': '1 juego', 'pv.n0': 'sin juegos en la demostración', 'pv.ver': 'Ver juegos de {n}',
  'act.k': 'Filtro activo', 'act.tirar': 'Quitar el filtro {n}', 'limpar': 'Limpiar',
  'o.l': 'Ordenar juegos', 'o.sel': 'Destacados', 'o.mais': 'Más jugados', 'o.novos': 'Novedades', 'o.az': 'A-Z',
  'cnt': '{n} juegos', 'cnt1': '1 juego', 'cnt0': 'Ningún juego', 'cnt.pg': 'Mostrando {a}–{b} de {n} juegos',
  'pg.l': 'Páginas de juegos', 'pg.ant': 'Anterior', 'pg.prox': 'Siguiente', 'pg.ant.l': 'Página anterior', 'pg.prox.l': 'Página siguiente', 'pg.n': 'Página {n}',
  'grid.l': 'Juegos, página {p} de {t}', 'grid.l1': 'Juegos',
  'v.fav.t': 'Nada guardado todavía.', 'v.fav.s': 'Soy el Ratón: toca la estrella de un juego y lo guardo aquí.', 'v.fav.b': 'Ver todos los juegos',
  'v.pv.t': 'Esta pista todavía se está armando.', 'v.pv.s': 'Soy el Tigre: los juegos de {p} todavía no llegan a la demostración. Mientras tanto, hay {n} juegos esperándote.',
  'v.pv.b': 'Ver todos los juegos', 'v.pv.b2': 'Cambiar de proveedor',
  'v.mix.t': 'Nada con esta combinación.', 'v.mix.s': 'Soy el Conejo: con estos filtros juntos no encontré ningún juego. Quita uno y busco otra vez.', 'v.mix.b': 'Limpiar filtros',
  /* categoria */
  'cat.k': 'Categoría', 'cat.inicio': 'Inicio', 'cat.cassino': 'Casino', 'cat.caminho': 'Ruta de navegación', 'cat.n1': 'juego', 'cat.n': 'juegos',
  'cat.t10.k': 'Hoy en la pista', 'cat.t10.t': 'Del primero al décimo.', 'cat.t10.l': 'Top 10 en orden', 'cat.pos': 'Lugar {n}',
  'cat.404.t': 'Esa categoría no existe.', 'cat.404.s': 'Soy el Maestro: busqué en todo el salón y no la encontré. ¿Vamos al casino?', 'cat.404.b': 'Ir al casino',
  /* busca */
  'b.l': 'Buscar juegos, proveedores, equipos o ligas', 'b.ph': 'Juego, equipo o proveedor', 'b.b': 'Buscar', 'b.x': 'Limpiar búsqueda',
  'b.vazio.t': '¿Qué quieres jugar?', 'b.vazio.s': 'Busca por juego, proveedor, equipo o liga. Los acentos y las mayúsculas no importan.',
  'b.sug.k': 'Sugerencias', 'b.sug.t': 'Búsquedas de la noche.', 'b.pop.k': 'En tendencia', 'b.pop.t': 'Populares ahora.',
  'b.res.t': 'Resultados para “{q}”.', 'b.res.n': '{n} resultados', 'b.res.n1': '1 resultado', 'b.res.n0': 'Sin resultados',
  'b.g.cas': 'Juegos de casino.', 'b.g.esp': 'Partidos y ligas.', 'b.g.cat': 'Categorías.',
  'b.g.cas.n': '{n} en el casino', 'b.g.esp.n': '{n} partidos', 'b.g.esp.n1': '1 partido', 'b.g.cat.n': '{n} categorías', 'b.g.cat.n1': '1 categoría',
  'b.mais': 'Ver {n} más', 'b.live': 'En vivo', 'b.pv.sub': 'Proveedor · {n}',
  'b.nada.t': 'No encontré nada con “{q}”.', 'b.nada.s': 'Soy el Mapache: lancé la red y volvió vacía. Prueba con el nombre de un juego, de un proveedor o de un equipo.',
  'b.nada.sug': 'O busca una de estas:'
};

/* ===== dados derivados ===== */
const csNorm = s => String(s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
/* chave de busca: sem acento, sem maiúscula e sem apóstrofo ("playn" acha Play'n GO) */
const csKey = s => csNorm(s).replace(/['\u2019`\u00b4]/g, '');
const CS_TYPES = ['slots', 'crash', 'ladders'];
const CS_SORTS = ['sel', 'mais', 'novos', 'az'];
const CS_UNIQ = a => [...new Set(a)].filter(id => G[id]);
/* Selecionados: curadoria que alterna originais da casa e parceiros (todos os 19, sem repetir) */
const CS_SEL = CS_UNIQ(['tigre-pista', 'fortune-dragon', 'coro-raton', 'salto-conejo', 'hot-rio-samba', 'trovao-zeus', 'roleta-pista', 'smoking-dragon',
  'multiplica-buey', 'dragon-neon', 'fortune-panda', 'escada-maestro', 'magic-scroll', 'blackjack-gala', 'yo-dragon', 'pesca-mapache', 'mao-panda', 'roda-cumbia', 'bingo-oso', ...GAMES.map(g => g.id)]);
const CS_POP = CS_UNIQ([...TOP10, ...CATS.mais.ids, ...GAMES.map(g => g.id)]);
const CS_NEW = CS_UNIQ([...CATS.novos.ids, ...GAMES.map(g => g.id).reverse()]);
/* provedoras: a casa primeiro, depois a ordem de PROV (mesma da faixa da Início) */
const CS_PV = [{k: 'casa', name: t('cs.pv.casa.n'), short: t('cs.pv.casa'), casa: 1}, ...PROV];
const CS_PVK = Object.fromEntries(CS_PV.map(p => [p.k, p]));
const csProvOf = g => g.p.startsWith('Cumbia') ? 'casa' : (PROV.find(p => csNorm(g.p).startsWith(csNorm(p.name))) || {}).k || '';
const CS_PVN = GAMES.reduce((a, g) => { const k = csProvOf(g); a[k] = (a[k] || 0) + 1; return a; }, {});
const CS_TYPEW = {slots: 'slots tragamonedas', crash: 'crash', ladders: 'ladders escaleras', mesa: 'mesa cartas', bingo: 'bingo sorteo', pesca: 'pesca arcade', aovivo: 'en vivo crupier'};
const CS_CATIC = {comum: 'estrela', mais: 'grafico', novos: 'fogo', top10: 'torneio', aovivo: 'aovivo', jackpots: 'sino', mesa: 'cassino'};
const CS_JACK = GAMES.filter(g => g.jack).map(g => g.id);

/* ===== estado ===== */
const CS = {type: 'todos', prov: '', sort: 'sel', page: 1, cols: 2, rows: 4};
const CSC = {k: '', sort: 'sel', page: 1, cols: 2, rows: 4};
let csPrev = '';
let JP_V = 1284316.52;
bus.on('screen', ({k}) => { csPrev = k; });

/* ===== grade: colunas pela largura, itens por página múltiplos das colunas ===== */
function csEstW() {
  const vw = document.documentElement.clientWidth || innerWidth;
  const sbw = vw >= 1280 ? 248 : vw >= 1024 ? 88 : 0; const g = vw >= 1024 ? 32 : vw >= 600 ? 24 : 16;
  return vw - sbw - 2 * g;
}
function csLayout(W) {
  const vw = document.documentElement.clientWidth || innerWidth;
  if (vw >= 1024) return {cols: Math.max(2, Math.floor((W + 16) / (141 + 16))), rows: 2};
  return {cols: Math.min(6, Math.max(2, Math.floor((W + 12) / (141 + 12)))), rows: vw >= 600 ? 3 : 4};
}
function csSorted(ids, sort, base) {
  const rank = sort === 'mais' ? CS_POP : sort === 'novos' ? CS_NEW : base;
  const out = ids.slice();
  if (sort === 'az') return out.sort((a, b) => G[a].n.localeCompare(G[b].n, LOC));
  return out.sort((a, b) => rank.indexOf(a) - rank.indexOf(b));
}
function csCount(n) { return n === 1 ? t('cs.cnt1') : n ? t('cs.cnt', {n}) : t('cs.cnt0'); }
function csPages(p, n) {
  if (n <= 7) return Array.from({length: n}, (_, i) => i + 1);
  const s = new Set([1, n, p - 1, p, p + 1].filter(x => x >= 1 && x <= n));
  if (p <= 3) [2, 3, 4].forEach(x => s.add(x)); if (p >= n - 2) [n - 1, n - 2, n - 3].forEach(x => s.add(x));
  const arr = [...s].sort((a, b) => a - b); const out = [];
  arr.forEach((x, i) => { if (i && x - arr[i - 1] > 1) out.push('…'); out.push(x); });
  return out;
}
function csPager(p, n) {
  return `<nav class="cs-pg" aria-label="${t('cs.pg.l')}">
    <button class="cs-pg-a" data-act="csPage" data-arg="${p - 1}" aria-label="${t('cs.pg.ant.l')}"${p <= 1 ? ' disabled' : ''}>${ic('seta-e')}<span aria-hidden="true">${t('cs.pg.ant')}</span></button>
    <ol class="cs-pg-n">${csPages(p, n).map(x => x === '…' ? '<li class="cs-pg-gap" aria-hidden="true">…</li>'
      : `<li><button class="cs-pg-b tnum${x === p ? ' is-on' : ''}" data-act="csPage" data-arg="${x}" aria-label="${t('cs.pg.n', {n: x})}"${x === p ? ' aria-current="page"' : ''}>${x}</button></li>`).join('')}</ol>
    <button class="cs-pg-a cs-pg-a--r" data-act="csPage" data-arg="${p + 1}" aria-label="${t('cs.pg.prox.l')}"${p >= n ? ' disabled' : ''}><span aria-hidden="true">${t('cs.pg.prox')}</span>${ic('seta-d')}</button>
  </nav>`;
}
/* grade + paginação; devolve também o texto do contador */
function csGrid(list, st) {
  const per = st.cols * st.rows; const pages = Math.max(1, Math.ceil(list.length / per));
  st.page = Math.min(Math.max(1, st.page), pages);
  const a = (st.page - 1) * per; const slice = list.slice(a, a + per);
  const cnt = pages > 1 ? t('cs.cnt.pg', {a: a + 1, b: a + slice.length, n: list.length}) : csCount(list.length);
  const html = `<ul class="cs-grid" style="--cols:${st.cols}" tabindex="-1" aria-label="${pages > 1 ? t('cs.grid.l', {p: st.page, t: pages}) : t('cs.grid.l1')}">${slice.map(id => `<li>${gcard(id)}</li>`).join('')}</ul>${pages > 1 ? csPager(st.page, pages) : ''}`;
  return {html, cnt};
}

/* ===== destaque (hero): personagem à direita, sobre o pedestal em escalão ===== */
function csHero(o) {
  const d = IMGD['c/' + o.host + '-s'] || [150, 320];
  return `<section class="cs-hero cs-hero--${o.tone}${o.jp ? ' cs-hero--jp' : ''}" aria-labelledby="${o.id}">
    <div class="cs-hero-tx">
      <span class="lab cs-hero-k">${ic('passo', 'ic--xs')}${esc(o.k)}</span>
      <h1 class="pt" id="${o.id}">${esc(o.t)}</h1>
      ${o.s ? `<p class="cs-hero-s">${esc(o.s)}</p>` : ''}
      ${o.n != null ? `<div class="cs-hero-m"><p class="cs-hero-n"><b class="tnum">${o.n}</b><span>${o.n === 1 ? t('cs.cat.n1') : t('cs.cat.n')}</span></p>${o.jp ? '' : age('')}</div>` : ''}
    </div>
    <div class="cs-hero-art" style="--ar:${(d[0] / d[1]).toFixed(3)}">${pedestal(o.host, {tone: o.tone === 'mag' ? 'noite' : 'mag'})}</div>
    ${o.jp ? csJackpot(o) : ''}
  </section>`;
}
function csJpFmt(v) { return v.toLocaleString(LOC, {minimumFractionDigits: 2, maximumFractionDigits: 2}); }
function csJackpot(o = {}) {
  return `<div class="cs-jp">
    <div class="cs-jp-v"><span class="lab cs-jp-k">${t('cs.jp.k')}</span>
      <b class="cs-jp-n tnum" aria-hidden="true"><small>$</small><span data-jp>${csJpFmt(JP_V)}</span></b>
      <span class="sr">${t('cs.jp.sr', {v: mxn(JP_V)})}</span></div>
    <div class="cs-jp-g">${CS_JACK.map(id => `<button class="cs-jp-gc" data-game="${id}" aria-label="${esc(G[id].n)}, ${esc(G[id].p)}">${img(G[id].img, {alt: ''})}</button>`).join('')}${o.self ? '' : `<p>${t('cs.jp.jogos')}</p>`}</div>
    <div class="cs-jp-f">${o.self ? `<p class="cs-jp-note">${t('cs.jp.jogos')}</p>` : btn(t('cs.jp.ver'), {kind: 'ghost', size: 's', iconR: 'seta-d', go: 'categoria:jackpots', cls: 'cs-jp-ver'})}${age('')}</div>
  </div>`;
}
/* contagem crescente discreta: a cada 1,6 s soma alguns reais em 0,9 s; para com movimento reduzido, fora da tela e com a aba oculta */
function csJpRun(root) {
  const el = root.querySelector('[data-jp]'); if (!el) return () => {};
  let vis = true, raf = 0, alive = true;
  const io = new IntersectionObserver(es => { vis = es[0].isIntersecting; }); io.observe(el);
  const stop = () => { alive = false; clearInterval(iv); cancelAnimationFrame(raf); io.disconnect(); };
  const tick = () => {
    if (!alive || !el.isConnected) return stop();
    if (RM.matches || !vis || document.hidden) return;
    const from = JP_V, to = from + 0.4 + Math.random() * 4.2; JP_V = to;
    const t0 = performance.now(), D = 900;
    cancelAnimationFrame(raf);
    const step = now => { const k = Math.min(1, (now - t0) / D); el.textContent = csJpFmt(from + (to - from) * (1 - Math.pow(1 - k, 3))); if (k < 1 && alive) raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step);
  };
  const iv = setInterval(tick, 1600);
  return stop;
}

/* ===== Cassino (#slots, #slots:<slots|crash|ladders|fav|p-chave>) ===== */
function csFromParam(p) {
  CS.type = 'todos'; CS.prov = '';
  String(p || '').split(',').map(s => s.trim()).forEach(tok => {
    if (CS_TYPES.includes(tok) || tok === 'fav') CS.type = tok;
    else if (tok.startsWith('p-') && CS_PVK[tok.slice(2)]) CS.prov = tok.slice(2);
  });
}
function csSyncUrl() {
  const prm = [CS.type !== 'todos' && CS.type, CS.prov && 'p-' + CS.prov].filter(Boolean).join(',');
  history.replaceState(null, '', '#slots' + (prm ? ':' + prm : '')); S.param = prm;
}
function csList() {
  return csSorted(GAMES.map(g => g.id).filter(id => {
    const g = G[id];
    if (CS.type === 'fav' && !S.favs.has(id)) return false;
    if (CS_TYPES.includes(CS.type) && g.t !== CS.type) return false;
    if (CS.prov && csProvOf(g) !== CS.prov) return false;
    return true;
  }), CS.sort, CS_SEL);
}
function csFavN() { return [...S.favs].filter(id => G[id]).length; }
function csTypeChips() {
  const n = k => GAMES.filter(g => g.t === k).length;
  return chips([{k: 'todos', n: t('cs.f.todos'), c: GAMES.length}, {k: 'slots', n: t('cs.f.slots'), ic: 'slots', c: n('slots')}, {k: 'crash', n: t('cs.f.crash'), ic: 'crash', c: n('crash')},
    {k: 'ladders', n: t('cs.f.ladders'), ic: 'escadas', c: n('ladders')}, {k: 'fav', n: t('cs.f.fav'), ic: 'estrela', c: S.in ? csFavN() : null}], {name: 'csType', active: CS.type, label: t('cs.f.l'), scroll: true});
}
function csPvMark(p, cls = 'cs-pv-l') {
  if (p.casa) return `<svg class="${cls} cs-pv-logo" viewBox="0 0 1494.07 305.33" aria-hidden="true" focusable="false"><use href="#logo"/></svg>`;
  return `<span class="${cls}" aria-hidden="true" style="-webkit-mask-image:url(img/pv/${p.k}.webp);mask-image:url(img/pv/${p.k}.webp)"></span>`;
}
function csPvbInner() {
  const p = CS_PVK[CS.prov];
  return `${ic('filtro', 'ic--s')}<span class="cs-pvb-k">${t('cs.pv.b')}</span><b class="cs-pvb-v">${p ? esc(p.short || p.name) : t('cs.pv.todas')}</b>${ic('seta-b', 'ic--s')}`;
}
function csActHTML() {
  const p = CS_PVK[CS.prov]; if (!p) return '';
  return `<span class="cs-act-k lab">${t('cs.act.k')}</span>
    <button class="cs-act-tag" data-act="csClearPv" aria-label="${esc(t('cs.act.tirar', {n: p.name}))}">${csPvMark(p, 'cs-act-l')}<span>${esc(p.name)}</span>${ic('fechar', 'ic--xs')}</button>
    <button class="lnk cs-act-x" data-act="csClearPv">${t('cs.limpar')}</button>`;
}
function csEmpty() {
  if (CS.prov && !CS_PVN[CS.prov]) {
    const p = CS_PVK[CS.prov];
    return empty({who: 'tigre', title: t('cs.v.pv.t'), text: t('cs.v.pv.s', {p: p.name, n: GAMES.length}),
      action: `<div class="cs-empty-b">${btn(t('cs.v.pv.b'), {kind: 'mag', act: 'csClear'})}${btn(t('cs.v.pv.b2'), {kind: 'sec', act: 'csProv', icon: 'filtro'})}</div>`});
  }
  if (CS.type === 'fav' && !csFavN()) return empty({who: 'raton', title: t('cs.v.fav.t'), text: t('cs.v.fav.s'), action: btn(t('cs.v.fav.b'), {kind: 'sec', act: 'csClear'})});
  return empty({who: 'conejo', title: t('cs.v.mix.t'), text: t('cs.v.mix.s'), action: btn(t('cs.v.mix.b'), {kind: 'sec', act: 'csClear'})});
}
function csPaint(o = {}) {
  const body = $('#csBody'); if (!body) return;
  const list = csList();
  if (list.length) { const g = csGrid(list, CS); body.innerHTML = g.html; $('#csCnt').textContent = g.cnt; }
  else { body.innerHTML = `<div class="cs-empty">${csEmpty()}</div>`; $('#csCnt').textContent = csCount(0); }
  const act = $('#csAct'); const ah = csActHTML(); act.innerHTML = ah; act.hidden = !ah;
  const b = $('#csPvb'); if (b) { b.innerHTML = csPvbInner(); b.classList.toggle('is-on', !!CS.prov); }
  csSyncChips();
  if (o.focus) csFocusGrid(body);
}
/* o chip ativo fica sempre à vista na faixa que rola (ex.: rota #slots:fav no celular) */
function csChipInView(grp, instant) {
  const on = grp.querySelector('.is-on'); if (!on || grp.scrollWidth <= grp.clientWidth) return;
  const d = on.getBoundingClientRect().left - grp.getBoundingClientRect().left;
  const want = grp.scrollLeft + d - (grp.clientWidth - on.offsetWidth) / 2;
  grp.scrollTo({left: Math.max(0, want), behavior: RM.matches || instant ? 'auto' : 'smooth'});
}
function csSyncChips() {
  const grp = $('[data-chips="csType"]'); if (!grp) return;
  $$('[data-chip]', grp).forEach(c => { const on = c.dataset.chip === CS.type; c.classList.toggle('is-on', on); c.setAttribute('aria-pressed', on); });
  csChipInView(grp);
  const fc = $('[data-chip="fav"]', grp); if (!fc) return;
  let sm = fc.querySelector('small');
  if (S.in) { if (!sm) { fc.insertAdjacentHTML('beforeend', ' <small></small>'); sm = fc.querySelector('small'); } sm.textContent = csFavN(); }
  else if (sm) sm.remove();
}
function csFocusGrid(body) {
  const g = body.querySelector('.cs-grid') || body;
  const top = body.closest('section') || body;
  const y = top.getBoundingClientRect().top + scrollY - (parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 80);
  if (y < scrollY) scrollTo({top: y, behavior: RM.matches ? 'auto' : 'smooth'});
  g.focus({preventScroll: true});
}
function csSetType(k) { CS.type = k; CS.page = 1; csSyncUrl(); csPaint(); }

SCREENS.slots = {
  label: 'Casino', nav: 'cassino', title: () => 'Casino',
  render(p) {
    const keep = csPrev === 'slots';
    csFromParam(p);
    if (!keep) { CS.sort = 'sel'; CS.page = 1; }
    CS.wantFav = CS.type === 'fav' && !S.in; if (CS.wantFav) CS.type = 'todos';
    Object.assign(CS, csLayout(csEstW()));
    const list = csList(); const g = list.length ? csGrid(list, CS) : null;
    const ah = csActHTML();
    return `${csHero({id: 'csT', tone: 'mag', k: t('cs.k'), t: t('cs.t'), s: t('cs.s'), host: 'raton', jp: true})}
    <section class="cs-lobby" aria-labelledby="csLobbyT"><h2 class="sr" id="csLobbyT">${t('cs.lobby')}</h2>
      <div class="cs-tools">${csTypeChips()}
        <button class="cs-pvb${CS.prov ? ' is-on' : ''}" id="csPvb" data-act="csProv" aria-haspopup="dialog">${csPvbInner()}</button></div>
      <div class="cs-act" id="csAct"${ah ? '' : ' hidden'}>${ah}</div>
      <div class="cs-sort">${tabs(CS_SORTS.map(k => ({k, n: t('cs.o.' + k)})), {name: 'csSort', active: CS.sort, label: t('cs.o.l')})}<p class="cs-cnt tnum" id="csCnt" role="status">${g ? g.cnt : csCount(0)}</p></div>
      <div class="cs-body" id="csBody">${g ? g.html : `<div class="cs-empty">${csEmpty()}</div>`}</div>
    </section>`;
  },
  init(root) {
    const stopJp = csJpRun(root);
    const grp = $('[data-chips="csType"]', root); if (grp) csChipInView(grp, true);
    if (CS.wantFav) { CS.wantFav = false; setTimeout(() => AUTH.require(t('cs.f.fav.motivo'), () => { csSetType('fav'); }), 60); }
    const body = $('#csBody', root);
    const ro = new ResizeObserver(() => {
      const L = csLayout(body.clientWidth); if (L.cols === CS.cols && L.rows === CS.rows) return;
      const first = (CS.page - 1) * CS.cols * CS.rows; Object.assign(CS, L); CS.page = Math.floor(first / (L.cols * L.rows)) + 1; csPaint();
    });
    ro.observe(body);
    return () => { stopJp(); ro.disconnect(); };
  }
};
ON.chip.csType = k => {
  if (k === 'fav' && !S.in) { csSyncChips(); return AUTH.require(t('cs.f.fav.motivo'), () => csSetType('fav')); }
  csSetType(k);
};
ON.tab.csSort = k => {
  if (S.cur === 'categoria') { CSC.sort = k; CSC.page = 1; return csCatPaint(); }
  CS.sort = k; CS.page = 1; csPaint();
};
ACT.csPage = el => {
  const n = +el.dataset.arg; if (!n) return;
  if (S.cur === 'categoria') { CSC.page = n; return csCatPaint({focus: true}); }
  CS.page = n; csPaint({focus: true});
};
ACT.csClear = () => { CS.type = 'todos'; CS.prov = ''; CS.page = 1; closeSheet(true); csSyncUrl(); csPaint({focus: true}); };
ACT.csClearPv = () => { CS.prov = ''; CS.page = 1; csSyncUrl(); csPaint(); const b = $('#csPvb'); if (b) b.focus({preventScroll: true}); };

/* seletor de provedora: painel com busca e grade 4×5 com rolagem interna */
function csPvTile(p) {
  const n = p.k === '' ? GAMES.length : (CS_PVN[p.k] || 0); const on = (CS.prov || '') === p.k;
  const sub = n ? (n === 1 ? t('cs.pv.n1') : t('cs.pv.n', {n})) : t('cs.pv.n0');
  return `<button class="cs-pv${on ? ' is-on' : ''}${n ? '' : ' is-0'}" data-act="csPick" data-arg="${p.k}" data-q="${esc(csNorm(p.name + ' ' + (p.short || '')).replace(/[^a-z0-9]/g, ''))}" aria-pressed="${on}" aria-label="${esc(p.name)}, ${esc(sub)}">
    ${p.k === '' ? `<span class="cs-pv-i" aria-hidden="true">${ic('cassino')}</span>` : csPvMark(p)}<span class="cs-pv-n">${esc(p.short || p.name)}</span>${n ? `<span class="cs-pv-c tnum" aria-hidden="true">${n}</span>` : ''}</button>`;
}
ACT.csProv = () => {
  const all = [{k: '', name: t('cs.pv.todas')}, ...CS_PV];
  sheet(`${field({id: 'csPvQ', label: t('cs.pv.busca'), type: 'search', placeholder: t('cs.pv.ph'), icon: 'busca', enter: 'search', spell: false})}
    <div class="cs-pvg" id="csPvg" role="group" aria-label="${esc(t('cs.pv.t'))}">${all.map(csPvTile).join('')}</div>
    <p class="cs-pv-none" id="csPvNone" role="status" hidden></p>`, {
    title: t('cs.pv.t'), id: 'shProv', cls: 'cs-pvsh',
    init(el) {
      const q = el.querySelector('#csPvQ'); const none = el.querySelector('#csPvNone');
      const grid = el.querySelector('#csPvg'); const cur = grid.querySelector('.cs-pv.is-on');
      if (cur && cur.dataset.arg) requestAnimationFrame(() => { grid.scrollTop += cur.getBoundingClientRect().top - grid.getBoundingClientRect().top - (grid.clientHeight - cur.offsetHeight) / 2; });
      q.addEventListener('input', () => {
        const v = csNorm(q.value.trim()).replace(/[^a-z0-9]/g, ''); let shown = 0;
        $$('.cs-pv', el).forEach(b => { const ok = v ? (b.dataset.arg !== '' && b.dataset.q.includes(v)) : true; b.hidden = !ok; if (ok) shown++; });
        none.hidden = !!shown; none.textContent = shown ? '' : t('cs.pv.nada', {q: q.value.trim()});
      });
      q.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); const f = $$('.cs-pv:not([hidden])', el)[0]; if (f && q.value.trim()) f.click(); } });
    }
  });
};
ACT.csPick = el => {
  const k = el.dataset.arg; closeSheet();
  if (S.cur !== 'slots') return go('slots' + (k ? ':p-' + k : ''));
  CS.prov = k; CS.page = 1; csSyncUrl(); csPaint();
};

bus.on('fav', () => {
  if (S.cur !== 'slots' || !$('#csBody')) return;
  if (CS.type === 'fav') csPaint(); else csSyncChips();
});
bus.on('session', () => {
  if (S.cur !== 'slots' || !$('#csBody')) return;
  if (!S.in && CS.type === 'fav') { CS.type = 'todos'; csSyncUrl(); csPaint(); } else csSyncChips();
});

/* ===== Categoria (#categoria:<k>) ===== */
function csCrumb(cur) {
  return `<nav class="crumb cs-crumb" aria-label="${t('cs.cat.caminho')}"><button data-go="inicio">${ic('voltar', 'ic--s')}${t('cs.cat.inicio')}</button><span aria-hidden="true">/</span><button data-go="slots">${t('cs.cat.cassino')}</button><span aria-hidden="true">/</span><span aria-current="page">${esc(cur)}</span></nav>`;
}
function csCatList() { const c = CATS[CSC.k]; return csSorted(c.ids.filter(id => G[id]), CSC.sort, c.ids); }
function csCatPaint(o = {}) {
  const body = $('#csCBody'); if (!body) return;
  const g = csGrid(csCatList(), CSC); body.innerHTML = g.html; $('#csCCnt').textContent = g.cnt;
  if (o.focus) csFocusGrid(body);
}
function csT10(id, i) {
  return `<li class="cs-t10i"><span class="sr">${t('cs.cat.pos', {n: i + 1})}: </span>${gcard(id)}<span class="t10-selo" aria-hidden="true">${i + 1}.<small>º</small></span></li>`;
}
SCREENS.categoria = {
  label: 'Categoría', nav: 'cassino', title: p => (CATS[p] ? CATS[p].n : 'Categoría'),
  render(p) {
    const c = CATS[p];
    if (!c) return `${csCrumb(t('cs.cat.k'))}<h1 class="sr">${t('cs.cat.404.t')}</h1>${empty({who: 'maestro', title: t('cs.cat.404.t'), text: t('cs.cat.404.s'), action: btn(t('cs.cat.404.b'), {kind: 'mag', go: 'slots'})})}`;
    const keep = csPrev === 'categoria' && CSC.k === p;
    CSC.k = p; if (!keep) { CSC.sort = 'sel'; CSC.page = 1; }
    Object.assign(CSC, csLayout(csEstW()));
    const ids = c.ids.filter(id => G[id]);
    const hero = csHero({id: 'csCT', tone: p === 'jackpots' ? 'mag' : 'nm', k: t('cs.cat.k'), t: c.n + '.', s: c.d, n: ids.length, host: c.host, jp: p === 'jackpots', self: true});
    if (c.fixed) {
      return `${csCrumb(c.n)}${hero}
      <section class="band band--mag band--passo cs-t10s" aria-labelledby="csT10T">
        ${stitle({id: 'csT10T', eyebrow: t('cs.cat.t10.k'), title: t('cs.cat.t10.t')})}
        <ol class="cs-t10" aria-label="${t('cs.cat.t10.l')}">${ids.map(csT10).join('')}</ol>
      </section>`;
    }
    const g = csGrid(csCatList(), CSC);
    return `${csCrumb(c.n)}${hero}
    <section class="cs-lobby" aria-labelledby="csCLT"><h2 class="sr" id="csCLT">${esc(c.n)}</h2>
      <div class="cs-sort">${tabs(CS_SORTS.map(k => ({k, n: t('cs.o.' + k)})), {name: 'csSort', active: CSC.sort, label: t('cs.o.l')})}<p class="cs-cnt tnum" id="csCCnt" role="status">${g.cnt}</p></div>
      <div class="cs-body" id="csCBody">${g.html}</div>
    </section>`;
  },
  init(root, p) {
    const stopJp = csJpRun(root);
    const body = $('#csCBody', root); if (!body) return stopJp;
    const ro = new ResizeObserver(() => {
      const L = csLayout(body.clientWidth); if (L.cols === CSC.cols && L.rows === CSC.rows) return;
      const first = (CSC.page - 1) * CSC.cols * CSC.rows; Object.assign(CSC, L); CSC.page = Math.floor(first / (L.cols * L.rows)) + 1; csCatPaint();
    });
    ro.observe(body);
    return () => { stopJp(); ro.disconnect(); };
  }
};

/* ===== Busca (#busca, #busca:<termo>) · sem acento e sem diferenciar maiúsculas ===== */
const CS_TERMS = ['Dragon', 'Crash', 'Ruleta', 'Popok', 'América', 'Liga MX', 'NBA', 'En vivo'];
const CS_CATL = (() => {
  const typeN = k => GAMES.filter(g => g.t === k).length;
  const L = CASCATS.map(c => ({k: c.k, n: c.n, go: c.go, ic: c.ic, cnt: CATS[c.k] ? CATS[c.k].ids.length : typeN(c.k), kw: (CATS[c.k] || {}).d || CS_TYPEW[c.k] || ''}));
  [['top10', 'Top 10'], ['comum', 'Categoría Común']].forEach(([k, n]) => L.push({k, n, go: 'categoria:' + k, ic: CS_CATIC[k], cnt: CATS[k].ids.length, kw: CATS[k].d}));
  return L;
})();
function csTok(q) { return csKey(q).split(/\s+/).filter(Boolean); }
function csHit(hay, toks) { const h = csKey(hay); return toks.every(k => h.includes(k)); }
/* realce do trecho encontrado, preservando acentos do texto original */
function csHl(txt, toks) {
  const chars = [...String(txt)]; const nc = chars.map(ch => csNorm(ch));
  if (nc.some(c => c.length !== 1)) return esc(txt);
  const n = nc.join(''); const mark = new Array(chars.length).fill(false);
  /* em buscas com várias palavras, termos de 1–2 letras ("en", "de") não acendem dentro de outras palavras */
  const hl = toks.length > 1 && toks.some(k => k.length > 2) ? toks.filter(k => k.length > 2) : toks;
  hl.forEach(k => { let i = n.indexOf(k); while (k && i >= 0) { for (let j = i; j < i + k.length; j++) mark[j] = true; i = n.indexOf(k, i + k.length); } });
  let out = '', on = false;
  chars.forEach((ch, i) => { if (mark[i] !== on) { out += mark[i] ? '<mark class="cs-hl">' : '</mark>'; on = mark[i]; } out += esc(ch); });
  return out + (on ? '</mark>' : '');
}
function csSearch(q) {
  const toks = csTok(q); if (!toks.length) return null;
  const games = GAMES.filter(g => csHit(`${g.n} ${g.p} ${CS_TYPEW[g.t] || ''}`, toks)).map(g => g.id);
  const provs = CS_PV.filter(p => csHit(`${p.name} ${p.short || ''} ${p.casa ? 'cumbia originales en vivo' : ''}`, toks));
  const matches = MATCHES.filter(m => { const lg = LEAGUES[m.lg]; const sp = SPORTS.find(s => s.k === lg.sp) || {}; return csHit(`${teamName(m.h)} ${teamName(m.a)} ${lg.n} ${lg.pais} ${sp.n || ''} ${m.live ? 'en vivo' : ''}`, toks); });
  const cats = CS_CATL.filter(c => csHit(`${c.n} ${c.kw}`, toks));
  return {toks, games, provs, matches, cats, total: games.length + provs.length + matches.length + cats.length};
}
function csMatchRow(m, toks) {
  const lg = LEAGUES[m.lg]; const sp = SPORTS.find(s => s.k === lg.sp) || {ic: 'esportes', n: ''};
  const right = m.live ? `${tag('live', t('cs.b.live'))}<span class="cs-mr-sc tnum">${m.live.s[0]} – ${m.live.s[1]} · ${esc(m.live.m)}</span>` : `<span class="cs-mr-tm tnum">${esc(m.t)}</span>`;
  return `<li><button class="cs-mr" data-go="evento:${m.id}" aria-label="${esc(teamName(m.h))} contra ${esc(teamName(m.a))}, ${esc(lg.n)}, ${m.live ? 'en vivo' : esc(m.t)}">
    <span class="li-i" aria-hidden="true">${ic(sp.ic)}</span>
    <span class="cs-mr-t"><b>${csHl(teamName(m.h), toks)} <span class="mut">×</span> ${csHl(teamName(m.a), toks)}</b><small>${esc(sp.n)} · ${csHl(lg.n, toks)}</small></span>
    <span class="cs-mr-r">${right}</span>${ic('seta-d', 'ic--s cs-mr-go')}</button></li>`;
}
function csSugHTML(title = true) {
  return `${title ? stitle({eyebrow: t('cs.b.sug.k'), title: t('cs.b.sug.t')}) : ''}<div class="cs-sug" role="group" aria-label="${t('cs.b.sug.k')}">${CS_TERMS.map(s => `<button class="chip" data-act="csSug" data-arg="${esc(s)}">${ic('busca')}${esc(s)}</button>`).join('')}</div>`;
}
function csPopHTML() {
  return `<section aria-labelledby="csPopT">${stitle({id: 'csPopT', eyebrow: t('cs.b.pop.k'), title: t('cs.b.pop.t'), more: 'Ver todos', moreGo: 'categoria:top10'})}${rail(TOP10.slice(0, 8).map(id => gcard(id)), {label: t('cs.b.pop.t')})}</section>`;
}
const CS_MAXR = 8;
function csResHTML(q) {
  if (!q) return `<header class="pg-head"><h1 class="pt">${t('cs.b.vazio.t')}</h1><p class="lede">${t('cs.b.vazio.s')}</p></header>
    <section aria-label="${t('cs.b.sug.k')}">${csSugHTML()}</section>${csPopHTML()}`;
  const r = csSearch(q);
  const n = r.total;
  const head = `<header class="pg-head"><h1 class="pt cs-q">${esc(t('cs.b.res.t', {q}))}</h1><p class="lede tnum" role="status">${n === 1 ? t('cs.b.res.n1') : n ? t('cs.b.res.n', {n}) : t('cs.b.res.n0')}</p></header>`;
  if (!n) return `${head}<div class="cs-empty cs-empty--b">${empty({who: 'mapache', title: t('cs.b.nada.t', {q}), text: t('cs.b.nada.s'), action: `<p class="cs-sug-l">${t('cs.b.nada.sug')}</p>${csSugHTML(false)}`})}</div>${csPopHTML()}`;
  const cas = r.games.length + r.provs.length;
  const out = [head];
  if (cas) out.push(`<section class="cs-g" aria-labelledby="csGc">${stitle({id: 'csGc', eyebrow: t('cs.b.g.cas.n', {n: cas}), title: t('cs.b.g.cas')})}
    ${r.games.length ? `<ul class="gc-grid cs-sgrid">${r.games.map(id => `<li>${gcard(id)}</li>`).join('')}</ul>` : ''}
    ${r.provs.length ? `<ul class="cs-pvl">${r.provs.map(p => { const k = CS_PVN[p.k] || 0; return `<li><button class="li cs-pvr" data-go="slots:p-${p.k}"><span class="li-i">${csPvMark(p, 'cs-pvr-l')}</span><span class="li-t"><b>${csHl(p.name, r.toks)}</b><small>${t('cs.b.pv.sub', {n: k ? (k === 1 ? t('cs.pv.n1') : t('cs.pv.n', {n: k})) : t('cs.pv.n0')})}</small></span><span class="li-r">${ic('seta-d', 'ic--s')}</span></button></li>`; }).join('')}</ul>` : ''}
  </section>`);
  if (r.matches.length) {
    const more = r.matches.length - CS_MAXR;
    out.push(`<section class="cs-g" aria-labelledby="csGe">${stitle({id: 'csGe', eyebrow: r.matches.length === 1 ? t('cs.b.g.esp.n1') : t('cs.b.g.esp.n', {n: r.matches.length}), title: t('cs.b.g.esp')})}
      <ul class="cs-mrs" id="csMrs">${r.matches.map((m, i) => i < CS_MAXR ? csMatchRow(m, r.toks) : csMatchRow(m, r.toks).replace('<li>', '<li hidden>')).join('')}</ul>
      ${more > 0 ? btn(t('cs.b.mais', {n: more}), {kind: 'sec', size: 's', act: 'csMore', iconR: 'seta-b', cls: 'cs-more'}) : ''}</section>`);
  }
  if (r.cats.length) out.push(`<section class="cs-g" aria-labelledby="csGk">${stitle({id: 'csGk', eyebrow: r.cats.length === 1 ? t('cs.b.g.cat.n1') : t('cs.b.g.cat.n', {n: r.cats.length}), title: t('cs.b.g.cat')})}
    <ul class="cs-cts">${r.cats.map(c => `<li><button class="cs-ct" data-go="${c.go}"><span class="cs-ct-i" aria-hidden="true">${ic(c.ic)}</span><span class="cs-ct-t"><b>${csHl(c.n, r.toks)}</b><small class="tnum">${csCount(c.cnt)}</small></span>${ic('seta-d', 'ic--s')}</button></li>`).join('')}</ul></section>`);
  return out.join('');
}
function csLive(q, o = {}) {
  const box = $('#csRes'); if (!box) return;
  q = q.trim();
  box.innerHTML = csResHTML(q); initRails(box);
  history.replaceState(null, '', '#busca' + (q ? ':' + encodeURIComponent(q) : '')); S.param = q;
  document.title = (q ? 'Búsqueda: ' + q : 'Búsqueda') + ' · Cumbia.bet';
  const x = $('.cs-srch-x'); if (x) x.hidden = !$('#csQ')?.value;
  if (o.focus) { const h = box.querySelector('h1'); if (h) { h.setAttribute('tabindex', '-1'); h.focus({preventScroll: true}); } }
}
SCREENS.busca = {
  label: 'Búsqueda', nav: 'inicio', title: p => (p ? 'Búsqueda: ' + p : 'Búsqueda'),
  render(p) {
    const q = (p || '').trim();
    return `<form class="cs-srch" role="search" data-form="csBusca" novalidate><label class="sr" for="csQ">${t('cs.b.l')}</label>
        <div class="fld-box">${ic('busca')}<input id="csQ" name="q" type="search" value="${esc(q)}" placeholder="${t('cs.b.ph')}" autocomplete="off" enterkeyhint="search" spellcheck="false" maxlength="60">
          <button type="button" class="cs-srch-x" data-act="csQClear" aria-label="${t('cs.b.x')}"${q ? '' : ' hidden'}>${ic('fechar', 'ic--s')}</button></div>
        ${btn(t('cs.b.b'), {kind: 'mag', type: 'submit'})}</form>
      <div class="cs-res" id="csRes">${csResHTML(q)}</div>`;
  },
  init(root) {
    const f = root.querySelector('[data-form="csBusca"]'); const inp = f.q; let tm = 0;
    f.addEventListener('submit', e => { e.preventDefault(); clearTimeout(tm); inp.blur(); csLive(inp.value, {focus: true}); });
    inp.addEventListener('input', () => { clearTimeout(tm); $('.cs-srch-x', f).hidden = !inp.value; tm = setTimeout(() => csLive(inp.value), 260); });
    return () => clearTimeout(tm);
  }
};
ACT.csSug = el => { const q = el.dataset.arg; const inp = $('#csQ'); if (inp) inp.value = q; csLive(q, {focus: true}); };
ACT.csQClear = () => { const inp = $('#csQ'); if (!inp) return; inp.value = ''; csLive(''); inp.focus(); };
ACT.csMore = el => { $$('#csMrs > li[hidden]').forEach(li => li.hidden = false); const first = $('#csMrs > li:nth-child(' + (CS_MAXR + 1) + ') button'); el.remove(); if (first) first.focus(); };
