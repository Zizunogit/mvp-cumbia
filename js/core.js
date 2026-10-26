/* core.js · utilitários, estado, componentes, painéis, avisos, carrosséis, roteador e delegação.
   Contrato em DESIGN.md §4–§6. Módulos registram SCREENS / ACT / ON / TXT, nunca ouvintes globais próprios. */
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const NB = ' ';
/* mercado México: pesos (MXN) em es-MX → $1,234.56 · momios decimais com ponto */
const LOC = 'es-MX';
const mxn = (n, o = {}) => {
  const v = Math.abs(+n || 0).toLocaleString(LOC, {minimumFractionDigits: 2, maximumFractionDigits: 2});
  const s = (+n < 0 ? '−' : (o.sign && +n > 0 ? '+' : ''));
  return s + '$' + v;
};
const mxn0 = n => '$' + (+n || 0).toLocaleString(LOC, {maximumFractionDigits: 0});
const num = n => (+n || 0).toLocaleString(LOC);
const fmtOdd = n => n == null ? '–' : (+n).toFixed(2);
const pct = (a, b) => Math.round((b / a - 1) * 100);
const store = {
  get(k, d) { try { const v = sessionStorage.getItem('cumbia.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { sessionStorage.setItem('cumbia.' + k, JSON.stringify(v)); } catch (e) {} }
};

/* texto: dicionário único por módulo · t('home.top10.t', {n:3}) */
const TXT = {};
function t(key, vars) {
  const i = key.indexOf('.'); const mod = TXT[key.slice(0, i)] || {};
  let s = mod[key.slice(i + 1)];
  if (s == null) { console.warn('[txt] falta', key); s = key; }
  if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => vars[k] ?? m);
  return s;
}

/* estado global */
const S = {
  in: false, saldo: 983.60, bonus: 0, hideSaldo: false,
  favs: new Set(), favDemo: ['fortune-dragon', 'tigre-pista'], slip: [], stake: 25,
  lim: {dep: {per: 'dia', val: 500, usado: 200}},
  cur: null, param: null
};
const bus = {
  h: {},
  on(e, f) { (this.h[e] ||= []).push(f); return () => this.h[e] = this.h[e].filter(x => x !== f); },
  emit(e, d) { (this.h[e] || []).slice().forEach(f => { try { f(d); } catch (err) { console.error(err); } }); }
};

/* ===== componentes (devolvem HTML) ===== */
const ic = (n, cls = '') => `<svg class="ic ${cls}" aria-hidden="true" focusable="false"><use href="#i-${n}"/></svg>`;
const logo = (cls = '') => `<svg class="${cls}" viewBox="0 0 1494.07 305.33" role="img" aria-label="Cumbia.bet"><use href="#logo"/></svg>`;
const attrs = o => Object.entries(o || {}).filter(([, v]) => v !== false && v != null).map(([k, v]) => v === true ? k : `${k}="${esc(v)}"`).join(' ');

function img(path, o = {}) {
  const d = IMGD[path] || [o.w || 0, o.h || 0];
  const small = IMGD[path + '-s'];
  const srcset = small ? ` srcset="img/${path}-s.webp ${small[0]}w, img/${path}.webp ${d[0]}w" sizes="${o.sizes || '(min-width:1024px) 40vw, 92vw'}"` : '';
  return `<img src="img/${path}.webp"${srcset} alt="${esc(o.alt || '')}" width="${d[0]}" height="${d[1]}"${o.cls ? ` class="${o.cls}"` : ''}${o.lazy === false ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async"${o.style ? ` style="${o.style}"` : ''}>`;
}

function btn(label, o = {}) {
  const k = o.kind || 'mag';
  const cls = ['btn', 'btn--' + k, o.size && 'btn--' + o.size, o.full && 'btn--full', !label && 'btn--ico', o.cls].filter(Boolean).join(' ');
  const a = {type: o.type || 'button', class: cls, id: o.id, 'data-go': o.go, 'data-act': o.act, 'data-auth': o.auth, 'aria-label': o.aria || (!label ? o.title : null), title: !label ? o.title : null, disabled: o.disabled, ...(o.attrs || {})};
  const inner = (o.icon && !o.iconR ? ic(o.icon) : '') + (label ? `<span>${esc(label)}</span>` : '') + (o.iconR ? ic(o.iconR) : '');
  if (o.href) return `<a href="${esc(o.href)}" class="${cls}" ${o.ext ? 'target="_blank" rel="noopener"' : ''}>${inner}</a>`;
  return `<button ${attrs(a)}>${inner}</button>`;
}

function stitle(o) {
  const id = o.id || ('st-' + Math.random().toString(36).slice(2, 7));
  const h = o.h || 'h2';
  const more = o.more ? `<button class="lnk st-more" ${o.moreGo ? `data-go="${esc(o.moreGo)}"` : ''} ${o.moreAct ? `data-act="${esc(o.moreAct)}"` : ''} ${o.moreArg ? `data-arg="${esc(o.moreArg)}"` : ''} aria-describedby="${id}">${esc(o.more)}${ic('seta-d')}</button>` : '';
  return `<div class="st"><div class="st-l">${o.eyebrow ? `<span class="st-k lab">${ic('passo')}${esc(o.eyebrow)}</span>` : ''}<${h} class="st-t" id="${id}">${esc(o.title)}</${h}></div>${more}</div>`;
}

function gcard(g, o = {}) {
  /* cartão de jogo (v2): capa de canto vivo + placa presa embaixo com o passo subindo na arte; o cartão inteiro é o botão */
  if (typeof g === 'string') g = G[g];
  if (!g) return '';
  const fav = S.favs.has(g.id);
  const k = g.t === 'aovivo' ? ['live', 'En vivo'] : g.jack ? ['jack', 'Jackpot'] : null;
  return `<div class="gc${o.cls ? ' ' + o.cls : ''}">
    <button class="gc-cv" data-game="${g.id}" aria-label="${esc(g.n)}, ${esc(g.p)}${k ? ', ' + k[1] : ''}">
      <span class="gc-art">${img(g.img, {alt: '', lazy: o.lazy, sizes: '(min-width:1024px) 180px, 46vw'})}</span>
      <span class="gc-pl"><span class="gc-n">${esc(g.n)}</span><span class="gc-p">${esc(g.p)}</span></span>
    </button>
    ${k ? `<span class="gc-k gc-k--${k[0]}" aria-hidden="true">${k[0] === 'live' ? eq() : ''}${k[1]}</span>` : ''}
    <button class="gc-fav" data-fav="${g.id}" aria-pressed="${fav}" aria-label="${fav ? 'Quitar de favoritos' : 'Guardar en favoritos'}: ${esc(g.n)}">${ic(fav ? 'estrela' : 'estrela-o')}</button>
  </div>`;
}

function rail(items, o = {}) {
  const id = o.id || ('rl-' + Math.random().toString(36).slice(2, 7));
  const body = o.loop
    ? `<div class="rail-track" data-loop><div class="rail-in">${items.join('')}<div class="rail-copy" aria-hidden="true" inert style="display:contents">${items.join('')}</div></div></div>`
    : `<div class="rail-track" tabindex="-1">${items.join('')}</div>`;
  return `<div class="rail${o.loop ? ' rail--loop' : ''}${o.cls ? ' ' + o.cls : ''}" id="${id}" role="region" aria-label="${esc(o.label || 'Carrusel')}" aria-roledescription="carrusel">
    <button class="rail-arw rail-arw--l" data-rail="-1" aria-label="Anterior" hidden>${ic('seta-e')}</button>
    ${body}
    <button class="rail-arw rail-arw--r" data-rail="1" aria-label="Siguiente">${ic('seta-d')}</button>
  </div>`;
}

function chips(items, o = {}) {
  return `<div class="chips${o.scroll ? ' chips--scroll' : ''}" role="group" aria-label="${esc(o.label || 'Filtros')}" data-chips="${esc(o.name)}">${items.map(it => {
    const v = typeof it === 'string' ? {k: it, n: it} : it;
    const on = v.k === o.active;
    return `<button type="button" class="chip${on ? ' is-on' : ''}" data-chip="${esc(v.k)}" aria-pressed="${on}"${v.auth ? ` data-auth="${esc(v.auth)}"` : ''}>${v.ic ? ic(v.ic) : ''}${esc(v.n)}${v.c != null ? ` <small>${esc(v.c)}</small>` : ''}</button>`;
  }).join('')}</div>`;
}

function tabs(items, o = {}) {
  return `<div class="tabs" role="tablist" aria-label="${esc(o.label || 'Pestañas')}" data-tabs="${esc(o.name)}">${items.map(it => {
    const v = typeof it === 'string' ? {k: it, n: it} : it;
    const on = v.k === o.active;
    return `<button type="button" class="tab${on ? ' is-on' : ''}" role="tab" aria-selected="${on}" data-tab="${esc(v.k)}" tabindex="${on ? 0 : -1}">${esc(v.n)}${v.c != null ? ` <span class="mut tnum">${esc(v.c)}</span>` : ''}</button>`;
  }).join('')}</div>`;
}

function seg(items, o = {}) {
  return `<div class="seg" role="group" aria-label="${esc(o.label || '')}" data-chips="${esc(o.name)}">${items.map(it => {
    const v = typeof it === 'string' ? {k: it, n: it} : it; const on = v.k === o.active;
    return `<button type="button" class="${on ? 'is-on' : ''}" data-chip="${esc(v.k)}" aria-pressed="${on}">${v.ic ? ic(v.ic, 'ic--s') : ''}${esc(v.n)}</button>`;
  }).join('')}</div>`;
}

function field(o) {
  const id = o.id; const hint = o.hint ? `<span class="fld-hint" id="${id}-h">${esc(o.hint)}</span>` : '';
  const err = o.err ? `<span class="fld-err" id="${id}-e">${ic('alerta')}${esc(o.err)}</span>` : `<span class="fld-err" id="${id}-e" hidden></span>`;
  const desc = [o.hint && id + '-h', id + '-e'].filter(Boolean).join(' ');
  const input = o.select
    ? `<select id="${id}" name="${o.name || id}" aria-describedby="${desc}">${o.select.map(s => `<option value="${esc(s[0])}"${s[0] === o.value ? ' selected' : ''}>${esc(s[1])}</option>`).join('')}</select>`
    : `<input id="${id}" name="${o.name || id}" type="${o.type || 'text'}" ${attrs({inputmode: o.inputmode, autocomplete: o.autocomplete || 'off', placeholder: o.placeholder, value: o.value, maxlength: o.maxlength, 'aria-describedby': desc, 'aria-invalid': o.err ? 'true' : null, required: o.req, 'data-mask': o.mask, enterkeyhint: o.enter, spellcheck: o.spell === false ? 'false' : null, ...(o.attrs || {})})}>`;
  return `<div class="fld${o.err ? ' is-err' : ''}${o.cls ? ' ' + o.cls : ''}"><label for="${id}">${esc(o.label)}${o.labR ? `<span class="mut">${esc(o.labR)}</span>` : ''}</label>
    <div class="fld-box">${o.icon ? ic(o.icon) : ''}${o.prefix ? `<span class="fld-pre">${esc(o.prefix)}</span>` : ''}${input}${o.suffix ? `<span class="fld-suf">${esc(o.suffix)}</span>` : ''}${o.action || ''}</div>${hint}${err}</div>`;
}
function toggle(o) {
  return `<button class="tg" role="switch" aria-checked="${!!o.on}" id="${o.id}" ${o.act ? `data-act="${o.act}"` : ''}><span class="tg-t"><b>${esc(o.label)}</b>${o.desc ? `<small>${esc(o.desc)}</small>` : ''}</span><span class="sw" aria-hidden="true"></span></button>`;
}
function check(o) {
  return `<label class="ck" for="${o.id}"><input type="checkbox" id="${o.id}" name="${o.id}" ${o.on ? 'checked' : ''} ${o.req ? 'required aria-required="true"' : ''}><span class="ck-b">${ic('check')}</span><span>${o.html || esc(o.label)}</span></label>`;
}
function oddBtn(o) {
  const on = S.slip.some(s => s.id === o.id);
  return `<button class="odd${o.row ? ' odd--row' : ''}${on ? ' is-on' : ''}" data-odd="${esc(o.id)}" data-desc="${esc(o.desc)}" data-val="${o.val}" data-mk="${esc(o.mk || '')}" data-ev="${esc(o.ev || '')}" aria-pressed="${on}" ${o.val == null ? 'disabled' : ''} aria-label="${esc(o.desc)}, ${esc(o.mk || '')}, momio ${fmtOdd(o.val)}">${o.lab != null ? `<small>${esc(o.lab)}</small>` : ''}<b>${fmtOdd(o.val)}</b></button>`;
}
const eq = () => '<span class="eq" aria-hidden="true"><i></i><i></i><i></i></span>';
function tag(kind, txt) { return `<span class="tag tag--${kind}">${kind === 'live' ? eq() : ''}${esc(txt)}</span>`; }
function age(txt = 'Solo mayores de 18 años.') { return `<span class="age"><b>+18</b><span>${esc(txt)}</span></span>`; }
function pedestal(who, o = {}) {
  const d = IMGD['c/' + who + '-s'] || [150, 320];
  return `<div class="ped ped--${o.tone || 'mag'}${o.cls ? ' ' + o.cls : ''}" style="--ph:${o.h || 180}px;--pw:${o.w || Math.round((o.h || 180) * d[0] / d[1] * 1.1)}px" aria-hidden="true">${img('c/' + who + '-s', {alt: ''})}<div class="ped-s"><i></i><i></i><i></i></div></div>`;
}
function empty(o) {
  return `<div class="empty">${o.who ? pedestal(o.who, {h: 150, tone: o.tone}) : ''}<h3>${esc(o.title)}</h3>${o.text ? `<p>${esc(o.text)}</p>` : ''}${o.action || ''}</div>`;
}
function li(o) {
  const tagN = o.go || o.act || o.attrs ? 'button' : 'div';
  const a = {class: 'li' + (o.cls ? ' ' + o.cls : ''), type: tagN === 'button' ? 'button' : null, 'data-go': o.go, 'data-act': o.act, 'data-arg': o.arg, 'data-auth': o.auth, ...(o.attrs || {})};
  return `<${tagN} ${attrs(a)}>${o.icon ? `<span class="li-i">${ic(o.icon)}</span>` : ''}<span class="li-t"><b>${esc(o.title)}</b>${o.sub ? `<small>${esc(o.sub)}</small>` : ''}</span><span class="li-r">${o.right || ''}${(o.go || o.act) && o.chev !== false ? ic('seta-d', 'ic--s') : ''}</span></${tagN}>`;
}
const kv = (l, v) => `<div class="kv"><span>${esc(l)}</span><b>${v}</b></div>`;

/* ficha da marca (p91): canto em escalões, monograma ao centro, valor em cifra tabular */
function ficha(val, o = {}) {
  const T = {blanca: ['#FFFFFF', 'var(--noite)', 'var(--noite)', 'var(--noite)'], magenta: ['var(--magenta)', 'var(--rosa)', 'var(--noite)', 'var(--rosa)'],
    noite: ['var(--noite)', 'var(--magenta)', 'var(--magenta)', 'var(--ln2)'], rosa: ['var(--rosa)', 'var(--magenta)', 'var(--noite)', 'var(--magenta)']}[o.tone || 'magenta'];
  const [base, notch, txt, ring] = T; const sz = o.size || 56;
  let notches = '';
  for (let i = 0; i < 8; i++) notches += `<rect x="44" y="1" width="12" height="11" fill="${notch}" transform="rotate(${i * 45} 50 50)"/>`;
  return `<span class="ficha" style="width:${sz}px;height:${sz}px" ${o.label ? `role="img" aria-label="${esc(o.label)}"` : 'aria-hidden="true"'}><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="49" fill="${base}"/>${notches}<circle cx="50" cy="50" r="35" fill="none" stroke="${ring}" stroke-width="2" stroke-dasharray="5 4"/>${o.tone === 'rosa' ? '<circle cx="50" cy="50" r="31" fill="var(--magenta)"/>' : ''}<svg x="38" y="22" width="24" height="24" viewBox="0 0 563 556" fill="${txt}"><use href="#mono"/></svg><text x="50" y="68" text-anchor="middle" font-family="Bricolage Grotesque, sans-serif" font-weight="800" font-size="${String(val).length > 3 ? 15 : 19}" fill="${o.tone === 'rosa' ? 'var(--noite)' : txt}" style="font-variant-numeric:tabular-nums;font-stretch:75%">${esc(val)}</text></svg></span>`;
}

/* ===== painéis e avisos ===== */
let SH = null;
function sheet(html, o = {}) {
  closeSheet(true);
  const opener = document.activeElement;
  const id = o.id || 'sh';
  const scrim = document.createElement('div'); scrim.className = 'sh-scrim'; scrim.dataset.close = '';
  const el = document.createElement('div');
  el.className = 'sh' + (o.size ? ' sh--' + o.size : '') + (o.cls ? ' ' + o.cls : '');
  el.id = id; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true');
  el.setAttribute('aria-labelledby', id + '-t');
  el.innerHTML = `<div class="sh-hd"><h2 id="${id}-t" tabindex="-1">${esc(o.title || '')}</h2><button class="sh-x" data-close aria-label="Cerrar">${ic('fechar')}</button></div><div class="sh-bd">${html}</div>${o.foot ? `<div class="sh-ft">${o.foot}</div>` : ''}`;
  if (!o.title) el.querySelector('.sh-hd h2').classList.add('sr');
  document.body.append(scrim, el);
  const locked = $$('body > :not(.sh):not(.sh-scrim):not(.toasts):not(script)').filter(n => !n.inert);
  locked.forEach(n => n.inert = true);
  document.body.classList.add('sh-lock');
  requestAnimationFrame(() => { scrim.classList.add('is-open'); el.classList.add('is-open'); });
  SH = {el, scrim, opener, onClose: o.onClose, id, locked};
  const f = o.focus ? el.querySelector(o.focus) : el.querySelector('h2');
  setTimeout(() => f && f.focus({preventScroll: true}), 30);
  if (o.init) o.init(el);
  initRails(el); paintOdds(el);
  return el;
}
function closeSheet(instant) {
  if (!SH) return;
  const {el, scrim, opener, onClose, locked} = SH; SH = null;
  (locked || []).forEach(n => { n.inert = false; });
  if (!document.querySelector('.au.is-open')) document.body.classList.remove('sh-lock');
  if (onClose) try { onClose(el); } catch (e) {}
  const rm = () => { el.remove(); scrim.remove(); };
  if (instant) rm(); else { el.classList.remove('is-open'); scrim.classList.remove('is-open'); setTimeout(rm, 260); }
  /* Ronda 1 · corrección rápida: si el botón que abrió el panel ya no existe, el foco vuelve al título de la pantalla */
  if (!instant) { if (opener && opener.isConnected && !opener.closest('[inert]')) opener.focus({preventScroll: true}); else focusTitle(); }
}
function focusTitle() {
  const h = $('#main h1'); if (!h) return;
  if (!h.hasAttribute('tabindex')) h.setAttribute('tabindex', '-1');
  h.focus({preventScroll: true});
}
/* Ronda 1 · corrección rápida: el aviso rápido no tapa un panel abierto; sube junto con él
   (o pasa arriba de la pantalla cuando el panel ocupa casi toda la altura) */
function toastSpot(box) {
  box.style.top = ''; box.style.bottom = '';
  const p = [...document.querySelectorAll('.sh.is-open, .au.is-open')].pop(); if (!p) return;
  const H = innerHeight, r = p.getBoundingClientRect();
  const bottomSheet = innerWidth < 768; /* no celular, painel e login sobem da base */
  const top = bottomSheet ? H - p.offsetHeight : r.top, bot = bottomSheet ? H : r.bottom;
  const zone = H - (parseFloat(getComputedStyle(box).bottom) || 0) - 64;
  if (bot <= zone) return;
  if (top >= 88) box.style.bottom = Math.round(H - top + 12) + 'px';
  else { box.style.bottom = 'auto'; box.style.top = 'calc(12px + var(--safe-t))'; }
}
function toast(msg, o = {}) {
  let box = $('.toasts');
  if (!box) { box = document.createElement('div'); box.className = 'toasts'; box.setAttribute('aria-live', 'polite'); document.body.append(box); }
  const el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status');
  el.innerHTML = ic(o.icon || 'check-c') + `<span>${esc(msg)}</span>`;
  toastSpot(box);
  box.append(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 220); }, o.ms || 2600);
}
async function copyText(txt, okMsg = 'Copiado.') {
  try { await navigator.clipboard.writeText(txt); toast(okMsg, {icon: 'copiar'}); }
  catch (e) { toast('Selecciona y copia: ' + txt, {icon: 'info', ms: 4200}); }
}

