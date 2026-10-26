/* sport.js · Esportes (§5.5), Página do jogo (§5.6), Apostas Aumentadas (§5.7) e Cupom de apostas (§5.8 e §6.2). Prefixo sp-, textos em TXT.sp.
   Reaproveita de home.js: crest, teamName, matchMeta, matchCard, boostCard. Cupom em S.slip (core); apostas feitas em S.bets (lidas por Minhas apostas).
   Cotações: 1-X-2 e turbinadas vêm de data.js; as demais são calculadas de forma determinística a partir das cotações iniciais
   (Poisson no futebol, normal no basquete, disputa de sets no vôlei e no tênis). Nada muda sozinho: só "Atualizar" (simula o sistema)
   e a checagem do sistema ao confirmar uma aposta com jogo ao vivo. */
TXT.sp = {
  /* Esportes */
  'esp.t': 'Deportes.', 'esp.s': 'Fútbol, básquetbol, voleibol y tenis. En vivo, hoy y toda la semana.',
  'q.l': 'Buscar equipo o liga', 'q.ph': 'Equipo o liga', 'q.jogos': 'Partidos', 'q.camps': 'Ligas',
  'q.nada': 'No encontramos nada para “{q}”.', 'q.nada.s': 'Prueba con un equipo, como América, o con una liga, como Liga MX.',
  'q.n': '{n} resultados', 'q.n1': '1 resultado', 'q.lgn': '{s} · {n} partidos',
  'dest.k': 'Ahora y hoy', 'dest.t': 'Partidos destacados.', 'ls.l': 'Partidos por liga',
  'chips.l': 'Elegir deporte', 'todos': 'Todos',
  'tab.l': 'Cuándo', 'tab.tudo': 'Todo', 'tab.aovivo': 'En vivo', 'tab.hoje': 'Hoy', 'tab.amanha': 'Mañana',
  'td.k': 'Mejorado del día', 'td.aum': 'de aumento', 'td.ver': 'Ver los 10', 'td.de': 'Momio normal {v}',
  'ot.de': 'Momios de las', 'ot.fixa': 'no cambian solos', 'ot.b': 'Actualizar', 'ot.busy': 'Actualizando…',
  'ot.ok': 'Momios de las {h}. Cambiaron {n}.', 'ot.ok1': 'Momios de las {h}. Cambió 1.',
  'lg.n': '{n} partidos', 'lg.n1': '1 partido', 'lg.ver': 'Ver los {n} partidos', 'lg.menos': 'Mostrar menos', 'lg.tb': 'Momios de {lg}',
  'lg.demo': 'La lista completa de {lg} llega con la integración de datos. Por ahora ves los partidos principales.',
  'lg.todos': 'Ver todas las ligas', 'lg.todos.toast': 'Las otras ligas llegan con la integración de datos [por confirmar].',
  'mk.aria': '{j}, {w}. Ver {n} mercados.', 'live': 'En vivo',
  'vazio.t': 'Ningún partido {o}.', 'vazio.s': 'Soy el Maestro: la pista no se detiene. Mira todo lo que hay en la cartelera.', 'vazio.b': 'Ver todos los partidos',
  /* Página do jogo */
  'ev.pre': 'Prepartido', 'ev.pre.s': 'Momios abiertos hasta el inicio', 'ev.crumb': 'Ruta de navegación', 'ev.esportes': 'Deportes', 'ev.ult': 'Última jugada', 'ev.ini': 'Empieza {d} a las {h}', 'ev.mk': '{n} mercados abiertos',
  'ev.mt': 'Mercados', 'ev.todos': 'Ver los {n} mercados', 'ev.todos.toast': 'La lista completa de mercados llega con la integración de datos. Aquí están los principales.',
  'ev.vazio.t': 'Partido no encontrado.', 'ev.vazio.s': 'Soy el Maestro: ese partido salió de la cartelera. Elige otro, hay mucho en juego.', 'ev.vazio.b': 'Ver deportes',
  'ev.turb.t': 'Sin momio mejorado para este partido por ahora.', 'ev.turb.s': 'Las 10 ofertas del día están en Momios mejorados.', 'ev.turb.b': 'Ver momios mejorados',
  'ev.jog': 'Los mercados de jugadores abren cerca del inicio del partido.',
  'ev.sofar.esc': '{n} tiros de esquina hasta ahora.', 'ev.sofar.cart': '{n} tarjetas hasta ahora.',
  'mt.pop': 'Populares', 'mt.turb': 'Mejorados', 'mt.gols': 'Goles', 'mt.hc': 'Hándicap', 'mt.esc': 'Tiros de esquina', 'mt.cart': 'Tarjetas', 'mt.jog': 'Jugadores',
  'mt.pts': 'Puntos', 'mt.qua': 'Cuartos', 'mt.sets': 'Sets', 'mt.games': 'Games',
  /* Apostas aumentadas */
  'tb.crumb': 'Momios mejorados', 'tb.k': 'Mejorados', 'tb.t': 'Momios mejorados.',
  'tb.s': 'Combinaciones elegidas por la casa, con un momio más alto que el normal. Toca el momio para llevarlo a tu boleto.',
  'tb.n': 'ofertas hoy', 'tb.ate': 'hasta +{p}% de aumento', 'tb.age': '+18 · Aplican T&C',
  'tb.q.l': 'Buscar equipo en momios mejorados', 'tb.q.ph': 'Buscar equipo', 'tb.q.of': '{n} ofertas', 'tb.q.of1': '1 oferta',
  'tb.q.nada': 'Ningún momio mejorado con “{q}”.', 'tb.q.nada.s': 'Prueba otro equipo, como América o Real Madrid.',
  'tb.lg.l': 'Filtrar por liga', 'tb.ord.l': 'Ordenar ofertas', 'tb.ord.cedo': 'Empiezan antes', 'tb.ord.aum': 'Mayor aumento',
  'tb.res': '{n} ofertas', 'tb.res1': '1 oferta', 'tb.time': 'Equipo: {t}', 'tb.limpar': 'Quitar filtro de equipo',
  'tb.vazio.t': 'Ningún momio mejorado con esos filtros.', 'tb.vazio.s': 'Soy el Buey: multiplico cuando el partido lo pide. Quita un filtro para ver las otras ofertas.', 'tb.vazio.b': 'Ver las 10 ofertas',
  /* Cupom */
  'slip.t': 'Tu boleto.', 'slip.l': 'Boleto de apuestas', 'slip.vazio': 'Toca un momio para armar tu boleto. Se queda aquí mientras navegas.', 'slip.ver': 'Ver partidos',
  'slip.simples': 'Apuesta sencilla', 'slip.multipla': 'Combinada · {n} selecciones', 'slip.limpar': 'Limpiar', 'slip.limpo': 'Boleto limpio.', 'slip.sels': 'Selecciones del boleto',
  'slip.rm': 'Quitar del boleto: {d}', 'slip.rm.ok': '{d} salió del boleto.',
  'slip.tot': 'Momio total', 'slip.valor': 'Monto de la apuesta', 'slip.min': 'mín. $1.00 [por confirmar]', 'slip.add': 'Sumar {v} al monto',
  'slip.min.err': 'La apuesta mínima es de $1.00 [por confirmar]. Ejemplo: 10.00.',
  'slip.ret': 'Ganancia posible', 'slip.bet': 'Apostar {v}', 'slip.aceitar': 'Aceptar y apostar {v}', 'slip.busy': 'Apostando…',
  'slip.out': 'Entra para apostar. Tus selecciones se quedan guardadas.',
  'slip.motivo': 'Entra para hacer tu apuesta ({n} selecciones).', 'slip.motivo1': 'Entra para hacer tu apuesta (1 selección).',
  'slip.age': 'Apostar no es una inversión.', 'slip.live': 'Partido en vivo: el sistema revisa el momio cuando confirmas.',
  'slip.chg.t': 'El sistema cambió {n} momios.', 'slip.chg.t1': 'El sistema cambió 1 momio.',
  'slip.chg.s': 'Momio total {de} → {para}. Ganancia posible {rde} → {rpara}. Revisa y confirma de nuevo.',
  'slip.antes': 'antes {v}', 'slip.agora': 'ahora {v}',
  'slip.sem.t': 'Saldo insuficiente.', 'slip.sem.s': 'Tu saldo es {s}. Te faltan {f} para apostar {v}: baja el monto o deposita.', 'slip.dep': 'Depositar',
  'ok.t': 'Apuesta hecha.', 'ok.say': 'Soy el Maestro: anoté tu apuesta. Ahora le toca al partido.', 'ok.ver': 'Síguela en Mis apuestas', 'ok.nova': 'Armar otro boleto',
  'ok.tipo': 'Tipo', 'ok.cot': 'Momio', 'ok.valor': 'Monto', 'ok.ret': 'Ganancia posible', 'ok.cod': 'Código', 'ok.saldo': 'Saldo ahora', 'ok.toast': 'Apuesta hecha: {v}.',
  'fab': 'Boleto', 'fab.aria': 'Abrir boleto: {n} selecciones, momio total {o}', 'fab.aria1': 'Abrir boleto: 1 selección, momio {o}',
  /* textos fixos usados no módulo (mercados, filtros, cupom) */
  'mais': 'Más', 'menos': 'Menos', 'sim': 'Sí', 'nao': 'No', 'empate': 'Empate', 'res': 'Resultado final',
  'boost.mk': 'Momio mejorado', 'boost.lab': 'Mejorado', 'tx.multi': 'Combinada · {n} selecciones', 'tx.st': 'Abierta', 'tx.ses': 'Deportes',
  'scr.esp': 'Deportes', 'scr.ev': 'Partido', 'scr.tb': 'Momios mejorados',
  'vazio.o.aovivo': 'en vivo ahora', 'vazio.o.hoje': 'hoy', 'vazio.o.amanha': 'mañana', 'vazio.o.tudo': 'en la cartelera',
  'odd.sube': 'subió', 'odd.baja': 'bajó', 'odd.lab': 'momio'
};

