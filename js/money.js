/* money.js · Depósito (§5.9), Saque (§5.10), Carteira (§5.11) e comprovante. Fluxos em §6.3. Mercado México (LOCALE.md).
   Prefixo dn-, textos em TXT.dn. Tom: calma no dinheiro — sem fichas, moedas, festa ou exclamação; prova, não promessa.
   Personagem em 1ª pessoa só em vazios e confirmações (Ratón = depósito, Dragón = saque).
   Métodos: depósito spei · deb · cre · oxxo; saque spei · tdd (tarjeta de débito).
   Nomes de função herdados da v1 (Pix): dnPixStart gera a CLABE do SPEI, dnTraGo gera a referência OXXO,
   dnPixSheet abre o painel do pagamento pendente (SPEI ou OXXO), dnLastPix mostra "Como la última vez" do SPEI. */
TXT.dn = {
  /* comuns */
  'saldo': 'Saldo actual', 'idv': 'Identidad verificada', 'age': 'Solo mayores de 18 años. Juega con responsabilidad.',
  'v.l': 'Monto', 'v.h.dep': 'Mínimo {min} · máximo {max} [por confirmar]', 'v.h.saq': 'Mínimo {min} [por confirmar] · disponible {max}',
  'v.vazio': 'Escribe un monto. Ejemplo: 500.00.', 'v.min.dep': 'El mínimo para depositar es {min} [por confirmar]. Ejemplo: 100.00.',
  'v.max.dep': 'El máximo por depósito es {max} [por confirmar]. Divídelo en más de un depósito.',
  'v.min.saq': 'El mínimo para retirar es {min} [por confirmar].', 'v.max.saq': 'Tienes {max} disponible. Elige un monto hasta esa cantidad.',
  'q.dep': 'Cuánto depositar', 'q.saq': 'Cuánto retirar', 'q.total': 'Saldo total', 'q.over': 'supera tu límite', 'q.over.saq': 'supera tu disponible',
  'tg.pad': 'Predeterminada', 'tg.ok': 'Verificada', 'tg.no': 'Sin verificar', 'tg.pend': 'En verificación', 'tg.ult': 'Última vez',
  /* depósito */
  'dep.t': 'Depositar.', 'dep.s': 'SPEI, tarjeta o efectivo en OXXO. Cuentas y tarjetas, siempre a tu nombre.',
  'met.l': 'Método de depósito', 'met.spei': 'SPEI', 'met.deb': 'Débito', 'met.cre': 'Crédito', 'met.oxxo': 'OXXO',
  'last.l': 'Como la última vez', 'last.s': 'Cuenta a tu nombre · {v} {quando}', 'last.trocar': 'Cambiar', 'last.hoje': 'hoy a las {h}', 'last.em': 'el {d}',
  'de.l': 'Desde qué cuenta transfieres', 'de.s': 'Cuenta a tu nombre', 'de.outra': 'Otra cuenta a tu nombre', 'de.outra.s': 'Transfiere desde la app de cualquier banco donde tengas cuenta a tu nombre.',
  'go.spei': 'Generar CLABE para {v}', 'go.spei0': 'Generar CLABE', 'go.card': 'Depositar {v}', 'go.card0': 'Depositar', 'go.oxxo': 'Generar referencia para {v}', 'go.oxxo0': 'Generar referencia',
  'lim.passa': 'Este monto supera tu límite {per} de depósito.', 'lim.cabe.dia': 'Hoy todavía puedes depositar {v}.', 'lim.cabe.semana': 'Esta semana todavía puedes depositar {v}.', 'lim.cabe.mes': 'Este mes todavía puedes depositar {v}.',
  'lim.regra': 'Ese límite lo pusiste tú, y aquí se respeta.', 'lim.usar': 'Usar {v}', 'lim.ajustar': 'Ajustar límite',
  'lim.sem.t': 'Sin límite de depósito', 'lim.sem.s': 'Puedes poner un límite diario, semanal o mensual. Vale para SPEI, tarjeta y OXXO.', 'lim.sem.b': 'Definir límite',
  'lim.fim.t': 'Llegaste a tu límite.', 'lim.fim.s': 'Soy el Ratón: llegaste al límite que pusiste. Vuelve a empezar en el siguiente periodo [hora por confirmar].', 'lim.fim.b': 'Ver mis límites',
  /* SPEI: CLABE de depósito única + referência */
  'spei.gerando': 'Generando tu CLABE…', 'spei.t': 'Transfiere por SPEI.', 'spei.valor': 'Monto a transferir',
  'spei.clabe': 'CLABE de depósito', 'spei.ref': 'Referencia', 'spei.banco': 'Banco', 'spei.benef': 'Beneficiario',
  'spei.op.banco': '[por confirmar]', 'spei.op.benef': '[razón social por confirmar]',
  'spei.copiar': 'Copiar CLABE', 'spei.copiado': 'CLABE copiada.', 'spei.ref.copiar': 'Copiar referencia', 'spei.ref.ok': 'Referencia copiada.',
  'spei.unica': 'Esta CLABE es solo para este depósito [vigencia por confirmar].',
  'spei.h1': 'Abre la app de tu banco y elige Transferir.', 'spei.h1s': 'Pega la CLABE como cuenta nueva.', 'spei.h2': 'Escribe el monto exacto y la referencia.', 'spei.h2s': 'Transfiere desde una cuenta a tu nombre.',
  'spei.h3': 'Vuelve aquí y toca Ya transferí.', 'spei.h3s': 'Acreditamos cuando tu banco confirme.',
  'spei.ya': 'Ya transferí', 'spei.depois': 'Pagar después', 'spei.conf': 'Confirmando con tu banco…',
  'pend.t': 'SPEI de {v} en espera de tu transferencia.', 'pend.s': 'Usa la CLABE solo para este depósito [vigencia por confirmar].', 'pend.ver': 'Ver CLABE', 'pend.canc': 'Cancelar',
  'pend.cancok': 'Depósito cancelado. No se cobró nada.', 'pend.depois': 'Tu CLABE sigue aquí, lista para este depósito.',
  'pend.ox.t': 'Referencia OXXO de {v} por pagar.', 'pend.ox.s': 'Vence el [por confirmar].', 'pend.ox.ver': 'Ver referencia', 'pend.ox.depois': 'Tu referencia sigue aquí. Llévala a cualquier OXXO.',
  /* OXXO: referencia de pago para pagar em loja */
  'oxxo.l': 'Pago en efectivo', 'oxxo.info.t': 'En cualquier tienda OXXO', 'oxxo.info.s': 'Generamos una referencia para este depósito y la pagas en efectivo. Acreditamos cuando OXXO confirme.',
  'oxxo.gerando': 'Generando tu referencia…', 'oxxo.t': 'Paga en efectivo en OXXO.', 'oxxo.valor': 'Monto a pagar',
  'oxxo.ref': 'Referencia de pago', 'oxxo.copiar': 'Copiar referencia', 'oxxo.copiado': 'Referencia copiada.', 'oxxo.bar': 'Código de barras de la referencia {r}', 'oxxo.exp': 'Vence el [por confirmar].',
  'oxxo.h1': 'Ve a cualquier tienda OXXO.', 'oxxo.h1s': 'Dile en caja que vas a pagar con una referencia.', 'oxxo.h2': 'Muestra el código o dicta la referencia.', 'oxxo.h2s': 'Paga el monto exacto en efectivo. OXXO cobra una comisión [por confirmar].',
  'oxxo.h3': 'Guarda tu ticket.', 'oxxo.h3s': 'Acreditamos cuando OXXO confirme el pago.',
  'oxxo.ya': 'Ya pagué en OXXO', 'oxxo.reg': 'Registrando tu pago…', 'oxxo.de': 'Efectivo en OXXO', 'oxxo.st': 'En espera de OXXO',
  /* tarjetas */
  'card.l': 'Tarjeta', 'card.sub': '{n} · vence {val}', 'card.novo': 'Agregar tarjeta', 'card.novo.t': 'Tarjeta nueva', 'card.cancel': 'Cancelar',
  'card.num': 'Número de la tarjeta', 'card.nome': 'Nombre en la tarjeta', 'card.nome.ph': 'Como aparece en la tarjeta', 'card.val': 'Vencimiento', 'card.cvv': 'CVV', 'card.cvv.h': '3 o 4 dígitos al reverso',
  'card.salvar': 'Guardar esta tarjeta para tus próximos depósitos', 'card.tit': 'Solo tarjetas a nombre de {n}, titular de la cuenta.', 'card.sum': 'Revisa los datos de la tarjeta.',
  'card.e.num': 'Revisa el número: son 16 dígitos. Ejemplo: 5579 0000 0000 4417.', 'card.e.nome': 'Escribe el nombre como aparece en la tarjeta. Ejemplo: GUILLERMO PEREZ.',
  'card.e.val': 'Usa mes y año. Ejemplo: 08/29.', 'card.e.venc': 'Esta tarjeta ya venció. Usa otra tarjeta.', 'card.e.cvv': 'Son 3 o 4 dígitos al reverso. Ejemplo: 123.',
  'card.aut': 'Autorizando con tu banco…', 'card.saved': 'Tarjeta guardada para tus próximos depósitos.',
  'ok.dep.t': 'Depósito confirmado.', 'ok.dep.say': 'Soy el Ratón: tu depósito de {v} ya está en tu saldo.',
  'ok.oxxo.t': 'Pago informado.', 'ok.oxxo.say': 'Soy el Ratón: cuando OXXO confirme tu pago de {v}, entra a tu saldo. Te aviso aquí.',
  'ok.saldo': 'Saldo ahora', 'ok.cart': 'Ver en la billetera', 'ok.fechar': 'Cerrar',
  /* saque */
  'saq.t': 'Retirar.', 'saq.s': 'A una cuenta CLABE o tarjeta de débito a tu nombre.', 'saq.met': 'Método de retiro', 'saq.m.spei': 'SPEI', 'saq.m.tdd': 'Tarjeta de débito',
  'saq.disp': 'Disponible para retirar', 'saq.disp.s': 'Saldo real. El bono no se puede retirar.',
  'saq.conta.l': 'A qué cuenta CLABE', 'saq.card.l': 'A qué tarjeta de débito', 'saq.verif': 'Verificar cuenta', 'saq.verif.s': 'Para usarla, confirma que la cuenta está a tu nombre.',
  'saq.verif.ok': 'Pedimos la verificación de la cuenta. Te avisamos cuando termine.', 'saq.verif.pend': 'Verificación pedida. Te avisamos cuando termine.',
  'saq.conta.novo': 'Agregar cuenta CLABE', 'conta.t': 'Cuenta CLABE nueva', 'conta.clabe': 'CLABE', 'conta.clabe.h': '18 dígitos. La encuentras en la app de tu banco.',
  'conta.banco': 'Banco', 'conta.banco0': 'Elige el banco', 'conta.tit': 'Titular: {n}.', 'conta.tit.s': 'Solo a cuentas a tu nombre.', 'conta.salvar': 'Guardar cuenta',
  'conta.ok': 'Cuenta guardada y verificada a tu nombre.', 'conta.e.banco': 'Elige el banco de la cuenta.',
  'conta.e.clabe': 'La CLABE tiene 18 dígitos. Ejemplo: 012 180 01234567891 2.', 'conta.e.dv': 'Revisa la CLABE: el último dígito no coincide. Cópiala tal como aparece en tu banco.',
  'saq.card.nota': 'Retiramos solo a tarjetas de débito a tu nombre que ya usaste para depositar [por confirmar].', 'saq.card.novo': 'Agregar tarjeta de débito',
  'saq.e.sel': 'Elige a dónde va el retiro.',
  'go.saq': 'Retirar {v}', 'go.saq0': 'Retirar', 'saq.pedindo': 'Solicitando tu retiro…', 'saq.nota': 'Cada etapa aparece en tu Billetera: solicitado, en revisión y enviado.',
  'ok.saq.t': 'Tu retiro ya va en camino.', 'ok.saq.say': 'Soy el Dragón: pedí tu retiro de {v}. Te aviso en cada etapa.', 'ok.saq.acomp': 'Seguir en la billetera',
  'saq.vazio.t': 'Sin saldo para retirar por ahora.', 'saq.vazio.s': 'Soy el Dragón: cuando tengas saldo, lo llevo hasta tu cuenta a tu nombre.', 'saq.vazio.b': 'Depositar',
  'st.l': 'Etapas del retiro', 'st.1': 'Solicitado', 'st.2': 'En revisión', 'st.3': 'Enviado',
  'st.1s': 'Recibimos tu solicitud.', 'st.2s': 'Revisamos que el destino esté a tu nombre.', 'st.3s': 'Enviamos el dinero a tu cuenta.',
  'st.feito': 'Listo', 'st.agora': 'Ahora', 'st.prox': 'Después',
  /* carteira */
  'cart.t': 'Billetera.', 'cart.s': 'Tu saldo y cada movimiento, con comprobante.',
  'cart.real': 'Saldo real', 'cart.real.s': 'Disponible para retirar', 'cart.anal': '{v} en revisión',
  'cart.bon': 'Bono', 'cart.bon.s': 'Para apostar. No se puede retirar.', 'cart.bon.0': 'Ningún bono activo por ahora.', 'cart.bon.ver': 'Ver mis bonos', 'cart.tc': '+18 · Aplican T&C',
  'cart.boas.t': 'Bono de bienvenida.', 'cart.boas.s': 'Se activa después de tu primer depósito [monto y reglas por confirmar].',
  'cart.dep': 'Depositar', 'cart.saq': 'Retirar', 'cart.saldos': 'Saldos', 'org.l': 'Origen', 'tt.l': 'Tipo de movimiento',
  'org.todos': 'Todos', 'org.slots': 'Slots', 'org.cassino': 'Casino', 'org.crash': 'Crash', 'org.sport': 'Sportbook', 'org.fav': 'Favoritos',
  'tt.geral': 'General', 'tt.dep': 'Depósitos', 'tt.sac': 'Retiros', 'tt.gan': 'Ganancias',
  'lst.': 'Movimientos más recientes.', 'lst.hoje': 'Movimientos de hoy.', 'lst.7': 'Últimos 7 días.', 'lst.30': 'Últimos 30 días.', 'lst.90': 'Últimos 90 días.',
  'lst.n': '{n} movimientos', 'lst.n1': '1 movimiento', 'lst.n0': 'Ningún movimiento',
  'per.b': 'Filtrar por periodo', 'per.b.on': 'Periodo: {p}', 'per.t': 'Filtrar por periodo.',
  'per.': 'Más recientes', 'per.s': 'Todo, del más nuevo al más antiguo', 'per.hoje': 'Hoy', 'per.7': 'Últimos 7 días', 'per.30': 'Últimos 30 días', 'per.90': 'Últimos 90 días',
  'per.c.hoje': 'hoy', 'per.c.7': '7 días', 'per.c.30': '30 días', 'per.c.90': '90 días',
  'tp.dep': 'Depósito', 'tp.sac': 'Retiro', 'tp.gan': 'Ganancia', 'tp.apo': 'Apuesta', 'in': 'Entrada', 'out': 'Salida',
  'og.slots': 'Slots', 'og.cassino': 'Casino en vivo', 'og.crash': 'Crash', 'og.sport': 'Deportes',
  'vz.dep.t': 'Ningún depósito por aquí.', 'vz.dep.s': 'Soy el Ratón: tus depósitos aparecen aquí, cada uno con su comprobante.',
  'vz.sac.t': 'Ningún retiro por aquí.', 'vz.sac.s': 'Soy el Dragón: cuando retires, te muestro aquí cada etapa.',
  'vz.t': 'Nada con ese filtro.', 'vz.s': 'Soy el Ratón: no encontré movimientos con ese filtro. Prueba otro periodo u otro origen.', 'vz.b': 'Limpiar filtros',
  'vz.novo.t': 'Tu billetera está lista.', 'vz.novo.s': 'Soy el Ratón: tu primer depósito aparece aquí, con comprobante.',
  /* comprovante */
  'rc.t': 'Comprobante.', 'rc.k': 'Comprobante', 'rc.data': 'Fecha y hora', 'rc.met': 'Método', 'rc.de': 'De', 'rc.para': 'Para', 'rc.orig': 'Origen', 'rc.cat': 'Categoría',
  'rc.tit': 'Titular', 'rc.ses': 'Sesión', 'rc.id': 'ID del movimiento', 'rc.st': 'Estado', 'rc.ap': 'Alias', 'rc.copiar': 'Copiar ID', 'rc.idok': 'ID del movimiento copiado.',
  'rc.nome': 'a tu nombre', 'rc.pdf': 'Descargar PDF', 'rc.pdf.t': 'El PDF del comprobante estará disponible cuando el operador publique el formato final [por confirmar].',
  'mg.b': 'Administrar', 'mg.ap': 'Alias', 'mg.ap.h': 'Solo tú lo ves. Ejemplo: Depósito de la quincena.', 'mg.ap.ph': 'Depósito de la quincena', 'mg.ap.s': 'Guardar alias', 'mg.ap.ok': 'Alias guardado.', 'mg.ap.rm': 'Alias borrado.',
  'mg.rm': 'Quitar de la lista', 'mg.rm.t': '¿Quitar este movimiento de tu lista?', 'mg.rm.s': 'El registro sigue guardado con nosotros durante el plazo que marca la ley [por confirmar]. Solo deja de aparecer aquí.',
  'mg.rm.ok': 'Quitar de la lista', 'mg.rm.no': 'Conservar', 'mg.rm.done': 'Movimiento quitado de tu lista.',
  /* painéis laterais */
  'as.dep.t': 'Cómo depositar.', 'as.dep.1': 'Elige el método y el monto.', 'as.dep.1s': 'SPEI, tarjeta u OXXO. Mínimo de {min} [por confirmar].',
  'as.dep.2': 'Paga desde una cuenta a tu nombre.', 'as.dep.2s': 'Con SPEI, transfiere a la CLABE que generamos para ese depósito.',
  'as.dep.3': 'Revisa tu saldo y el comprobante.', 'as.dep.3s': 'Cada depósito queda en tu Billetera, con ID y hora.',
  'as.cpf': 'Solo cuentas a tu nombre.', 'as.cpf.s': 'El dinero que llegue de una cuenta de otra persona se devuelve al origen [por confirmar].',
  'as.idv': 'Antes del primer depósito confirmamos tu identidad con selfie e identificación oficial. La tuya ya está confirmada.',
  'as.saq.t': 'Cómo retirar.', 'as.saq.1': 'Elige la cuenta o la tarjeta.', 'as.saq.1s': 'Solo a tu nombre y ya verificada.',
  'as.saq.2': 'Escribe el monto.', 'as.saq.2s': 'Hasta tu saldo disponible. Mínimo de {min} [por confirmar].',
  'as.saq.3': 'Sigue las etapas.', 'as.saq.3s': 'Solicitado, en revisión y enviado. Te avisamos en cada una.',
  'as.anal': 'En revisión', 'as.rs.t': 'Resumen del mes.', 'as.rs.in': 'Entradas', 'as.rs.out': 'Salidas', 'as.rs.an': 'En revisión',
  'as.rs.n': 'Entradas: depósitos y ganancias. Salidas: retiros y apuestas. En revisión: retiros que aún no se envían.'
};