/* ===== carrosséis ===== */
const RM = matchMedia('(prefers-reduced-motion: reduce)');
function initRails(root = document) {
  $$('.rail:not([data-ok])', root).forEach(r => { r.dataset.ok = 1; r.querySelector('[data-loop]') ? loopRail(r) : nativeRail(r); });
}
function stepOf(track) {
  const it = track.querySelector('.rail-in > *, .rail-track > *'); if (!it) return 200;
  const gap = parseFloat(getComputedStyle(it.parentElement).columnGap || getComputedStyle(it.parentElement).gap) || 12;
  return it.getBoundingClientRect().width + gap;
}
function arwTop(r) {
  const cv = r.querySelector('.gc-cv, .h-cvr, [data-arw]'); const tr = r.querySelector('.rail-track');
  if (cv && tr) r.style.setProperty('--arw-top', (cv.offsetTop + cv.offsetHeight / 2) + 'px');
}
function nativeRail(r) {
  const tr = r.querySelector('.rail-track'); const L = r.querySelector('.rail-arw--l'), R = r.querySelector('.rail-arw--r');
  const upd = () => {
    const max = tr.scrollWidth - tr.clientWidth - 2;
    tr.style.setProperty('--fl', tr.scrollLeft > 2 ? '40px' : '0px');
    tr.style.setProperty('--fr', tr.scrollLeft < max ? '40px' : '0px');
    L.hidden = tr.scrollLeft <= 2; R.hidden = tr.scrollLeft >= max;
    bus.emit('rail', {r, tr});
  };
  tr.addEventListener('scroll', upd, {passive: true});
  new ResizeObserver(() => { upd(); arwTop(r); }).observe(tr);
  r.addEventListener('click', e => {
    const b = e.target.closest('[data-rail]'); if (!b || b.closest('.rail') !== r) return;
    const st = stepOf(tr); const n = Math.max(1, Math.floor((tr.clientWidth - 40) / st));
    tr.scrollBy({left: +b.dataset.rail * n * st, behavior: RM.matches ? 'auto' : 'smooth'});
  });
  dragScroll(tr);
  upd(); arwTop(r);
}
function dragScroll(tr) {
  let x0 = 0, s0 = 0, moved = false, down = false;
  tr.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse' || e.button !== 0) return; down = true; moved = false; x0 = e.clientX; s0 = tr.scrollLeft; });
  addEventListener('pointermove', e => {
    if (!down) return; const dx = e.clientX - x0;
    if (!moved && Math.abs(dx) > 6) { moved = true; tr.classList.add('is-drag'); }
    if (moved) tr.scrollLeft = s0 - dx;
  });
  addEventListener('pointerup', () => {
    if (!down) return; down = false;
    if (moved) {
      tr.classList.remove('is-drag');
      const st = stepOf(tr); tr.scrollTo({left: Math.round(tr.scrollLeft / st) * st, behavior: 'smooth'});
      const block = ev => { ev.stopPropagation(); ev.preventDefault(); };
      tr.addEventListener('click', block, {capture: true, once: true}); setTimeout(() => tr.removeEventListener('click', block, {capture: true}), 50);
    }
  });
}
function loopRail(r) {
  const tr = r.querySelector('.rail-track'), inn = r.querySelector('.rail-in');
  r.querySelector('.rail-arw--l').hidden = false;
  tr.style.setProperty('--fl', '40px'); tr.style.setProperty('--fr', '40px');
  let x = 0, half = 0, last = 0, pauseUntil = 0, hover = false, vis = true, raf = 0, drag = null;
  const speed = +(r.dataset.speed || 28); // px/s
  const measure = () => { const copy = inn.querySelector('.rail-copy'); const first = copy?.firstElementChild; half = first ? first.offsetLeft - inn.firstElementChild.offsetLeft : inn.scrollWidth / 2; };
  const set = (anim) => {
    if (half > 0) { while (x >= half) x -= half; while (x < 0) x += half; }
    inn.style.transition = anim ? `transform ${RM.matches ? 0 : 420}ms var(--e-out)` : 'none';
    inn.style.transform = `translate3d(${-x}px,0,0)`;
  };
  const tick = ts => {
    raf = 0; const dt = last ? Math.min(64, ts - last) : 16; last = ts;
    const paused = hover || drag || !vis || document.hidden || RM.matches || ts < pauseUntil || !r.isConnected;
    if (!paused && half > 0) { x += speed * dt / 1000; set(false); }
    if (r.isConnected) raf = requestAnimationFrame(tick);
  };
  const start = () => { if (!raf) { last = 0; raf = requestAnimationFrame(tick); } };
  new ResizeObserver(() => { measure(); arwTop(r); set(false); }).observe(inn);
  new IntersectionObserver(es => { vis = es[0].isIntersecting; if (vis) start(); }, {rootMargin: '100px'}).observe(r);
  r.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') hover = true; });
  r.addEventListener('pointerleave', () => { hover = false; });
  r.addEventListener('focusin', () => hover = true); r.addEventListener('focusout', () => hover = false);
  r.addEventListener('click', e => {
    const b = e.target.closest('[data-rail]'); if (!b || b.closest('.rail') !== r) return;
    const st = stepOf(tr); const n = Math.max(1, Math.floor((tr.clientWidth - 40) / st));
    x = Math.round(x / st) * st + (+b.dataset.rail) * n * st; set(true); pauseUntil = performance.now() + 3500;
  });
  tr.addEventListener('pointerdown', e => {
    if (e.button !== 0) return; drag = {x0: e.clientX, y0: e.clientY, s: x, moved: false, id: e.pointerId};
  });
  addEventListener('pointermove', e => {
    if (!drag || e.pointerId !== drag.id) return; const dx = e.clientX - drag.x0;
    if (!drag.moved && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(e.clientY - drag.y0)) { drag.moved = true; tr.classList.add('is-drag'); try { tr.setPointerCapture(e.pointerId); } catch (_) {} }
    if (drag.moved) { x = drag.s - dx; set(false); }
  });
  const up = e => {
    if (!drag || (e && e.pointerId !== drag.id)) return;
    if (drag.moved) {
      tr.classList.remove('is-drag'); const st = stepOf(tr); x = Math.round(x / st) * st; set(true);
      const block = ev => { ev.stopPropagation(); ev.preventDefault(); };
      tr.addEventListener('click', block, {capture: true, once: true}); setTimeout(() => tr.removeEventListener('click', block, {capture: true}), 50);
    }
    drag = null; pauseUntil = performance.now() + 3000;
  };
  addEventListener('pointerup', up); addEventListener('pointercancel', up);
  measure(); arwTop(r); set(false); start();
}

