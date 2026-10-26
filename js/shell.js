/* shell.js · casca: topo, menu lateral, menu inferior, flutuantes, rodapé, menu da conta, suporte, documentos e preferências. */
TXT.c = {
  'saldo': 'Saldo', 'saldo.oculto': '$••••', 'saldo.mostrar': 'Mostrar saldo', 'saldo.ocultar': 'Ocultar saldo',
  'depositar': 'Depositar', 'vip': 'Programa VIP', 'entrar': 'Entrar', 'criar': 'Regístrate',
  'nav.inicio': 'Inicio', 'nav.esportes': 'Deportes', 'nav.cassino': 'Casino', 'nav.menu': 'Menú', 'nav.conta': 'Tu cuenta',
  'nav.apostas': 'Mis apuestas', 'nav.bonus': 'Mis bonos', 'nav.vip': 'Programa VIP', 'nav.missoes': 'Misiones',
  'sup': 'Soporte', 'sup.t': 'Aquí estamos.', 'sup.s': 'Atención 24 horas, en español.',
  'sup.chat': 'Chat en vivo', 'sup.chat.s': 'Habla con una persona de nuestro equipo.', 'sup.ajuda': 'Centro de ayuda', 'sup.ajuda.s': 'Respuestas sobre depósitos, retiros, bonos y tu cuenta.',
  'sup.mail': 'Correo', 'sup.mail.s': 'soporte@cumbia.bet [por confirmar]',
  'foot.cta.t': 'Depósitos sin complicaciones.', 'foot.cta.s': 'SPEI, tarjeta u OXXO, siempre a tu nombre. Pon tu límite y baila a tu ritmo.',
  'foot.cta.b': 'Depositar', 'foot.cta.b2': 'Ver eventos',
  'foot.pix': 'SPEI y OXXO', 'foot.idioma': 'Español (México)', 'foot.tema': 'Tema oscuro',
  'foot.rg': 'Solo mayores de 18 años. Juega con responsabilidad. Apostar no es invertir: juega solo lo que puedes perder y por diversión. Las apuestas pueden causar adicción. ¿Necesitas ayuda? Línea de la Vida: 800 911 2000, gratis y 24 horas [por confirmar].',
  'foot.op': 'Cumbia.bet es operada por [razón social por confirmar], con permiso SEGOB n.º [por confirmar], conforme a la Ley Federal de Juegos y Sorteos. Dominio oficial: cumbia.bet [dominio por confirmar].',
  'foot.copy': '© 2026 Cumbia.bet · Que suene la suerte.',
  'menu.t.out': 'Tu noche empieza aquí.', 'menu.s.out': 'Entra para ver tu saldo, tus apuestas y tus bonos.',
  'menu.perfil': 'Mi perfil', 'menu.apostas': 'Mis apuestas', 'menu.bonus': 'Mis bonos', 'menu.indique': 'Invita amigos',
  'menu.vip': 'Programa VIP', 'menu.missoes': 'Misiones', 'menu.carteira': 'Billetera', 'menu.limites': 'Límites y juego responsable',
  'menu.seguranca': 'Seguridad de la cuenta', 'menu.ajuda': 'Centro de ayuda', 'menu.sup': 'Hablar con soporte', 'menu.sair': 'Salir de la cuenta',
  'menu.sacar': 'Retirar', 'menu.sair.ok': 'Saliste. La pista sigue abierta para cuando vuelvas.',
  'doc.t': 'Documento', 'doc.s': 'Versión de demostración. El texto oficial lo publicará el operador [por confirmar].',
  'idioma.t': 'Idioma', 'tema.t': 'Tema', 'pref.aviso': 'Por ahora, solo español de México y tema oscuro.'
};