/* ===== estado e dados do módulo ===== */
const DN = {
  min: 50, max: 100000, sMin: 100, clock: [9, 12],
  dep: {met: null, v: 0, de: null, trocar: false, card: null, novo: false, pend: null},
  saq: {met: 'spei', v: 0, q: null, conta: null, card: null, novo: false},
  w: {org: 'todos', tab: 'geral', per: ''},
  hidden: new Set(),
  /* contas de origem do SPEI (as mesmas CLABE do saque, mascaradas) */
  origens: [{id: 'bbva', banco: 'BBVA', fim: '4521'}, {id: 'banorte', banco: 'Banorte', fim: '0937'}],
  cartoes: [{id: 'c1', band: 'Mastercard', fim: '4417', val: '08/29', tipo: 'cre'}, {id: 'c2', band: 'Visa', fim: '0921', val: '03/28', tipo: 'deb', padrao: 1}, {id: 'c3', band: 'Mastercard', fim: '6610', val: '11/28', tipo: 'deb'}],
  contas: [{id: 'b1', banco: 'BBVA', fim: '4521', padrao: 1, ok: 1}, {id: 'b2', banco: 'Banorte', fim: '0937', ok: 1}, {id: 'b3', banco: 'Santander', fim: '7710', ok: 0}],
  /* código de 3 dígitos do banco = início da CLABE */
  bancos: [['', 'Elige el banco'], ['012', 'BBVA'], ['072', 'Banorte'], ['014', 'Santander'], ['002', 'Banamex'], ['021', 'HSBC'], ['044', 'Scotiabank'], ['036', 'Inbursa'], ['127', 'Banco Azteca'], ['137', 'BanCoppel'], ['058', 'Banregio'], ['030', 'BanBajío'], ['otro', 'Otro banco']]
};
const DN_MET = {spei: 'SPEI', cre: 'Tarjeta de crédito', deb: 'Tarjeta de débito', oxxo: 'OXXO'};
const DN_TPIC = {dep: 'entrada', sac: 'saque', gan: 'seta-diag', apo: 'cupom'};
/* estados gravados em TX (data.js usa "Completado" e "En revisión") */
const DN_ST = {ok: 'Completado', rev: 'En revisión', esp: 'En espera de OXXO'};

/* datas: o protótipo vive em 26/10/2026 (NOW.dia); novos movimentos usam um relógio de demonstração a partir de 09:12 */
const dn2 = n => String(n).padStart(2, '0');
const dnD = s => { const n = String(s).match(/\d+/g).map(Number); return new Date(n[2], n[1] - 1, n[0], n[3] || 0, n[4] || 0); };
const DN_HOJE = (() => { const m = ((typeof NOW !== 'undefined' && NOW.dia) || '').match(/(\d{2})\/(\d{2})\/(\d{4})/); return m ? new Date(+m[3], +m[2] - 1, +m[1]) : new Date(2026, 9, 26); })();
const dnDays = s => { const d = dnD(s); d.setHours(0, 0, 0, 0); return Math.round((DN_HOJE - d) / 864e5); };
const dnHora = s => String(s).split(' ')[1] || '';
const dnDM = s => String(s).slice(0, 5);
function dnStamp() {
  DN.clock[1] += 1; if (DN.clock[1] > 59) { DN.clock[1] -= 60; DN.clock[0] = Math.min(23, DN.clock[0] + 1); }
  return `${dn2(DN_HOJE.getDate())}/${dn2(DN_HOJE.getMonth() + 1)}/${DN_HOJE.getFullYear()} ${dn2(DN.clock[0])}:${dn2(DN.clock[1])}`;
}
function dnDayLabel(s) {
  const k = dnDays(s); if (k === 0) return 'Hoy · ' + dnDM(s); if (k === 1) return 'Ayer · ' + dnDM(s);
  return ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'][dnD(s).getDay()] + ' · ' + dnDM(s);
}
const dnFmt = v => (+v || 0).toLocaleString(LOC, {minimumFractionDigits: 2, maximumFractionDigits: 2});
const dnSes = () => (innerWidth < 1024 ? 'Celular' : 'Computadora') + ' · Ciudad de México';
const dnGame = (id, d) => (typeof G !== 'undefined' && G[id] && G[id].n) || d;

