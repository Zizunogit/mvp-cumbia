/* auth.js · entrar e cadastrar: login, recuperar senha (3 passos), bloqueio, pausa, cadastro (2 passos, CURP primeiro) e boas-vindas.
   Painel próprio (BASE §6.1 e §9.3): celular = painel alto que vira tela cheia ao focar um campo; ≥768 = cartão dividido (arte + formulário).
   Foco preso, Esc fecha, resto da página inerte, foco volta a quem abriu, rascunho guardado só em memória (sem senha nem código).
   Contrato: substitui o AUTH do core por {isIn, open(view,{motivo,then}), require(motivo,then), login(), logout(), close()}.
   Prefixo au-, textos em TXT.au. Vistas: login, bloqueio, pausa, recuperar, recuperar2, recuperar3, recuperado, cadastro1, cadastro2, bemvindo. */
TXT.au = {
  'fechar': 'Cerrar', 'mostrar': 'Mostrar', 'ocultar': 'Ocultar', 'mostrar.aria': 'Mostrar contraseña',
  'caps': 'Bloq Mayús activado: revisa mayúsculas y minúsculas.',
  'passo': 'Paso {n} de {t}',
  /* arte (frase da marca na placa) */
  'arte.login.k': 'Esta noche', 'arte.login': 'Que suene la suerte.',
  'arte.su.k': 'Primera vez', 'arte.su': 'Dos pasos y estás en la pista.',
  'arte.bv.k': 'Pista abierta', 'arte.bv': 'Que suene la suerte.',
  'arte.blq.k': 'Esta noche', 'arte.blq': 'Respira. La pista no se va.',
  'arte.pausa.k': 'Juego responsable', 'arte.pausa': 'La mejor fiesta tiene pausa.',
  /* login */
  'login.t': 'La pista está abierta.',
  'login.s': 'Tu saldo, tus apuestas y tus favoritos siguen donde los dejaste.',
  'login.user': 'Correo o CURP', 'login.user.ph': 'nombre@correo.com o CURP',
  'login.pass': 'Contraseña', 'login.esqueci': 'Olvidé mi contraseña',
  'login.b': 'Entrar', 'login.busy': 'Entrando…', 'login.ou': 'o',
  'login.google': 'Continuar con Google', 'login.google.busy': 'Conectando…',
  'login.novo': '¿Primera vez aquí?', 'login.criar': 'Regístrate', 'login.depois': 'Ahora no',
  'login.age': 'Solo mayores de 18 años. Juega con responsabilidad.',
  'login.ok': 'Qué gusto verte de nuevo, {n}.', 'login.ok.google': 'Entraste con Google, {n}.',
  /* erros */
  'e.user.fmt': 'Usa tu correo (como nombre@correo.com) o tu CURP (18 caracteres).',
  'e.user.vazio': 'Escribe tu correo o tu CURP, como nombre@correo.com.',
  'e.pass.vazio': 'Escribe tu contraseña para entrar.',
  'e.cred': 'El correo/CURP o la contraseña no coinciden.', 'e.cred.s': 'Revisa los dos e inténtalo de nuevo.',
  'e.cred.rest': 'Te quedan {n} intentos antes de una pausa de seguridad.',
  'e.cred.rest1': 'Te queda 1 intento antes de una pausa de seguridad.',
  'e.cred.rec': 'Recuperar mi contraseña',
  'e.resumo1': 'Revisa el campo marcado para continuar.', 'e.resumoN': 'Revisa los {n} campos marcados para continuar.',
  /* bloqueio (5 erros) */
  'blq.k': 'Pausa de seguridad', 'blq.t': 'Entrada en pausa.',
  'blq.s': 'Fueron 5 intentos sin acierto. Para proteger tu cuenta, la entrada queda en pausa por 15 minutos.',
  'blq.volta': 'Próximo intento', 'blq.amanha': 'Mañana, {h}',
  'blq.aviso': '¿Olvidaste tu contraseña? Recuperarla ahora es el camino más rápido de vuelta.',
  'blq.b': 'Recuperar mi contraseña', 'blq.ok': 'Entendido',
  /* conta em pausa ou autoexcluída */
  'pau.k': 'Cuenta en pausa', 'pau.t': 'Tu pausa sigue.', 'pau.ate': 'Hasta',
  'pau.s': 'Mientras tanto, la cuenta no entra a jugar ni a apostar. Tú lo pediste, y aquí eso se respeta.',
  'pau.lib': 'Lo que sigue disponible',
  'pau.sacar': 'Retirar tu saldo', 'pau.sacar.s': 'Por SPEI, solo a una cuenta a tu nombre.',
  'pau.lim': 'Ver tus límites', 'pau.lim.s': 'Y ajustar lo que quieras para cuando termine la pausa.',
  'pau.nota': 'Con la pausa activa, la entrada solo abre la billetera y los límites. [por confirmar]',
  'pau.sup': 'Hablar con soporte', 'pau.ok': 'Entendido',
  'pau.ajuda': '¿Necesitas hablar? Línea de la Vida, 800 911 2000, 24 horas, gratis [por confirmar].', 'pau.age': 'Juega con responsabilidad.',
  /* recuperar senha */
  'rec.k': 'Recuperar contraseña',
  'rec1.t': 'Pasa en las mejores fiestas.',
  'rec1.s': 'Escribe tu correo o tu CURP. Te mandamos un código de 6 dígitos al correo de la cuenta.',
  'rec1.b': 'Enviar código', 'rec1.busy': 'Enviando…', 'rec.voltar': 'Volver a Entrar',
  'rec2.t': 'Revisa tu correo.',
  'rec2.s': 'Si hay una cuenta con esos datos, el código llega al correo registrado. Vale por [por confirmar].',
  'rec2.code': 'Código de 6 dígitos', 'rec2.b': 'Confirmar código', 'rec2.busy': 'Revisando…',
  'rec2.espera': '¿No llegó? Revisa la carpeta de spam. Puedes pedir otro código en 30 segundos.',
  'rec2.pode': '¿No llegó? Revisa la carpeta de spam o pide otro.', 'rec2.reenviar': 'Reenviar código',
  'rec2.reenviado': 'Código nuevo enviado. El anterior ya no vale.', 'rec2.trocar': 'Usar otro correo o CURP',
  'e.code.fmt': 'Escribe los 6 dígitos del código, como 482913.',
  'e.code.nao': 'Ese código no coincide. Usa el del último correo que te mandamos.',
  'rec3.t': 'Crea una contraseña nueva.', 'rec3.s': 'Vale en cuanto la guardes.',
  'rec3.pass': 'Contraseña nueva', 'rec3.sair': 'Cerrar sesión en los otros dispositivos',
  'rec3.b': 'Guardar contraseña nueva', 'rec3.busy': 'Guardando…',
  'recok.k': 'Todo listo', 'recok.t': 'Contraseña cambiada.', 'recok.fala': 'Soy el Maestro: guardé tu contraseña nueva. Ahora solo entra con ella, que la pista sigue abierta.',
  'recok.b': 'Entrar con la contraseña nueva',
  /* regras de senha */
  'r.len': '8+ caracteres', 'r.mix': 'Letras y números', 'r.up': 'Una mayúscula',
  'r.ok': '(cumplida)', 'r.pend': '(falta)', 'e.pass.regras': 'La contraseña todavía no cumple las reglas de abajo.',
  /* cadastro */
  'su.k': 'Registro',
  'su1.t': 'Tus datos.', 'su1.s': 'Con tu CURP, la cuenta nace a tu nombre.',
  'su.cpf': 'CURP', 'su.cpf.ph': '18 letras y números', 'su.cpf.busca': 'Consultando tu CURP…',
  'su.cpf.tit': 'Titular de la CURP', 'su.cpf.fonte': 'Consulta a RENAPO [por confirmar].',
  'su.nasc': 'Fecha de nacimiento', 'su.nasc.ph': 'DD/MM/AAAA',
  'su.email': 'Correo', 'su.email.ph': 'nombre@correo.com',
  'su.nota': 'La cuenta queda a nombre del titular de la CURP.',
  'su1.b': 'Continuar', 'su.tem': '¿Ya tienes cuenta?', 'su.entrar': 'Entrar',
  'e.cpf': 'La CURP tiene 18 caracteres, como PEGG910314HDFRRL07.',
  'e.nasc': 'Revisa la fecha: usa DD/MM/AAAA, como 14/03/1991.',
  'e.nasc.18': 'Para crear una cuenta necesitas tener 18 años o más.',
  'e.email': 'Usa un correo como nombre@correo.com.',
  'su2.t': 'Tu acceso.', 'su2.s': 'Celular y contraseña para entrar cuando quieras.',
  'su.cel': 'Celular', 'su.cel.ph': '55 1234 5678', 'su.pass': 'Crea una contraseña',
  'su.promo.abrir': 'Tengo un código promocional', 'su.promo': 'Código promocional',
  'su.promo.h': 'Vale en el primer depósito. +18 · Aplican T&C.',
  'su.termos': 'Tengo 18 años o más y acepto los {t} y el {p}.', 'su.termos.t': 'Términos y condiciones', 'su.termos.p': 'Aviso de Privacidad',
  'su.ofertas': 'Quiero recibir ofertas y novedades (opcional).',
  'su2.b': 'Crear mi cuenta', 'su2.busy': 'Creando tu cuenta…', 'su.voltar': 'Volver',
  'su.age': 'Solo mayores de 18 años. Juega con responsabilidad.',
  'e.cel': 'Usa tu celular de 10 dígitos, como 55 1234 5678.',
  'e.termos': 'Para crear la cuenta, confirma que tienes 18 años o más y acepta los Términos.',
  /* boas-vindas */
  'bv.k': 'Cuenta creada', 'bv.t': 'La pista es tuya.',
  'bv.fala': 'Soy el Conejo: todo listo, {n}. Ahora solo elige tu primer paso.',
  'bv.kyc': 'Antes del primer depósito, confirmamos tu identidad con una selfie y una foto de tu INE [por confirmar]. Así la cuenta queda solo a tu nombre.',
  'bv.dep': 'Hacer mi primer depósito', 'bv.lim': 'Definir mis límites',
  'bv.casa': 'Ver el sitio primero', 'bv.cont': 'Seguir donde me quedé',
  'bv.age': 'Bono de bienvenida en el primer depósito · Aplican T&C.'
};