function header() {
  return `<header class="c-hdr"><div class="c-hdr-in">
    <a class="c-logo" href="#inicio" data-go="inicio" aria-label="Cumbia.bet, ir al Inicio">${logo()}</a>
    <div class="c-wallet only-in">
      <button class="c-saldo" data-act="saldo" aria-live="polite" aria-label="${t('c.saldo.ocultar')}"><small>${t('c.saldo')}</small><b class="tnum" id="saldoTop">${mxn(S.saldo)}</b></button>
      <button class="c-dep c-dep--d" data-go="deposito" aria-label="${t('c.depositar')}">${ic('depositar', 'ic--s')}<span>${t('c.depositar')}</span></button>
    </div>
    <button class="c-vip only-in" data-go="vip" aria-label="${t('c.vip')}, nivel ${ME.nivel}">${ic('vip')}<i>${ME.nivelN}</i></button>
    <div class="c-guest only-out">${btn(t('c.entrar'), {kind: 'sec', size: 's', act: 'login'})}${btn(t('c.criar'), {kind: 'luz', size: 's', act: 'signup', cls: 'c-criar'})}</div>
  </div></header>`;
}
function sidebar() {
  const L = (k, icn, go, cls, extra = '') => `<button class="c-sl ${cls || ''}" data-nav="${k}" ${go ? `data-go="${go}"` : 'data-act="menu"'} ${extra}>${ic(icn)}<span>${t('c.nav.' + k)}</span></button>`;
  return `<aside class="c-side" aria-label="Menú principal"><nav>
    ${L('inicio', 'inicio', 'inicio', 'c-ini')}${L('menu', 'menu', '', 'c-acc', 'aria-haspopup="dialog"')}${L('esportes', 'esportes', 'esportes', 'c-esp')}${L('cassino', 'cassino', 'slots', 'c-cas')}
  </nav><div class="only-in" style="display:flex;flex-direction:column;gap:4px">
    <span class="c-sg lab">${t('c.nav.conta')}</span>
    ${L('apostas', 'cupom', 'apostas')}${L('bonus', 'bono', 'bonus')}${L('vip', 'vip', 'vip')}${L('missoes', 'missoes', 'missoes')}
  </div></aside>`;
}
function bottomNav() {
  const I = (k, icn, go) => `<button class="c-ni" data-nav="${k}" ${go ? `data-go="${go}"` : 'data-act="menu"'}>${ic(icn)}<span>${t('c.nav.' + k)}</span></button>`;
  return `<nav class="c-nav" aria-label="Menú principal">
    ${I('inicio', 'inicio', 'inicio')}${I('esportes', 'esportes', 'esportes')}
    <button class="c-ni c-ni--mid only-in" data-go="deposito"><span class="c-mid">${ic('depositar', 'ic--l')}</span><span>${t('c.depositar')}</span></button>
    <button class="c-ni c-ni--mid only-out" data-act="login"><span class="c-mid">${ic('perfil', 'ic--l')}</span><span>${t('c.entrar')}</span></button>
    ${I('cassino', 'cassino', 'slots')}${I('menu', 'menu', '')}
  </nav>`;
}
function floats() {
  return `<button class="c-fab" data-go="deposito" aria-label="${t('c.depositar')}">${ic('depositar')}<span aria-hidden="true">${t('c.depositar')}</span></button>
  <button class="c-sup" data-act="suporte" aria-label="${t('c.sup')}, en línea ahora">${ic('suporte')}<i aria-hidden="true"></i></button>`;
}
function footer(sc) {
  const groups = Object.values(LEGAL).map(g => `<div><h3 class="lab">${esc(g.n)}</h3>${g.docs.map(([k, n]) => `<button data-act="doc" data-arg="${k}">${esc(n)}</button>`).join('')}</div>`).join('');
  return `<footer class="c-foot" aria-label="Pie de página">
    <section class="c-cta" aria-labelledby="ftCta">
      <span class="trama trama--M" aria-hidden="true"></span>
      <div class="c-cta-tx"><h2 class="d3" id="ftCta">${t('c.foot.cta.t')}</h2><p>${t('c.foot.cta.s')}</p>
        <div class="c-cta-b">${btn(t('c.foot.cta.b'), {kind: 'mag', go: 'deposito', icon: 'depositar', auth: 'Entra para depositar.'})}${btn(t('c.foot.cta.b2'), {kind: 'sec', go: 'esportes'})}</div></div>
      <div class="c-cta-art">${pedestal('raton', {h: 170, tone: 'mag'})}</div>
    </section>
    <div class="c-fl">
      <span class="c-logo-f">${logo()}</span>
      <div class="c-prefs">${btn(t('c.foot.pix'), {kind: 'ghost', size: 's', icon: 'banco', go: 'deposito', auth: 'Entra para depositar.'})}${btn(t('c.foot.idioma'), {kind: 'ghost', size: 's', icon: 'globo', act: 'prefs', attrs: {'data-arg': 'idioma'}})}${btn(t('c.foot.tema'), {kind: 'ghost', size: 's', icon: 'lua', act: 'prefs', attrs: {'data-arg': 'tema'}})}</div>
      <nav class="c-legal" aria-label="Documentos legales">${groups}</nav>
      <div class="c-rg">${age('')}<p><b>${t('c.foot.rg')}</b><br>${t('c.foot.op')}</p></div>
      <p class="c-copy">${t('c.foot.copy')}</p>
    </div>
  </footer>`;
}
function paintChrome() {
  const b = $('#saldoTop'); if (b) b.textContent = S.hideSaldo ? t('c.saldo.oculto') : mxn(S.saldo);
  const sb = $('.c-saldo'); if (sb) sb.setAttribute('aria-label', S.hideSaldo ? t('c.saldo.mostrar') : t('c.saldo.ocultar'));
}
function setNav(k) {
  $$('[data-nav]').forEach(n => { const on = n.dataset.nav === k; n.classList.toggle('is-on', on); if (on) n.setAttribute('aria-current', 'page'); else n.removeAttribute('aria-current'); });
}
bus.on('screen', ({sc}) => setNav(sc.nav || ''));
bus.on('balance', paintChrome);
bus.on('session', () => { paintChrome(); if (!S.in && S.cur && SCREENS[S.cur]?.auth) go('inicio'); });