/* TX de data.js estendida: origem dos ganhos, de onde veio cada depósito, para onde foi cada saque, e histórico mais longo para o filtro de 90 dias */
(function dnSeed() {
  const ext = {tx1: {de: 'bbva'}, tx2: {org: 'slots', game: 'fortune-dragon'}, tx3: {para: 'b1'}, tx4: {org: 'sport'}, tx5: {de: 'oxxo'}, tx6: {org: 'sport'}, tx7: {para: 'b1'}, tx8: {de: 'c2'}};
  TX.forEach(x => { const e = ext[x.id]; if (e) for (const k in e) if (x[k] == null) x[k] = e[k]; });
  const cel = 'Celular · Ciudad de México', pc = 'Computadora · Ciudad de México';
  const more = [
    {id: 'tx9', tp: 'gan', d: '26/10/2026 01:12', met: dnGame('salto-conejo', 'El Salto del Conejo'), v: 42, st: DN_ST.ok, ses: cel, org: 'crash', game: 'salto-conejo'},
    {id: 'tx10', tp: 'gan', d: '24/10/2026 22:05', met: dnGame('tigre-pista', 'Tigre de la Pista'), v: 64.8, st: DN_ST.ok, ses: pc, org: 'slots', game: 'tigre-pista'},
    {id: 'tx11', tp: 'apo', d: '24/10/2026 21:40', met: dnGame('roleta-pista', 'Ruleta de la Pista'), v: -30, st: DN_ST.ok, ses: pc, org: 'cassino', game: 'roleta-pista'},
    {id: 'tx12', tp: 'dep', d: '02/10/2026 19:20', met: 'SPEI', v: 150, st: DN_ST.ok, ses: cel, de: 'bbva'},
    {id: 'tx13', tp: 'sac', d: '28/09/2026 10:15', met: 'SPEI · Banorte', v: -200, st: DN_ST.ok, ses: cel, para: 'b2'},
    {id: 'tx14', tp: 'dep', d: '12/09/2026 18:02', met: 'Tarjeta de crédito', v: 100, st: DN_ST.ok, ses: pc, de: 'c1'},
    {id: 'tx15', tp: 'gan', d: '15/08/2026 23:30', met: dnGame('fortune-panda', 'Fortune Panda'), v: 58.2, st: DN_ST.ok, ses: cel, org: 'slots', game: 'fortune-panda'}
  ];
  more.forEach(x => { if (!TX.some(y => y.id === x.id)) TX.push(x); });
  TX.sort((a, b) => dnD(b.d) - dnD(a.d));
})();

/* máscaras extras (o core aplica qualquer MASK[data-mask] no input; a CLABE usa MASK.clabe do core) */
Object.assign(MASK, {
  dnCard: v => v.replace(/\D/g, '').slice(0, 19).replace(/(\d{4})(?=\d)/g, '$1 '),
  dnExp: v => v.replace(/\D/g, '').slice(0, 4).replace(/(\d{2})(\d)/, '$1/$2'),
  dnCvv: v => v.replace(/\D/g, '').slice(0, 4)
});

/* ===== consultas ===== */
const dnLast = (f = () => true) => TX.find(x => x.tp === 'dep' && f(x));
const dnHasLim = () => +S.lim.dep.val > 0;
const dnLivre = () => dnHasLim() ? Math.max(0, +(S.lim.dep.val - (S.lim.dep.usado || 0)).toFixed(2)) : Infinity;
/* origem do movimento para os filtros (o boleto de esportes lança apostas em TX sem org) */
const dnOrg = x => x.org || (/^(Deportes|Esportes)$/.test(x.ses || '') ? 'sport' : x.game && G[x.game] ? ({slots: 'slots', crash: 'crash', aovivo: 'cassino', mesa: 'cassino'}[G[x.game].t] || '') : '');
/* CORE-FIX: limBar() (shell.js) divide por S.lim.dep.val; sem limite definido (0/null, possível depois de Limites) mostra barra cheia. */
function dnLimCard() {
  if (dnHasLim()) return limBar();
  return `<div class="c-lim dn-nolim"><div class="c-lim-h"><b>${t('dn.lim.sem.t')}</b><button type="button" class="lnk" data-go="limites:dep">${t('dn.lim.sem.b')}${ic('seta-d')}</button></div><p class="dn-fine">${t('dn.lim.sem.s')}</p></div>`;
}
const dnPer = () => ({dia: 'diario', semana: 'semanal', mes: 'mensual'}[S.lim.dep.per] || 'diario');
const dnAnalise = () => TX.filter(x => x.tp === 'sac' && /revisión|Solicitado/.test(x.st)).reduce((a, x) => a + Math.abs(x.v), 0);
const dnMetK = met => /crédito/i.test(met) ? 'cre' : /débito/i.test(met) ? 'deb' : /OXXO/i.test(met) ? 'oxxo' : 'spei';
function dnDe(x) {
  if (x.de === 'oxxo') return t('dn.oxxo.de');
  const o = DN.origens.find(y => y.id === x.de); if (o) return `${o.banco} •••• ${o.fim}`;
  const c = DN.cartoes.find(y => y.id === x.de); if (c) return `${c.band} •••• ${c.fim}`;
  return x.de || '';
}
function dnPara(x) {
  const c = DN.contas.find(y => y.id === x.para); if (c) return `${c.banco} · CLABE •••• ${c.fim}`;
  const k = DN.cartoes.find(y => y.id === x.para); if (k) return `${k.band} •••• ${k.fim}`;
  return x.para || '';
}
function dnRef(x) {
  if (x.ref) return x.ref;
  let h = 2166136261; for (const c of x.id + x.d) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0;
  const d = x.d.replace(/\D/g, '');
  return 'CB' + d.slice(4, 8) + d.slice(2, 4) + d.slice(0, 2) + d.slice(8) + h.toString(36).toUpperCase().padStart(7, '0');
}

/* ===== peças ===== */
const dnTag = (k, txt) => `<span class="dn-tg dn-tg--${k}">${k === 'ok' ? ic('verificado', 'ic--xs') : k === 'no' ? ic('alerta', 'ic--xs') : k === 'pend' ? ic('relogio', 'ic--xs') : ''}${esc(txt)}</span>`;
function dnOpt(o) {
  return `<button type="button" class="dn-opt${o.on ? ' is-on' : ''}" role="radio" aria-checked="${!!o.on}" tabindex="${o.tab ? 0 : -1}" data-act="${o.act}" data-arg="${esc(o.arg)}">
    <span class="dn-opt-r" aria-hidden="true"></span>${o.icon ? `<span class="dn-opt-i">${ic(o.icon)}</span>` : ''}
    <span class="dn-opt-t"><b>${esc(o.title)}</b>${o.sub ? `<small>${esc(o.sub)}</small>` : ''}${o.tags ? `<span class="dn-tags">${o.tags}</span>` : ''}</span>${o.right || ''}</button>`;
}
function dnOpts(items, label, id) {
  const anyOn = items.some(i => i.on);
  return `<div class="dn-opts" role="radiogroup" ${id ? `aria-labelledby="${id}"` : `aria-label="${esc(label)}"`}>${items.map((i, n) => dnOpt({...i, tab: i.on || (!anyOn && n === 0)})).join('')}</div>`;
}
const dnHow = steps => `<ol class="dn-how">${steps.map(([b, s]) => `<li><span><b>${esc(b)}</b><small>${esc(s)}</small></span></li>`).join('')}</ol>`;
const dnStIc = st => /Completado|Enviado/.test(st) ? 'check-c' : 'relogio';
const dnStatus = st => `<span class="dn-stt">${ic(dnStIc(st), 'ic--xs')}${esc(st)}</span>`;
function dnBusy(b, label) {
  if (!b) return; b.style.minWidth = b.offsetWidth + 'px'; b.setAttribute('aria-busy', 'true');
  b.innerHTML = `<span class="busy" aria-hidden="true"><i></i><i></i><i></i></span><span>${esc(label)}</span>`;
}
function dnAmt(f) {
  const st = DN[f]; const dep = f === 'dep';
  const cap = dep ? dnLivre() : S.saldo;
  const qs = dep ? [50, 100, 200, 500, 1000] : ['total', 100, 150, 200, 500];
  const qb = q => {
    const v = q === 'total' ? S.saldo : q; const on = st.v > 0 && Math.abs(st.v - v) < .005; const over = v > cap;
    return `<button type="button" class="dn-q${q === 'total' ? ' dn-q--tot' : ''}${on ? ' is-on' : ''}${over ? ' is-over' : ''}" data-act="dnQ" data-f="${f}" data-arg="${q}" aria-pressed="${on}">${q === 'total' ? `<span>${t('dn.q.total')}</span><small class="tnum">${mxn(S.saldo)}</small>` : `<span class="tnum">${mxn0(q)}</span>`}${over ? `<span class="sr"> (${dep ? t('dn.q.over') : t('dn.q.over.saq')})</span>` : ''}</button>`;
  };
  return `<div class="dn-amt">
    <span class="lab mut" id="dnQl">${t('dn.q.' + f)}</span>
    <div class="dn-qs${dep ? '' : ' dn-qs--saq'}" role="group" aria-labelledby="dnQl">${qs.map(qb).join('')}</div>
    ${field({id: 'dnV', label: t('dn.v.l'), prefix: '$', inputmode: 'decimal', mask: 'money', placeholder: '0.00', value: st.v ? dnFmt(st.v) : '', cls: 'dn-v', enter: 'done',
      hint: dep ? t('dn.v.h.dep', {min: mxn(DN.min), max: mxn(DN.max)}) : t('dn.v.h.saq', {min: mxn(DN.sMin), max: mxn(S.saldo)})})}
  </div>`;
}
function dnGoLabel(f) {
  const st = DN[f]; const v = st.v > 0 ? mxn(st.v) : '';
  const k = f === 'saq' ? 'saq' : st.met === 'spei' ? 'spei' : st.met === 'oxxo' ? 'oxxo' : 'card';
  return v ? t('dn.go.' + k, {v}) : t('dn.go.' + k + '0');
}
const dnGo = f => `<button type="submit" class="btn btn--luz btn--l btn--full dn-go" id="dnGo"><span>${esc(dnGoLabel(f))}</span></button>`;

