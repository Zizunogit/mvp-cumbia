/* home.js · Início (wireframe §5.1) + painel do jogo + painel do torneio + componentes de esporte compartilhados (crest, matchCard, boostCard). */
TXT.home = {
  'srch.l': 'Buscar juegos, equipos o ligas', 'srch.ph': 'Juego, equipo o liga', 'srch.b': 'Buscar',
  'f.todos': 'Todos', 'f.fav': 'Favoritos', 'f.slots': 'Slots', 'f.crash': 'Crash',
  'f.fav.t': 'Tus favoritos.', 'f.slots.t': 'Slots.', 'f.crash.t': 'Crash.', 'f.vazio.t': 'Nada guardado todavía.', 'f.vazio.s': 'Soy el Ratón: toca la estrella de un juego y lo guardo aquí.',
  'top10.k': 'Hoy en la pista', 'top10.t': 'El Top 10 de la noche.', 'mais': 'Ver todos', 'maisas': 'Ver todos',
  'comum.k': 'Para empezar', 'comum.t': 'Categoría Común.',
  'prov.k': 'Proveedores', 'prov.t': 'Quién toca en el salón.',
  'tor.k': 'Torneos', 'tor.t': 'Torneos con sabor a final.', 'tor.b': 'Competir ahora', 'tor.insc': '{n} compitiendo', 'tor.fim': 'Termina en {f}',
  'mais.k': 'En tendencia', 'mais.t': 'Los más jugados.', 'novos.k': 'Recién llegados', 'novos.t': 'Novedades.',
  'esp.k': 'Apuestas deportivas', 'esp.t': 'Elige tu deporte.', 'esp.ev': '{n} eventos', 'esp.breve': 'Próximamente', 'esp.breve.toast': '{n} llega pronto. Por ahora: fútbol, voleibol, básquetbol y tenis.',
  'aum.k': 'Momios mejorados', 'aum.t': 'Momios más altos.',
  'odds.k': 'Partidos destacados', 'odds.t': 'Los mejores momios.', 'odds.mk': '+{n} mercados',
  'cat.k': 'Categorías del casino', 'cat.t': 'Cada juego tiene su ritmo.', 'cat.n': '{n} juegos', 'cat.n1': '1 juego',
  'odds.hora': 'Momios de las {h} · no cambian solos', 'odds.atualizar': 'Actualizar',
  'g.jogar': 'Jugar ahora', 'g.demo': 'Modo demo', 'g.rtp': 'RTP {r}', 'g.abrindo': 'Abriendo {n}…', 'g.demo.toast': 'Modo demo de {n}: fichas de práctica, sin dinero real.',
  'g.motivo': 'Entra para jugar {n}.', 'g.casa': 'Original de la casa',
  't.premio': 'Premio total', 't.insc': 'Compitiendo', 't.fim': 'Termina en', 't.jogos': 'Juegos', 't.min': 'Apuesta mínima', 't.regra': 'Cada $1.00 apostado vale 1 punto. El ranking cierra cuando el reloj llega a cero.',
  't.rank': 'Ranking actual', 't.part': 'Participar en el torneo', 't.motivo': 'Entra para participar en {n}.', 't.ok': 'Ya estás compitiendo en {n}.', 't.inscrito': 'Inscripción lista'
};