ACT.skip = () => { const h = $('#main h1'); if (h) h.focus(); };
ACT.saldo = () => { S.hideSaldo = !S.hideSaldo; paintChrome(); };
ACT.login = () => AUTH.open ? AUTH.open('login') : AUTH.require('', () => {});
ACT.signup = () => AUTH.open ? AUTH.open('cadastro1') : AUTH.require('', () => {});
ACT.menu = () => {
  const L = (icn, k, go, o = {}) => li({icon: icn, title: t('c.menu.' + k), go, sub: o.sub, right: o.right});
  const body = S.in ? `
    <div class="c-me">${ficha(ME.nivelN, {tone: 'noite', size: 52, label: 'Nivel ' + ME.nivel})}<div><b>${esc(ME.nome)}</b><small class="mut tnum">ID ${ME.id} · Nivel ${ME.nivel}</small></div></div>
    <div class="c-me-bal card"><div><small class="lab mut">${t('c.saldo')}</small><b class="tnum">${mxn(S.saldo)}</b></div><div class="c-me-b">${btn(t('c.depositar'), {kind: 'mag', size: 's', go: 'deposito'})}${btn(t('c.menu.sacar'), {kind: 'sec', size: 's', go: 'saque'})}</div></div>
    <div>${L('perfil', 'perfil', 'perfil')}${L('cupom', 'apostas', 'apostas')}${L('bono', 'bonus', 'bonus')}${L('indique', 'indique', 'indique')}${L('vip', 'vip', 'vip', {right: ME.nivel})}${L('missoes', 'missoes', 'missoes')}${L('carteira', 'carteira', 'transacoes')}${L('limite', 'limites', 'limites')}${L('escudo', 'seguranca', 'seguranca')}${L('ajuda', 'ajuda', 'ajuda')}</div>
    ${btn(t('c.menu.sair'), {kind: 'ghost', icon: 'sair', act: 'logout', full: true})}
    ${age('Juega con responsabilidad.')}`
    : `<div class="c-me-out">${pedestal('maestro', {h: 170})}<div><h3 class="d3">${t('c.menu.t.out')}</h3><p class="mut">${t('c.menu.s.out')}</p></div></div>
    <div class="c-me-b2">${btn(t('c.criar'), {kind: 'luz', act: 'signup', full: true, size: 'l'})}${btn(t('c.entrar'), {kind: 'sec', act: 'login', full: true, size: 'l'})}</div>
    <div>${li({icon: 'ajuda', title: t('c.menu.ajuda'), go: 'ajuda'})}${li({icon: 'suporte', title: t('c.menu.sup'), act: 'suporte'})}</div>
    ${age('Solo mayores de 18 años. Juega con responsabilidad.')}`;
  sheet(body, {title: S.in ? 'Tu cuenta.' : t('c.nav.menu'), id: 'shMenu', cls: 'c-menu'});
  setNav('menu');
};
ACT.logout = () => { closeSheet(); setSession(false); toast(t('c.menu.sair.ok'), {icon: 'sair'}); render(); };
ACT.suporte = () => sheet(`<p class="mut">${t('c.sup.s')}</p><div>
  ${li({icon: 'chat', title: t('c.sup.chat'), sub: t('c.sup.chat.s'), act: 'chat'})}
  ${li({icon: 'ajuda', title: t('c.sup.ajuda'), sub: t('c.sup.ajuda.s'), go: 'ajuda'})}
  ${li({icon: 'email', title: t('c.sup.mail'), sub: t('c.sup.mail.s'), attrs: {'data-copy': 'soporte@cumbia.bet', 'data-ok': 'Correo de soporte copiado.'}, right: ic('copiar', 'ic--s')})}
</div>`, {title: t('c.sup.t'), id: 'shSup'});
ACT.chat = () => { closeSheet(true); go('ajuda:chat'); };
ACT.doc = el => {
  const k = el.dataset.arg; const n = Object.values(LEGAL).flatMap(g => g.docs).find(d => d[0] === k)?.[1] || t('c.doc.t');
  sheet(`<p class="note">${ic('info')}<span>${t('c.doc.s')}</span></p>
    <div class="c-doc"><h3 class="ttl">1. Quiénes somos</h3><p class="mut">Cumbia.bet es una casa de apuestas a momio fijo que opera en México con permiso SEGOB n.º [por confirmar], conforme a la Ley Federal de Juegos y Sorteos. Solo los mayores de 18 años pueden abrir una cuenta, y la cuenta queda a nombre y con la CURP de quien juega.</p>
    <h3 class="ttl">2. Dinero a tu nombre</h3><p class="mut">Depósitos y retiros solo desde y hacia cuentas CLABE y tarjetas a tu nombre. No aceptamos dinero de terceros.</p>
    <h3 class="ttl">3. Tus límites</h3><p class="mut">Puedes poner límites de depósito, pérdida y tiempo, pedir una pausa o la autoexclusión cuando quieras, en Límites y juego responsable.</p></div>`,
    {title: n + '.', id: 'shDoc', foot: btn('Descargar PDF', {kind: 'sec', icon: 'download', full: true, attrs: {'data-toast': 'El PDF oficial estará disponible cuando el operador publique el texto final.'}})});
};
ACT.prefs = el => {
  const k = el.dataset.arg;
  const opts = k === 'idioma' ? [['es', 'Español (México)'], ['en', 'English']] : [['esc', 'Oscuro'], ['cla', 'Claro']];
  sheet(`<div role="radiogroup" aria-label="${k === 'idioma' ? t('c.idioma.t') : t('c.tema.t')}">${opts.map((o, i) => li({title: o[1], act: 'pref', arg: o[0], right: i === 0 ? tag('info', 'Actual') : '', chev: false, attrs: {role: 'radio', 'aria-checked': i === 0}})).join('')}</div><p class="note">${ic('info')}<span>${t('c.pref.aviso')}</span></p>`,
    {title: (k === 'idioma' ? t('c.idioma.t') : t('c.tema.t')) + '.', id: 'shPref'});
};
ACT.pref = el => { if (el.dataset.arg === 'es' || el.dataset.arg === 'esc') return closeSheet(); toast(t('c.pref.aviso'), {icon: 'info'}); };