/* números determinísticos a partir de uma semente (CLABE, referência SPEI, referência OXXO) */
function dnNum(seed, n) {
  let h = 2166136261; for (const c of String(seed)) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  let s = ''; while (s.length < n) { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; s += String((h >>> 0) % 10); }
  return s;
}
/* CLABE: 3 dígitos do banco + 3 da praça + 11 da conta + dígito verificador (pesos 3, 7, 1) */
const dnClabeDv = s => { const w = [3, 7, 1]; let t2 = 0; for (let i = 0; i < 17; i++) t2 += (+s[i] * w[i % 3]) % 10; return String((10 - t2 % 10) % 10); };
const dnClabe = seed => { const b = '646180' + dnNum(seed, 11); return b + dnClabeDv(b); };
const dnClabeFmt = d => MASK.clabe(d);
const dnGrp = d => String(d).replace(/(\d{4})(?=\d)/g, '$1 ');
/* código de barras simples (Interleaved 2 of 5) da referência OXXO, em SVG: barras noite sobre rosa */
function dnBar(code) {
  const P = ['nnwwn', 'wnnnw', 'nwnnw', 'wwnnn', 'nnwnw', 'wnwnn', 'nwwnn', 'nnnww', 'wnnwn', 'nwnwn'];
  const W = 3, Q = 10; let x = Q, d = '';
  const bar = w => { d += `M${x} 0h${w}v1h-${w}z`; x += w; }; const sp = w => { x += w; };
  const c = code.length % 2 ? '0' + code : code;
  bar(1); sp(1); bar(1); sp(1);
  for (let i = 0; i < c.length; i += 2) { const a = P[+c[i]], b = P[+c[i + 1]]; for (let k = 0; k < 5; k++) { bar(a[k] === 'w' ? W : 1); sp(b[k] === 'w' ? W : 1); } }
  bar(W); sp(1); bar(1);
  const tw = x + Q;
  return `<svg viewBox="0 0 ${tw} 1" preserveAspectRatio="none" shape-rendering="crispEdges" role="img" aria-label="${esc(t('dn.oxxo.bar', {r: dnGrp(code)}))}"><rect width="${tw}" height="1" fill="var(--rosa)"/><path d="${d}" fill="var(--noite)"/></svg>`;
}

/* ===== DEPÓSITO ===== */
function dnDepBody() {
  const D = DN.dep; const L = dnLivre();
  const bal = `<div class="dn-bal"><div><span class="lab mut">${t('dn.saldo')}</span><b class="tnum dn-saldo">${mxn(S.saldo)}</b></div><span class="dn-idv">${ic('verificado', 'ic--s')}${t('dn.idv')}</span></div>`;
  const lim = `<div class="card dn-limc">${dnLimCard()}</div>`;
  if (L <= 0) {
    return `${bal}<div class="dn-stop">${empty({who: 'raton', title: t('dn.lim.fim.t'), text: t('dn.lim.fim.s'), action: btn(t('dn.lim.fim.b'), {kind: 'sec', go: 'limites:dep', iconR: 'seta-d'})})}</div>${lim}${age(t('dn.age'))}`;
  }
  let top = '', met = '';
  const pend = D.pend && D.pend.k === D.met ? dnPend() : '';
  if (D.met === 'spei') top = pend + dnLastPix();
  if (D.met === 'cre' || D.met === 'deb') met = dnCards();
  if (D.met === 'oxxo') { top = pend; met = dnTra(); }
  return `${bal}${top}${dnAmt('dep')}${met}<div id="dnAl" class="dn-alw">${dnLimAlert()}</div>${dnGo('dep')}${lim}${age(t('dn.age'))}`;
}
function dnPend() {
  const P = DN.dep.pend; const ox = P.k === 'oxxo';
  return `<div class="dn-pend" role="status">${ic('relogio')}<div class="dn-pend-t"><b>${t(ox ? 'dn.pend.ox.t' : 'dn.pend.t', {v: mxn(P.v)})}</b><small>${t(ox ? 'dn.pend.ox.s' : 'dn.pend.s')}</small></div>
    <div class="dn-pend-b">${btn(t(ox ? 'dn.pend.ox.ver' : 'dn.pend.ver'), {kind: 'sec', size: 's', icon: ox ? 'recibo' : 'banco', act: 'dnVerQR'})}${btn(t('dn.pend.canc'), {kind: 'ghost', size: 's', act: 'dnCancPix'})}</div></div>`;
}
function dnLastPix() {
  const last = dnLast(x => dnMetK(x.met) === 'spei'); if (!last) return '';
  const D = DN.dep; const de = D.de || last.de || DN.origens[0].id;
  if (D.trocar) {
    return `<div class="dn-last"><span class="lab mut" id="dnDeL">${t('dn.de.l')}</span>
      ${dnOpts([...DN.origens.map(o => ({act: 'dnDe', arg: o.id, on: de === o.id, icon: 'banco', title: `${o.banco} •••• ${o.fim}`, sub: t('dn.de.s'), tags: o.id === last.de ? dnTag('ult', t('dn.tg.ult')) : ''})),
        {act: 'dnDe', arg: 'outra', on: de === 'outra', icon: 'banco', title: t('dn.de.outra'), sub: t('dn.de.outra.s')}], '', 'dnDeL')}</div>`;
  }
  const o = DN.origens.find(x => x.id === de);
  const title = o ? `SPEI · ${o.banco} •••• ${o.fim}` : `SPEI · ${t('dn.de.outra')}`;
  const quando = dnDays(last.d) === 0 ? t('dn.last.hoje', {h: dnHora(last.d)}) : t('dn.last.em', {d: dnDM(last.d)});
  return `<div class="dn-last"><span class="lab mut" id="dnLastL">${t('dn.last.l')}</span>
    <div class="dn-row" aria-labelledby="dnLastL" role="group"><span class="dn-opt-i">${ic('banco')}</span><span class="dn-opt-t"><b>${esc(title)}</b><small>${esc(o ? t('dn.last.s', {v: mxn(last.v), quando}) : t('dn.de.outra.s'))}</small></span>
    <button type="button" class="lnk dn-trocar" data-act="dnTrocar" aria-expanded="false" aria-label="${t('dn.last.trocar')}: ${esc(t('dn.de.l'))}">${t('dn.last.trocar')}</button></div></div>`;
}
function dnCards() {
  const D = DN.dep; const mine = DN.cartoes.filter(c => c.tipo === D.met);
  const lastC = dnLast(x => dnMetK(x.met) === D.met)?.de;
  if (!D.novo && !mine.some(c => c.id === D.card)) D.card = (mine.find(c => c.id === lastC) || mine[0] || {}).id || null;
  if (!mine.length && !D.novo) D.novo = true;
  const list = mine.map(c => ({act: 'dnCard', arg: c.id, on: !D.novo && D.card === c.id, icon: 'cartao', title: `${c.band} •••• ${c.fim}`, sub: t('dn.card.sub', {n: ME.nome, val: c.val}), tags: c.id === lastC ? dnTag('ult', t('dn.tg.ult')) : ''}));
  return `<div class="dn-pick"><span class="lab mut" id="dnCl">${t('dn.card.l')}</span>${list.length ? dnOpts(list, '', 'dnCl') : ''}
    ${D.novo ? dnCardForm() : `<button type="button" class="dn-add" data-act="dnNovoCard" aria-expanded="false" aria-controls="dnCardF">${ic('mais')}<span>${t('dn.card.novo')}</span></button>`}</div>`;
}
function dnCardForm() {
  return `<div class="dn-new" id="dnCardF" role="group" aria-labelledby="dnCardT">
    <div class="dn-new-hd"><b id="dnCardT">${t('dn.card.novo.t')}</b><button type="button" class="lnk" data-act="dnNovoCardX">${t('dn.card.cancel')}</button></div>
    <div id="dnCardSum" class="dn-sum" role="alert" hidden></div>
    ${field({id: 'dnCN', label: t('dn.card.num'), inputmode: 'numeric', autocomplete: 'cc-number', mask: 'dnCard', placeholder: '0000 0000 0000 0000', icon: 'cartao'})}
    ${field({id: 'dnCNm', label: t('dn.card.nome'), autocomplete: 'cc-name', placeholder: t('dn.card.nome.ph'), spell: false})}
    <div class="dn-2">${field({id: 'dnCE', label: t('dn.card.val'), inputmode: 'numeric', autocomplete: 'cc-exp', mask: 'dnExp', placeholder: 'MM/AA'})}${field({id: 'dnCV', label: t('dn.card.cvv'), inputmode: 'numeric', autocomplete: 'cc-csc', mask: 'dnCvv', placeholder: '123', hint: t('dn.card.cvv.h')})}</div>
    ${check({id: 'dnCS', label: t('dn.card.salvar'), on: true})}
    <p class="dn-fine">${ic('id', 'ic--s')}<span>${t('dn.card.tit', {n: ME.nome})}</span></p>
  </div>`;
}
/* OXXO: antes de gerar a referência, só explica como se paga */
function dnTra() {
  return `<section class="dn-tra" aria-labelledby="dnTraL"><span class="lab mut" id="dnTraL">${t('dn.oxxo.l')}</span>
    <div class="dn-row"><span class="dn-opt-i">${ic('recibo')}</span><span class="dn-opt-t"><b>${t('dn.oxxo.info.t')}</b><small>${t('dn.oxxo.info.s')}</small></span></div></section>`;
}
function dnLimAlert() {
  const L = dnLivre(); const v = DN.dep.v;
  if (!(v > L) || L <= 0) return '';
  return `<div class="dn-al" role="alert">${ic('limite')}<div class="dn-al-t"><b>${t('dn.lim.passa', {per: dnPer()})}</b><span>${t('dn.lim.cabe.' + (S.lim.dep.per || 'dia'), {v: mxn(L)})} ${t('dn.lim.regra')}</span>
    <div class="dn-al-b">${btn(t('dn.lim.usar', {v: mxn(L)}), {kind: 'sec', size: 's', act: 'dnUseLivre'})}${btn(t('dn.lim.ajustar'), {kind: 'ghost', size: 's', go: 'limites:dep', iconR: 'seta-d'})}</div></div></div>`;
}
function dnAsideDep() {
  return `<section class="card dn-as" aria-labelledby="dnAsD"><h2 class="ttl dn-as-t" id="dnAsD">${t('dn.as.dep.t')}</h2>
    ${dnHow([[t('dn.as.dep.1'), t('dn.as.dep.1s', {min: mxn(DN.min)})], [t('dn.as.dep.2'), t('dn.as.dep.2s')], [t('dn.as.dep.3'), t('dn.as.dep.3s')]])}
    <p class="dn-cpf">${ic('escudo')}<span><b>${t('dn.as.cpf')}</b> ${t('dn.as.cpf.s')}</span></p>
    <p class="dn-fine">${ic('verificado', 'ic--s')}<span>${t('dn.as.idv')}</span></p></section>${asideAjuda()}`;
}
SCREENS.deposito = {
  label: 'Depositar', nav: 'menu', auth: 'Entra para depositar.', luz: true, noFab: true, asideLabel: 'Cómo depositar',
  aside: () => dnAsideDep(),
  render() {
    const D = DN.dep; if (!D.met) { const l = dnLast(); D.met = l ? dnMetK(l.met) : 'spei'; }
    return `${acctNav('deposito')}
      <header class="pg-head"><h1 class="pt">${t('dn.dep.t')}</h1><p class="lede">${t('dn.dep.s')}</p></header>
      <section class="dn-main" aria-labelledby="dnMetL"><h2 class="sr" id="dnMetL">${t('dn.met.l')}</h2>
        ${tabs(['spei', 'deb', 'cre', 'oxxo'].map(k => ({k, n: t('dn.met.' + k)})), {name: 'dnDep', active: D.met, label: t('dn.met.l')})}
        <form class="dn-f" id="dnForm" data-f="dep" novalidate><div id="dnBody" class="dn-stack">${dnDepBody()}</div></form></section>`;
  },
  init: root => dnInitForm(root, 'dep')
};
ON.tab.dnDep = k => { const D = DN.dep; D.met = k; D.trocar = false; D.novo = false; dnRerender('dep'); };