/* componentes de esporte (reutilizados por sport.js) */
function crest(code, o = {}) {
  return `<span class="crest${o.cls ? ' ' + o.cls : ''}" aria-hidden="true">${esc(code.slice(0, 3))}</span>`;
}
function teamName(c) { return TEAMS[c] || c; }
function matchMeta(m) {
  return m.live ? `${tag('live', 'En vivo')}<span class="tnum">${esc(m.live.m)}</span>` : `<span class="tnum">${esc(m.t)}</span>`;
}
function matchCard(m, o = {}) {
  const lg = LEAGUES[m.lg]; const sp = lg.sp;
  const labs = m.o[1] == null ? ['1', '2'] : ['1', 'X', '2'];
  const sel = m.o[1] == null ? [m.o[0], m.o[2]] : m.o;
  const names = m.o[1] == null ? [teamName(m.h), teamName(m.a)] : [teamName(m.h), 'Empate', teamName(m.a)];
  return `<article class="mc${o.cls ? ' ' + o.cls : ''}">
    <button class="mc-hd" data-go="evento:${m.id}"><span class="mc-lg">${esc(lg.n)}</span><span class="mc-t">${matchMeta(m)}</span></button>
    <button class="mc-tm" data-go="evento:${m.id}" aria-label="${esc(teamName(m.h))} contra ${esc(teamName(m.a))}, ver mercados">
      <span class="mc-r">${crest(m.h)}<b>${esc(teamName(m.h))}</b>${m.live ? `<i class="tnum">${m.live.s[0]}</i>` : ''}</span>
      <span class="mc-r">${crest(m.a)}<b>${esc(teamName(m.a))}</b>${m.live ? `<i class="tnum">${m.live.s[1]}</i>` : ''}</span>
    </button>
    <div class="odds3${labs.length === 2 ? ' odds3--2' : ''}">${sel.map((v, i) => oddBtn({id: `${m.id}-r-${labs[i]}`, lab: labs[i], val: v, desc: names[i], mk: 'Resultado final', ev: m.id})).join('')}</div>
    <button class="lnk mc-mk" data-go="evento:${m.id}">${t('home.odds.mk', {n: m.mk})}${ic('seta-d')}</button>
  </article>`;
}
function boostCard(b, o = {}) {
  const m = M[b.ev]; const lg = LEAGUES[m.lg];
  return `<article class="bc${o.cls ? ' ' + o.cls : ''}">
    <div class="bc-hd"><span class="mc-lg">${esc(lg.n)} · ${m.live ? 'En vivo' : esc(m.t)}</span>${tag('boost', '+' + pct(b.de, b.para) + '%')}</div>
    <button class="bc-tm" data-go="evento:${m.id}">${esc(teamName(m.h))} <span class="mut">×</span> ${esc(teamName(m.a))}</button>
    <ul class="bc-sel">${b.sel.map(s => `<li>${ic('check', 'ic--xs')}${esc(s)}</li>`).join('')}</ul>
    <div class="bc-ft"><span class="bc-de" aria-label="Momio normal ${fmtOdd(b.de)}"><s class="tnum">${fmtOdd(b.de)}</s>${ic('ir', 'ic--xs')}</span>${oddBtn({id: 'boost-' + b.id, val: b.para, desc: b.sel.join(' + '), mk: 'Momio mejorado', ev: m.id + '-' + b.id, row: true, lab: 'Mejorado'})}</div>
  </article>`;
}

/* banners do topo (Ronda 1 · d2 C): arte 16:9 completa, solo con el +18 encima; etiqueta, título, apoyo y botón en una franja noche abajo, con el paso en la unión */
function bannerItem(b, i) {
  const action = b.go ? {go: b.go} : {act: b.act, attrs: {'data-arg': b.arg}};
  return `<article class="h-bni" aria-roledescription="destacado" aria-label="${i + 1} de ${BANNERS.length}: ${esc(b.t)}">
    <div class="h-bn-art">${img(b.img, {alt: '', lazy: i > 0 ? undefined : false, sizes: '(min-width:1440px) 30vw, (min-width:768px) 45vw, 92vw', style: `object-position:${b.pos || '50% 50%'}`})}<span class="h-bn-age">+18 · Aplican T&amp;C</span></div>
    <div class="h-bn-pl">
      <div class="h-bn-tx">
        ${b.live ? tag('live', 'En vivo ahora') : `<span class="lab h-bn-k">${ic('passo', 'ic--xs')}${esc(b.k)}</span>`}
        <h2 class="h-bn-t">${esc(b.t)}</h2>
        <p class="h-bn-s">${esc(b.s)}</p>
      </div>
      ${btn(b.btn, {kind: 'mag', size: 's', iconR: 'seta-d', ...action})}
    </div>
  </article>`;
}