/* ===== sessão, favoritos, cupom ===== */
const AUTH_FALLBACK = {
  isIn: () => S.in,
  require(reason, then) { if (S.in) return then && then(); setSession(true); toast('Entraste como ' + ME.primeiro + '.'); then && then(); }
};
let AUTH = AUTH_FALLBACK;
function setSession(on) {
  S.in = !!on; store.set('in', S.in ? 1 : 0);
  if (S.in && !S.favInit) { S.favDemo.forEach(f => S.favs.add(f)); S.favInit = true; }
  if (!S.in) { S.favs.clear(); S.favInit = false; }
  $$('[data-fav]').forEach(b => { const on = S.favs.has(b.dataset.fav); b.setAttribute('aria-pressed', on); b.querySelector('use')?.setAttribute('href', '#i-' + (on ? 'estrela' : 'estrela-o')); });
  document.documentElement.classList.toggle('is-in', S.in);
  document.documentElement.classList.toggle('is-out', !S.in);
  bus.emit('session', S.in);
}
function toggleFav(id) {
  const g = G[id]; if (!g) return;
  const run = () => {
    const on = !S.favs.has(id); on ? S.favs.add(id) : S.favs.delete(id);
    $$(`[data-fav="${id}"]`).forEach(b => { b.setAttribute('aria-pressed', on); if (!b.dataset.favtx) b.setAttribute('aria-label', (on ? 'Quitar de favoritos' : 'Guardar en favoritos') + ': ' + g.n); b.querySelector('use')?.setAttribute('href', '#i-' + (on ? 'estrela' : 'estrela-o')); const tx = b.querySelector('[data-favtx]') || (b.dataset.favtx ? b.querySelector('span') : null); if (tx) tx.textContent = on ? 'En favoritos' : 'Guardar en favoritos'; });
    toast(on ? `${g.n} está en tus favoritos.` : `${g.n} salió de tus favoritos.`, {icon: on ? 'estrela' : 'estrela-o'});
    bus.emit('fav', {id, on});
  };
  if (!S.in) return AUTH.require(`Entra para guardar ${g.n} en tus favoritos.`, run);
  run();
}
function toggleOdd(b) {
  const id = b.dataset.odd, ev = b.dataset.ev;
  const i = S.slip.findIndex(s => s.id === id);
  if (i >= 0) S.slip.splice(i, 1);
  else {
    if (ev) { const j = S.slip.findIndex(s => s.ev === ev && s.mk === b.dataset.mk); if (j >= 0) S.slip.splice(j, 1); }
    S.slip.push({id, ev, desc: b.dataset.desc, mk: b.dataset.mk, val: +b.dataset.val});
  }
  paintOdds(); bus.emit('slip', S.slip);
}
function paintOdds(root = document) {
  const ids = new Set(S.slip.map(s => s.id));
  $$('[data-odd]', root).forEach(b => { const on = ids.has(b.dataset.odd); b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); });
}