(function () {
  const ta = (k, v) => t('au.' + k, v);
  const MQ = matchMedia('(min-width:768px)');
  const AU = {el: null, scrim: null, opener: null, view: '', motivo: '', then: null, inerted: [], timers: [],
    fails: 0, lockUntil: 0, pauseUntil: 0, full: false, busy: false, resendAt: 0, cpfOk: '', draft: {}};

  /* ---------- utilitários ---------- */
  const later = (fn, ms) => { const id = setTimeout(fn, ms); AU.timers.push(id); return id; };
  const digits = s => String(s || '').replace(/\D/g, '');
  const isEmail = s => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
  /* CURP: 4 letras + AAMMDD + sexo (H/M/X) + 5 letras + homoclave + dígito (ex. PEGG910314HDFRRL07) */
  const isCURP = s => /^[A-Z]{4}\d{6}[HMX][A-Z]{5}[A-Z\d]\d$/.test(String(s || '').toUpperCase().replace(/\s/g, ''));
  const isUser = s => isEmail(s) || isCURP(s);
  /* celular México: 10 dígitos, sem 0/1 no início (o +52 fica no prefixo do campo) */
  const celOk = s => /^[2-9]\d{9}$/.test(digits(s));
  const pad = n => String(n).padStart(2, '0');
  const hhmm = ts => { const d = new Date(ts); return pad(d.getHours()) + ':' + pad(d.getMinutes()); };
  const dmy = ts => { const d = new Date(ts); return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`; };
  const nomeMask = () => { const p = ME.nome.toUpperCase().split(' '); return p[0] + ' ' + p[p.length - 1][0] + '***'; };
  const RULES = [['len', v => v.length >= 8], ['mix', v => /\p{L}/u.test(v) && /\d/.test(v)], ['up', v => /\p{Lu}/u.test(v)]];
  const rulesOk = v => RULES.every(([, f]) => f(v));
  function nascMsg(v) {
    const d = digits(v); if (d.length < 8) return ta('e.nasc');
    const dd = +d.slice(0, 2), mm = +d.slice(2, 4), yy = +d.slice(4, 8);
    const dt = new Date(yy, mm - 1, dd), now = new Date();
    if (yy < 1900 || dt.getFullYear() !== yy || dt.getMonth() !== mm - 1 || dt.getDate() !== dd || dt > now) return ta('e.nasc');
    let age = now.getFullYear() - yy; if (now.getMonth() < mm - 1 || (now.getMonth() === mm - 1 && now.getDate() < dd)) age--;
    return age < 18 ? ta('e.nasc.18') : '';
  }
  /* validação de formato por campo (só quando algo foi digitado) */
  const CHECK = {
    auUser: v => isUser(v.trim()) ? '' : ta('e.user.fmt'), auRecUser: v => isUser(v.trim()) ? '' : ta('e.user.fmt'),
    auCpf: v => isCURP(v) ? '' : ta('e.cpf'), auNasc: nascMsg,
    auEmail: v => isEmail(v.trim()) ? '' : ta('e.email'), auCel: v => celOk(v) ? '' : ta('e.cel')
  };
  /* rascunho: só em memória, nunca senha nem código */
  const DRAFT = {auUser: 'user', auRecUser: 'user', auCpf: 'cpf', auNasc: 'nasc', auEmail: 'email', auCel: 'cel', auPromo: 'promo'};
  const D = k => AU.draft[k] || '';
  function saveDraft() {
    if (!AU.el) return;
    Object.entries(DRAFT).forEach(([id, k]) => { const i = AU.el.querySelector('#' + id); if (i) AU.draft[k] = i.value; });
    const pb = AU.el.querySelector('#auPromoBox'); if (pb) AU.draft.promoOpen = !pb.hidden;
  }

  /* ---------- peças do formulário (sobre field/check/btn do core) ---------- */
  function auField(o, extra) {
    let h = field(o); const ex = attrs(extra || {});
    return ex ? h.replace('<input ', `<input ${ex} `) : h;
  }
  function rulesHTML(id) {
    return `<ul class="au-rules" id="${id}-r">${RULES.map(([k]) => `<li data-r="${k}"><i class="au-r-o" aria-hidden="true"></i>${ic('check-c')}<span>${ta('r.' + k)}</span> <span class="sr" data-st>${ta('r.pend')}</span></li>`).join('')}</ul>`;
  }
  function pwField(id, label, ac, o = {}) {
    const eye = `<button type="button" class="fld-act au-eye" data-act="auEye" aria-controls="${id}" aria-pressed="false" aria-label="${ta('mostrar.aria')}"><span aria-hidden="true">${ta('mostrar')}</span></button>`;
    return auField({id, label, type: 'password', autocomplete: ac, enter: o.enter || 'go', spell: false, action: eye},
      {'data-pw': 1, 'data-rules': o.rules ? 1 : null, autocapitalize: 'none', 'aria-describedby': `${id}-e ${id}-c${o.rules ? ' ' + id + '-r' : ''}`})
      + `<div class="au-row${o.right ? '' : ' au-row--c'}"><span class="au-caps" id="${id}-c" aria-live="polite"></span>${o.right || ''}</div>`
      + (o.rules ? rulesHTML(id) : '');
  }
  const userField = id => auField({id, label: ta('login.user'), placeholder: ta('login.user.ph'), autocomplete: 'username', inputmode: 'email', value: D('user'), enter: id === 'auUser' ? 'next' : 'send', spell: false}, {autocapitalize: 'none', autocorrect: 'off'});
  const submitBtn = (k) => btn(ta(k), {kind: 'luz', size: 'l', full: true, type: 'submit', id: 'auSubmit'});
  const lnk = (txt, act, arg, icn) => `<button type="button" class="lnk" data-act="${act}"${arg ? ` data-arg="${arg}"` : ''}>${icn ? ic(icn) : ''}${txt}</button>`;
  const dot = '<span class="au-dot" aria-hidden="true">·</span>';

  /* ---------- vistas ---------- */
  const V = {};
  V.login = {
    art: 'palco', why: true,
    head: () => ({t: ta('login.t'), s: ta('login.s')}),
    body: () => `<form class="au-form" id="auForm" novalidate>
        ${userField('auUser')}
        ${pwField('auPass', ta('login.pass'), 'current-password', {right: lnk(ta('login.esqueci'), 'auGo', 'recuperar')})}
        ${submitBtn('login.b')}
      </form>
      <p class="au-or"><span>${ta('login.ou')}</span></p>
      ${btn(ta('login.google'), {kind: 'sec', full: true, icon: 'google', act: 'auGoogle', id: 'auGoogle', cls: 'au-google'})}
      <p class="au-alt"><span>${ta('login.novo')}</span>${lnk(ta('login.criar'), 'auGo', 'cadastro1')}${dot}${lnk(ta('login.depois'), 'auClose')}</p>
      ${age(ta('login.age'))}`,
    submit(f, b) {
      const u = f.querySelector('#auUser'), p = f.querySelector('#auPass');
      const uv = u.value.trim(), pv = p.value;
      if (!uv && !pv) return run(b, ta('login.busy'), 700, () => finishLogin('login.ok'));
      const errs = [];
      if (!uv) errs.push([u, ta('e.user.vazio')]); else if (!isUser(uv)) errs.push([u, ta('e.user.fmt')]);
      if (!pv) errs.push([p, ta('e.pass.vazio')]);
      if (errs.length) return showErrs(errs);
      if (isCURP(uv)) u.value = MASK.curp(uv);
      run(b, ta('login.busy'), 900, () => {
        if (/pausa/i.test(uv)) return show('pausa');
        if (pv === '000000') return credFail(p);
        finishLogin('login.ok');
      });
    }
  };
  V.bloqueio = {
    art: 'pausa', phrase: 'blq',
    enter() { if (AU.lockUntil <= Date.now()) { AU.fails = 5; AU.lockUntil = Date.now() + 15 * 60e3; } },
    head: () => ({k: ta('blq.k'), t: ta('blq.t'), s: ta('blq.s')}),
    body: () => {
      const same = new Date(AU.lockUntil).toDateString() === new Date().toDateString();
      return `<div class="au-when"><span class="lab">${ta('blq.volta')}</span><b class="tnum">${same ? hhmm(AU.lockUntil) : ta('blq.amanha', {h: hhmm(AU.lockUntil)})}</b></div>
      <p class="au-p">${ta('blq.aviso')}</p>
      <div class="au-acts">${btn(ta('blq.b'), {kind: 'luz', size: 'l', full: true, act: 'auGo', attrs: {'data-arg': 'recuperar'}})}${btn(ta('blq.ok'), {kind: 'ghost', full: true, act: 'auClose'})}</div>
      ${age(ta('login.age'))}`;
    }
  };
  V.pausa = {
    art: 'pausa',
    enter() { if (!AU.pauseUntil) { const d = new Date(Date.now() + 7 * 864e5); d.setMinutes(d.getMinutes() < 30 ? 30 : 60, 0, 0); AU.pauseUntil = +d; } },
    desc: 'auS',
    head: () => ({k: ta('pau.k'), t: ta('pau.t')}),
    body: () => `<div class="au-when"><span class="lab">${ta('pau.ate')}</span><b class="tnum">${dmy(AU.pauseUntil)} · ${hhmm(AU.pauseUntil)}</b></div>
      <p class="au-p" id="auS">${ta('pau.s')}</p>
      <section class="au-lib" aria-labelledby="auLibT"><h3 class="lab" id="auLibT">${ta('pau.lib')}</h3>
        ${li({icon: 'saque', title: ta('pau.sacar'), sub: ta('pau.sacar.s')})}${li({icon: 'limite', title: ta('pau.lim'), sub: ta('pau.lim.s')})}
        <p class="au-small">${ta('pau.nota')}</p></section>
      <div class="au-acts">${btn(ta('pau.sup'), {kind: 'sec', full: true, icon: 'chat', act: 'auSup'})}${btn(ta('pau.ok'), {kind: 'ghost', full: true, act: 'auClose'})}</div>
      <p class="au-help">${ta('pau.ajuda')}</p>
      ${age(ta('pau.age'))}`
  };
  V.recuperar = {
    art: 'palco', step: [1, 3],
    head: () => ({k: ta('rec.k'), t: ta('rec1.t'), s: ta('rec1.s')}),
    body: () => `<form class="au-form" id="auForm" novalidate>${userField('auRecUser')}${submitBtn('rec1.b')}</form>
      <p class="au-alt">${lnk(ta('rec.voltar'), 'auGo', 'login', 'seta-e')}</p>`,
    submit(f, b) {
      const u = f.querySelector('#auRecUser'); const v = u.value.trim();
      if (v && !isUser(v)) return showErrs([[u, ta('e.user.fmt')]]);
      if (isCURP(v)) u.value = MASK.curp(v);
      run(b, ta('rec1.busy'), 800, () => { AU.resendAt = Date.now() + 30e3; show('recuperar2'); });
    }
  };
  V.recuperar2 = {
    art: 'palco', step: [2, 3],
    head: () => ({k: ta('rec.k'), t: ta('rec2.t'), s: ta('rec2.s')}),
    body: () => `<form class="au-form" id="auForm" novalidate>
        <div class="fld au-codefld"><label for="auCode">${ta('rec2.code')}</label>
          <div class="au-code"><input id="auCode" name="auCode" type="text" inputmode="numeric" pattern="[0-9]*" autocomplete="one-time-code" maxlength="6" data-mask="cod" enterkeyhint="go" aria-describedby="auCode-e auResend">
          <div class="au-code-b" aria-hidden="true">${'<i></i>'.repeat(6)}</div></div>
          <span class="fld-err" id="auCode-e" hidden></span></div>
        <p class="au-resend" id="auResend"></p>
        ${submitBtn('rec2.b')}
      </form>
      <p class="au-alt">${lnk(ta('rec2.trocar'), 'auGo', 'recuperar', 'seta-e')}</p>`,
    init() { codeBoxes(); resendPaint(); },
    submit(f, b) {
      const c = f.querySelector('#auCode'); const v = digits(c.value);
      if (v && v.length < 6) return showErrs([[c, ta('e.code.fmt')]]);
      run(b, ta('rec2.busy'), 700, () => {
        if (v === '000000') { const el = AU.el.querySelector('#auCode'); el.value = ''; codeBoxes(); return showErrs([[el, ta('e.code.nao')]]); }
        show('recuperar3');
      });
    }
  };
  V.recuperar3 = {
    art: 'palco', step: [3, 3],
    head: () => ({k: ta('rec.k'), t: ta('rec3.t'), s: ta('rec3.s')}),
    body: () => `<form class="au-form" id="auForm" novalidate>
        ${pwField('auNewPass', ta('rec3.pass'), 'new-password', {rules: true})}
        ${check({id: 'auSair', label: ta('rec3.sair'), on: true})}
        ${submitBtn('rec3.b')}
      </form>`,
    submit(f, b) {
      const p = f.querySelector('#auNewPass');
      if (p.value && !rulesOk(p.value)) return showErrs([[p, ta('e.pass.regras')]]);
      run(b, ta('rec3.busy'), 800, () => show('recuperado'));
    }
  };
  V.recuperado = {
    art: 'palco',
    enter() { AU.fails = 0; AU.lockUntil = 0; },
    head: () => ({k: ta('recok.k'), t: ta('recok.t')}),
    body: () => `<p class="au-fala">${ta('recok.fala')}</p>
      <div class="au-acts">${btn(ta('recok.b'), {kind: 'luz', size: 'l', full: true, act: 'auGo', attrs: {'data-arg': 'login'}})}</div>
      ${age(ta('login.age'))}`
  };
  V.cadastro1 = {
    art: 'conejo', step: [1, 2],
    enter() {
      const u = D('user').trim();
      if (u && isEmail(u) && !D('email')) AU.draft.email = u;
      if (u && isCURP(u) && !D('cpf')) AU.draft.cpf = MASK.curp(u);
    },
    head: () => ({k: ta('su.k'), t: ta('su1.t'), s: ta('su1.s')}),
    body: () => `<form class="au-form" id="auForm" novalidate>
        ${auField({id: 'auCpf', label: ta('su.cpf'), placeholder: ta('su.cpf.ph'), hint: ta('su.nota'), mask: 'curp', value: D('cpf'), enter: 'next', maxlength: 18, spell: false}, {'aria-describedby': 'auCpf-h auCpf-e auCpfQ', autocapitalize: 'characters', autocorrect: 'off'})}
        <div class="au-cpfq" id="auCpfQ" role="status" hidden></div>
        ${auField({id: 'auNasc', label: ta('su.nasc'), placeholder: ta('su.nasc.ph'), inputmode: 'numeric', mask: 'data', autocomplete: 'bday', value: D('nasc'), enter: 'next', maxlength: 10}, {'data-keep-err': 1})}
        ${auField({id: 'auEmail', label: ta('su.email'), placeholder: ta('su.email.ph'), type: 'email', inputmode: 'email', autocomplete: 'email', value: D('email'), enter: 'next', spell: false}, {autocapitalize: 'none'})}
        ${submitBtn('su1.b')}
      </form>
      <p class="au-alt"><span>${ta('su.tem')}</span>${lnk(ta('su.entrar'), 'auGo', 'login')}${dot}${lnk(ta('login.depois'), 'auClose')}</p>
      ${age(ta('su.age'))}`,
    init() { const c = AU.el.querySelector('#auCpf'); if (isCURP(c.value)) cpfCheck(c, true); },
    submit(f) {
      const errs = [];
      ['auCpf', 'auNasc', 'auEmail'].forEach(id => { const i = f.querySelector('#' + id); const m = i.value.trim() && CHECK[id](i.value); if (m) errs.push([i, m]); });
      if (errs.length) return showErrs(errs);
      show('cadastro2');
    }
  };
  V.cadastro2 = {
    art: 'conejo', step: [2, 2],
    head: () => ({k: ta('su.k'), t: ta('su2.t'), s: ta('su2.s')}),
    body: () => {
      const termos = ta('su.termos', {t: `<button type="button" class="lnk-in" data-act="auDoc" data-arg="termos">${ta('su.termos.t')}</button>`, p: `<button type="button" class="lnk-in" data-act="auDoc" data-arg="privacidade">${ta('su.termos.p')}</button>`});
      const open = !!AU.draft.promoOpen;
      return `<form class="au-form" id="auForm" novalidate>
        ${auField({id: 'auCel', label: ta('su.cel'), placeholder: ta('su.cel.ph'), type: 'tel', inputmode: 'tel', mask: 'cel', autocomplete: 'tel-national', prefix: '+52', value: D('cel'), enter: 'next', maxlength: 12})}
        ${pwField('auSuPass', ta('su.pass'), 'new-password', {rules: true, enter: 'next'})}
        <div class="au-promo">
          <button type="button" class="lnk au-promo-b" data-act="auPromo" aria-expanded="${open}" aria-controls="auPromoBox">${ic(open ? 'menos' : 'mais')}${ta('su.promo.abrir')}</button>
          <div id="auPromoBox"${open ? '' : ' hidden'}>${auField({id: 'auPromo', label: ta('su.promo'), hint: ta('su.promo.h'), value: D('promo'), enter: 'next', spell: false}, {autocapitalize: 'characters'})}</div>
        </div>
        <div class="fld au-ckf">${check({id: 'auTermos', html: termos, req: true}).replace('<input type="checkbox"', '<input type="checkbox" aria-describedby="auTermos-e"')}<span class="fld-err" id="auTermos-e" hidden></span></div>
        ${check({id: 'auOfertas', label: ta('su.ofertas')})}
        ${submitBtn('su2.b')}
      </form>
      <p class="au-alt">${lnk(ta('su.voltar'), 'auGo', 'cadastro1', 'seta-e')}${dot}${lnk(ta('login.depois'), 'auClose')}</p>
      ${age(ta('su.age'))}`;
    },
    submit(f, b) {
      const val = id => (f.querySelector('#' + id) || {}).value || '';
      const typed = ['cpf', 'nasc', 'email'].some(k => D(k).trim()) || ['auCel', 'auSuPass', 'auPromo'].some(id => val(id).trim());
      const errs = [];
      const cel = f.querySelector('#auCel'), pw = f.querySelector('#auSuPass'), tm = f.querySelector('#auTermos');
      if (cel.value.trim() && !celOk(cel.value)) errs.push([cel, ta('e.cel')]);
      if (pw.value && !rulesOk(pw.value)) errs.push([pw, ta('e.pass.regras')]);
      if (typed && !tm.checked) errs.push([tm, ta('e.termos')]);
      if (errs.length) return showErrs(errs);
      run(b, ta('su2.busy'), 1000, () => { AU.draft = {}; AU.fails = 0; setSession(true); show('bemvindo'); });
    }
  };
  V.bemvindo = {
    art: 'conejo', phrase: 'bv',
    head: () => ({k: ta('bv.k'), t: ta('bv.t')}),
    body: () => `<p class="au-fala">${ta('bv.fala', {n: esc(ME.primeiro)})}</p>
      <p class="note">${ic('camera')}<span>${ta('bv.kyc')}</span></p>
      <div class="au-acts">
        ${btn(ta('bv.dep'), {kind: 'luz', size: 'l', full: true, icon: 'depositar', act: 'auDep'})}
        ${btn(ta('bv.lim'), {kind: 'sec', full: true, icon: 'limite', act: 'auLim'})}
        ${btn(AU.then ? ta('bv.cont') : ta('bv.casa'), {kind: 'ghost', full: true, act: 'auCasa'})}
      </div>
      ${age(ta('bv.age'))}`
  };

  /* ---------- arte ---------- */
  const ART = {
    palco: {img: 's/palco', pos: '50% 30%', k: 'arte.login.k', p: 'arte.login'},
    pausa: {img: 's/pausa', pos: '52% 40%', k: 'arte.pausa.k', p: 'arte.pausa'},
    conejo: {host: 'conejo', k: 'arte.su.k', p: 'arte.su'}
  };
  function artHTML(v) {
    const a = ART[v.art];
    const k = v.phrase ? 'arte.' + v.phrase + '.k' : a.k, p = v.phrase ? 'arte.' + v.phrase : a.p;
    const pic = a.img
      ? `<div class="au-art-im">${img(a.img, {alt: '', lazy: false, sizes: '(min-width:1024px) 420px, (min-width:768px) 50vw, 100vw', style: `object-position:${a.pos}`})}</div>`
      : `<div class="au-art-im"></div><div class="au-host"><div class="ped ped--noite">${img('c/' + a.host, {alt: '', lazy: false, sizes: '(min-width:768px) 280px, 110px'})}<div class="ped-s"><i></i><i></i><i></i></div></div></div>`;
    return `<div class="au-art" aria-hidden="true">${pic}${logo('au-logo')}<div class="au-plate"><span class="lab">${ta(k)}</span><p>${ta(p)}</p></div></div>`;
  }

  /* ---------- painel ---------- */
  function mount() {
    let opener = document.activeElement;
    if (typeof SH !== 'undefined' && SH) { opener = SH.opener || opener; closeSheet(true); }
    AU.opener = opener && opener !== document.body ? opener : null;
    const scrim = document.createElement('div'); scrim.className = 'au-scrim';
    scrim.addEventListener('click', () => { if (!AU.busy) close(); });
    const el = document.createElement('div'); el.id = 'au';
    el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-labelledby', 'auT');
    document.body.append(scrim, el);
    AU.inerted = [...document.body.children].filter(n => n !== el && n !== scrim && !n.matches('script, .toasts') && !n.inert);
    AU.inerted.forEach(n => { n.inert = true; });
    document.body.classList.add('sh-lock');
    el.addEventListener('keydown', onKey); el.addEventListener('keyup', onCaps);
    el.addEventListener('focusin', onFocusIn); el.addEventListener('focusout', onBlur);
    el.addEventListener('input', onInput); el.addEventListener('submit', onSubmit);
    AU.el = el; AU.scrim = scrim; AU.full = false; AU.scr = S.cur + ':' + S.param;
    requestAnimationFrame(() => requestAnimationFrame(() => { if (AU.el === el) { el.classList.add('is-open'); scrim.classList.add('is-open'); } }));
  }
  function show(view) {
    if (!V[view]) view = 'login';
    saveDraft();
    AU.timers.forEach(clearTimeout); AU.timers = []; AU.busy = false;
    AU.view = view;
    const v = V[view]; if (v.enter) v.enter();
    const h = v.head(); const why = v.why && AU.motivo;
    const el = AU.el;
    el.className = ['au', 'au--' + view, 'au--' + v.art, why && 'has-why', AU.full && 'is-full', el.classList.contains('is-open') && 'is-open'].filter(Boolean).join(' ');
    const step = v.step ? `<span class="au-steps au-steps--${v.step[1]}" aria-hidden="true">${Array.from({length: v.step[1]}, (_, i) => `<i class="${i + 1 < v.step[0] ? 'is-done' : i + 1 === v.step[0] ? 'is-on' : ''}"></i>`).join('')}</span>` : '';
    const kicker = h.k ? `<p class="au-k">${step}<span class="lab">${esc(h.k)}</span>${v.step ? `<span class="au-k-n tnum">${ta('passo', {n: v.step[0], t: v.step[1]})}</span>` : ''}</p>` : '';
    el.innerHTML = `${artHTML(v)}
      <button type="button" class="au-x" data-act="auClose" aria-label="${ta('fechar')}">${ic('fechar')}</button>
      <div class="au-main">
        ${why ? `<p class="au-why" id="auWhy">${ic('cadeado')}<span>${esc(AU.motivo)}</span></p>` : ''}
        <div class="au-bd"><div class="au-in">
          <header class="au-hd">${kicker}<h2 id="auT" tabindex="-1">${esc(h.t)}</h2>${h.s && !why ? `<p id="auS">${h.s}</p>` : ''}</header>
          <div class="au-alertbox"></div>
          ${v.body()}
        </div></div>
      </div>`;
    el.setAttribute('aria-describedby', why ? 'auWhy' : (h.s || v.desc) ? 'auS' : '');
    if (!el.getAttribute('aria-describedby')) el.removeAttribute('aria-describedby');
    el.querySelector('.au-bd').scrollTop = 0;
    if (v.init) v.init();
    focusStart(view);
  }
  function focusStart(view) {
    later(() => {
      if (!AU.el) return;
      let f = null;
      if (MQ.matches && AU.el.querySelector('#auForm')) {
        f = [...AU.el.querySelectorAll('.au-form input:not([type=checkbox])')].find(i => !i.value && i.offsetParent);
      }
      (f || AU.el.querySelector('#auT')).focus({preventScroll: true});
    }, 60);
  }
  function close(o = {}) {
    if (!AU.el) return;
    if (!o.done) saveDraft();
    AU.timers.forEach(clearTimeout); AU.timers = [];
    const {el, scrim, opener} = AU;
    AU.el = AU.scrim = null; AU.busy = false; AU.view = ''; AU.full = false; AU.then = null; AU.motivo = '';
    AU.inerted.forEach(n => { n.inert = false; }); AU.inerted = [];
    document.body.classList.remove('sh-lock');
    el.inert = true; el.classList.remove('is-open'); scrim.classList.remove('is-open');
    setTimeout(() => { el.remove(); scrim.remove(); }, 300);
    if (opener && opener.isConnected && !opener.closest('[inert]')) opener.focus({preventScroll: true});
    else focusTitle();
  }
  function open(view = 'login', o = {}) {
    if (view === 'signup') view = 'cadastro1'; /* apelido */
    if (!AU.el) { AU.motivo = o.motivo || ''; AU.then = o.then || null; }
    else { if ('motivo' in o) AU.motivo = o.motivo || ''; if ('then' in o) AU.then = o.then || null; }
    if (S.in && /^(login|cadastro1|cadastro2|recuperar\d?|bloqueio)$/.test(view)) { const th = AU.then; if (AU.el) close({done: true}); AU.then = null; return th && th(); }
    if (view === 'login' && AU.lockUntil > Date.now()) view = 'bloqueio';
    if (view === 'login' && AU.lockUntil && AU.lockUntil <= Date.now()) { AU.lockUntil = 0; AU.fails = 0; }
    if (!AU.el) mount();
    show(view);
  }
  function finishLogin(k) {
    const then = AU.then; AU.fails = 0; AU.draft = {};
    close({done: true});
    setSession(true);
    toast(ta(k || 'login.ok', {n: ME.primeiro}), {icon: 'check-c'});
    if (then) { try { then(); } catch (e) { console.error(e); } }
  }

  /* ---------- estados: erro, carregando, credenciais ---------- */
  function alertTop(html) {
    const box = AU.el && AU.el.querySelector('.au-alertbox'); if (!box) return;
    box.innerHTML = `<div class="alert au-alert" role="alert">${ic('alerta')}<div>${html}</div></div>`;
  }
  function clearAll() {
    if (!AU.el) return;
    const box = AU.el.querySelector('.au-alertbox'); if (box) box.innerHTML = '';
    AU.el.querySelectorAll('.fld.is-err input').forEach(clearErr);
  }
  function showErrs(list) {
    list.forEach(([i, m]) => setErr(i, m));
    alertTop(`<b>${list.length === 1 ? ta('e.resumo1') : ta('e.resumoN', {n: list.length})}</b>`);
    list[0][0].focus();
  }
  function credFail(p) {
    AU.fails++;
    if (AU.fails >= 5) { AU.lockUntil = Date.now() + 15 * 60e3; return show('bloqueio'); }
    const rest = 5 - AU.fails;
    let h = `<b>${ta('e.cred')}</b><span>${ta('e.cred.s')}${AU.fails >= 2 ? ' ' + (rest === 1 ? ta('e.cred.rest1') : ta('e.cred.rest', {n: rest})) : ''}</span>`;
    if (AU.fails >= 3) h += lnk(ta('e.cred.rec'), 'auGo', 'recuperar').replace('class="lnk"', 'class="lnk au-alert-l"');
    alertTop(h);
    p.value = ''; p.focus();
  }
  function run(b, label, ms, fn) {
    AU.busy = true; clearAll();
    const scope = b.closest('form') || AU.el; const keep = b.innerHTML;
    b.style.width = b.offsetWidth + 'px';
    b.innerHTML = `<span class="busy" aria-hidden="true"><i></i><i></i><i></i></span><span>${esc(label)}</span>`;
    b.setAttribute('aria-busy', 'true'); scope.setAttribute('aria-busy', 'true'); AU.el.classList.add('is-busy');
    const ins = [...AU.el.querySelectorAll('input')]; const ro = ins.map(i => i.readOnly); ins.forEach(i => { i.readOnly = true; });
    const others = [...AU.el.querySelectorAll('.au-main button')].filter(x => x !== b); others.forEach(x => x.setAttribute('aria-disabled', 'true'));
    later(() => {
      AU.busy = false; if (!AU.el) return;
      b.innerHTML = keep; b.style.width = ''; b.removeAttribute('aria-busy'); scope.removeAttribute('aria-busy'); AU.el.classList.remove('is-busy');
      ins.forEach((i, k) => { i.readOnly = ro[k]; }); others.forEach(x => x.removeAttribute('aria-disabled'));
      fn();
    }, ms);
  }

  /* ---------- comportamento ao vivo ---------- */
  function codeBoxes() {
    const i = AU.el && AU.el.querySelector('#auCode'); if (!i) return;
    const v = digits(i.value); const on = document.activeElement === i;
    AU.el.querySelectorAll('.au-code-b i').forEach((b, k) => { b.textContent = v[k] || ''; b.classList.toggle('is-cur', on && k === Math.min(v.length, 5)); b.classList.toggle('is-fill', !!v[k]); });
  }
  function resendPaint() {
    const p = AU.el && AU.el.querySelector('#auResend'); if (!p) return;
    const wait = AU.resendAt - Date.now();
    if (wait > 0) { p.innerHTML = `${ic('relogio', 'ic--xs')}<span>${ta('rec2.espera')}</span>`; later(resendPaint, wait + 50); }
    else p.innerHTML = `<span>${ta('rec2.pode')}</span>${lnk(ta('rec2.reenviar'), 'auResend')}`;
  }
  function rules(i) {
    const ul = AU.el.querySelector('#' + i.id + '-r'); if (!ul) return;
    RULES.forEach(([k, f]) => { const liE = ul.querySelector(`[data-r="${k}"]`); const ok = f(i.value); liE.classList.toggle('is-ok', ok); liE.querySelector('[data-st]').textContent = ok ? ta('r.ok') : ta('r.pend'); });
  }
  function cpfCheck(i, instant) {
    const d = MASK.curp(i.value); const box = AU.el.querySelector('#auCpfQ'); if (!box) return;
    if (!isCURP(d)) {
      AU.cpfOk = ''; box.hidden = true; box.innerHTML = ''; box.classList.remove('is-ok');
      if (d.length === 18) setErr(i, ta('e.cpf')); /* 18 caracteres fora do formato: avisa na hora, com exemplo */
      return;
    }
    if (AU.cpfOk === d && box.classList.contains('is-ok')) return;
    AU.cpfOk = d;
    const done = () => { if (!AU.el || AU.cpfOk !== d) return; box.classList.add('is-ok'); box.innerHTML = `${ic('id')}<div><small class="lab">${ta('su.cpf.tit')}</small><b>${esc(nomeMask())}</b><small>${ta('su.cpf.fonte')}</small></div>`; };
    box.hidden = false; box.classList.remove('is-ok');
    if (instant) return done();
    box.innerHTML = `<span class="busy" aria-hidden="true"><i></i><i></i><i></i></span><span>${ta('su.cpf.busca')}</span>`;
    later(done, 650);
  }
  function nascLive(i) {
    const d = digits(i.value);
    if (d.length < 8) { if (i.closest('.fld.is-err')) clearErr(i); return; }
    const m = nascMsg(i.value); if (m) setErr(i, m); else clearErr(i);
  }

  /* ---------- eventos do painel (ouvintes no próprio painel, não globais) ---------- */
  function onSubmit(e) {
    e.preventDefault(); if (AU.busy) return;
    const v = V[AU.view]; const f = e.target; if (!v || !v.submit) return;
    clearAll(); v.submit(f, f.querySelector('#auSubmit'));
  }
  function onKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); if (!AU.busy) close(); return; }
    if (e.key === 'Tab') {
      const f = [...AU.el.querySelectorAll('button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])')].filter(x => !x.disabled && x.tabIndex >= 0 && (x.offsetParent || x.getClientRects().length));
      if (!f.length) return;
      const a = document.activeElement, first = f[0], last = f[f.length - 1];
      if (e.shiftKey && (a === first || a === AU.el.querySelector('#auT') || !AU.el.contains(a))) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && (a === last || !AU.el.contains(a))) { e.preventDefault(); first.focus(); }
    }
    onCaps(e);
  }
  function onCaps(e) {
    const i = e.target; if (!i.matches || !i.matches('[data-pw]') || !e.getModifierState) return;
    const c = AU.el && AU.el.querySelector('#' + i.id + '-c'); if (!c) return;
    const on = e.getModifierState('CapsLock'); const txt = on ? ta('caps') : '';
    if (c.textContent !== txt) c.textContent = txt;
  }
  function onFocusIn(e) {
    const i = e.target;
    if (!MQ.matches && !AU.full && i.matches('input, select, textarea') && !i.matches('[type=checkbox]')) { AU.full = true; AU.el.classList.add('is-full'); }
    if (i.id === 'auCode') codeBoxes();
  }
  function onBlur(e) {
    const i = e.target; if (!AU.el || AU.busy || !i.matches || !i.matches('input')) return;
    if (i.id === 'auCode') setTimeout(codeBoxes, 0);
    if (i.id === 'auUser' || i.id === 'auRecUser') { const v = i.value.trim(); if (isCURP(v)) i.value = MASK.curp(v); }
    /* só valida ao passar para outro campo: ao tocar num botão, o envio valida tudo (o erro não empurra o botão no meio do toque) */
    const chk = CHECK[i.id]; const nx = e.relatedTarget;
    if (!chk || !i.value.trim() || !nx || !nx.matches || !nx.matches('input:not([type=checkbox]), select, textarea')) return;
    const m = chk(i.value); if (m) setErr(i, m);
  }
  function onInput(e) {
    const i = e.target;
    setTimeout(() => { /* depois da máscara do core */
      if (!AU.el) return;
      if (i.id === 'auCpf') cpfCheck(i);
      else if (i.id === 'auNasc') nascLive(i);
      else if (i.id === 'auCode') codeBoxes();
      if (i.dataset.rules) rules(i);
      if (i.type === 'checkbox' && i.checked && i.closest('.fld.is-err')) clearErr(i);
    }, 0);
  }

  /* ---------- ações (delegação do core) ---------- */
  const idle = fn => (el, e) => { if (!AU.busy) fn(el, e); };
  ACT.auGo = idle(el => { saveDraft(); show(el.dataset.arg); });
  ACT.auClose = idle(() => close());
  ACT.auEye = el => {
    const i = AU.el && AU.el.querySelector('#' + el.getAttribute('aria-controls')); if (!i) return;
    const on = i.type === 'password'; i.type = on ? 'text' : 'password';
    el.setAttribute('aria-pressed', String(on)); el.querySelector('span').textContent = on ? ta('ocultar') : ta('mostrar');
  };
  ACT.auGoogle = idle(el => run(el, ta('login.google.busy'), 900, () => finishLogin('login.ok.google')));
  ACT.auResend = idle(() => { AU.resendAt = Date.now() + 30e3; toast(ta('rec2.reenviado'), {icon: 'email'}); resendPaint(); const c = AU.el.querySelector('#auCode'); if (c) c.focus(); });
  ACT.auPromo = el => {
    const box = AU.el.querySelector('#auPromoBox'); const open = box.hidden; box.hidden = !open;
    el.setAttribute('aria-expanded', String(open)); el.querySelector('use').setAttribute('href', '#i-' + (open ? 'menos' : 'mais'));
    if (open) AU.el.querySelector('#auPromo').focus();
  };
  /* documento legal por cima do painel: o sheet do core deixa o painel inerte e, ao fechar, desfaz TODO inert da página.
     CORE-FIX (local): rebaixa o painel sob o scrim do documento e reaplica o inert da página quando o documento fecha. */
  ACT.auDoc = el => {
    if (!AU.el) return ACT.doc(el);
    AU.el.classList.add('is-under'); AU.scrim.classList.add('is-under');
    ACT.doc(el);
    if (typeof SH !== 'undefined' && SH) {
      const prev = SH.onClose;
      SH.onClose = x => {
        if (prev) prev(x);
        if (!AU.el) return;
        AU.el.classList.remove('is-under'); AU.scrim.classList.remove('is-under');
        AU.el.inert = false; AU.scrim.inert = false;
        AU.inerted.forEach(n => { n.inert = true; });
        document.body.classList.add('sh-lock');
      };
    }
  };
  ACT.auSup = () => { close({done: true}); ACT.suporte(); };
  ACT.auDep = () => { close({done: true}); go('deposito'); };
  ACT.auLim = () => { close({done: true}); go('limites'); };
  ACT.auCasa = () => { const th = AU.then; close({done: true}); if (th) { try { th(); } catch (e) { console.error(e); } } };

  /* sair volta a visitante de verdade: sem ação pendente, sem rascunho */
  bus.on('session', on => { if (!on) { AU.then = null; AU.draft = {}; if (AU.el) close({done: true}); } });
  /* troca de tela (voltar do navegador) fecha o painel guardando o rascunho; re-render da mesma tela não fecha */
  bus.on('screen', ({k, param}) => { if (AU.el && AU.scr !== k + ':' + param) close(); });
  /* pré-carrega a arte do login para o visitante, sem disputar com a primeira tela */
  setTimeout(() => { if (!S.in) { const i = new Image(); i.src = MQ.matches ? 'img/s/palco.webp' : 'img/s/palco-s.webp'; } }, 3000);

  AUTH = {
    isIn: () => S.in,
    open,
    require(motivo, then) { if (S.in) return then && then(); open('login', {motivo: motivo || '', then: then || null}); },
    login(o) { finishLogin(o && o.google ? 'login.ok.google' : 'login.ok'); },
    logout() { if (AU.el) close({done: true}); closeSheet(true); setSession(false); toast(t('c.menu.sair.ok'), {icon: 'sair'}); render(); },
    close: () => close()
  };
})();