function t10item(id, i) {
  const g = G[id];
  /* Ronda 1 · d3 C: portada limpia; la posición va en un sello noche pequeño al pie de la portada */
  return `<div class="h-t10">${gcard(g, {cls: 'gc--t10'})}<span class="t10-selo" aria-hidden="true">${i + 1}.<small>º</small></span><span class="sr">Posición ${i + 1}</span></div>`;
}
function provItem(p) {
  return `<button class="h-pv" data-go="slots:p-${p.k}" aria-label="${esc(p.name)}: ver juegos"><span class="h-pv-l" style="-webkit-mask-image:url(img/pv/${p.k}.webp);mask-image:url(img/pv/${p.k}.webp);aspect-ratio:${p.w}/${p.h}"></span></button>`;
}
function tournCard(tn) {
  return `<article class="h-tc">
    <div class="h-tc-art">${img(tn.img, {alt: '', sizes: '320px'})}</div>
    <div class="h-tc-bd">
      <span class="lab mut">${esc(tn.jogos)}</span>
      <h3 class="h-tc-n">${esc(tn.n)}</h3>
      <b class="h-tc-pr tnum">${mxn0(tn.pr)}</b>
      <div class="h-tc-meta"><span>${ic('perfil', 'ic--xs')}<span class="tnum">${t('home.tor.insc', {n: num(tn.insc)})}</span></span><span>${ic('relogio', 'ic--xs')}${t('home.tor.fim', {f: tn.fim})}</span></div>
      ${btn(t('home.tor.b'), {kind: 'mag', size: 's', full: true, act: 'tourn', attrs: {'data-arg': tn.id}})}
    </div>
  </article>`;
}
function sportCard(s) {
  const has = s.ev > 0;
  return `<button class="h-sp${has ? '' : ' is-soon'}" ${has ? `data-go="esportes:${s.k}"` : `data-toast="${esc(t('home.esp.breve.toast', {n: s.n}))}"`}>
    <span class="h-sp-i">${ic(s.ic)}</span><b>${esc(s.n)}</b><small class="tnum">${has ? t('home.esp.ev', {n: s.ev}) : t('home.esp.breve')}</small></button>`;
}
function catCard(c) {
  const ids = c.go.startsWith('categoria:') ? CATS[c.go.split(':')[1]].ids : GAMES.filter(g => g.t === c.k).map(g => g.id);
  const n = c.k === 'slots' ? GAMES.filter(g => g.t === 'slots').length : ids.length;
  return `<button class="h-cat" data-go="${c.go}"><span class="h-cat-i">${ic(c.ic)}</span><span class="h-cat-c">${img('c/' + c.host + '-s', {alt: ''})}</span><span class="h-cat-tx"><b>${esc(c.n)}</b><small class="tnum">${(n === 1 ? t('home.cat.n1') : t('home.cat.n', {n}))}</small></span></button>`;
}