/* ===== roteador ===== */
const SCREENS = {}; const ACT = {}; const ON = {chip: {}, tab: {}}; const SHEETS = {};
let cleanup = null;
function parse(h) { h = (h || '').replace(/^#/, ''); try { h = decodeURIComponent(h); } catch (e) {} h = h || 'inicio'; const i = h.indexOf(':'); return i < 0 ? [h, ''] : [h.slice(0, i), h.slice(i + 1)]; }
function go(route, o = {}) {
  if (!route) return;
  const [k] = parse(route); const sc = SCREENS[k];
  if (sc && sc.auth && !S.in) { return AUTH.require(sc.auth, () => go(route, o)); }
  if (('#' + route) === location.hash) render(route); else if (o.replace) { history.replaceState(null, '', '#' + route); render(route); } else location.hash = route;
}
function render(route) {
  let [k, param] = parse(route ?? location.hash);
  let sc = SCREENS[k];
  if (!sc) { k = 'inicio'; param = ''; sc = SCREENS.inicio; }
  if (sc.auth && !S.in) {
    const want = route ?? location.hash.slice(1);
    k = 'inicio'; param = ''; sc = SCREENS.inicio; history.replaceState(null, '', '#inicio');
    setTimeout(() => AUTH.require(SCREENS[parse(want)[0]].auth, () => go(want)), 60);
  }
  closeSheet(true);
  if (cleanup) { try { cleanup(); } catch (e) {} cleanup = null; }
  S.cur = k; S.param = param;
  const main = $('#main');
  const aside = sc.aside ? sc.aside(param) : '';
  const body = sc.render(param);
  main.innerHTML = `<div class="scr scr-${k}">${aside ? `<div class="pg pg--aside"><div class="pg-main">${body}</div><aside class="pg-side" aria-label="${esc(sc.asideLabel || 'Panel lateral')}">${aside}</aside></div>` : `<div class="pg">${body}</div>`}${typeof footer === 'function' ? footer(sc) : ''}</div>`;
  const root = main.firstElementChild;
  const fi = root.querySelector('.c-cta .ped img');
  if (fi && root.querySelector('.pg img[src*="/c/raton"]')) { fi.src = 'img/c/dragon-s.webp'; fi.removeAttribute('srcset'); }
  if (!root.querySelector('h1')) root.insertAdjacentHTML('afterbegin', `<h1 class="sr">${esc(sc.label)}</h1>`);
  const de = document.documentElement;
  de.classList.toggle('has-aside', !!aside);
  de.classList.toggle('luz-casca', !sc.luz);
  de.classList.toggle('no-slipfab', !!sc.luz && !sc.spSlip); /* telas com laranja próprio fora de esportes: sem boleto flutuante */
  de.classList.toggle('no-fab', !!sc.noFab);
  document.title = (sc.title ? sc.title(param) : sc.label) + ' · Cumbia.bet';
  window.scrollTo(0, 0);
  initRails(root); paintOdds(root);
  if (sc.init) { try { cleanup = sc.init(root, param) || null; } catch (e) { console.error(e); } }
  const h1 = root.querySelector('h1'); if (h1) { h1.setAttribute('tabindex', '-1'); if (render.n++) h1.focus({preventScroll: true}); }
  bus.emit('screen', {k, param, sc});
}
render.n = 0;
addEventListener('hashchange', () => render());

/* ===== delegação única ===== */
document.addEventListener('click', e => {
  const a = e.target.closest('[data-auth]');
  if (a && !S.in && !a.disabled) {
    e.preventDefault(); e.stopPropagation();
    AUTH.require(a.dataset.auth, () => { if (a.isConnected) { a.removeAttribute('data-auth-once'); const ad = a.dataset.auth; delete a.dataset.auth; a.click(); a.dataset.auth = ad; } else if (a.dataset.go) go(a.dataset.go); });
  }
}, true);
document.addEventListener('click', e => {
  const t = e.target;
  if (t.closest('[data-close]')) { e.preventDefault(); return closeSheet(); }
  const fav = t.closest('[data-fav]'); if (fav) { e.preventDefault(); return toggleFav(fav.dataset.fav); }
  const gm = t.closest('[data-game]'); if (gm) { e.preventDefault(); return ACT.game ? ACT.game(gm, e) : null; }
  const od = t.closest('[data-odd]'); if (od && !od.disabled) { e.preventDefault(); return toggleOdd(od); }
  const ch = t.closest('[data-chip]');
  if (ch) {
    const grp = ch.closest('[data-chips]'); const name = grp?.dataset.chips;
    if (grp && !grp.dataset.multi) $$('[data-chip]', grp).forEach(b => { const on = b === ch; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); });
    if (name && ON.chip[name]) ON.chip[name](ch.dataset.chip, ch, e);
    return;
  }
  const tb = t.closest('[data-tab]');
  if (tb) {
    const grp = tb.closest('[data-tabs]'); const name = grp?.dataset.tabs;
    if (grp) $$('[data-tab]', grp).forEach(b => { const on = b === tb; b.classList.toggle('is-on', on); b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; });
    if (name && ON.tab[name]) ON.tab[name](tb.dataset.tab, tb, e);
    return;
  }
  const ac = t.closest('[data-act]'); if (ac && ACT[ac.dataset.act]) { e.preventDefault(); return ACT[ac.dataset.act](ac, e); }
  const gg = t.closest('[data-go]'); if (gg) { e.preventDefault(); return go(gg.dataset.go); }
  const cp = t.closest('[data-copy]'); if (cp) { e.preventDefault(); return copyText(cp.dataset.copy, cp.dataset.ok || 'Copiado.'); }
  const sh = t.closest('[data-sheet]'); if (sh && SHEETS[sh.dataset.sheet]) { e.preventDefault(); return SHEETS[sh.dataset.sheet](sh, e); }
  const ts = t.closest('[data-toast]'); if (ts) { e.preventDefault(); return toast(ts.dataset.toast, {icon: ts.dataset.icon || 'info'}); }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && SH) { e.preventDefault(); closeSheet(); }
  if ((e.key === 'ArrowRight' || e.key === 'ArrowLeft') && e.target.matches('[role=tab]')) {
    const list = $$('[role=tab]', e.target.closest('[role=tablist]')); const i = list.indexOf(e.target);
    const n = list[(i + (e.key === 'ArrowRight' ? 1 : -1) + list.length) % list.length]; n.focus(); n.click();
  }
  if (e.target.matches('[role=switch]') && (e.key === ' ' || e.key === 'Enter')) { /* botão já clica */ }
});
document.addEventListener('click', e => {
  const sw = e.target.closest('[role=switch]'); if (sw && !sw.dataset.manual) { const on = sw.getAttribute('aria-checked') !== 'true'; sw.setAttribute('aria-checked', on); bus.emit('switch', {id: sw.id, on, el: sw}); }
});
/* máscaras de campo: curp, data, cel (México, 10 dígitos), cod, money (es-MX), clabe (18 dígitos) */
const MASK = {
  curp: v => v.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 18),
  data: v => v.replace(/\D/g, '').slice(0, 8).replace(/(\d{2})(\d)/, '$1/$2').replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3'),
  cel: v => { const d = v.replace(/\D/g, '').slice(0, 10); if (d.length <= 2) return d; if (d.length <= 6) return `${d.slice(0, 2)} ${d.slice(2)}`; return `${d.slice(0, 2)} ${d.slice(2, 6)} ${d.slice(6)}`; },
  cod: v => v.replace(/\D/g, '').slice(0, 6),
  money: v => { const d = v.replace(/\D/g, '').slice(0, 9); if (!d) return ''; return (+d / 100).toLocaleString(LOC, {minimumFractionDigits: 2}); },
  clabe: v => v.replace(/\D/g, '').slice(0, 18).replace(/^(\d{3})(\d)/, '$1 $2').replace(/^(\d{3}) (\d{3})(\d)/, '$1 $2 $3').replace(/^(\d{3}) (\d{3}) (\d{11})(\d)/, '$1 $2 $3 $4')
};
document.addEventListener('input', e => {
  const m = e.target.dataset?.mask; if (m && MASK[m]) { const el = e.target; const v = MASK[m](el.value); if (v !== el.value) { el.value = v; } }
  const f = e.target.closest?.('.fld.is-err'); if (f && !e.target.dataset.keepErr) clearErr(e.target);
});
function setErr(input, msg) {
  const f = input.closest('.fld'); if (!f) return; f.classList.add('is-err'); input.setAttribute('aria-invalid', 'true');
  const e = f.querySelector('.fld-err'); if (e) { e.hidden = false; e.innerHTML = ic('alerta') + esc(msg); }
}
function clearErr(input) {
  const f = input.closest('.fld'); if (!f) return; f.classList.remove('is-err'); input.removeAttribute('aria-invalid');
  const e = f.querySelector('.fld-err'); if (e) { e.hidden = true; e.textContent = ''; }
}
const parseMoney = s => +(String(s || '').replace(/[^\d.]/g, '')) || 0;