/* ===== SAQUE ===== */
function dnSaqBody() {
  const Q = DN.saq;
  const bal = `<div class="dn-bal"><div><span class="lab mut">${t('dn.saq.disp')}</span><b class="tnum dn-saldo">${mxn(S.saldo)}</b></div><span class="dn-idv">${ic('info', 'ic--s')}${t('dn.saq.disp.s')}</span></div>`;
  if (S.saldo < DN.sMin) return `${bal}${empty({who: 'dragon', title: t('dn.saq.vazio.t'), text: t('dn.saq.vazio.s'), action: btn(t('dn.saq.vazio.b'), {kind: 'sec', go: 'deposito', icon: 'depositar'})})}${age(t('dn.age'))}`;
  return `${bal}${dnAmt('saq')}${Q.met === 'spei' ? dnContas() : dnSaqCards()}${dnGo('saq')}<p class="dn-fine">${ic('relogio', 'ic--s')}<span>${t('dn.saq.nota')}</span></p>${age(t('dn.age'))}`;
}
/* SPEI: contas CLABE (verificadas escolhem; sem verificar ficam fora da escolha, com "Verificar cuenta") */
function dnContas() {
  const Q = DN.saq; const ok = DN.contas.filter(c => c.ok === 1);
  if (!Q.novo && !ok.some(c => c.id === Q.conta)) Q.conta = (ok.find(c => c.padrao) || ok[0] || {}).id;
  const tags = c => (c.padrao ? dnTag('pad', t('dn.tg.pad')) : '') + dnTag('ok', t('dn.tg.ok'));
  const list = ok.map(c => ({act: 'dnConta', arg: c.id, on: !Q.novo && Q.conta === c.id, icon: 'banco', title: `${c.banco} · CLABE •••• ${c.fim}`, sub: ME.nome, tags: tags(c)}));
  const no = DN.contas.filter(c => c.ok !== 1).map(c => `<div class="dn-row dn-row--no"><span class="dn-opt-i">${ic('banco')}</span><span class="dn-opt-t"><b>${esc(c.banco)} · CLABE <span class="tnum">•••• ${esc(c.fim)}</span></b><small>${c.ok === 'pend' ? t('dn.saq.verif.pend') : t('dn.saq.verif.s')}</small><span class="dn-tags">${c.ok === 'pend' ? dnTag('pend', t('dn.tg.pend')) : dnTag('no', t('dn.tg.no'))}</span></span>
    ${c.ok === 'pend' ? '' : btn(t('dn.saq.verif'), {kind: 'sec', size: 's', act: 'dnVerif', attrs: {'data-arg': c.id}})}</div>`).join('');
  return `<div class="dn-pick"><span class="lab mut" id="dnBl">${t('dn.saq.conta.l')}</span>${dnOpts(list, '', 'dnBl')}${no}
    ${Q.novo ? dnContaForm() : `<button type="button" class="dn-add" data-act="dnNovaConta" aria-expanded="false" aria-controls="dnContaF">${ic('mais')}<span>${t('dn.saq.conta.novo')}</span></button>`}</div>`;
}
function dnContaForm() {
  return `<div class="dn-new" id="dnContaF" role="group" aria-labelledby="dnContaT">
    <div class="dn-new-hd"><b id="dnContaT">${t('dn.conta.t')}</b><button type="button" class="lnk" data-act="dnNovaContaX">${t('dn.card.cancel')}</button></div>
    ${field({id: 'dnBc', label: t('dn.conta.clabe'), inputmode: 'numeric', mask: 'clabe', placeholder: '000 000 00000000000 0', hint: t('dn.conta.clabe.h'), spell: false, enter: 'done'})}
    ${field({id: 'dnBb', label: t('dn.conta.banco'), select: DN.bancos.map((b, i) => i ? b : ['', t('dn.conta.banco0')]), value: ''})}
    <p class="dn-fine">${ic('id', 'ic--s')}<span><b>${t('dn.conta.tit', {n: esc(ME.nome)})}</b> ${t('dn.conta.tit.s')}</span></p>
    ${btn(t('dn.conta.salvar'), {kind: 'sec', full: true, act: 'dnContaSave', icon: 'check'})}
  </div>`;
}
/* Tarjeta de débito: as de débito já usadas no depósito */
function dnSaqCards() {
  const Q = DN.saq; const deb = DN.cartoes.filter(c => c.tipo === 'deb');
  if (!deb.some(c => c.id === Q.card)) Q.card = (deb.find(c => c.padrao) || deb[0] || {}).id;
  const list = deb.map(c => ({act: 'dnSCard', arg: c.id, on: Q.card === c.id, icon: 'cartao', title: `${c.band} •••• ${c.fim}`, sub: t('dn.card.sub', {n: ME.nome, val: c.val}), tags: (c.padrao ? dnTag('pad', t('dn.tg.pad')) : '') + dnTag('ok', t('dn.tg.ok'))}));
  return `<div class="dn-pick"><span class="lab mut" id="dnTl">${t('dn.saq.card.l')}</span>${list.length ? dnOpts(list, '', 'dnTl') : ''}
    <p class="dn-fine">${ic('info', 'ic--s')}<span>${t('dn.saq.card.nota')}</span></p>
    <button type="button" class="dn-add" data-act="dnAddDeb">${ic('mais')}<span>${t('dn.saq.card.novo')}</span></button></div>`;
}
function dnAsideSaq() {
  const an = dnAnalise();
  return `<section class="card dn-as dn-ad" aria-labelledby="dnAsDisp"><h2 class="lab mut" id="dnAsDisp">${t('dn.saq.disp')}</h2><b class="dn-ad-v tnum dn-saldo">${mxn(S.saldo)}</b>
      <p class="mut">${t('dn.saq.disp.s')}</p>${an ? kv(t('dn.as.anal'), mxn(an)) : ''}</section>
    <section class="card dn-as" aria-labelledby="dnAsS"><h2 class="ttl dn-as-t" id="dnAsS">${t('dn.as.saq.t')}</h2>
      ${dnHow([[t('dn.as.saq.1'), t('dn.as.saq.1s')], [t('dn.as.saq.2'), t('dn.as.saq.2s', {min: mxn(DN.sMin)})], [t('dn.as.saq.3'), t('dn.as.saq.3s')]])}</section>${asideAjuda()}`;
}
SCREENS.saque = {
  label: 'Retirar', nav: 'menu', auth: 'Entra para retirar.', luz: true, asideLabel: 'Disponible para retirar',
  aside: () => dnAsideSaq(),
  render() {
    return `${acctNav('saque')}
      <header class="pg-head"><h1 class="pt">${t('dn.saq.t')}</h1><p class="lede">${t('dn.saq.s')}</p></header>
      <section class="dn-main" aria-labelledby="dnSMetL"><h2 class="sr" id="dnSMetL">${t('dn.saq.met')}</h2>
        ${tabs(['spei', 'tdd'].map(k => ({k, n: t('dn.saq.m.' + k)})), {name: 'dnSaq', active: DN.saq.met, label: t('dn.saq.met')})}
        <form class="dn-f" id="dnForm" data-f="saq" novalidate><div id="dnBody" class="dn-stack">${dnSaqBody()}</div></form></section>`;
  },
  init: root => dnInitForm(root, 'saq')
};
ON.tab.dnSaq = k => { DN.saq.met = k; DN.saq.novo = false; dnRerender('saq'); };