SCREENS.inicio = {
  label: 'Inicio', nav: 'inicio',
  render() {
    const games = id => gcard(id);
    return `
    <section class="h-bn" aria-label="Destacados">${rail(BANNERS.map(bannerItem), {label: 'Destacados', cls: 'h-bn-rail'})}<div class="dots h-dots" role="tablist" aria-label="Elegir destacado">${BANNERS.map((b, i) => `<button class="dot${i ? '' : ' is-on'}" role="tab" aria-selected="${!i}" aria-label="Destacado ${i + 1}: ${esc(b.t)}" data-act="bnDot" data-arg="${i}"></button>`).join('')}</div></section>

    <section class="h-tools" aria-label="${t('home.srch.l')}">
      <form class="h-srch" role="search" data-form="busca"><label class="sr" for="hSrch">${t('home.srch.l')}</label>
        <div class="fld-box">${ic('busca')}<input id="hSrch" name="q" type="search" placeholder="${t('home.srch.ph')}" autocomplete="off" enterkeyhint="search"></div>
        ${btn(t('home.srch.b'), {kind: 'mag', type: 'submit'})}</form>
      ${chips([{k: 'todos', n: t('home.f.todos')}, {k: 'fav', n: t('home.f.fav'), ic: 'estrela'}, {k: 'slots', n: t('home.f.slots'), ic: 'slots'}, {k: 'crash', n: t('home.f.crash'), ic: 'crash'}], {name: 'hf', active: 'todos', label: 'Filtros rápidos', scroll: true})}
    </section>
    <section class="h-filt" id="hFilt" hidden aria-live="polite"></section>

    <section class="band band--mag band--passo h-t10s" aria-labelledby="stTop">
      ${stitle({id: 'stTop', eyebrow: t('home.top10.k'), title: t('home.top10.t'), more: t('home.mais'), moreGo: 'categoria:top10'})}
      ${rail(TOP10.map(t10item), {loop: true, label: 'Top 10', cls: 'h-t10r'})}
    </section>

    <section aria-labelledby="stComum">${stitle({id: 'stComum', eyebrow: t('home.comum.k'), title: t('home.comum.t'), more: t('home.mais'), moreGo: 'categoria:comum'})}
      ${rail([...CATS.comum.ids, ...CATS.comum.ids, ...CATS.comum.ids].slice(0, 16).map(games), {label: 'Categoría Común'})}</section>

    <section class="h-pvs" aria-labelledby="stProv">${stitle({id: 'stProv', eyebrow: t('home.prov.k'), title: t('home.prov.t')})}
      ${rail(PROV.map(provItem), {loop: true, label: 'Proveedores', cls: 'h-pvr'})}</section>

    <section aria-labelledby="stTor">${stitle({id: 'stTor', eyebrow: t('home.tor.k'), title: t('home.tor.t'), more: t('home.mais'), moreAct: 'tourn', moreArg: 't1'})}
      ${rail(TOURN.map(tournCard), {label: 'Torneos', cls: 'h-tcr'})}</section>

    <section aria-labelledby="stMais">${stitle({id: 'stMais', eyebrow: t('home.mais.k'), title: t('home.mais.t'), more: t('home.mais'), moreGo: 'categoria:mais'})}
      ${rail([...CATS.mais.ids, ...CATS.mais.ids].slice(0, 16).map(games), {label: 'Los más jugados'})}</section>

    <section aria-labelledby="stNovos">${stitle({id: 'stNovos', eyebrow: t('home.novos.k'), title: t('home.novos.t'), more: t('home.mais'), moreGo: 'categoria:novos'})}
      ${rail([...CATS.novos.ids, ...CATS.novos.ids].slice(0, 16).map(games), {label: 'Novedades'})}</section>

    <section class="band band--rosa h-sps" aria-labelledby="stEsp">${stitle({id: 'stEsp', eyebrow: t('home.esp.k'), title: t('home.esp.t'), more: t('home.mais'), moreGo: 'esportes'})}
      ${rail(SPORTS.map(sportCard), {label: 'Deportes', cls: 'h-spr'})}</section>

    <section aria-labelledby="stAum">${stitle({id: 'stAum', eyebrow: t('home.aum.k'), title: t('home.aum.t'), more: t('home.maisas'), moreGo: 'turbinadas'})}
      <p class="h-oddt mut">${ic('relogio', 'ic--xs')}${t('home.odds.hora', {h: ODDS_TIME})}</p>
      ${rail(BOOSTS.slice(0, 8).map(b => boostCard(b)), {label: 'Momios mejorados', cls: 'h-bcr'})}</section>

    <section aria-labelledby="stOdds">${stitle({id: 'stOdds', eyebrow: t('home.odds.k'), title: t('home.odds.t'), more: t('home.mais'), moreGo: 'esportes'})}
      ${rail(MATCHES.filter(m => m.dest || m.live).slice(0, 8).map(m => matchCard(m)), {label: 'Los mejores momios', cls: 'h-mcr'})}</section>

    <section class="band band--mag h-cats" aria-labelledby="stCat">${stitle({id: 'stCat', eyebrow: t('home.cat.k'), title: t('home.cat.t')})}
      ${rail(CASCATS.map(catCard), {label: 'Categorías del casino', cls: 'h-catr'})}</section>`;
  },
  init(root) {
    const r = root.querySelector('.h-bn-rail .rail-track');
    const dots = $$('.h-dots .dot', root);
    const upd = () => {
      const w = r.firstElementChild.getBoundingClientRect().width + 16;
      const i = Math.min(dots.length - 1, Math.round(r.scrollLeft / w));
      dots.forEach((d, k) => { d.classList.toggle('is-on', k === i); d.setAttribute('aria-selected', k === i); });
    };
    r.addEventListener('scroll', upd, {passive: true});
    const f = root.querySelector('[data-form="busca"]');
    f.addEventListener('submit', e => { e.preventDefault(); const q = f.q.value.trim(); go('busca' + (q ? ':' + encodeURIComponent(q) : '')); });
  }
};
ACT.bnDot = el => { const r = $('.h-bn-rail .rail-track'); const w = r.firstElementChild.getBoundingClientRect().width + 16; r.scrollTo({left: +el.dataset.arg * w, behavior: RM.matches ? 'auto' : 'smooth'}); };

ON.chip.hf = k => {
  const box = $('#hFilt'); if (!box) return;
  if (k === 'todos') { box.hidden = true; box.innerHTML = ''; return; }
  const show = () => {
    let ids, title, go2;
    if (k === 'fav') { ids = [...S.favs]; title = t('home.f.fav.t'); go2 = 'slots:fav'; }
    else { ids = GAMES.filter(g => g.t === k).map(g => g.id); title = t('home.f.' + k + '.t'); go2 = 'slots:' + k; }
    box.hidden = false;
    box.innerHTML = ids.length ? stitle({title, more: t('home.mais'), moreGo: go2}) + rail(ids.map(id => gcard(id)), {label: title})
      : empty({who: 'raton', title: t('home.f.vazio.t'), text: t('home.f.vazio.s'), action: btn('Ver el casino', {kind: 'sec', go: 'slots'})});
    initRails(box);
  };
  if (k === 'fav' && !S.in) return AUTH.require('Entra para ver tus favoritos.', () => { show(); });
  show();
};
bus.on('fav', () => { const c = $('[data-chips="hf"] .is-on'); if (c && c.dataset.chip === 'fav') ON.chip.hf('fav'); });