function mountShell() {
  document.body.insertAdjacentHTML('afterbegin', `<button class="skip" data-act="skip">Saltar al contenido</button>${header()}${sidebar()}`);
  $('#main').insertAdjacentHTML('afterend', bottomNav() + floats());
  paintChrome();
}

/* ===== peças compartilhadas das telas da conta ===== */
const ACCT = [['perfil', 'Mi perfil'], ['bonus', 'Bonos'], ['apostas', 'Mis apuestas'], ['vip', 'VIP'], ['missoes', 'Misiones'], ['indique', 'Invita amigos'], ['transacoes', 'Billetera'], ['deposito', 'Depósito'], ['saque', 'Retiro'], ['limites', 'Juego responsable']];
function acctNav(active) {
  return `<nav class="c-acnav" aria-label="Secciones de tu cuenta"><div class="chips chips--scroll">${ACCT.map(([k, n]) => `<button class="chip${k === active ? ' is-on' : ''}" data-go="${k}" ${k === active ? 'aria-current="page"' : ''}>${esc(n)}</button>`).join('')}</div></nav>`;
}
/* barra do limite diário de depósito (o que foi salvo em Limites aparece aqui) */
function limBar(o = {}) {
  const L = S.lim.dep || {};
  if (!L.val) return `<div class="c-lim${o.cls ? ' ' + o.cls : ''}"><div class="c-lim-h"><b>Sin límite de depósito</b>${o.noAdj ? '' : `<button class="lnk" data-go="limites:dep">Definir${ic('seta-d')}</button>`}</div><p class="c-lim-f">Puedes poner un límite diario, semanal o mensual cuando quieras.</p></div>`;
  const livre = Math.max(0, L.val - (L.usado || 0)); const p = Math.min(100, Math.round((L.usado || 0) / L.val * 100));
  const per = {dia: 'diario', semana: 'semanal', mes: 'mensual'}[L.per] || 'diario';
  return `<div class="c-lim${o.cls ? ' ' + o.cls : ''}"><div class="c-lim-h"><b>Límite ${per} de depósito</b>${o.noAdj ? '' : `<button class="lnk" data-go="limites:dep">Ajustar${ic('seta-d')}</button>`}</div>
    <div class="c-lim-bar" role="meter" aria-valuemin="0" aria-valuemax="${L.val}" aria-valuenow="${L.usado}" aria-label="Usado ${mxn(L.usado)} de ${mxn(L.val)}"><i style="width:${p}%"></i></div>
    <div class="c-lim-f"><span>Usado <b class="tnum">${mxn(L.usado)}</b></span><span>Disponible <b class="tnum">${mxn(livre)}</b></span></div></div>`;
}
function asideCarteira() {
  return `<section class="card c-aw" aria-labelledby="awT"><h2 class="lab mut" id="awT">Tu billetera</h2><b class="c-aw-v tnum">${mxn(S.saldo)}</b>
    <div class="c-aw-b">${btn('Depositar', {kind: 'mag', size: 's', go: 'deposito', icon: 'depositar'})}${btn('Retirar', {kind: 'sec', size: 's', go: 'saque', icon: 'saque'})}</div></section>
    <section class="card">${limBar()}</section>${asideAjuda()}`;
}
function asideAjuda() {
  return `<section class="card c-ah" aria-labelledby="ahT"><h2 class="ttl" id="ahT">¿Necesitas ayuda?</h2><p class="mut">Atención 24 horas, en español.</p>
    <div class="c-ah-b">${btn('Abrir el chat', {kind: 'sec', size: 's', icon: 'chat', act: 'chat'})}${btn('Centro de ayuda', {kind: 'ghost', size: 's', go: 'ajuda'})}</div></section>`;
}
bus.on('balance', () => $$('.c-aw-v').forEach(e => e.textContent = mxn(S.saldo)));