/* ===== formulário: entrada, envio, teclado ===== */
function dnRerender(f, focusSel) {
  const box = $('#dnBody'); if (!box) return;
  box.innerHTML = f === 'dep' ? dnDepBody() : dnSaqBody();
  $$('#dnForm button:not([type])').forEach(b => b.type = 'button');
  if (focusSel) { const el = box.querySelector(focusSel); if (el) el.focus({preventScroll: true}); }
}
function dnSync(f) {
  const box = $('#dnBody'); if (!box) return; const st = DN[f];
  $$('.dn-q', box).forEach(b => { const v = b.dataset.arg === 'total' ? S.saldo : +b.dataset.arg; const on = st.v > 0 && Math.abs(st.v - v) < .005; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); });
  const go = $('#dnGo', box); if (go && !go.hasAttribute('aria-busy')) go.lastElementChild.textContent = dnGoLabel(f);
  if (f === 'dep') { const al = $('#dnAl', box); const h = dnLimAlert(); if (al && al.innerHTML !== h) al.innerHTML = h; if (go) go.setAttribute('aria-disabled', DN.dep.v > dnLivre() ? 'true' : 'false'); }
}
function dnSetV(f, v) {
  DN[f].v = +(+v).toFixed(2); const inp = $('#dnV'); if (inp) { inp.value = DN[f].v ? dnFmt(DN[f].v) : ''; clearErr(inp); }
  dnSync(f);
}
function dnErr(el, msg) { setErr(el, msg); el.focus(); return false; }
/* mostra o chip da tela atual na faixa de telas da conta */
function dnAcct(root) {
  const a = root.querySelector('.c-acnav .is-on'); const sc = a && a.parentElement; if (!sc) return;
  sc.scrollLeft += a.getBoundingClientRect().left - sc.getBoundingClientRect().left - (sc.clientWidth - a.offsetWidth) / 2;
  const upd = () => { const max = sc.scrollWidth - sc.clientWidth - 2; sc.style.setProperty('--fl', sc.scrollLeft > 2 ? '32px' : '0px'); sc.style.setProperty('--fr', sc.scrollLeft < max ? '32px' : '0px'); };
  sc.addEventListener('scroll', upd, {passive: true}); upd();
}
function dnInitForm(root, f) {
  dnAcct(root);
  const form = root.querySelector('#dnForm'); if (!form) return;
  $$('button:not([type])', form).forEach(b => b.type = 'button');
  form.addEventListener('input', e => {
    if (e.target.id === 'dnV') { DN[f].v = parseMoney(MASK.money(e.target.value)); dnSync(f); }
    /* CLABE nova: o banco sai dos 3 primeiros dígitos */
    if (e.target.id === 'dnBc') { const d = e.target.value.replace(/\D/g, ''); const s = $('#dnBb'); if (s && d.length >= 3 && DN.bancos.some(b => b[0] === d.slice(0, 3))) { s.value = d.slice(0, 3); clearErr(s); } }
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (e.submitter && e.submitter.id !== 'dnGo') return;
    const a = document.activeElement; if (a && /INPUT|SELECT/.test(a.tagName) && a.closest('#dnContaF')) return ACT.dnContaSave();
    dnSubmit(f);
  });
  root.addEventListener('keydown', dnRadioKeys);
  if (f === 'dep') dnSync('dep');
}
/* setas dentro de um grupo de opções (radiogroup com foco móvel) */
function dnRadioKeys(e) {
  const r = e.target.closest && e.target.closest('[role=radio]'); if (!r) return;
  const k = e.key; if (!['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(k)) return;
  e.preventDefault(); const list = $$('[role=radio]', r.closest('[role=radiogroup]')); const i = list.indexOf(r);
  const n = list[(i + (k === 'ArrowDown' || k === 'ArrowRight' ? 1 : -1) + list.length) % list.length];
  if (n.closest('.sh')) { list.forEach(b => b.tabIndex = b === n ? 0 : -1); return n.focus(); } /* no painel, setas só movem; Enter/Espaço escolhe */
  n.click(); const again = $(`[data-act="${n.dataset.act}"][data-arg="${n.dataset.arg}"]`); if (again) again.focus();
}
function dnSubmit(f) {
  const inp = $('#dnV'); const go = $('#dnGo'); if (!inp || !go || go.hasAttribute('aria-busy')) return;
  const st = DN[f]; st.v = parseMoney(MASK.money(inp.value));
  if (!st.v) return dnErr(inp, t('dn.v.vazio'));
  if (f === 'dep') {
    if (st.v < DN.min) return dnErr(inp, t('dn.v.min.dep', {min: mxn(DN.min)}));
    if (st.v > DN.max) return dnErr(inp, t('dn.v.max.dep', {max: mxn(DN.max)}));
    if (st.v > dnLivre()) { const b = $('#dnAl button'); if (b) b.focus(); return; }
    if (st.met === 'spei') return dnPixStart(go);
    if (st.met === 'oxxo') return dnTraGo(go);
    return dnCardGo(go);
  }
  if (st.v < DN.sMin) return dnErr(inp, t('dn.v.min.saq', {min: mxn(DN.sMin)}));
  if (st.v > S.saldo + .001) return dnErr(inp, t('dn.v.max.saq', {max: mxn(S.saldo)}));
  if (st.met === 'spei' && st.novo) { toast(t('dn.saq.e.sel'), {icon: 'info'}); const f1 = $('#dnContaF input'); if (f1) f1.focus(); return; }
  dnSaqGo(go);
}

/* depósito: lançamento, confirmação */
function dnDeposit(o) {
  const tx = {id: 'dn' + Date.now().toString(36), tp: 'dep', d: dnStamp(), met: o.met, v: o.v, st: o.st, ses: dnSes(), de: o.de, ref: o.ref};
  TX.unshift(tx);
  if (o.credit) { S.saldo = +(S.saldo + o.v).toFixed(2); bus.emit('balance'); }
  S.lim.dep.usado = +(S.lim.dep.usado + o.v).toFixed(2);
  DN.dep.v = 0; DN.dep.pend = null; DN.dep.novo = false; DN.dep.trocar = false;
  dnRerender('dep');
  return tx;
}
/* SPEI: o valor gera uma CLABE de depósito única + referência numérica */
function dnPixStart(go) {
  dnBusy(go, t('dn.spei.gerando'));
  setTimeout(() => {
    const D = DN.dep; const seed = ME.id + Date.now();
    D.pend = {k: 'spei', v: D.v, clabe: dnClabe(seed), ref: dnNum(seed + 'r', 7), de: D.de || dnLast(x => dnMetK(x.met) === 'spei')?.de || 'bbva'};
    dnRerender('dep'); dnPixSheet();
  }, 650);
}
/* OXXO: o valor gera uma referência de pagamento (14 dígitos) com código de barras */
function dnTraGo(go) {
  dnBusy(go, t('dn.oxxo.gerando'));
  setTimeout(() => {
    const D = DN.dep;
    D.pend = {k: 'oxxo', v: D.v, ref: '93' + dnNum(ME.id + Date.now() + 'ox', 12)};
    dnRerender('dep'); dnPixSheet();
  }, 650);
}
function dnPixSheet() {
  const P = DN.dep.pend; if (!P) return;
  const ox = P.k === 'oxxo';
  const cp = (v, k, ok) => `<button type="button" class="btn btn--ghost btn--ico dn-cp" data-copy="${esc(v)}" data-ok="${esc(t(ok))}" aria-label="${esc(t(k))}">${ic('copiar')}</button>`;
  const row = (k, v, b = '', cls = '') => `<div class="dn-bk${cls}"><span class="dn-bk-t"><small>${esc(k)}</small><b class="tnum">${esc(v)}</b></span>${b}</div>`;
  const body = ox
    ? `<div class="dn-pay">
        <div class="dn-pix-v"><span class="lab mut">${t('dn.oxxo.valor')}</span><b class="tnum">${mxn(P.v)}</b></div>
        <figure class="dn-bar"><span class="lab">${t('dn.oxxo.ref')}</span>${dnBar(P.ref)}<figcaption class="tnum">${dnGrp(P.ref)}</figcaption></figure>
        ${btn(t('dn.oxxo.copiar'), {kind: 'sec', icon: 'copiar', full: true, attrs: {'data-copy': P.ref, 'data-ok': t('dn.oxxo.copiado')}})}
        <p class="dn-pix-exp">${ic('relogio', 'ic--s')}<span>${t('dn.oxxo.exp')}</span></p>
      </div>
      ${dnHow([[t('dn.oxxo.h1'), t('dn.oxxo.h1s')], [t('dn.oxxo.h2'), t('dn.oxxo.h2s')], [t('dn.oxxo.h3'), t('dn.oxxo.h3s')]])}`
    : `<div class="dn-pay">
        <div class="dn-pix-v"><span class="lab mut">${t('dn.spei.valor')}</span><b class="tnum">${mxn(P.v)}</b></div>
        <div class="dn-bks">${row(t('dn.spei.clabe'), dnClabeFmt(P.clabe), '', ' dn-bk--cod')}${row(t('dn.spei.ref'), P.ref, cp(P.ref, 'dn.spei.ref.copiar', 'dn.spei.ref.ok'))}${row(t('dn.spei.banco'), t('dn.spei.op.banco'))}${row(t('dn.spei.benef'), t('dn.spei.op.benef'))}</div>
        ${btn(t('dn.spei.copiar'), {kind: 'sec', icon: 'copiar', full: true, attrs: {'data-copy': P.clabe, 'data-ok': t('dn.spei.copiado')}})}
        <p class="dn-pix-exp">${ic('info', 'ic--s')}<span>${t('dn.spei.unica')}</span></p>
      </div>
      ${dnHow([[t('dn.spei.h1'), t('dn.spei.h1s')], [t('dn.spei.h2'), t('dn.spei.h2s')], [t('dn.spei.h3'), t('dn.spei.h3s')]])}`;
  sheet(body, {title: t(ox ? 'dn.oxxo.t' : 'dn.spei.t'), id: 'dnShPix', cls: 'dn-sh dn-sh--pix', onClose: () => setTimeout(() => { const g = $('#dnGo'); if (g) g.focus({preventScroll: true}); }, 40),
    foot: `${btn(t(ox ? 'dn.oxxo.ya' : 'dn.spei.ya'), {kind: 'luz', size: 'l', full: true, act: 'dnPaguei', icon: 'check'})}${btn(t('dn.spei.depois'), {kind: 'ghost', full: true, act: 'dnDepois'})}`});
}
ACT.dnVerQR = () => dnPixSheet();
ACT.dnCancPix = () => { DN.dep.pend = null; dnRerender('dep', '#dnGo'); toast(t('dn.pend.cancok'), {icon: 'info'}); };
ACT.dnDepois = () => { const P = DN.dep.pend; closeSheet(); if (P) toast(t(P.k === 'oxxo' ? 'dn.pend.ox.depois' : 'dn.pend.depois'), {icon: 'relogio'}); };
ACT.dnPaguei = el => {
  const P0 = DN.dep.pend; if (!P0) return closeSheet(); const ox = P0.k === 'oxxo';
  dnBusy(el, t(ox ? 'dn.oxxo.reg' : 'dn.spei.conf'));
  setTimeout(() => {
    const P = DN.dep.pend; if (!P) return closeSheet();
    /* SPEI: o banco confirmou (demo) e o saldo entra; OXXO: fica à espera da confirmação da loja, sem crédito */
    dnDone(ox ? dnDeposit({v: P.v, met: 'OXXO', de: 'oxxo', st: DN_ST.esp, credit: false, ref: P.ref})
      : dnDeposit({v: P.v, met: 'SPEI', de: P.de, st: DN_ST.ok, credit: true}));
  }, ox ? 700 : 900);
};
function dnCardGo(go) {
  const D = DN.dep; let c = null, saved = false;
  if (D.novo) {
    const f = {n: $('#dnCN'), nm: $('#dnCNm'), e: $('#dnCE'), c: $('#dnCV')}; const bad = [];
    const num = f.n.value.replace(/\D/g, ''); if (num.length < 13 || num.length > 19) { setErr(f.n, t('dn.card.e.num')); bad.push(f.n); }
    if (f.nm.value.trim().split(/\s+/).length < 2) { setErr(f.nm, t('dn.card.e.nome')); bad.push(f.nm); }
    const em = f.e.value.match(/^(\d{2})\/(\d{2})$/);
    if (!em || +em[1] < 1 || +em[1] > 12) { setErr(f.e, t('dn.card.e.val')); bad.push(f.e); }
    else if (new Date(2000 + +em[2], +em[1], 0) < DN_HOJE) { setErr(f.e, t('dn.card.e.venc')); bad.push(f.e); }
    if (!/^\d{3,4}$/.test(f.c.value)) { setErr(f.c, t('dn.card.e.cvv')); bad.push(f.c); }
    const sum = $('#dnCardSum');
    if (bad.length) { if (sum) { sum.hidden = false; sum.innerHTML = ic('alerta') + `<span>${t('dn.card.sum')}</span>`; } bad[0].focus(); return; }
    if (sum) sum.hidden = true;
    const card = {id: 'c' + Date.now().toString(36), band: /^3[47]/.test(num) ? 'American Express' : /^4/.test(num) ? 'Visa' : /^5[1-5]|^2[2-7]/.test(num) ? 'Mastercard' : 'Tarjeta', fim: num.slice(-4), val: f.e.value, tipo: D.met};
    saved = !!$('#dnCS')?.checked; if (saved) { DN.cartoes.push(card); D.card = card.id; }
    c = card;
  } else c = DN.cartoes.find(x => x.id === D.card);
  if (!c) return toast(t('dn.saq.e.sel'), {icon: 'info'});
  dnBusy(go, t('dn.card.aut'));
  setTimeout(() => {
    dnDone(dnDeposit({v: D.v, met: DN_MET[D.met], de: saved || !D.novo ? c.id : `${c.band} •••• ${c.fim}`, st: DN_ST.ok, credit: true}), saved ? t('dn.card.saved') : '');
  }, 1000);
}
ACT.dnQ = el => {
  const f = el.dataset.f; const q = el.dataset.arg; dnSetV(f, q === 'total' ? S.saldo : +q);
};
ACT.dnUseLivre = () => { dnSetV('dep', dnLivre()); const g = $('#dnGo'); if (g) g.focus(); };
ACT.dnTrocar = () => { DN.dep.trocar = true; dnRerender('dep', '.dn-opt[tabindex="0"]'); };
ACT.dnDe = el => { DN.dep.de = el.dataset.arg; DN.dep.trocar = false; dnRerender('dep', '.dn-trocar'); };
ACT.dnCard = el => { DN.dep.card = el.dataset.arg; DN.dep.novo = false; dnRerender('dep', `[data-act="dnCard"][data-arg="${el.dataset.arg}"]`); };
ACT.dnNovoCard = () => { DN.dep.novo = true; dnRerender('dep', '#dnCN'); };
ACT.dnNovoCardX = () => { DN.dep.novo = false; dnRerender('dep', '[data-act="dnNovoCard"]'); };

/* saque */
function dnSaqGo(go) {
  const Q = DN.saq; const v = Q.v;
  const dest = Q.met === 'spei' ? DN.contas.find(c => c.id === Q.conta && c.ok === 1) : DN.cartoes.find(c => c.id === Q.card);
  if (!dest) return toast(t('dn.saq.e.sel'), {icon: 'info'});
  dnBusy(go, t('dn.saq.pedindo'));
  setTimeout(() => {
    const met = Q.met === 'spei' ? 'SPEI · ' + dest.banco : DN_MET.deb;
    const tx = {id: 'dn' + Date.now().toString(36), tp: 'sac', d: dnStamp(), met, v: -v, st: DN_ST.rev, ses: dnSes(), para: dest.id};
    TX.unshift(tx); S.saldo = +(S.saldo - v).toFixed(2); bus.emit('balance');
    Q.v = 0; dnRerender('saq'); const side = $('.pg-side'); if (side) side.innerHTML = dnAsideSaq();
    dnDone(tx);
  }, 900);
}
ACT.dnConta = el => { DN.saq.conta = el.dataset.arg; DN.saq.novo = false; dnRerender('saq', `[data-act="dnConta"][data-arg="${el.dataset.arg}"]`); };
ACT.dnSCard = el => { DN.saq.card = el.dataset.arg; dnRerender('saq', `[data-act="dnSCard"][data-arg="${el.dataset.arg}"]`); };
ACT.dnAddDeb = () => { DN.dep.met = 'deb'; DN.dep.novo = true; DN.dep.trocar = false; go('deposito'); };
ACT.dnVerif = el => { const c = DN.contas.find(x => x.id === el.dataset.arg); if (c) c.ok = 'pend'; dnRerender('saq'); toast(t('dn.saq.verif.ok'), {icon: 'relogio'}); };
ACT.dnNovaConta = () => { DN.saq.novo = true; dnRerender('saq', '#dnBc'); };
ACT.dnNovaContaX = () => { DN.saq.novo = false; dnRerender('saq', '[data-act="dnNovaConta"]'); };
ACT.dnContaSave = () => {
  const b = $('#dnBb'), c = $('#dnBc'); if (!b || !c) return; const bad = [];
  const d = c.value.replace(/\D/g, '');
  if (d.length !== 18) { setErr(c, t('dn.conta.e.clabe')); bad.push(c); }
  else if (dnClabeDv(d) !== d[17]) { setErr(c, t('dn.conta.e.dv')); bad.push(c); }
  if (!b.value) { setErr(b, t('dn.conta.e.banco')); bad.push(b); }
  if (bad.length) return bad[0].focus();
  const banco = (DN.bancos.find(x => x[0] === b.value) || ['', ''])[1];
  const id = 'b' + Date.now().toString(36);
  DN.contas.push({id, banco, fim: d.slice(-4), ok: 1});
  DN.saq.conta = id; DN.saq.novo = false; dnRerender('saq', `[data-act="dnConta"][data-arg="${id}"]`); toast(t('dn.conta.ok'), {icon: 'verificado'});
};

/* etapas do saque (sem horário prometido): Solicitado · En revisión · Enviado */
function dnSteps(x) {
  const i = /Enviado|Completado/.test(x.st) ? 3 : /revisión/.test(x.st) ? 1 : 0;
  return `<ol class="dn-st" aria-label="${t('dn.st.l')}">${[1, 2, 3].map((n, k) => {
    const s = k < i || i === 3 ? 'done' : k === i ? 'cur' : 'next';
    const when = s === 'done' ? (k === 0 ? `${t('dn.st.feito')} · ${dnDM(x.d)} ${dnHora(x.d)}` : t('dn.st.feito')) : s === 'cur' ? t('dn.st.agora') : t('dn.st.prox');
    return `<li class="is-${s}"${s === 'cur' ? ' aria-current="step"' : ''}><span class="dn-st-m" aria-hidden="true">${s === 'done' ? ic('check', 'ic--xs') : s === 'cur' ? ic('relogio', 'ic--xs') : `<i>${n}</i>`}</span>
      <span class="dn-st-t"><b>${t('dn.st.' + n)}</b><small>${when} · ${t('dn.st.' + n + 's')}</small></span></li>`;
  }).join('')}</ol>`;
}
/* comprovante */
function dnReceipt(x) {
  const tp = t('dn.tp.' + x.tp); const inn = x.v > 0;
  const rows = [kv(t('dn.rc.data'), esc(x.d))];
  if (x.tp === 'dep' || x.tp === 'sac') {
    rows.push(kv(t('dn.rc.met'), esc(x.met.split(' · ')[0])));
    if (x.tp === 'dep' && x.de) rows.push(kv(t('dn.rc.de'), esc(dnDe(x) + (x.de === 'oxxo' ? '' : ' · ' + t('dn.rc.nome')))));
    if (x.tp === 'sac') rows.push(kv(t('dn.rc.para'), esc(dnPara(x) || x.met.split(' · ').slice(1).join(' · '))));
    rows.push(kv(t('dn.rc.tit'), esc(`${ME.nome} · CURP ${ME.curp}`)));
  } else {
    rows.push(kv(t('dn.rc.orig'), esc(x.met)));
    if (dnOrg(x)) rows.push(kv(t('dn.rc.cat'), esc(t('dn.og.' + dnOrg(x)))));
  }
  if (x.apelido) rows.push(kv(t('dn.rc.ap'), esc(x.apelido)));
  rows.push(kv(t('dn.rc.ses'), esc(x.ses || '')));
  const ref = dnRef(x);
  rows.push(`<div class="kv dn-kv-id"><span>${t('dn.rc.id')}</span><b class="tnum"><span class="dn-ref">${esc(ref)}</span><button type="button" class="btn btn--ghost btn--ico dn-cp" data-copy="${esc(ref)}" data-ok="${esc(t('dn.rc.idok'))}" aria-label="${t('dn.rc.copiar')}">${ic('copiar')}</button></b></div>`);
  rows.push(kv(t('dn.rc.st'), dnStatus(x.st)));
  return `<article class="dn-rc" aria-labelledby="dnRcT-${x.id}">
    <header class="dn-rc-hd"><span class="dn-rc-i">${ic(DN_TPIC[x.tp])}</span><span class="dn-rc-k"><span class="lab mut">${esc(x.tp === 'dep' || x.tp === 'sac' ? x.met.split(' · ')[0] : dnOrg(x) ? t('dn.og.' + dnOrg(x)) : t('dn.rc.k'))}</span><b id="dnRcT-${x.id}">${esc(x.apelido || tp)}</b></span>
      <b class="dn-rc-v tnum"><span class="sr">${inn ? t('dn.in') : t('dn.out')}: </span>${mxn(x.v, {sign: true})}</b></header>
    <div class="dn-rc-bd">${rows.join('')}</div></article>`;
}
function dnSheetSet(body, o) {
  /* troca o conteúdo do painel aberto (mantém foco preso e origem); se não houver, abre um novo */
  if (SH && SH.el && SH.el.isConnected && o.swap) {
    const el = SH.el; el.className = 'sh is-open ' + (o.cls || ''); const h = el.querySelector('.sh-hd h2'); h.textContent = o.title; h.classList.remove('sr');
    el.querySelector('.sh-bd').innerHTML = body; el.querySelector('.sh-bd').scrollTop = 0;
    let ft = el.querySelector('.sh-ft'); if (o.foot) { if (!ft) { ft = document.createElement('div'); ft.className = 'sh-ft'; el.append(ft); } ft.innerHTML = o.foot; } else if (ft) ft.remove();
    setTimeout(() => h.focus({preventScroll: true}), 30); return el;
  }
  return sheet(body, o);
}
function dnDone(tx, extra) {
  const k = tx.tp === 'sac' ? 'saq' : tx.st === DN_ST.ok ? 'dep' : 'oxxo';
  const v = mxn(Math.abs(tx.v));
  const after = k === 'dep' ? `<p class="dn-ok-bal"><span>${t('dn.ok.saldo')}</span><b class="tnum dn-saldo">${mxn(S.saldo)}</b></p>`
    : k === 'saq' ? `<p class="dn-ok-bal"><span>${t('dn.saq.disp')}</span><b class="tnum dn-saldo">${mxn(S.saldo)}</b></p>` : '';
  const body = `<div class="dn-ok">
    <div class="dn-ok-hd"><div class="dn-ok-tx"><p class="dn-say">${esc(t('dn.ok.' + k + '.say', {v}))}</p>${after}</div>${pedestal(k === 'saq' ? 'dragon' : 'raton', {h: 132})}</div>
    ${extra ? `<p class="dn-fine">${ic('check-c', 'ic--s')}<span>${esc(extra)}</span></p>` : ''}
    ${k === 'saq' ? dnSteps(tx) : ''}${dnReceipt(tx)}</div>`;
  const foot = btn(k === 'saq' ? t('dn.ok.saq.acomp') : t('dn.ok.cart'), {kind: 'sec', full: true, go: 'transacoes', iconR: 'seta-d'}) + btn(t('dn.ok.fechar'), {kind: 'ghost', full: true, attrs: {'data-close': ''}});
  dnSheetSet(body, {title: t('dn.ok.' + k + '.t'), id: 'dnShOk', cls: 'dn-sh dn-sh--ok', foot, swap: true,
    onClose: () => setTimeout(() => { const g = $('#dnGo') || $('#main h1'); if (g) g.focus({preventScroll: true}); }, 40)});
}

/* ===== CARTEIRA ===== */
const DN_ORG = ['todos', 'slots', 'cassino', 'crash', 'sport', 'fav'];
const DN_ORGIC = {slots: 'slots', cassino: 'cassino', crash: 'crash', sport: 'esportes', fav: 'estrela'};
function dnFiltered(o = DN.w) {
  return TX.filter(x => !DN.hidden.has(x.id))
    .filter(x => o.tab === 'geral' || x.tp === o.tab)
    .filter(x => o.org === 'todos' || (o.org === 'fav' ? !!(x.game && S.favs.has(x.game)) : dnOrg(x) === o.org))
    .filter(x => !o.per || (o.per === 'hoje' ? dnDays(x.d) === 0 : dnDays(x.d) < +o.per));
}
function dnWallet() {
  const an = dnAnalise(); const hasDep = TX.some(x => x.tp === 'dep');
  const real = `<article class="dn-wc dn-wc--real" aria-labelledby="dnWr"><div class="dn-wc-hd"><h2 class="lab" id="dnWr">${t('dn.cart.real')}</h2>${ic('carteira')}</div>
    <b class="dn-wc-v tnum dn-saldo">${mxn(S.saldo)}</b><p class="dn-wc-s">${t('dn.cart.real.s')}${an ? ` · <span class="tnum">${t('dn.cart.anal', {v: mxn(an)})}</span>` : ''}</p></article>`;
  const bon = hasDep
    ? `<article class="dn-wc dn-wc--bon" aria-labelledby="dnWb"><div class="dn-wc-hd"><h2 class="lab" id="dnWb">${t('dn.cart.bon')}</h2>${ic('bono')}</div>
      <b class="dn-wc-v tnum">${mxn(S.bonus || 0)}</b><p class="dn-wc-s">${S.bonus > 0 ? t('dn.cart.bon.s') : t('dn.cart.bon.0')}</p>
      <div class="dn-wc-ft"><span class="dn-tc">${esc(t('dn.cart.tc'))}</span><button type="button" class="lnk" data-go="bonus">${t('dn.cart.bon.ver')}${ic('seta-d')}</button></div></article>`
    : `<article class="dn-wc dn-wc--bon" aria-labelledby="dnWb"><div class="dn-wc-hd"><h2 class="lab" id="dnWb">${t('dn.cart.bon')}</h2>${ic('bono')}</div>
      <b class="dn-wc-n" id="dnWbT">${t('dn.cart.boas.t')}</b><p class="dn-wc-s">${t('dn.cart.boas.s')}</p><div class="dn-wc-ft"><span class="dn-tc">${esc(t('dn.cart.tc'))}</span></div></article>`;
  return `${real}${bon}<div class="dn-wb">${btn(t('dn.cart.dep'), {kind: 'mag', icon: 'depositar', go: 'deposito', size: 'l'})}${btn(t('dn.cart.saq'), {kind: 'sec', icon: 'saque', go: 'saque', size: 'l'})}</div>`;
}
function dnListHead() {
  const n = dnFiltered().length; const p = DN.w.per;
  return {t: t('dn.lst.' + p), n: n === 0 ? t('dn.lst.n0') : n === 1 ? t('dn.lst.n1') : t('dn.lst.n', {n}), b: p ? t('dn.per.b.on', {p: t('dn.per.c.' + p)}) : t('dn.per.b')};
}
function dnRow(x) {
  const inn = x.v > 0; const tp = t('dn.tp.' + x.tp);
  const title = x.apelido || `${tp} · ${x.met}`;
  return `<li><button type="button" class="dn-tx" data-act="dnRc" data-arg="${x.id}" aria-haspopup="dialog">
    <span class="dn-tx-i dn-tx-i--${inn ? 'in' : 'out'}">${ic(DN_TPIC[x.tp])}</span>
    <span class="dn-tx-t"><b>${esc(title)}</b><small><span class="tnum">${dnHora(x.d)}</span> · ${esc(x.ses || '')}${x.apelido ? ' · ' + esc(tp) : ''}</small></span>
    <span class="dn-tx-r"><b class="tnum"><span class="sr">${inn ? t('dn.in') : t('dn.out')}: </span>${mxn(x.v, {sign: true})}</b>${dnStatus(x.st)}</span></button></li>`;
}
function dnList() {
  const L = dnFiltered();
  if (!L.length) {
    if (!TX.some(x => !DN.hidden.has(x.id))) return empty({who: 'raton', title: t('dn.vz.novo.t'), text: t('dn.vz.novo.s'), action: btn(t('dn.cart.dep'), {kind: 'sec', go: 'deposito', icon: 'depositar'})});
    const w = DN.w; const clean = w.org === 'todos' && !w.per;
    if (clean && w.tab === 'dep') return empty({who: 'raton', title: t('dn.vz.dep.t'), text: t('dn.vz.dep.s'), action: btn(t('dn.cart.dep'), {kind: 'sec', go: 'deposito', icon: 'depositar'})});
    if (clean && w.tab === 'sac') return empty({who: 'dragon', title: t('dn.vz.sac.t'), text: t('dn.vz.sac.s'), action: btn(t('dn.cart.saq'), {kind: 'sec', go: 'saque', icon: 'saque'})});
    return empty({who: 'raton', title: t('dn.vz.t'), text: t('dn.vz.s'), action: btn(t('dn.vz.b'), {kind: 'sec', act: 'dnClr'})});
  }
  const groups = []; L.forEach(x => { const k = x.d.slice(0, 10); const g = groups[groups.length - 1]; if (g && g.k === k) g.items.push(x); else groups.push({k, items: [x]}); });
  return groups.map(g => `<section class="dn-day" aria-label="${esc(dnDayLabel(g.items[0].d))}"><h3 class="lab mut">${esc(dnDayLabel(g.items[0].d))}</h3><ul>${g.items.map(dnRow).join('')}</ul></section>`).join('');
}
function dnRefreshList() {
  const h = dnListHead(); const T = $('#dnLt'), N = $('#dnLn'), B = $('#dnPerB span'), L = $('#dnTxL');
  if (T) T.textContent = h.t; if (N) N.textContent = h.n; if (B) B.textContent = h.b; if (L) L.innerHTML = dnList();
  const pb = $('#dnPerB'); if (pb) pb.classList.toggle('is-on', !!DN.w.per);
}
function dnAsideCart() {
  const mes = TX.filter(x => { const d = dnD(x.d); return d.getMonth() === DN_HOJE.getMonth() && d.getFullYear() === DN_HOJE.getFullYear(); });
  const ent = mes.filter(x => x.v > 0 && x.st !== DN_ST.esp).reduce((a, x) => a + x.v, 0);
  const sai = mes.filter(x => x.v < 0).reduce((a, x) => a + x.v, 0);
  const an = dnAnalise();
  const nome = DN_HOJE.toLocaleDateString(LOC, {month: 'long', year: 'numeric'});
  return `<section class="card dn-as dn-rs" aria-labelledby="dnRsT"><h2 class="ttl dn-as-t" id="dnRsT">${t('dn.as.rs.t')}</h2><p class="mut dn-rs-m">${esc(nome.charAt(0).toUpperCase() + nome.slice(1))}</p>
    <dl class="dn-rs-l">
      <div><dt>${ic('entrada', 'ic--s')}${t('dn.as.rs.in')}</dt><dd class="tnum">${mxn(ent, {sign: true})}</dd></div>
      <div><dt>${ic('saque', 'ic--s')}${t('dn.as.rs.out')}</dt><dd class="tnum">${mxn(sai)}</dd></div>
      <div><dt>${ic('relogio', 'ic--s')}${t('dn.as.rs.an')}</dt><dd class="tnum">${mxn(an)}</dd></div>
    </dl><p class="dn-fine">${t('dn.as.rs.n')}</p></section>
    <section class="card">${dnLimCard()}</section>${asideAjuda()}`;
}
SCREENS.transacoes = {
  label: 'Billetera', nav: 'menu', auth: 'Entra para ver tu billetera.', asideLabel: 'Resumen del mes',
  aside: () => dnAsideCart(),
  render() {
    const h = dnListHead();
    return `${acctNav('transacoes')}
    <header class="pg-head"><h1 class="pt">${t('dn.cart.t')}</h1><p class="lede">${t('dn.cart.s')}</p></header>
    <section class="dn-wl" aria-label="${t('dn.cart.saldos')}">${dnWallet()}</section>
    <section class="dn-txs" aria-labelledby="dnLt">
      ${chips(DN_ORG.map(k => ({k, n: t('dn.org.' + k), ic: DN_ORGIC[k]})), {name: 'dnOrg', active: DN.w.org, label: t('dn.org.l'), scroll: true})}
      ${tabs(['geral', 'dep', 'sac', 'gan'].map(k => ({k, n: t('dn.tt.' + k)})), {name: 'dnTxT', active: DN.w.tab, label: t('dn.tt.l')})}
      <div class="dn-lh"><div class="dn-lh-t"><h2 class="dn-lt" id="dnLt">${esc(h.t)}</h2><p class="mut dn-ln tnum" id="dnLn" aria-live="polite">${esc(h.n)}</p></div>
        <button type="button" class="btn btn--sec btn--s dn-perb${DN.w.per ? ' is-on' : ''}" id="dnPerB" data-act="dnPer" aria-haspopup="dialog">${ic('calendario')}<span>${esc(h.b)}</span></button></div>
      <div id="dnTxL" class="dn-txl">${dnList()}</div>
    </section>`;
  },
  init: root => dnAcct(root)
};
ON.chip.dnOrg = k => { DN.w.org = k; dnRefreshList(); };
ON.tab.dnTxT = k => { DN.w.tab = k; dnRefreshList(); };
ACT.dnClr = () => {
  DN.w = {org: 'todos', tab: DN.w.tab, per: ''};
  $$('[data-chips="dnOrg"] [data-chip]').forEach(b => { const on = b.dataset.chip === 'todos'; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); });
  dnRefreshList(); const h = $('#dnLt'); if (h) { h.tabIndex = -1; h.focus({preventScroll: true}); }
};
ACT.dnPer = () => {
  const opts = ['', 'hoje', '7', '30', '90'].map(k => { const n = dnFiltered({...DN.w, per: k}).length; const c = n === 0 ? t('dn.lst.n0') : n === 1 ? t('dn.lst.n1') : t('dn.lst.n', {n});
    return {act: 'dnPerSet', arg: k, on: DN.w.per === k, title: t('dn.per.' + k), sub: k ? c : `${t('dn.per.s')} · ${c}`}; });
  sheet(`${dnOpts(opts, t('dn.per.t'))}`, {title: t('dn.per.t'), id: 'dnShPer', cls: 'dn-sh', focus: '.dn-opt[tabindex="0"]', init: el => el.addEventListener('keydown', dnRadioKeys)});
};
ACT.dnPerSet = el => { DN.w.per = el.dataset.arg || ''; closeSheet(); dnRefreshList(); };
ACT.dnRc = el => dnRcSheet(el.dataset.arg);
function dnRcSheet(id) {
  const x = TX.find(y => y.id === id); if (!x) return;
  sheet(`${dnReceipt(x)}${x.tp === 'sac' ? dnSteps(x) : ''}
    <div class="dn-rc-act">${btn(t('dn.mg.b'), {kind: 'sec', icon: 'editar', act: 'dnMg', attrs: {'aria-expanded': 'false', 'aria-controls': 'dnMg'}})}${btn(t('dn.rc.pdf'), {kind: 'ghost', icon: 'download', attrs: {'data-toast': t('dn.rc.pdf.t')}})}</div>
    <div class="dn-mg" id="dnMg" hidden>
      <div class="dn-mg-ap">${field({id: 'dnAp', label: t('dn.mg.ap'), value: x.apelido || '', placeholder: t('dn.mg.ap.ph'), hint: t('dn.mg.ap.h'), maxlength: 40, enter: 'done'})}
        ${btn(t('dn.mg.ap.s'), {kind: 'sec', size: 's', act: 'dnApSave', attrs: {'data-arg': x.id}})}</div>
      <div class="dn-mg-rm" id="dnRmBox">${btn(t('dn.mg.rm'), {kind: 'ghost', icon: 'lixo', act: 'dnRmAsk', attrs: {'data-arg': x.id}})}</div>
    </div>`, {title: t('dn.rc.t'), id: 'dnShRc', cls: 'dn-sh dn-sh--rc'});
}
ACT.dnMg = el => {
  const p = $('#dnMg'); if (!p) return; const open = p.hidden; p.hidden = !open; el.setAttribute('aria-expanded', open);
  if (open) { const f = $('#dnAp'); if (f) { f.focus({preventScroll: true}); p.scrollIntoView({block: 'nearest', behavior: RM.matches ? 'auto' : 'smooth'}); } }
};
ACT.dnApSave = el => {
  const x = TX.find(y => y.id === el.dataset.arg); const f = $('#dnAp'); if (!x || !f) return;
  const v = f.value.trim().slice(0, 40); const had = !!x.apelido; x.apelido = v || undefined;
  const rc = $('#dnShRc .dn-rc'); if (rc) rc.outerHTML = dnReceipt(x);
  dnRefreshList(); toast(v ? t('dn.mg.ap.ok') : had ? t('dn.mg.ap.rm') : t('dn.mg.ap.ok'), {icon: 'editar'});
};
ACT.dnRmAsk = el => {
  const box = $('#dnRmBox'); if (!box) return;
  box.innerHTML = `<div class="dn-cf" role="group" aria-labelledby="dnRmT"><b id="dnRmT" tabindex="-1">${t('dn.mg.rm.t')}</b><p>${t('dn.mg.rm.s')}</p>
    <div class="dn-cf-b">${btn(t('dn.mg.rm.ok'), {kind: 'mag', icon: 'lixo', act: 'dnRmOk', attrs: {'data-arg': el.dataset.arg}})}${btn(t('dn.mg.rm.no'), {kind: 'ghost', act: 'dnRmNo', attrs: {'data-arg': el.dataset.arg}})}</div></div>`;
  $('#dnRmT').focus();
};
ACT.dnRmNo = el => { const box = $('#dnRmBox'); if (!box) return; box.innerHTML = btn(t('dn.mg.rm'), {kind: 'ghost', icon: 'lixo', act: 'dnRmAsk', attrs: {'data-arg': el.dataset.arg}}); box.querySelector('button').focus(); };
ACT.dnRmOk = el => { DN.hidden.add(el.dataset.arg); closeSheet(true); dnRefreshList(); toast(t('dn.mg.rm.done'), {icon: 'lixo'}); const h = $('#dnLt'); if (h) { h.tabIndex = -1; h.focus({preventScroll: true}); } };

/* saldo vivo nas telas de dinheiro */
bus.on('balance', () => $$('.dn-saldo').forEach(e => e.textContent = mxn(S.saldo)));
bus.on('fav', () => { if (S.cur === 'transacoes' && DN.w.org === 'fav') dnRefreshList(); });
bus.on('lim', () => { if (S.cur === 'deposito') dnRerender('dep'); });