const SP = (() => {
  /* ---------- utilitários ---------- */
  const hash = s => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0) / 4294967296; };
  const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
  const fl = x => String(x);   /* linhas e handicaps com ponto decimal (es-MX): "Más de 2.5 goles" */
  const ordm = n => n + (n === 1 || n === 3 ? '.er' : '.º');   /* 1.er, 2.º, 3.er, 4.º */
  const sg = x => (x > 0 ? '+' : x < 0 ? '−' : '') + fl(Math.abs(x));
  const r2 = x => Math.round(x * 100) / 100;
  const money = v => (+v || 0).toLocaleString(LOC, {minimumFractionDigits: 2, maximumFractionDigits: 2});
  function roundOdd(x) {
    if (!isFinite(x) || x < 1.01) return 1.01;
    const st = x < 2 ? .01 : x < 4 ? .05 : x < 10 ? .1 : x < 20 ? .5 : x < 50 ? 1 : 5;
    return Math.min(251, Math.round(Math.round(x / st) * st * 100) / 100);
  }
  const oddP = (p, mg = 1.065) => roundOdd(1 / (Math.min(.985, Math.max(.012, p)) * mg));
  const pois = (k, l) => { if (k < 0) return 0; let p = Math.exp(-l); for (let i = 1; i <= k; i++) p *= l / i; return p; };
  const cdfP = (k, l) => { let s = 0; for (let i = 0; i <= k; i++) s += pois(i, l); return s; };
  const erf = x => { const s = Math.sign(x); x = Math.abs(x); const u = 1 / (1 + .3275911 * x); return s * (1 - (((((1.061405429 * u - 1.453152027) * u) + 1.421413741) * u - .284496736) * u + .254829592) * u * Math.exp(-x * x)); };
  const Phi = z => .5 * (1 + erf(z / Math.SQRT2));
  const logit = p => Math.log(p / (1 - p));
  const keep = p => p != null && Math.min(p, 1 - p) >= .1;   /* linha quase decidida: a casa suspende (some do mercado) */
  const C = (n, k) => { let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return r; };

  /* ---------- estado do módulo ---------- */
  const O0 = Object.fromEntries(MATCHES.map(m => [m.id, m.o.slice()]));       // cotações iniciais: base dos mercados derivados
  const [h0, m0] = String(ODDS_TIME || '09:11').split(':').map(Number);
  const X = {rev: 0, ov: {}, chg: {}, sport: '', tab: 'tudo', closed: {}, more: {}, pend: '', tb: {lg: 'todos', team: '', ord: 'cedo'},
    mt: {}, mclosed: {}, done: null, doneScr: '', liveChk: new Set(), busy: false};
  const hhmm = () => { const t0 = h0 * 60 + m0 + X.rev * 3; return String(Math.floor(t0 / 60) % 24).padStart(2, '0') + ':' + String(t0 % 60).padStart(2, '0'); };
  const V = (id, base) => base == null ? null : (X.ov[id] ?? base);
  const SPN = Object.fromEntries(SPORTS.map(s => [s.k, s]));
  const SP_DE = {fut: 'de fútbol', bas: 'de básquetbol', vol: 'de voleibol', ten: 'de tenis'};
  const SP_IC = {fut: 'esportes', bas: 'basquete', vol: 'volei', ten: 'tenis'};
  /* tamanho da grade completa de cada campeonato (demo): onde é maior que os dados, "Ver os N jogos" avisa */
  const LGN = {lmx: 7, lib: 8, cch: 4, pre: 10, lal: 10, ucl: 18, lnbp: 8, nba: 12, sle: 6, a1f: 6, atp: 8, wta: 4};
  /* jogadores (demo) para o mercado "Anota en cualquier momento" (LOCALE.md) */
  const PLAYERS = {
    AME: ['Henry Martín', 'Álvaro Fidalgo', 'Brian Rodríguez', 'Alejandro Zendejas'], GDL: ['Alan Pulido', 'Roberto Alvarado', 'Cade Cowell', 'Érick Gutiérrez'],
    RMA: ['Vini Jr.', 'Mbappé', 'Rodrygo', 'Bellingham'], BAR: ['Lewandowski', 'Raphinha', 'Lamine Yamal', 'Ferran Torres']
  };

  const lgOf = m => LEAGUES[m.lg];
  const spOf = m => LEAGUES[m.lg].sp;
  const vs = m => `${teamName(m.h)} × ${teamName(m.a)}`;
  const matchOf = ev => M[ev] || M[String(ev || '').replace(/-b\d+$/, '')] || null;
  const whenOf = m => { if (m.live) return null; const [d, h] = m.t.split(' · '); return {d, h}; };
  const liveParts = m => { const s = m.live.m; const mt = s.match(/^(.*?)\s+(\d+'|\d+:\d+)$/); return mt ? {per: mt[1], clk: mt[2]} : {per: s, clk: ''}; };
  const whenTxt = m => m.live ? `${t('sp.live')} · ${m.live.m}` : m.t;
  function startKey(m) {
    if (m.live) return -1;
    const [d, hm] = m.t.split(' · '); const [hh, mm] = hm.split(':').map(Number);
    let day = 0; if (d === 'Mañana') day = 1; else if (d !== 'Hoy') { const x = d.match(/(\d+)\/(\d+)/); day = x ? Math.round((new Date(2026, +x[2] - 1, +x[1]) - new Date(2026, 9, 26)) / 864e5) : 9; }
    return day * 1440 + hh * 60 + mm;
  }
  const tabOk = (m, k) => k === 'aovivo' ? !!m.live : k === 'hoje' ? (!!m.live || m.t.startsWith('Hoy')) : k === 'amanha' ? (!m.live && m.t.startsWith('Mañana')) : true;

  /* ---------- modelos de cotação (determinísticos) ---------- */
  function fut(m) {
    const [h, d, a] = O0[m.id]; const s = 1 / h + 1 / d + 1 / a; const pH = 1 / h / s, pD = 1 / d / s, pA = 1 / a / s;
    const sd = hash(m.id); const lam = 2.3 + Math.abs(pH - pA) * .9 + (sd - .5) * .5;
    const sh = Math.min(.8, Math.max(.2, .5 + (pH - pA) * .55));
    let cur = [0, 0], rem = 1;
    if (m.live) { cur = m.live.s; const mn = +((m.live.m.match(/(\d+)'/) || [0, 0])[1]); rem = Math.max(.06, (90 - mn) / 90); }
    return {pH, pD, pA, sd, lam, cur, rem, lh: lam * sh * rem, la: lam * (1 - sh) * rem};
  }
  const fOver = (f, line) => { const need = Math.floor(line) - (f.cur[0] + f.cur[1]); return need < 0 ? 1 : 1 - cdfP(need, f.lh + f.la); };
  const fTeamOver = (f, i, line) => { const need = Math.floor(line) - f.cur[i]; return need < 0 ? 1 : 1 - cdfP(need, i ? f.la : f.lh); };
  function fDiff(f) { const D = {}; for (let i = 0; i <= 9; i++) for (let j = 0; j <= 9; j++) { const k = f.cur[0] + i - f.cur[1] - j; D[k] = (D[k] || 0) + pois(i, f.lh) * pois(j, f.la); } return D; }
  const pD = (D, fn) => Object.entries(D).reduce((s, [k, p]) => s + (fn(+k) ? p : 0), 0);
  function bas(m) {
    const [h, , a] = O0[m.id]; const pH = (1 / h) / (1 / h + 1 / a); const sd = hash(m.id);
    const nba = m.lg === 'nba'; const Q = nba ? 12 : 10; const tot = (nba ? 224 : 161) + (sd - .5) * 10; const mu = 7.2 * logit(pH);
    let cur = [0, 0], el = 0, q = 1;
    if (m.live) { cur = m.live.s; q = +((m.live.m.match(/^(\d)\s*(?:C|º)/) || [0, 1])[1]);   /* "3C 6:12" = 3.er cuarto */ const c = m.live.m.match(/(\d+):(\d+)/) || [0, Q, 0]; el = (q - 1) * Q + (Q - (+c[1] + c[2] / 60)); }
    const r = Math.max(.05, 1 - el / (4 * Q));
    return {pH, nba, Q, q, tot, cur, r, muT: cur[0] + cur[1] + tot * r, sdT: 15 * Math.sqrt(r) + 2, muD: cur[0] - cur[1] + mu * r, sdD: 12 * Math.sqrt(r) + 1.5};
  }
  function sets(m, W) {
    const [h, , a] = O0[m.id]; const pH = (1 / h) / (1 / h + 1 / a);
    const pW = q => { let s = 0; for (let k = 0; k < W; k++) s += C(W - 1 + k, k) * q ** W * (1 - q) ** k; return s; };
    let lo = .01, hi = .99; for (let i = 0; i < 40; i++) { const md = (lo + hi) / 2; if (pW(md) < pH) lo = md; else hi = md; }
    const q = (lo + hi) / 2; const cur = m.live ? m.live.s : [0, 0]; const F = {};
    const rec = (x, y, p) => { if (x === W || y === W) { F[x + '-' + y] = (F[x + '-' + y] || 0) + p; return; } rec(x + 1, y, p * q); rec(x, y + 1, p * (1 - q)); };
    rec(cur[0], cur[1], 1);
    const eS = Object.entries(F).reduce((s, [k, p]) => s + p * k.split('-').reduce((u, v) => u + +v, 0), 0);
    return {pH, q, F, W, cur, eS, sd: hash(m.id)};
  }
  const setsOver = (S2, line) => Object.entries(S2.F).reduce((s, [k, p]) => s + (k.split('-').reduce((u, v) => u + +v, 0) > line ? p : 0), 0);
  /* coluna Total da tabela (mesmos ids da Página do jogo) */
  function totalCol(m) {
    const sp = spOf(m); const id = (pre, l, x) => `${m.id}-${pre}-${l}-${x}`;
    let line, p, pre, unit, mk;
    if (sp === 'fut') { line = 2.5; pre = 'tg'; unit = 'goles'; mk = 'Total de goles'; const f = fut(m); p = (f.cur[0] + f.cur[1]) > line ? null : fOver(f, line); }
    else if (sp === 'bas') { const b = bas(m); line = b.nba ? 222.5 : 160.5; pre = 'tp'; unit = 'puntos'; mk = 'Total de puntos'; p = 1 - Phi((line - b.muT) / b.sdT); }
    else if (sp === 'vol') { line = 3.5; pre = 'ts'; unit = 'sets'; mk = 'Total de sets'; p = setsOver(sets(m, 3), line); }
    else { line = 22.5; pre = 'tgm'; unit = 'games'; mk = 'Total de games'; const s2 = sets(m, 2); p = 1 - Phi((line - s2.eS * (8.9 + (1 - Math.abs(2 * s2.q - 1)) * .8)) / 3.8); }
    if (p != null && !keep(p)) p = null;   /* suspensa: mostra "–" */
    const mkO = (x, pp, lab) => ({id: id(pre, line, x), lab, val: p == null ? null : V(id(pre, line, x), oddP(pp)), desc: `${x === 'o' ? t('sp.mais') : t('sp.menos')} de ${fl(line)} ${unit}`, mk});
    return {line, unit, over: mkO('o', p, t('sp.mais')), under: mkO('u', 1 - (p ?? 0), t('sp.menos'))};
  }

  /* ---------- mercados da Página do jogo ---------- */
  function markets(m) { return marketsRaw(m).map(tb => ({...tb, groups: tb.groups.map(g => g.rows ? {...g, rows: g.rows.filter(Boolean)} : g).filter(g => !g.rows || g.rows.length)})); }
  function marketsRaw(m) {
    const sp = spOf(m); const H = teamName(m.h), A = teamName(m.a); const ev = m.id;
    const O = (k, lab, p, desc, mk, mg) => ({id: `${ev}-${k}`, lab, val: V(`${ev}-${k}`, oddP(p, mg)), desc, mk});
    const MAIS = t('sp.mais'), MENOS = t('sp.menos'), EMP = t('sp.empate'), RES = t('sp.res');
    /* rótulo da linha: unidade longa ("tiros de esquina") fica só no título do grupo e na descrição do boleto */
    const ou = (pre, l, p, unit, mk, who = '') => !keep(p) ? null : ({l: fl(l) + (unit && unit.length < 12 ? ' ' + unit : ''), odds: [O(`${pre}-${l}-o`, null, p, `${who}${who ? MAIS.toLowerCase() : MAIS} de ${fl(l)} ${unit}`.trim(), mk), O(`${pre}-${l}-u`, null, 1 - p, `${who}${who ? MENOS.toLowerCase() : MENOS} de ${fl(l)} ${unit}`.trim(), mk)]});
    const OU = (k, n, rows, extra = {}) => ({k, n, lay: 'rows', head: [MAIS, MENOS], rows: rows.filter(Boolean), ...extra});
    const winner = (mk = RES) => sp === 'fut'
      ? {k: 'r', n: mk, lay: 'n', odds: [{id: `${ev}-r-1`, lab: H, val: m.o[0], desc: H, mk}, {id: `${ev}-r-X`, lab: EMP, val: m.o[1], desc: EMP, mk}, {id: `${ev}-r-2`, lab: A, val: m.o[2], desc: A, mk}]}
      : {k: 'r', n: mk, lay: 'n', odds: [{id: `${ev}-r-1`, lab: H, val: m.o[0], desc: H, mk: RES}, {id: `${ev}-r-2`, lab: A, val: m.o[2], desc: A, mk: RES}]};
    const tc = totalCol(m);
    const boosts = BOOSTS.filter(b => b.ev === m.id);
    const turb = {k: 'turb', n: t('sp.mt.turb'), c: boosts.length, groups: [{k: 'tb', lay: 'boost', boosts}]};
    const jogNote = {k: 'jog', n: t('sp.mt.jog'), groups: [{k: 'jn', lay: 'note', note: t('sp.ev.jog')}]};
    const tabs = [];

    if (sp === 'fut') {
      const f = fut(m); const ct = f.cur[0] + f.cur[1];
      const D = fDiff(f);
      const gl = [.5, 1.5, 2.5, 3.5, 4.5].filter(l => l > ct).slice(0, 4);
      const pBoth = (f.cur[0] ? 1 : 1 - Math.exp(-f.lh)) * (f.cur[1] ? 1 : 1 - Math.exp(-f.la));
      const pop = [winner(),
        {k: 'dc', n: 'Doble oportunidad', lay: 'rows', rows: [[`${H} o empate`, f.pH + f.pD, '1X'], [`${H} o ${A}`, f.pH + f.pA, '12'], [`Empate o ${A}`, f.pD + f.pA, 'X2']].map(([l, p, k]) => ({l, odds: [O('dc-' + k, null, p, l, 'Doble oportunidad', 1.05)]}))},
        OU('tg', 'Total de goles', [ou('tg', tc.line, fOver(f, 2.5), 'goles', 'Total de goles')]),
        {k: 'am', n: 'Ambos anotan', lay: 'n', odds: [O('am-s', t('sp.sim'), pBoth, 'Ambos anotan: sí', 'Ambos anotan'), O('am-n', t('sp.nao'), 1 - pBoth, 'Ambos anotan: no', 'Ambos anotan')]},
        {k: 'ea', n: 'Apuesta sin empate', lay: 'n', odds: [O('ea-1', H, f.pH / (f.pH + f.pA), H, 'Apuesta sin empate'), O('ea-2', A, f.pA / (f.pH + f.pA), A, 'Apuesta sin empate')]}];
      if (ct > 2.5) pop.splice(2, 1);
      tabs.push({k: 'pop', n: t('sp.mt.pop'), groups: pop}, turb);
      /* gols */
      const sc = []; for (let i = f.cur[0]; i <= f.cur[0] + 3; i++) for (let j = f.cur[1]; j <= f.cur[1] + 3; j++) sc.push([i, j, pois(i - f.cur[0], f.lh) * pois(j - f.cur[1], f.la)]);
      sc.sort((x, y) => y[2] - x[2]);
      const top = sc.slice(0, 9).sort((x, y) => (Math.sign(y[0] - y[1]) - Math.sign(x[0] - x[1])) || y[2] - x[2]);
      const tl = (i) => [f.cur[i] + .5, f.cur[i] + 1.5];
      tabs.push({k: 'gols', n: t('sp.mt.gols'), groups: [
        OU('tg', 'Total de goles', gl.map(l => ou('tg', l, fOver(f, l), 'goles', 'Total de goles'))),
        OU('th', `Goles de ${H}`, tl(0).map(l => ou('th', l, fTeamOver(f, 0, l), 'goles', `Goles de ${H}`, `${H}: `))),
        OU('ta', `Goles de ${A}`, tl(1).map(l => ou('ta', l, fTeamOver(f, 1, l), 'goles', `Goles de ${A}`, `${A}: `))),
        {k: 'pe', n: 'Marcador exacto', lay: 'grid', odds: top.map(([i, j, p]) => O(`pe-${i}-${j}`, `${i}-${j}`, p, `Marcador exacto ${i}-${j}`, 'Marcador exacto', 1.18))}]});
      /* handicap */
      const ah = [-1.5, -.5, .5, 1.5];
      tabs.push({k: 'hc', n: t('sp.mt.hc'), groups: [
        {k: 'ah', n: 'Hándicap asiático', lay: 'rows', nol: 1, head: [H, A], rows: ah.map(h => { const p = pD(D, d => d + h > 0); return !keep(p) ? null : {odds: [O(`ah-${h}-1`, sg(h), p, `${H} ${sg(h)}`, 'Hándicap asiático'), O(`ah-${h}-2`, sg(-h), 1 - p, `${A} ${sg(-h)}`, 'Hándicap asiático')]}; })},
        {k: 'he', n: 'Hándicap europeo (−1)', lay: 'n', odds: [O('he-1', `${H} −1`, pD(D, d => d >= 2), `${H} −1`, 'Hándicap europeo', 1.08), O('he-X', 'Empate (−1)', pD(D, d => d === 1), 'Empate (−1)', 'Hándicap europeo', 1.08), O('he-2', `${A} +1`, pD(D, d => d <= 0), `${A} +1`, 'Hándicap europeo', 1.08)]}]});
      /* escanteios e cartões */
      const lc = 9.4 + f.sd * 2.4, cc = m.live ? Math.round(lc * (1 - f.rem)) : 0, rc = lc * f.rem;
      const cOver = l => { const need = Math.floor(l) - cc; return need < 0 ? 1 : 1 - cdfP(need, rc); };
      const pm = .42 + (f.pH - f.pA) * .5;
      const escG = [OU('ec', 'Total de tiros de esquina', [8.5, 9.5, 10.5, 11.5].filter(l => l > cc).slice(0, 4).map(l => ou('ec', l, cOver(l), 'tiros de esquina', 'Total de tiros de esquina')), {pre: m.live ? t('sp.ev.sofar.esc', {n: cc}) : ''}),
        {k: 'me', n: 'Más tiros de esquina', lay: 'n', odds: [O('me-1', H, pm, `${H}: más tiros de esquina`, 'Más tiros de esquina', 1.08), O('me-X', EMP, .12, 'Tiros de esquina empatados', 'Más tiros de esquina', 1.08), O('me-2', A, 1 - pm - .12, `${A}: más tiros de esquina`, 'Más tiros de esquina', 1.08)]}];
      if (!m.live) escG.push(OU('e1', 'Tiros de esquina del 1.er tiempo', [3.5, 4.5].map(l => ou('e1', l, 1 - cdfP(Math.floor(l), lc * .46), 'tiros de esquina', 'Tiros de esquina del 1.er tiempo'))));
      tabs.push({k: 'esc', n: t('sp.mt.esc'), groups: escG});
      const lk = 4.1 + hash(m.id + 'k') * 1.6, kc = m.live ? Math.max(/Tarjeta|Cart/.test(m.live.last) ? 1 : 0, Math.round(lk * (1 - f.rem))) : 0, rk = lk * f.rem;
      const kOver = l => { const need = Math.floor(l) - kc; return need < 0 ? 1 : 1 - cdfP(need, rk); };
      const pk = .40 - (f.pH - f.pA) * .3; const pr = .02 + .16 * f.rem;
      tabs.push({k: 'cart', n: t('sp.mt.cart'), groups: [
        OU('kt', 'Total de tarjetas', [2.5, 3.5, 4.5, 5.5].filter(l => l > kc).slice(0, 4).map(l => ou('kt', l, kOver(l), 'tarjetas', 'Total de tarjetas')), {pre: m.live ? t('sp.ev.sofar.cart', {n: kc}) : ''}),
        {k: 'mk', n: 'Más tarjetas', lay: 'n', odds: [O('mk-1', H, pk, `${H}: más tarjetas`, 'Más tarjetas', 1.08), O('mk-X', EMP, .2, 'Tarjetas empatadas', 'Más tarjetas', 1.08), O('mk-2', A, 1 - pk - .2, `${A}: más tarjetas`, 'Más tarjetas', 1.08)]},
        {k: 'cv', n: 'Tarjeta roja en el partido', lay: 'n', odds: [O('cv-s', t('sp.sim'), pr, 'Tarjeta roja: sí', 'Tarjeta roja'), O('cv-n', t('sp.nao'), 1 - pr, 'Tarjeta roja: no', 'Tarjeta roja')]}]});
      /* jogadores */
      if (PLAYERS[m.h] || PLAYERS[m.a]) {
        const shares = [.34, .2, .15, .1]; const rows = []; const cards = [];
        [[m.h, f.lh, H], [m.a, f.la, A]].forEach(([c, l, n]) => (PLAYERS[c] || []).forEach((pl, i) => {
          const slug = norm(pl).replace(/[^a-z]+/g, '');
          rows.push({l: pl, sub: n, odds: [O(`gm-${slug}`, null, 1 - Math.exp(-l * shares[i] * 1.1), `${pl} anota`, 'Anota en cualquier momento', 1.12)]});
          cards.push({l: pl, sub: n, odds: [O(`rc-${slug}`, null, (.1 + hash(pl) * .14) * f.rem, `${pl} recibe tarjeta`, 'Recibe tarjeta', 1.12)]});
        }));
        tabs.push({k: 'jog', n: t('sp.mt.jog'), groups: [{k: 'gm', n: 'Anota en cualquier momento', lay: 'rows', rows}, {k: 'rc', n: 'Recibe tarjeta', lay: 'rows', rows: cards}]});
      } else tabs.push(jogNote);
      return tabs;
    }

    if (sp === 'bas') {
      const b = bas(m); const L = Math.round(Math.abs(b.muD)) + .5; const hL = b.muD >= 0 ? -L : L;
      const hcRow = h => { const p = 1 - Phi((-h - b.muD) / b.sdD); return !keep(p) ? null : {odds: [O(`hp-${h}-1`, sg(h), p, `${H} ${sg(h)}`, 'Hándicap de puntos'), O(`hp-${h}-2`, sg(-h), 1 - p, `${A} ${sg(-h)}`, 'Hándicap de puntos')]}; };
      const tOver = l => 1 - Phi((l - b.muT) / b.sdT);
      const muH = (b.muT + b.muD) / 2, muA = (b.muT - b.muD) / 2; const lH = Math.round(muH) + .5, lA = Math.round(muA) + .5;
      const qn = b.q; const qT = b.tot / 4; const qp = .5 + (b.pH - .5) * .5; const lq = Math.round(qT) + .5; const qo = ordm(qn);
      tabs.push({k: 'pop', n: t('sp.mt.pop'), groups: [winner('Ganador (con tiempo extra)'),
        {k: 'hp', n: 'Hándicap de puntos', lay: 'rows', nol: 1, head: [H, A], rows: [hcRow(hL)]},
        OU('tp', 'Total de puntos', [ou('tp', tc.line, tOver(tc.line), 'puntos', 'Total de puntos')])]}, turb);
      tabs.push({k: 'pts', n: t('sp.mt.pts'), groups: [
        OU('tp', 'Total de puntos', [tc.line - 6, tc.line, tc.line + 6].map(l => ou('tp', l, tOver(l), 'puntos', 'Total de puntos'))),
        OU('ph', `Puntos de ${H}`, [lH - 4, lH, lH + 4].map(l => ou('ph', l, 1 - Phi((l - muH) / (b.sdT * .7)), 'puntos', `Puntos de ${H}`, `${H}: `))),
        OU('pa', `Puntos de ${A}`, [lA - 4, lA, lA + 4].map(l => ou('pa', l, 1 - Phi((l - muA) / (b.sdT * .7)), 'puntos', `Puntos de ${A}`, `${A}: `)))]});
      tabs.push({k: 'hc', n: t('sp.mt.hc'), groups: [{k: 'hp', n: 'Hándicap de puntos', lay: 'rows', nol: 1, head: [H, A], rows: [hL - 4, hL, hL + 4].map(hcRow)}]});
      tabs.push({k: 'qua', n: t('sp.mt.qua'), groups: [
        {k: 'vq', n: `Ganador del ${qo} cuarto`, lay: 'n', odds: [O(`vq${qn}-1`, H, qp * .94, `${H} gana el ${qo} cuarto`, `Ganador del ${qo} cuarto`), O(`vq${qn}-X`, EMP, .06, `Empate en el ${qo} cuarto`, `Ganador del ${qo} cuarto`), O(`vq${qn}-2`, A, (1 - qp) * .94, `${A} gana el ${qo} cuarto`, `Ganador del ${qo} cuarto`)]},
        OU('tq', `Total del ${qo} cuarto`, [ou(`tq${qn}`, lq, 1 - Phi((lq - qT) / 6), 'puntos', `Total del ${qo} cuarto`)])]});
      tabs.push(jogNote);
      return tabs;
    }

    /* vôlei e tênis: disputa de sets */
    const W = sp === 'vol' ? 3 : 2; const S2 = sets(m, W);
    const scores = Object.entries(S2.F).sort((x, y) => { const [a1, b1] = x[0].split('-').map(Number), [a2, b2] = y[0].split('-').map(Number); return ((a1 > b1 ? 0 : 1) - (a2 > b2 ? 0 : 1)) || (Math.min(a1, b1) - Math.min(a2, b2)); });
    const pe = {k: 'ps', n: 'Marcador en sets', lay: 'grid', cols: sp === 'vol' ? 3 : 2, odds: scores.map(([k, p]) => O(`ps-${k}`, k.replace('-', ' – '), p, `Marcador en sets ${k}`, 'Marcador en sets', 1.1))};
    const sh = (h) => { const p = Object.entries(S2.F).reduce((s, [k, pp]) => { const [x, y] = k.split('-').map(Number); return s + (x - y + h > 0 ? pp : 0); }, 0); return !keep(p) ? null : {odds: [O(`hs-${h}-1`, sg(h), p, `${H} ${sg(h)} sets`, 'Hándicap de sets'), O(`hs-${h}-2`, sg(-h), 1 - p, `${A} ${sg(-h)} sets`, 'Hándicap de sets')]}; };
    const next = S2.cur[0] + S2.cur[1] + 1; const nx = ordm(next);
    if (sp === 'vol') {
      const tsl = [3.5, 4.5];
      const ptsMu = 45.5 * S2.eS, ptsOver = l => 1 - Phi((l - ptsMu) / 9);
      tabs.push({k: 'pop', n: t('sp.mt.pop'), groups: [winner('Ganador'), pe, OU('ts', 'Total de sets', tsl.map(l => ou('ts', l, setsOver(S2, l), 'sets', 'Total de sets')))]}, turb);
      tabs.push({k: 'sets', n: t('sp.mt.sets'), groups: [{k: 'hs', n: 'Hándicap de sets', lay: 'rows', nol: 1, head: [H, A], rows: [sh(-1.5), sh(1.5)]},
        {k: 'vn', n: `Ganador del ${nx} set`, lay: 'n', odds: [O(`vs${next}-1`, H, S2.q, `${H} gana el ${nx} set`, `Ganador del ${nx} set`), O(`vs${next}-2`, A, 1 - S2.q, `${A} gana el ${nx} set`, `Ganador del ${nx} set`)]}]});
      tabs.push({k: 'pts', n: t('sp.mt.pts'), groups: [OU('tpv', 'Total de puntos', [175.5, 181.5, 187.5].map(l => ou('tpv', l, ptsOver(l), 'puntos', 'Total de puntos'))),
        OU('tps', `Puntos del ${nx} set`, [44.5, 46.5].map(l => ou(`tps${next}`, l, 1 - Phi((l - 45.6) / 4.2), 'puntos', `Puntos del ${nx} set`)))]});
      tabs.push(jogNote);
      return tabs;
    }
    const gMu = S2.eS * (8.9 + (1 - Math.abs(2 * S2.q - 1)) * .8); const gOver = l => 1 - Phi((l - gMu) / 3.8);
    const gD = 4.6 * logit(Math.min(.97, Math.max(.03, S2.q)));
    const gh = h => { const p = 1 - Phi((-h - gD) / 4.2); return !keep(p) ? null : {odds: [O(`hg-${h}-1`, sg(h), p, `${H} ${sg(h)} games`, 'Hándicap de games'), O(`hg-${h}-2`, sg(-h), 1 - p, `${A} ${sg(-h)} games`, 'Hándicap de games')]}; };
    const gl0 = gD >= 0 ? -1 : 1;
    tabs.push({k: 'pop', n: t('sp.mt.pop'), groups: [winner('Ganador'), pe, OU('tgm', 'Total de games', [ou('tgm', tc.line, gOver(tc.line), 'games', 'Total de games')])]}, turb);
    tabs.push({k: 'sets', n: t('sp.mt.sets'), groups: [
      {k: 'v1', n: `Ganador del ${nx} set`, lay: 'n', odds: [O(`vs${next}-1`, H, S2.q, `${H} gana el ${nx} set`, `Ganador del ${nx} set`), O(`vs${next}-2`, A, 1 - S2.q, `${A} gana el ${nx} set`, `Ganador del ${nx} set`)]},
      OU('tss', 'Total de sets', [ou('tss', 2.5, setsOver(S2, 2.5), 'sets', 'Total de sets')])]});
    tabs.push({k: 'games', n: t('sp.mt.games'), groups: [OU('tgm', 'Total de games', [20.5, 22.5, 24.5].map(l => ou('tgm', l, gOver(l), 'games', 'Total de games'))),
      {k: 'hg', n: 'Hándicap de games', lay: 'rows', nol: 1, head: [H, A], rows: [gl0 * 4.5, gl0 * 2.5, -gl0 * 2.5].map(gh)}]});
    return tabs;
  }

  /* ---------- peças ---------- */
  function oddsBar(o = {}) {
    return `<div class="sp-ot${o.cls ? ' ' + o.cls : ''}"><p class="sp-ot-t">${ic('relogio', 'ic--xs')}<span>${t('sp.ot.de')} <b class="tnum" data-sp-time>${hhmm()}</b> · ${t('sp.ot.fixa')}</span></p>${btn(t('sp.ot.b'), {kind: 'ghost', size: 's', icon: 'atualizar', act: 'spRefresh', cls: 'sp-ot-b'})}</div>`;
  }
  const crumb = (items) => `<nav class="crumb sp-crumb" aria-label="${t('sp.ev.crumb')}">${items.map((it, i) => (i ? ic('seta-d', 'ic--xs sp-crumb-s') : '') + (it.cur ? `<span aria-current="page">${esc(it.n)}</span>` : `<button ${it.go ? `data-go="${esc(it.go)}"` : `data-act="${esc(it.act)}" data-arg="${esc(it.arg)}"`}>${esc(it.n)}</button>`)).join('')}</nav>`;

  function srchHTML(o) {
    return `<div class="sp-q" data-sp-q="${o.kind}"><label class="sr" for="${o.id}">${esc(o.label)}</label>
      <div class="fld-box">${ic('busca')}<input id="${o.id}" type="search" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="${o.id}-l" autocomplete="off" enterkeyhint="search" spellcheck="false" placeholder="${esc(o.ph)}" value="${esc(o.value || '')}"></div>
      <div class="sp-dd" id="${o.id}-l" role="listbox" aria-label="${esc(o.label)}" hidden></div><span class="sr" aria-live="polite" data-sp-qs></span></div>`;
  }
  function bindSrch(box, results) {
    if (!box || box.dataset.ok) return; box.dataset.ok = 1;
    const inp = box.querySelector('input'), dd = box.querySelector('.sp-dd'), st = box.querySelector('[data-sp-qs]');
    const close = () => { dd.hidden = true; inp.setAttribute('aria-expanded', 'false'); };
    const show = () => {
      const q = inp.value.trim(); if (q.length < 2) { close(); st.textContent = ''; return; }
      const r = results(q); dd.innerHTML = r.html; dd.hidden = false; inp.setAttribute('aria-expanded', 'true');
      st.textContent = r.n === 1 ? t('sp.q.n1') : r.n ? t('sp.q.n', {n: r.n}) : t('sp.q.nada', {q});
    };
    inp.addEventListener('input', show);
    inp.addEventListener('focus', () => { if (inp.value.trim().length > 1) show(); });
    inp.addEventListener('keydown', e => {
      const f = dd.querySelector('[role=option]');
      if (e.key === 'ArrowDown' && f && !dd.hidden) { e.preventDefault(); f.focus(); }
      else if (e.key === 'Escape') { if (!dd.hidden) { e.preventDefault(); e.stopPropagation(); close(); } }
      else if (e.key === 'Enter') { e.preventDefault(); if (f && !dd.hidden) f.click(); }
    });
    dd.addEventListener('keydown', e => {
      const os = $$('[role=option]', dd); const i = os.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); os[Math.min(os.length - 1, i + 1)]?.focus(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); if (i <= 0) inp.focus(); else os[i - 1].focus(); }
      else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(); inp.focus(); }
    });
    dd.addEventListener('mousedown', e => e.preventDefault());   /* mantém o foco no campo até o clique (Safari) */
    dd.addEventListener('click', e => { if (e.target.closest('[role=option]')) close(); });
    box.addEventListener('focusout', e => { if (!box.contains(e.relatedTarget)) setTimeout(() => { if (!box.contains(document.activeElement)) close(); }, 0); });
  }
  const cr2 = m => `<span class="sp-cr2" aria-hidden="true">${crest(m.h)}${crest(m.a)}</span>`;
  function espResults(q) {
    const n = norm(q);
    const ms = MATCHES.filter(m => [teamName(m.h), teamName(m.a), m.h, m.a, lgOf(m).n].some(s => norm(s).includes(n))).slice(0, 6);
    const lgs = Object.entries(LEAGUES).filter(([, l]) => norm(l.n).includes(n) || norm(SPN[l.sp].n).includes(n)).slice(0, 3);
    if (!ms.length && !lgs.length) return {n: 0, html: `<div class="sp-dd-no"><b>${esc(t('sp.q.nada', {q}))}</b><span>${t('sp.q.nada.s')}</span></div>`};
    const o1 = ms.map(m => `<button class="sp-dd-o" role="option" tabindex="-1" data-go="evento:${m.id}">${cr2(m)}<span class="sp-dd-tx"><b>${esc(vs(m))}</b><small>${m.live ? `<span class="sp-dd-lv">${eq()}${esc(t('sp.live'))} · ${esc(m.live.m)}</span> · ${esc(lgOf(m).n)}` : `${esc(lgOf(m).n)} · ${esc(m.t)}`}</small></span></button>`).join('');
    const o2 = lgs.map(([k, l]) => `<button class="sp-dd-o" role="option" tabindex="-1" data-act="spGoLg" data-arg="${k}"><span class="sp-dd-i">${ic(SP_IC[l.sp], 'ic--s')}</span><span class="sp-dd-tx"><b>${esc(l.n)}</b><small>${esc(t('sp.q.lgn', {s: SPN[l.sp].n, n: MATCHES.filter(m => m.lg === k).length}))}</small></span></button>`).join('');
    return {n: ms.length + lgs.length, html: (o1 ? `<div role="group" aria-label="${t('sp.q.jogos')}"><span class="sp-dd-g lab" aria-hidden="true">${t('sp.q.jogos')}</span>${o1}</div>` : '') + (o2 ? `<div role="group" aria-label="${t('sp.q.camps')}"><span class="sp-dd-g lab" aria-hidden="true">${t('sp.q.camps')}</span>${o2}</div>` : '')};
  }

  /* ---------- Esportes: tabela compacta ---------- */
  function rowHTML(m) {
    const sp = spOf(m); const two = m.o[1] == null; const tc = totalCol(m);
    const labs = two ? ['1', '2'] : ['1', 'X', '2']; const idx = two ? [0, 2] : [0, 1, 2];
    const names = two ? [teamName(m.h), teamName(m.a)] : [teamName(m.h), t('sp.empate'), teamName(m.a)];
    let meta;
    if (m.live) { const lp = liveParts(m); meta = `<span class="sp-tm-lv">${eq()}<b class="tnum">${esc(lp.clk || lp.per)}</b></span><small>${esc(lp.clk ? lp.per : t('sp.live'))}</small>`; }
    else { const w = whenOf(m); meta = `<b class="tnum">${esc(w.h)}</b><small>${esc(w.d.replace(/^\S+ (\d+\/\d+)$/, '$1'))}</small>`; }
    const sc = i => m.live ? `<i class="tnum">${m.live.s[i]}</i>` : '';
    const aria = t('sp.mk.aria', {j: vs(m), w: m.live ? `${t('sp.live')}, ${m.live.m}, ${m.live.s[0]} a ${m.live.s[1]}` : m.t, n: m.mk});
    return `<li class="sp-tr" data-mid="${m.id}">
      <button class="sp-tm" id="spm-${m.id}" data-go="evento:${m.id}" aria-label="${esc(aria)}">
        <span class="sp-tm-meta${m.live ? ' is-live' : ''}">${meta}</span>
        <span class="sp-tm-ts"><span class="sp-tm-r"><b>${esc(teamName(m.h))}</b>${sc(0)}</span><span class="sp-tm-r"><b>${esc(teamName(m.a))}</b>${sc(1)}</span></span>
        <span class="sp-tm-k tnum" aria-hidden="true">+${m.mk}</span>
      </button>
      <div class="sp-g1">${idx.map((ix, i) => oddBtn({id: `${m.id}-r-${labs[i]}`, val: m.o[ix], desc: names[i], mk: t('sp.res'), ev: m.id})).join('')}</div>
      <div class="sp-g2">${[tc.over, tc.under].map(o => oddBtn({id: o.id, val: o.val, desc: o.desc, mk: o.mk, ev: m.id})).join('')}</div>
    </li>`;
  }
  function leagueHTML(k, ms) {
    const lg = LEAGUES[k]; const two = ms[0].o[1] == null; const tc = totalCol(ms[0]);
    const tudo = X.tab === 'tudo'; const all = LGN[k] || ms.length; const lim = 3;
    const shown = tudo && !X.more[k] ? ms.slice(0, lim) : ms;
    const n = tudo ? all : ms.length; const open = !X.closed[k];
    const moreBtn = tudo && (all > lim) ? `<button class="sp-lg-more" data-act="spMore" data-arg="${k}" aria-controls="spLg-${k}">${X.more[k] ? t('sp.lg.menos') : t('sp.lg.ver', {n: all})}${ic(X.more[k] ? 'seta-c' : 'seta-b', 'ic--xs')}</button>` : '';
    const hc = (b, s) => `<span class="sp-hc"><b>${esc(b)}</b>${s ? `<small class="tnum">${esc(s)}</small>` : ''}</span>`;
    return `<section class="sp-lg${open ? ' is-open' : ''}" data-lg="${k}" aria-labelledby="spLgB-${k}">
      <h3 class="sp-lg-h"><button class="sp-lg-b" id="spLgB-${k}" aria-expanded="${open}" aria-controls="spLg-${k}" data-act="spLg" data-arg="${k}">
        <span class="sp-lg-i">${ic(SP_IC[lg.sp], 'ic--s')}</span><span class="sp-lg-n"><b>${esc(lg.n)}</b><small>${esc(lg.pais)} · ${n === 1 ? t('sp.lg.n1') : t('sp.lg.n', {n})}</small></span>${ic('seta-b', 'sp-chev')}</button></h3>
      <div class="sp-lg-bd" id="spLg-${k}"${open ? '' : ' hidden'}>
        <div class="sp-tr sp-trh${two ? ' sp-tb--2' : ''}" aria-hidden="true"><span class="sp-trh-m"></span><div class="sp-g1">${(two ? ['1', '2'] : ['1', 'X', '2']).map(x => hc(x)).join('')}</div><div class="sp-g2">${hc(t('sp.mais'), fl(tc.line))}${hc(t('sp.menos'), fl(tc.line))}</div></div>
        <ul class="sp-tb${two ? ' sp-tb--2' : ''}" aria-label="${esc(t('sp.lg.tb', {lg: lg.n}))}">${shown.map(rowHTML).join('')}</ul>
        ${moreBtn}
      </div>
    </section>`;
  }
  function listHTML() {
    const ms = MATCHES.filter(m => (!X.sport || spOf(m) === X.sport) && tabOk(m, X.tab));
    if (!ms.length) {
      const o = [X.sport ? SP_DE[X.sport] : '', t('sp.vazio.o.' + X.tab)].filter(Boolean).join(' ');
      return empty({who: 'maestro', title: t('sp.vazio.t', {o}), text: t('sp.vazio.s'), action: btn(t('sp.vazio.b'), {kind: 'sec', act: 'spTabSet', attrs: {'data-arg': 'tudo'}})});
    }
    const by = {}; ms.forEach(m => (by[m.lg] ||= []).push(m));
    return Object.keys(LEAGUES).filter(k => by[k]).map(k => leagueHTML(k, by[k])).join('')
      + (X.tab === 'tudo' ? `<div class="sp-lg-all">${btn(t('sp.lg.todos'), {kind: 'sec', act: 'spAllLg', iconR: 'seta-d'})}</div>` : '');
  }
  function tabsHTML() {
    const base = MATCHES.filter(m => !X.sport || spOf(m) === X.sport);
    return tabs(['tudo', 'aovivo', 'hoje', 'amanha'].map(k => ({k, n: t('sp.tab.' + k), c: base.filter(m => tabOk(m, k)).length})), {name: 'spTab', active: X.tab, label: t('sp.tab.l')});
  }
  function destHTML() {
    let ms = MATCHES.filter(m => (!X.sport || spOf(m) === X.sport));
    const top = ms.filter(m => m.live || m.dest); ms = [...top, ...ms.filter(m => !top.includes(m))].slice(0, 8);
    return rail(ms.map(m => matchCard(m)), {label: t('sp.dest.t'), cls: 'sp-dest'});
  }
  function turbHTML() {
    const pool = BOOSTS.filter(b => !X.sport || spOf(M[b.ev]) === X.sport);
    const b = pool[0] || BOOSTS[0]; const m = M[b.ev]; const p = pct(b.de, b.para);
    return `<section class="sp-td" aria-labelledby="spTdT">
      <div class="sp-td-k" aria-hidden="true"><b class="tnum">+${p}%</b><small>${t('sp.td.aum')}</small></div>
      <div class="sp-td-bd"><span class="lab sp-td-l">${ic('raio', 'ic--xs')}${t('sp.td.k')}</span>
        <h2 class="sp-td-t" id="spTdT"><button data-go="evento:${m.id}">${esc(vs(m))}</button></h2>
        <ul class="bc-sel">${b.sel.map(s => `<li>${ic('check', 'ic--xs')}${esc(s)}</li>`).join('')}</ul>
        <span class="sp-td-m">${esc(lgOf(m).n)} · ${esc(whenTxt(m))}</span></div>
      <div class="sp-td-f"><div class="bc-ft"><span class="bc-de" aria-label="${esc(t('sp.td.de', {v: fmtOdd(b.de)}))}"><s class="tnum">${fmtOdd(b.de)}</s>${ic('ir', 'ic--xs')}</span>${oddBtn({id: 'boost-' + b.id, val: b.para, desc: b.sel.join(' + '), mk: t('sp.boost.mk'), ev: m.id + '-' + b.id, row: true, lab: t('sp.boost.lab')})}</div>
        <button class="lnk sp-td-ver" data-go="turbinadas">${t('sp.td.ver')}${ic('seta-d')}</button></div>
    </section>`;
  }
  function paintList(root = document) {
    const box = $('#spList', root); if (box) { box.innerHTML = listHTML(); afterPaint(box); }
  }
  function afterPaint(root) {
    $$('.sp-tr[data-mid]', root).forEach(r => $$('.odd', r).forEach(b => b.setAttribute('aria-describedby', 'spm-' + r.dataset.mid)));
    paintChg(root); paintOdds(root); initRails(root);
  }
  function paintChg(root = document) {
    $$('[data-odd]', root).forEach(b => {
      const id = b.dataset.odd; if (X.ov[id] == null) return;
      const v = X.ov[id]; b.dataset.val = v; const bb = b.querySelector('b'); if (bb) bb.textContent = fmtOdd(v);
      if (X.chg[id]) b.dataset.chg = X.chg[id]; else delete b.dataset.chg;
      /* rótulo do core termina em "<momio> 1.72"; aceita o termo antigo enquanto o core é traduzido */
      const al = b.getAttribute('aria-label') || ''; b.setAttribute('aria-label', al.replace(/(cotação|momio) [^,]+(, (subiu|caiu|subió|bajó))?$/i, `${t('sp.odd.lab')} ${fmtOdd(v)}${X.chg[id] ? ', ' + t(X.chg[id] === 'up' ? 'sp.odd.sube' : 'sp.odd.baja') : ''}`));
    });
  }

  /* ---------- Cupom ---------- */
  const cur = s => X.ov[s.id] ?? s.val;
  const totOf = useCur => r2(S.slip.reduce((a, s) => a * (useCur ? cur(s) : s.val), 1));
  const changed = () => S.slip.filter(s => cur(s) !== s.val);
  function slipItem(s) {
    const m = matchOf(s.ev); const c = cur(s); const ch = c !== s.val;
    return `<li class="sp-si${ch ? ' is-chg' : ''}">
      <div class="sp-si-tx">${m ? `<small class="sp-si-m">${m.live ? `<span class="sp-si-lv">${eq()}<span class="sr">${t('sp.live')}: </span></span>` : ''}${esc(vs(m))}</small>` : ''}<b>${esc(s.desc)}</b><small>${esc(s.mk)}</small></div>
      <div class="sp-si-o">${ch ? `<s class="tnum"><span class="sr">${esc(t('sp.slip.antes', {v: ''}))}</span>${fmtOdd(s.val)}</s>${ic(c > s.val ? 'seta-c' : 'seta-b', 'ic--xs')}<span class="sr">${esc(t('sp.slip.agora', {v: ''}))}</span>` : ''}<b class="tnum">${fmtOdd(c)}</b></div>
      <button class="sp-si-x" data-act="spRm" data-arg="${esc(s.id)}" aria-label="${esc(t('sp.slip.rm', {d: s.desc}))}">${ic('fechar', 'ic--s')}</button></li>`;
  }
  function emptyHTML() {
    const onSport = SCREENS[S.cur]?.spSlip;
    return `<div class="sp-se"><div class="sp-se-art" aria-hidden="true"><span class="odd"><small>1</small><b>1.72</b></span><span class="odd is-on"><small>X</small><b>3.60</b></span><span class="odd"><small>2</small><b>5.10</b></span></div>
      <p>${t('sp.slip.vazio')}</p>${onSport ? '' : btn(t('sp.slip.ver'), {kind: 'sec', size: 's', go: 'esportes', iconR: 'seta-d'})}</div>`;
  }
  function okHTML() {
    const b = X.done;
    return `<div class="sp-ok">
      <div class="sp-ok-art">${img('s/estadio2', {alt: '', sizes: '340px'})}</div>
      <div class="sp-ok-hd">${ic('check-c')}<h3 class="sp-ok-t" tabindex="-1">${t('sp.ok.t')}</h3></div>
      <p class="sp-ok-say">${t('sp.ok.say')}</p>
      <div class="sp-ok-b">${btn(t('sp.ok.ver'), {kind: 'mag', full: true, go: 'apostas', iconR: 'seta-d'})}${btn(t('sp.ok.nova'), {kind: 'ghost', full: true, act: 'spNew'})}</div>
      <div class="sp-ok-kv">${kv(t('sp.ok.tipo'), b.n > 1 ? esc(t('sp.slip.multipla', {n: b.n})) : esc(t('sp.slip.simples')))}${kv(t('sp.ok.cot'), fmtOdd(b.cot))}${kv(t('sp.ok.valor'), mxn(b.valor))}${kv(t('sp.ok.ret'), mxn(b.ret))}${kv(t('sp.ok.saldo'), mxn(S.saldo))}${kv(t('sp.ok.cod'), esc(b.id))}</div>
    </div>`;
  }
  function chgAlert() {
    const ch = changed(); if (!ch.length) return '';
    const tot = totOf(true), tot0 = totOf(false);
    return `<div class="alert sp-chg" role="alert" tabindex="-1">${ic('alerta')}<div><b>${ch.length > 1 ? t('sp.slip.chg.t', {n: ch.length}) : t('sp.slip.chg.t1')}</b> <span>${esc(t('sp.slip.chg.s', {de: fmtOdd(tot0), para: fmtOdd(tot), rde: mxn(S.stake * tot0), rpara: mxn(S.stake * tot)}))}</span></div></div>`;
  }
  function slipBody(ctx) {
    if (X.done) return okHTML();
    if (!S.slip.length) return emptyHTML();
    const n = S.slip.length;
    return `<div class="sp-sl-top"><span class="lab mut">${n > 1 ? t('sp.slip.multipla', {n}) : t('sp.slip.simples')}</span><button class="lnk sp-sl-clr" data-act="spClear">${ic('lixo', 'ic--xs')}${t('sp.slip.limpar')}</button></div>
      ${chgAlert()}
      <ul class="sp-sl" aria-label="${t('sp.slip.sels')}">${S.slip.map(slipItem).join('')}</ul>
      ${S.slip.some(s => matchOf(s.ev)?.live) ? `<p class="sp-sl-note">${ic('aovivo', 'ic--xs')}<span>${t('sp.slip.live')}</span></p>` : ''}
      ${ctx === 's' ? oddsBar({cls: 'sp-ot--mini'}) : ''}`;
  }
  const betLabel = () => (changed().length ? t('sp.slip.aceitar', {v: mxn(S.stake)}) : t('sp.slip.bet', {v: mxn(S.stake)}));
  function semTxt() { return t('sp.slip.sem.s', {s: mxn(S.saldo), f: mxn(S.stake - S.saldo), v: mxn(S.stake)}); }
  function slipPanel(ctx) {
    if (X.done || !S.slip.length) return '';
    const tot = totOf(true); const id = 'spStake-' + ctx; const sem = S.in && S.stake > S.saldo;
    return `<div class="fld sp-stake"><div class="sp-pn-lb"><label for="${id}">${t('sp.slip.valor')}</label><span class="mut" id="${id}-h">${t('sp.slip.min')}</span></div>
        <div class="sp-pn-in"><div class="fld-box"><span class="fld-pre">$</span><input id="${id}" name="${id}" type="text" inputmode="numeric" autocomplete="off" enterkeyhint="done" data-mask="money" value="${money(S.stake)}" aria-describedby="${id}-h ${id}-e"></div>
        ${[25, 50].map(v => btn('+' + v, {kind: 'sec', act: 'spAdd', cls: 'sp-pn-q', attrs: {'data-arg': v, 'aria-label': t('sp.slip.add', {v: mxn(v)})}})).join('')}</div>
        <span class="fld-err" id="${id}-e" hidden></span></div>
      <dl class="sp-pn-sum"><div><dt>${t('sp.slip.tot')}</dt><dd class="tnum" data-sp-tot>${fmtOdd(tot)}</dd></div><div><dt>${t('sp.slip.ret')}</dt><dd class="tnum" data-sp-ret>${mxn(S.stake * tot)}</dd></div></dl>
      <div class="note note--alert sp-sem" data-sp-sem tabindex="-1"${sem ? '' : ' hidden'}>${ic('alerta')}<div><p class="sp-sem-h"><b>${t('sp.slip.sem.t')}</b><button class="lnk" data-go="deposito">${t('sp.slip.dep')}${ic('seta-d')}</button></p><span data-sp-semtx>${esc(semTxt())}</span></div></div>
      ${btn(betLabel(), {kind: 'luz', size: 'l', full: true, act: 'spBet', cls: 'sp-bet', attrs: {'data-sp-bet': ''}})}
      <p class="sp-pn-out only-out">${ic('cadeado', 'ic--xs')}<span>${t('sp.slip.out')}</span></p>
      ${age(t('sp.slip.age'))}`;
  }
  function asideHTML() {
    const n = S.slip.length;
    return `<section class="card sp-slip" aria-labelledby="spSlipT" data-sp-slip="a">
      <div class="sp-slip-hd"><h2 class="ttl" id="spSlipT">${t('sp.slip.t')}</h2><span class="sp-slip-n tnum" data-sp-n${n ? '' : ' hidden'}>${n}</span></div>
      <div class="sp-slip-bd" data-sp-body="a">${slipBody('a')}</div><div class="sp-pn" data-sp-panel="a">${slipPanel('a')}</div></section>${asideAjuda()}`;
  }
  function paintSlip() {
    const ae = document.activeElement; const wasStake = ae && ae.matches?.('.sp-stake input') ? ae.id : '';
    $$('[data-sp-body]').forEach(el => { el.innerHTML = slipBody(el.dataset.spBody); });
    $$('[data-sp-panel]').forEach(el => { el.innerHTML = slipPanel(el.dataset.spPanel); });
    $$('[data-sp-n]').forEach(el => { el.textContent = S.slip.length; el.hidden = !S.slip.length; });
    if (wasStake) { const i = document.getElementById(wasStake); if (i) { i.focus(); i.setSelectionRange(i.value.length, i.value.length); } }
    paintFab();
  }
  function updPanel() {
    const tot = totOf(true);
    $$('[data-sp-ret]').forEach(e => { e.textContent = mxn(S.stake * tot); });
    $$('[data-sp-bet] span').forEach(e => { e.textContent = betLabel(); });
    const sem = S.in && S.stake > S.saldo;
    $$('[data-sp-sem]').forEach(e => { e.hidden = !sem; const x = e.querySelector('[data-sp-semtx]'); if (x) x.textContent = semTxt(); });
  }
  function bindPanel(el) {
    if (!el || el.dataset.spBound) return; el.dataset.spBound = 1;
    el.addEventListener('input', e => {
      if (!e.target.matches('.sp-stake input')) return;
      setTimeout(() => {   /* depois da máscara do core (ouvinte no document) */
        S.stake = r2(parseMoney(e.target.value));
        $$('.sp-stake input').forEach(i => { if (i !== e.target) i.value = e.target.value; });
        if (S.stake >= 1) clearErr(e.target);
        updPanel();
      }, 0);
    });
  }
  function paintFab() {
    let f = $('#spFab');
    if (!f) { document.body.insertAdjacentHTML('beforeend', `<button class="sp-fab" id="spFab" data-act="spSlip" aria-haspopup="dialog"></button>`); f = $('#spFab'); }
    const n = S.slip.length; const tot = totOf(true);
    document.documentElement.classList.toggle('sp-has-slip', n > 0);
    if (!n) { f.dataset.n = 0; return; }
    const prev = +f.dataset.n || 0;
    f.innerHTML = `${ic('cupom')}<span class="sp-fab-n tnum">${n}</span><span class="sp-fab-t">${t('sp.fab')}</span><b class="sp-fab-o tnum">${fmtOdd(tot)}</b>`;
    f.setAttribute('aria-label', n > 1 ? t('sp.fab.aria', {n, o: fmtOdd(tot)}) : t('sp.fab.aria1', {o: fmtOdd(tot)}));
    if (prev !== n) { f.classList.remove('is-bump'); void f.offsetWidth; f.classList.add('is-bump'); }
    f.dataset.n = n;
  }
  function openSlip(o = {}) {
    const a = $('[data-sp-slip="a"]');
    if (a && innerWidth >= 1024 && SCREENS[S.cur]?.spSlip) {
      a.scrollIntoView({block: 'nearest'});
      const f = (o.focus === 'bet' && a.querySelector('[data-act=spBet]')) || a.querySelector('h2');
      if (f) { if (f.tagName === 'H2') f.setAttribute('tabindex', '-1'); f.focus({preventScroll: true}); }
      return;
    }
    sheet(`<div class="sp-slip-bd" data-sp-body="s">${slipBody('s')}</div>`, {title: t('sp.slip.t'), id: 'shSlip', cls: 'sp-sh',
      foot: `<div class="sp-pn" data-sp-panel="s">${slipPanel('s')}</div>`, focus: o.focus === 'bet' ? '[data-act=spBet]' : null, init: el => bindPanel(el)});
  }

  /* ---------- sistema: Atualizar e checagem ao confirmar ---------- */
  function applyChange(id, from, dir) {
    let to = roundOdd(from * (1 + dir * (.03 + hash(id + ':' + X.rev) * .05)));
    if (to === from) to = roundOdd(from + dir * (from < 2 ? .02 : from < 4 ? .05 : .1));
    X.ov[id] = to; X.chg[id] = to > from ? 'up' : 'down';
    const r = id.match(/^(.+)-r-(1|X|2)$/); if (r && M[r[1]]) M[r[1]].o[{1: 0, X: 1, 2: 2}[r[2]]] = to;
    const b = id.match(/^boost-(b\d+)$/); if (b) { const bo = BOOSTS.find(x => x.id === b[1]); if (bo) bo.para = to; }
    paintChg(document);
  }
  function refresh() {
    X.rev++; X.chg = {};
    const picks = []; const inSlip = new Set(S.slip.map(s => s.id));
    if (S.slip.length) { const s = S.slip[(X.rev - 1) % S.slip.length]; picks.push([s.id, cur(s), -1]); }
    const vh = innerHeight;
    const btns = $$('#main [data-odd]').filter(b => !b.disabled && b.offsetParent && !inSlip.has(b.dataset.odd));
    const inView = btns.filter(b => { const r = b.getBoundingClientRect(); return r.top > 60 && r.bottom < vh && r.left >= 0 && r.right <= innerWidth; });
    const pool = [...new Map((inView.length >= 2 ? inView : btns).map(b => [b.dataset.odd, +b.dataset.val])).entries()];
    for (let i = 0, need = S.slip.length ? 1 : 2; i < need && pool.length; i++) { const [id, v] = pool.splice((X.rev * 7 + i * 5) % pool.length, 1)[0]; picks.push([id, v, hash(id + X.rev) < .5 ? -1 : 1]); }
    picks.forEach(([id, v, d]) => applyChange(id, v, d));
    $$('[data-sp-time]').forEach(e => { e.textContent = hhmm(); });
    paintSlip();
    return picks.length;
  }

  /* ---------- registro ---------- */
  const aside = () => asideHTML();
  const asideLabel = t('sp.slip.l');

  SCREENS.esportes = {
    label: t('sp.scr.esp'), nav: 'esportes', luz: true, spSlip: true, aside, asideLabel,
    title: p => SPN[p] && SPN[p].ev ? t('sp.scr.esp') + ' · ' + SPN[p].n : t('sp.scr.esp'),
    render(p) {
      X.sport = SPN[p] && SPN[p].ev ? p : '';
      const tot = SPORTS.filter(s => s.ev).reduce((a, s) => a + s.ev, 0);
      return `<div class="sp-top"><header class="pg-head"><h1 class="pt">${t('sp.esp.t')}</h1><p class="lede">${t('sp.esp.s')}</p></header>
        ${srchHTML({kind: 'esp', id: 'spQ', label: t('sp.q.l'), ph: t('sp.q.ph')})}</div>
      <section aria-labelledby="spDestT">${stitle({id: 'spDestT', eyebrow: t('sp.dest.k'), title: t('sp.dest.t')})}<div id="spDest">${destHTML()}</div></section>
      <section class="sp-ls" aria-label="${t('sp.ls.l')}">
        ${chips([{k: 'all', n: t('sp.todos'), c: tot}, ...['fut', 'bas', 'vol', 'ten'].map(k => SPN[k]).filter(s => s && s.ev).map(s => ({k: s.k, n: s.n, ic: SP_IC[s.k], c: s.ev}))], {name: 'spSp', active: X.sport || 'all', label: t('sp.chips.l'), scroll: true})}
        <div id="spTabs">${tabsHTML()}</div>
        <div id="spTd">${turbHTML()}</div>
        ${oddsBar()}
        <div class="sp-lgs" id="spList">${listHTML()}</div>
      </section>`;
    },
    init(root) {
      bindSrch(root.querySelector('[data-sp-q]'), espResults);
      bindPanel(root.querySelector('[data-sp-slip="a"]'));
      afterPaint(root);
      if (X.pend) {
        const k = X.pend; X.pend = '';
        setTimeout(() => { const el = root.querySelector(`[data-lg="${k}"]`); if (!el) return; el.scrollIntoView({block: 'start', behavior: RM.matches ? 'auto' : 'smooth'}); el.querySelector('.sp-lg-b').focus({preventScroll: true}); }, 80);
      }
    }
  };
  ON.chip.spSp = k => {
    X.sport = k === 'all' ? '' : k;
    history.replaceState(null, '', '#esportes' + (X.sport ? ':' + X.sport : '')); S.param = X.sport;
    document.title = SCREENS.esportes.title(X.sport) + ' · Cumbia.bet';
    const r = $('#main');
    $('#spDest', r).innerHTML = destHTML(); $('#spTabs', r).innerHTML = tabsHTML(); $('#spTd', r).innerHTML = turbHTML();
    paintList(r); afterPaint($('#spDest', r)); afterPaint($('#spTd', r));
  };
  ON.tab.spTab = k => { X.tab = k; paintList(); };
  ACT.spTabSet = el => { X.tab = el.dataset.arg; const tb = $(`[data-tabs="spTab"] [data-tab="${X.tab}"]`); if (tb) { tb.click(); tb.focus(); } else paintList(); };
  ACT.spLg = el => {
    const k = el.dataset.arg; X.closed[k] = !X.closed[k]; const open = !X.closed[k];
    el.setAttribute('aria-expanded', open); el.closest('.sp-lg').classList.toggle('is-open', open); $('#spLg-' + k).hidden = !open;
  };
  ACT.spMore = el => {
    const k = el.dataset.arg; const data = MATCHES.filter(m => m.lg === k && (!X.sport || spOf(m) === X.sport)).length;
    if (data <= 3) return toast(t('sp.lg.demo', {lg: LEAGUES[k].n}), {icon: 'info', ms: 4200});
    X.more[k] = !X.more[k];
    const sec = el.closest('.sp-lg'); const ms = MATCHES.filter(m => m.lg === k && (!X.sport || spOf(m) === X.sport) && tabOk(m, X.tab));
    sec.outerHTML = leagueHTML(k, ms); const ns = $(`[data-lg="${k}"]`); afterPaint(ns); ns.querySelector('.sp-lg-more')?.focus();
  };
  ACT.spAllLg = () => toast(t('sp.lg.todos.toast'), {icon: 'info', ms: 4200});
  ACT.spGoLg = el => {
    const k = el.dataset.arg; const sp = LEAGUES[k].sp; X.sport = sp; X.tab = 'tudo'; X.closed[k] = false; X.pend = k;
    if (S.cur === 'esportes') { $('[data-sp-q="esp"] input').value = ''; history.replaceState(null, '', '#esportes:' + sp); render('esportes:' + sp); }
    else go('esportes:' + sp);
  };
  ACT.spRefresh = el => {
    if (el.getAttribute('aria-busy') === 'true') return;
    const w = el.offsetWidth; const html = el.innerHTML; el.setAttribute('aria-busy', 'true'); el.style.minWidth = w + 'px';
    el.innerHTML = `<span class="busy" aria-hidden="true"><i></i><i></i><i></i></span><span>${t('sp.ot.busy')}</span>`;
    setTimeout(() => {
      const n = refresh();
      $$('[data-act="spRefresh"][aria-busy]').forEach(b => { b.removeAttribute('aria-busy'); b.style.minWidth = ''; b.innerHTML = html; });
      toast(n === 1 ? t('sp.ot.ok1', {h: hhmm()}) : t('sp.ot.ok', {h: hhmm(), n}), {icon: 'relogio'});
    }, 650);
  };

  SCREENS.evento = {
    label: t('sp.scr.ev'), nav: 'esportes', luz: true, spSlip: true, aside, asideLabel,
    title: p => M[p] ? vs(M[p]) : t('sp.scr.ev'),
    render(p) {
      const m = M[p];
      if (!m) return `${crumb([{n: t('sp.ev.esportes'), go: 'esportes'}])}<h1 class="sr">${t('sp.ev.vazio.t')}</h1>${empty({who: 'maestro', title: t('sp.ev.vazio.t'), text: t('sp.ev.vazio.s'), action: btn(t('sp.ev.vazio.b'), {kind: 'mag', go: 'esportes'})})}`;
      const lg = lgOf(m); const sp = SPN[lg.sp]; const T = markets(m);
      const k = T.some(x => x.k === X.mt[m.id]) ? X.mt[m.id] : 'pop';
      const w = whenOf(m); const lp = m.live ? liveParts(m) : null;
      const team = (c) => `<div class="sp-sb-tm">${crest(c, {cls: 'sp-sb-cr'})}<b>${esc(teamName(c))}</b></div>`;
      const mid = m.live ? `<div class="sp-sb-sc tnum"><span>${m.live.s[0]}</span><i>:</i><span>${m.live.s[1]}</span></div>`
        : `<div class="sp-sb-sc sp-sb-sc--t"><span class="tnum">${esc(w.h)}</span><small>${esc(w.d)}</small></div>`;
      const sum = m.live ? `${teamName(m.h)} ${m.live.s[0]}, ${teamName(m.a)} ${m.live.s[1]}. ${m.live.m}.` : `${vs(m)}. ${t('sp.ev.ini', {d: /^(Hoy|Mañana)$/.test(w.d) ? w.d.toLowerCase() : 'el ' + w.d.toLowerCase(), h: w.h})}.`;
      return `${crumb([{n: t('sp.ev.esportes'), go: 'esportes'}, {n: sp.n, go: 'esportes:' + sp.k}, {n: lg.n, act: 'spGoLg', arg: m.lg}])}
      <section class="sp-sb${m.live ? ' is-live' : ''}" aria-labelledby="spSbT">
        <div class="sp-sb-hd"><span class="sp-sb-lg">${ic(SP_IC[lg.sp], 'ic--xs')}${esc(lg.n)}</span>${m.live ? `<span class="tag tag--noite">${eq()}${esc(t('sp.live'))} · ${esc(m.live.m)}</span>` : `<span class="tag tag--noite">${esc(t('sp.ev.pre'))}</span>`}</div>
        <h1 class="sr" id="spSbT">${esc(vs(m))}.</h1>
        <div class="sp-sb-mt" role="group" aria-label="${esc(sum)}"><div class="sp-sb-in" aria-hidden="true">${team(m.h)}${mid}${team(m.a)}</div></div>
        <div class="sp-sb-ft">${m.live ? `<span class="sp-sb-last">${ic(SP_IC[lg.sp], 'ic--xs')}<span><span class="sr">${t('sp.ev.ult')}: </span>${esc(m.live.last)}</span></span>` : `<span class="sp-sb-last">${ic('relogio', 'ic--xs')}${esc(t('sp.ev.pre.s'))}</span>`}<span class="sp-sb-mk tnum">${t('sp.ev.mk', {n: m.mk})}</span></div>
      </section>
      <section class="sp-ev" aria-label="${t('sp.ev.mt')}">
        ${tabs(T.map(x => ({k: x.k, n: x.n, c: x.c || null})), {name: 'spMt', active: k, label: t('sp.ev.mt')})}
        ${oddsBar()}
        <div class="sp-mgs" id="spMk" data-ev="${m.id}">${groupsHTML(m, T.find(x => x.k === k))}</div>
        ${btn(t('sp.ev.todos', {n: m.mk}), {kind: 'sec', full: true, act: 'spAllMk', iconR: 'seta-d', cls: 'sp-ev-all'})}
      </section>`;
    },
    init(root) { bindPanel(root.querySelector('[data-sp-slip="a"]')); afterPaint(root); }
  };
  function groupsHTML(m, tb) {
    return tb.groups.map(g => {
      if (g.lay === 'boost') return g.boosts.length ? `<div class="sp-bgrid">${g.boosts.map(b => boostCard(b)).join('')}</div>`
        : `<div class="card sp-ev-nb"><b>${t('sp.ev.turb.t')}</b><p class="mut">${t('sp.ev.turb.s')}</p>${btn(t('sp.ev.turb.b'), {kind: 'sec', size: 's', go: 'turbinadas', iconR: 'seta-d'})}</div>`;
      if (g.lay === 'note') return `<p class="note">${ic('info')}<span>${esc(g.note)}</span></p>`;
      const key = m.id + ':' + tb.k + ':' + g.k; const open = !X.mclosed[key]; const bid = 'spMg-' + norm(key).replace(/[^a-z0-9]+/g, '-');
      const O = (o, row) => oddBtn({id: o.id, lab: o.lab ?? undefined, val: o.val, desc: o.desc, mk: o.mk, ev: m.id, row});
      let body = '';
      if (g.lay === 'n') body = `<div class="sp-og sp-og--${g.odds.length}">${g.odds.map(o => O(o)).join('')}</div>`;
      else if (g.lay === 'grid') body = `<div class="sp-og sp-og--grid" style="--c:${g.cols || 3}">${g.odds.map(o => O(o, true)).join('')}</div>`;
      else body = `<div class="sp-rws${g.nol ? ' sp-rws--nol' : ''}${g.rows[0].odds.length === 1 ? ' sp-rws--1' : ''}" style="--c:${g.rows[0].odds.length}">${g.head ? `<div class="sp-rw sp-rw--h" aria-hidden="true">${g.nol ? '' : '<span></span>'}${g.head.map(h => `<span>${esc(h)}</span>`).join('')}</div>` : ''}${g.rows.map(r => `<div class="sp-rw">${g.nol ? '' : `<span class="sp-rw-l"><b>${esc(r.l)}</b>${r.sub ? `<small>${esc(r.sub)}</small>` : ''}</span>`}${r.odds.map(o => O(o)).join('')}</div>`).join('')}</div>`;
      return `<section class="sp-mg${open ? ' is-open' : ''}" aria-labelledby="${bid}-b"><h3 class="sp-mg-h"><button class="sp-mg-b" id="${bid}-b" aria-expanded="${open}" aria-controls="${bid}" data-act="spMg" data-arg="${esc(key)}"><span>${esc(g.n)}</span>${ic('seta-b', 'sp-chev')}</button></h3>
        <div class="sp-mg-bd" id="${bid}"${open ? '' : ' hidden'}>${g.pre ? `<p class="sp-mg-pre">${esc(g.pre)}</p>` : ''}${body}</div></section>`;
    }).join('');
  }
  ON.tab.spMt = k => {
    const box = $('#spMk'); if (!box) return; const m = M[box.dataset.ev]; X.mt[m.id] = k;
    const tb = markets(m).find(x => x.k === k); box.innerHTML = groupsHTML(m, tb); afterPaint(box);
  };
  ACT.spMg = el => {
    const key = el.dataset.arg; X.mclosed[key] = !X.mclosed[key]; const open = !X.mclosed[key];
    el.setAttribute('aria-expanded', open); el.closest('.sp-mg').classList.toggle('is-open', open); document.getElementById(el.getAttribute('aria-controls')).hidden = !open;
  };
  ACT.spAllMk = () => toast(t('sp.ev.todos.toast'), {icon: 'info', ms: 4200});

  /* Apostas aumentadas */
  function tbList() {
    let bs = BOOSTS.filter(b => (X.tb.lg === 'todos' || M[b.ev].lg === X.tb.lg) && (!X.tb.team || M[b.ev].h === X.tb.team || M[b.ev].a === X.tb.team));
    bs = bs.slice().sort((a, b) => X.tb.ord === 'aum' ? (pct(b.de, b.para) - pct(a.de, a.para)) || (startKey(M[a.ev]) - startKey(M[b.ev])) : (startKey(M[a.ev]) - startKey(M[b.ev])) || (pct(b.de, b.para) - pct(a.de, a.para)));
    return bs;
  }
  function tbGrid() {
    const bs = tbList(); const n = bs.length;
    const head = `<div class="sp-tbr-h"><p class="sp-tbr-n tnum" role="status">${n === 1 ? t('sp.tb.res1') : t('sp.tb.res', {n})}</p>${X.tb.team ? `<button class="chip is-on sp-tbr-x" data-act="spTeamClr" aria-label="${esc(t('sp.tb.limpar'))}">${esc(t('sp.tb.time', {t: teamName(X.tb.team)}))}${ic('fechar', 'ic--xs')}</button>` : ''}</div>`;
    if (!n) return head + empty({who: 'buey', title: t('sp.tb.vazio.t'), text: t('sp.tb.vazio.s'), action: btn(t('sp.tb.vazio.b'), {kind: 'sec', act: 'spTbReset'})});
    return head + `<div class="sp-bgrid">${bs.map(b => boostCard(b)).join('')}</div>`;
  }
  function tbResults(q) {
    const n = norm(q); const cnt = {};
    BOOSTS.forEach(b => [M[b.ev].h, M[b.ev].a].forEach(c => { cnt[c] = (cnt[c] || 0) + 1; }));
    const ts = Object.keys(cnt).filter(c => norm(teamName(c)).includes(n) || norm(c) === n).slice(0, 8);
    if (!ts.length) return {n: 0, html: `<div class="sp-dd-no"><b>${esc(t('sp.tb.q.nada', {q}))}</b><span>${t('sp.tb.q.nada.s')}</span></div>`};
    return {n: ts.length, html: ts.map(c => `<button class="sp-dd-o" role="option" tabindex="-1" data-act="spTeam" data-arg="${c}">${crest(c)}<span class="sp-dd-tx"><b>${esc(teamName(c))}</b><small>${cnt[c] === 1 ? t('sp.tb.q.of1') : t('sp.tb.q.of', {n: cnt[c]})}</small></span></button>`).join('')};
  }
  function paintTb() { const g = $('#spTbGrid'); if (g) { g.innerHTML = tbGrid(); afterPaint(g); } }
  SCREENS.turbinadas = {
    label: t('sp.scr.tb'), nav: 'esportes', luz: true, spSlip: true, aside, asideLabel,
    render() {
      const lgs = {}; BOOSTS.forEach(b => { const k = M[b.ev].lg; lgs[k] = (lgs[k] || 0) + 1; });
      const max = Math.max(...BOOSTS.map(b => pct(b.de, b.para)));
      return `${crumb([{n: t('sp.ev.esportes'), go: 'esportes'}, {n: t('sp.tb.crumb'), cur: 1}])}
      <section class="sp-th" aria-labelledby="spThT">
        <div class="sp-th-tx"><span class="lab sp-th-k">${ic('raio', 'ic--xs')}${t('sp.tb.k')}</span>
          <h1 class="pt sp-th-t" id="spThT">${t('sp.tb.t')}</h1><p class="sp-th-s">${t('sp.tb.s')}</p>
          <div class="sp-th-n"><b class="tnum">${BOOSTS.length}</b><span>${t('sp.tb.n')}<br>${t('sp.tb.ate', {p: max})}</span></div>
          <small class="sp-th-age">${t('sp.tb.age')}</small></div>
        <div class="sp-th-art" aria-hidden="true">${img('c/buey-s', {alt: ''})}</div>
      </section>
      <section class="sp-tbf" aria-label="${t('sp.tb.lg.l')}">
        ${srchHTML({kind: 'tb', id: 'spTq', label: t('sp.tb.q.l'), ph: t('sp.tb.q.ph'), value: X.tb.team ? teamName(X.tb.team) : ''})}
        ${chips([{k: 'todos', n: t('sp.todos'), c: BOOSTS.length}, ...Object.keys(LEAGUES).filter(k => lgs[k]).map(k => ({k, n: LEAGUES[k].n, c: lgs[k]}))], {name: 'spTl', active: X.tb.lg, label: t('sp.tb.lg.l'), scroll: true})}
        <div class="sp-tbf-o"><span class="lab mut" id="spOrdL">${t('sp.tb.ord.l')}</span>${seg([{k: 'cedo', n: t('sp.tb.ord.cedo'), ic: 'relogio'}, {k: 'aum', n: t('sp.tb.ord.aum'), ic: 'raio'}], {name: 'spOrd', active: X.tb.ord, label: t('sp.tb.ord.l')})}</div>
      </section>
      ${oddsBar()}
      <section class="sp-tbr" aria-label="${esc(t('sp.tb.t'))}" id="spTbGrid">${tbGrid()}</section>`;
    },
    init(root) { bindSrch(root.querySelector('[data-sp-q]'), tbResults); bindPanel(root.querySelector('[data-sp-slip="a"]')); afterPaint(root); }
  };
  ON.chip.spTl = k => { X.tb.lg = k; paintTb(); };
  ON.chip.spOrd = k => { X.tb.ord = k; paintTb(); };
  ACT.spTeam = el => { X.tb.team = el.dataset.arg; const i = $('#spTq'); if (i) i.value = teamName(X.tb.team); paintTb(); };
  ACT.spTeamClr = () => { X.tb.team = ''; const i = $('#spTq'); if (i) { i.value = ''; i.focus(); } paintTb(); };
  ACT.spTbReset = () => {
    X.tb.team = ''; X.tb.lg = 'todos'; const i = $('#spTq'); if (i) i.value = '';
    $$('[data-chips="spTl"] [data-chip]').forEach(b => { const on = b.dataset.chip === 'todos'; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); });
    paintTb();
  };

  /* Cupom: ações */
  ACT.spSlip = () => openSlip();
  ACT.spRm = el => {
    const i = S.slip.findIndex(s => s.id === el.dataset.arg); if (i < 0) return;
    const box = el.closest('[data-sp-body]'); const ctx = box?.dataset.spBody;
    const [s] = S.slip.splice(i, 1); paintOdds(); bus.emit('slip', S.slip);
    toast(t('sp.slip.rm.ok', {d: s.desc}), {icon: 'lixo'});
    const nb = ctx && $(`[data-sp-body="${ctx}"]`); const xs = nb ? $$('[data-act=spRm]', nb) : [];
    const f = xs[Math.min(i, xs.length - 1)] || nb?.closest('.sp-slip, .sh')?.querySelector('h2'); if (f) { if (f.tagName === 'H2') f.setAttribute('tabindex', '-1'); f.focus({preventScroll: true}); }
  };
  ACT.spClear = el => {
    const sh = el.closest('.sh'); S.slip.splice(0); paintOdds(); bus.emit('slip', S.slip); toast(t('sp.slip.limpo'), {icon: 'lixo'});
    (sh || $('[data-sp-slip="a"]'))?.querySelector('h2')?.focus({preventScroll: true});
  };
  ACT.spAdd = el => {
    const inp = el.closest('[data-sp-panel]')?.querySelector('.sp-stake input');
    S.stake = r2((inp ? parseMoney(inp.value) : S.stake) + +el.dataset.arg);
    $$('.sp-stake input').forEach(i => { i.value = money(S.stake); clearErr(i); });
    updPanel();
  };
  ACT.spNew = el => { X.done = null; paintSlip(); if (el.closest('.sh')) closeSheet(); else $('[data-sp-slip="a"] h2')?.focus({preventScroll: true}); };
  ACT.spBet = el => {
    if (X.busy || !S.slip.length) return;
    const box = el.closest('[data-sp-panel]'); const inp = box?.querySelector('.sp-stake input');
    if (inp) S.stake = r2(parseMoney(inp.value));
    if (!(S.stake >= 1)) { if (inp) { setErr(inp, t('sp.slip.min.err')); inp.focus(); } return; }
    if (!S.in) {
      const n = S.slip.length;
      /* depois de entrar: reabre o cupom e espera a confirmação (o painel de login fecha antes) */
      return AUTH.require(n > 1 ? t('sp.slip.motivo', {n}) : t('sp.slip.motivo1'), () => setTimeout(() => { paintSlip(); openSlip({focus: 'bet'}); }, 320));
    }
    if (S.stake > S.saldo) { updPanel(); const s = box?.querySelector('[data-sp-sem]'); if (s) { s.hidden = false; s.setAttribute('role', 'alert'); s.focus(); } return; }
    const ch = changed();
    if (!ch.length) {
      /* checagem do sistema ao confirmar: cotação ao vivo pode ter mudado (uma vez por seleção) */
      const lv = S.slip.find(s => matchOf(s.ev)?.live && !X.liveChk.has(s.id));
      if (lv) { X.liveChk.add(lv.id); X.chg = {}; applyChange(lv.id, cur(lv), -1); paintSlip(); const a = $(`[data-sp-body="${box?.dataset.spPanel}"] .sp-chg`); if (a) a.focus(); return; }
    }
    S.slip.forEach(s => { s.val = cur(s); });     /* aceitou as cotações atuais */
    X.busy = true; el.setAttribute('aria-busy', 'true'); el.style.minWidth = el.offsetWidth + 'px';
    el.innerHTML = `<span class="busy" aria-hidden="true"><i></i><i></i><i></i></span><span>${t('sp.slip.busy')}</span>`;
    setTimeout(() => place(box?.dataset.spPanel), 750);
  };
  function place(ctx) {
    const tot = totOf(true); const stake = S.stake; const n = S.slip.length; const now = new Date();
    const p2 = x => String(x).padStart(2, '0');
    const em = `${p2(now.getDate())}/${p2(now.getMonth() + 1)}/${now.getFullYear()} ${p2(now.getHours())}:${p2(now.getMinutes())}`;
    const id = 'AP-' + String(Math.floor(hash(S.slip.map(s => s.id).join('|') + stake + now.getTime()) * 9e5) + 1e5);
    const bet = {id, em, tipo: n > 1 ? 'multipla' : 'simples', n, cot: tot, valor: stake, ret: r2(stake * tot), status: 'aberta',
      sels: S.slip.map(s => { const m = matchOf(s.ev); return {id: s.id, ev: m ? m.id : s.ev, jogo: m ? vs(m) : '', lg: m ? lgOf(m).n : '', sp: m ? spOf(m) : '', desc: s.desc, mk: s.mk, val: s.val, live: !!(m && m.live), quando: m ? whenTxt(m) : ''}; })};
    (S.bets ||= []).unshift(bet);
    if (typeof TX !== 'undefined' && Array.isArray(TX)) TX.unshift({id: 'tx-' + id, tp: 'apo', d: em, met: n > 1 ? t('sp.tx.multi', {n}) : (bet.sels[0].jogo || bet.sels[0].desc), v: -stake, st: t('sp.tx.st'), ses: t('sp.tx.ses')});
    S.saldo = r2(S.saldo - stake); bus.emit('balance');
    S.slip.splice(0); X.done = bet; X.doneScr = S.cur; X.busy = false;
    paintOdds(); bus.emit('slip', S.slip); bus.emit('bets', bet);
    const t0 = $(`[data-sp-body="${ctx}"] .sp-ok-t`) || $('.sp-ok-t'); if (t0) t0.focus({preventScroll: false});
  }

  /* barramento */
  bus.on('slip', () => { if (S.slip.length) X.done = null; paintSlip(); });
  bus.on('session', () => paintSlip());
  bus.on('balance', () => { if (S.slip.length) updPanel(); });
  bus.on('screen', ({k, sc}) => {
    document.documentElement.classList.toggle('sp-aside-slip', !!sc.spSlip);
    if (X.done && k !== X.doneScr) { X.done = null; paintSlip(); }
    paintChg($('#main')); paintFab();
  });

  /* gatilho de demonstração (documentado em notes/sp.md): SP.demoMuda() faz o sistema mudar 1 cotação do cupom */
  return {openSlip, refresh, demoMuda: () => { X.chg = {}; const s = S.slip[0]; if (s) { applyChange(s.id, cur(s), -1); paintSlip(); } }, markets, totalCol, state: X};
})();