/* painel do jogo (wireframe §5.1: capa, nome, provedora · RTP, Modo demo, Jogar agora) */
function openGame(id) {
  const g = G[id]; if (!g) return;
  sheet(`<div class="gs">
      <div class="gs-cv">${img(g.img, {alt: ''})}</div>
      <div class="gs-tx">
        ${g.casa ? `<span class="tag tag--noite">${t('home.g.casa')}</span>` : ''}
        <p class="mut">${esc(g.p)} · <span class="tnum">${t('home.g.rtp', {r: g.rtp})}</span></p>
        <button class="lnk" data-fav="${g.id}" data-favtx="1" aria-pressed="${S.favs.has(g.id)}">${ic(S.favs.has(g.id) ? 'estrela' : 'estrela-o')}<span>${S.favs.has(g.id) ? 'En favoritos' : 'Guardar en favoritos'}</span></button>
      </div>
    </div>`, {title: g.n + '.', id: 'shGame', cls: 'gs-sh',
    foot: `${btn(t('home.g.jogar'), {kind: 'luz', size: 'l', full: true, icon: 'play', act: 'play', attrs: {'data-arg': g.id}})}${btn(t('home.g.demo'), {kind: 'sec', full: true, act: 'demo', attrs: {'data-arg': g.id}})}${age('Juega con responsabilidad.')}`});
}
ACT.game = el => {
  const id = el.dataset.game; const g = G[id]; if (!g) return;
  if (!S.in) return AUTH.require(t('home.g.motivo', {n: g.n}), () => openGame(id));
  openGame(id);
};
ACT.play = el => { const g = G[el.dataset.arg]; closeSheet(); toast(t('home.g.abrindo', {n: g.n}), {icon: 'play'}); };
ACT.demo = el => { const g = G[el.dataset.arg]; closeSheet(); toast(t('home.g.demo.toast', {n: g.n}), {icon: 'olho'}); };

/* painel do torneio */
const JOINED = new Set();
ACT.tourn = el => {
  const tn = TOURN.find(x => x.id === (el.dataset.arg || 't1')) || TOURN[0];
  const rank = [['Ana P.', 18420], ['Rafa M.', 17360], ['Chuy S.', 16110], ['Lupita L.', 15980], ['Memo R.', 14270]];
  const joined = JOINED.has(tn.id);
  sheet(`<div class="ts-art">${img(tn.img, {alt: ''})}</div>
    <div class="ts-pr"><div><span class="lab mut">${t('home.t.premio')}</span><b class="d2 tnum">${mxn0(tn.pr)}</b></div>${ficha('1º', {tone: 'magenta', size: 64})}</div>
    <div class="card">${kv(t('home.t.insc'), num(tn.insc))}${kv(t('home.t.fim'), tn.fim)}${kv(t('home.t.jogos'), esc(tn.jogos))}${kv(t('home.t.min'), esc(tn.min))}</div>
    <p class="mut">${t('home.t.regra')}</p>
    <div><h3 class="lab mut ts-rk-h">${t('home.t.rank')}</h3><ol class="ts-rk">${rank.map((r, i) => `<li><span class="tnum">${i + 1}</span><b>${esc(r[0])}</b><span class="tnum">${num(r[1])} pts</span></li>`).join('')}</ol></div>
    ${age('Aplican T&C del torneo.')}`,
    {title: tn.n + '.', id: 'shTorn', foot: joined ? `<p class="note">${ic('check-c')}<span>${t('home.t.inscrito')}: ${esc(tn.n)}.</span></p>` : btn(t('home.t.part'), {kind: 'luz', size: 'l', full: true, act: 'join', attrs: {'data-arg': tn.id}})});
};
ACT.join = el => {
  const tn = TOURN.find(x => x.id === el.dataset.arg);
  const run = () => { JOINED.add(tn.id); closeSheet(); toast(t('home.t.ok', {n: tn.n}), {icon: 'torneio'}); };
  if (!S.in) { closeSheet(true); return AUTH.require(t('home.t.motivo', {n: tn.n}), () => { ACT.tourn({dataset: {arg: tn.id}}); }); }
  run();
};
