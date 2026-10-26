/* conta2.js · Minhas apostas (Esportes / Cassino), Meus bônus, Programa VIP, Missões e Indique (BASE §5.12–5.13).
   Prefixo cx-. Texto em TXT.cx. Registra só SCREENS / ACT / ON; nenhum ouvinte global de clique. */
TXT.cx = {
  /* Minhas apostas */
  'ap.t': 'Mis apuestas.', 'ap.s.esp': 'Todo lo que apostaste en deportes, con el comprobante de cada apuesta.',
  'ap.s.cas': 'Tus sesiones en el casino: cuánto apostaste, cuánto ganaste y cuánto tiempo jugaste.',
  'ap.modo': 'Ver apuestas de', 'ap.esp': 'Deportes', 'ap.cas': 'Casino', 'ap.nova': 'Nueva apuesta', 'ap.irCas': 'Ir al casino',
  'ap.sp': 'Filtrar por deporte', 'ap.sp.todos': 'Todos', 'ap.resumo': 'Resumen de apuestas',
  'ap.c.abertas': 'Abiertas', 'ap.c.total': 'Total', 'ap.c.ganhas': 'Ganadas', 'ap.c.perdidas': 'Perdidas',
  'ap.st': 'Estado de la apuesta', 'ap.st.todas': 'Todas', 'ap.st.abertas': 'Abiertas', 'ap.st.ganhas': 'Ganadas', 'ap.st.perdidas': 'Perdidas',
  'ap.st.open': 'Abierta', 'ap.st.won': 'Ganada', 'ap.st.lost': 'Perdida',
  'ap.sel.open': 'Pendiente', 'ap.sel.won': 'Acertada', 'ap.sel.lost': 'No acertada',
  'ap.simples': 'Sencilla', 'ap.multi': 'Combinada · {n} selecciones', 'ap.mais1': '+1 selección', 'ap.maisN': '+{n} selecciones',
  'ap.valor': 'Monto', 'ap.odd': 'Momio', 'ap.ret.open': 'Ganancia posible', 'ap.ret.won': 'Ganancia pagada', 'ap.ret.lost': 'Ganancia',
  'ap.agora': 'Ahora', 'ap.n1': '1 apuesta en la lista.', 'ap.nN': '{n} apuestas en la lista.', 'ap.nova.tag': 'Nueva', 'ap.ver': 'Ver comprobante',
  'ap.vivo': 'En vivo', 'ap.fim': 'Finalizado',
  'ap.vazio.t': 'Ninguna apuesta por aquí.', 'ap.vazio.s': 'Soy el Maestro: haz tu primera apuesta y guardo aquí el comprobante, del silbatazo inicial al resultado.',
  'ap.vazio.f.t': 'Nada con ese filtro.', 'ap.vazio.f.s': 'Soy el Maestro: cambia el filtro o haz una nueva apuesta, y guardo aquí el comprobante.', 'ap.vazio.b': 'Apostar ahora',
  'ap.det.t': 'Comprobante de la apuesta.', 'ap.det.n': 'N.º de apuesta', 'ap.det.data': 'Hecha el', 'ap.det.tipo': 'Tipo',
  'ap.det.valor': 'Monto apostado', 'ap.det.odd': 'Momio total', 'ap.det.copiar': 'Copiar número de apuesta', 'ap.det.copiado': 'Número de apuesta copiado.',
  'ap.det.trava': 'El momio quedó fijo al momento de apostar. La ganancia posible no cambia, aunque cambie el momio del partido.',
  'ap.det.verJogo': 'Ver el partido', 'ap.det.sels': 'Selecciones', 'ap.det.rg': 'Apostar no es una inversión. Juega con responsabilidad.',
  /* Minhas apostas · Cassino */
  'cs.per': 'Periodo', 'cs.hoje': 'Hoy', 'cs.7': '7 días', 'cs.30': '30 días', 'cs.prov': 'Proveedor', 'cs.prov.all': 'Todos los proveedores',
  'cs.nums': 'Resumen del periodo', 'cs.ap': 'Apostado', 'cs.gan': 'Ganado', 'cs.res': 'Resultado', 'cs.tempo': 'Tiempo de juego',
  'cs.res.neg': 'Ganaste menos de lo que apostaste.', 'cs.res.pos': 'Ganaste más de lo que apostaste.', 'cs.res.zero': 'Ganaste lo mismo que apostaste.',
  'cs.ses1': '1 sesión', 'cs.sesN': '{n} sesiones', 'cs.rod': '{n} rondas',
  'cs.lim': '¿Quieres jugar con hora de salida? Pon un límite de tiempo por día.', 'cs.lim.b': 'Definir límite',
  'cs.ir': 'Ir al juego', 'cs.det.k': 'Sesión del {d}', 'cs.det.ini': 'Empezó', 'cs.det.fim': 'Terminó', 'cs.det.dur': 'Duración',
  'cs.det.rod': 'Rondas', 'cs.det.media': 'Apuesta promedio por ronda', 'cs.det.ver': 'Ver detalle',
  'cs.vazio.t': 'Ninguna sesión en este periodo.', 'cs.vazio.s': 'Soy el Tigre: cuando juegues, anoto aquí cada sesión, con el tiempo y los montos.', 'cs.vazio.b': 'Ir al casino',
  /* Meus bônus */
  'bn.t': 'Mis bonos.', 'bn.s': 'Activa un bono, sigue cuánto falta por apostar y mira cuándo se vuelve saldo real.',
  'bn.disp': 'Disponibles', 'bn.ativos': 'Activos', 'bn.ativo': 'Activo', 'bn.saldo': 'Saldo de bono', 'bn.emBonus': 'En bonos', 'bn.lista': 'Tus bonos',
  'bn.code.k': '¿Tienes un código?', 'bn.code.t': 'Código promocional.', 'bn.code.l': 'Tu código', 'bn.code.ph': 'Ej.: PISTA50',
  'bn.code.h': 'Letras y números, sin espacios. Ves la oferta y las reglas antes de aplicarlo.', 'bn.code.b': 'Ver oferta',
  'bn.code.err': 'Ese código no es válido. Revísalo e inténtalo de nuevo.', 'bn.code.vazio': 'Escribe el código promocional, como PISTA50.',
  'bn.code.ja': 'Ese código ya está en tu cuenta. Búscalo en Activos.', 'bn.code.of': 'Oferta del código {c}', 'bn.code.antes': 'Antes de aplicarlo, revisa las reglas',
  'bn.code.aplicar': 'Aplicar código', 'bn.code.nao': 'Ahora no', 'bn.code.ok.t': 'Código aplicado.',
  'bn.code.ok.s': 'Soy el Tigre: tus 50 giros ya están en la pista. Valen hasta el {d}.', 'bn.code.ok.b': 'Jugar {g}',
  'bn.tc': 'Aplican T&C.', 'bn.valido': 'Válido hasta el {d}', 'bn.ativar': 'Activar', 'bn.det': 'Detalles', 'bn.val': '{v} en bono.',
  'bn.ativar.t': 'Antes de activar.', 'bn.ativar.b': 'Activar bono', 'bn.ativar.ok': 'Bono activado: {n}.', 'bn.regras': 'Reglas del bono',
  'bn.roll': 'Apostado: {a} de {b}', 'bn.falta': 'Faltan {v} en apuestas para que el bono se vuelva saldo real.', 'bn.giros': '{a} de {b} giros usados',
  'bn.dep': 'Haz un depósito de {v} o más antes del {d} para recibirlo.', 'bn.pronta': 'Lista para usar: elígela en el boleto al momento de apostar.',
  'bn.depositar': 'Depositar', 'bn.apostar': 'Ir a Deportes', 'bn.jogar': 'Jugar {g}',
  'bn.cancelar': 'Puedes cancelar un bono cuando quieras: el saldo de bono se va, el saldo real se queda.',
  'bn.vazio.disp.t': 'Ningún bono disponible por ahora.', 'bn.vazio.disp.s': 'Soy el Ratón: cuando haya una oferta para ti, la dejo aquí. ¿Tienes un código? Usa el campo de arriba.',
  'bn.vazio.at.t': 'Ningún bono activo.', 'bn.vazio.at.s': 'Soy el Ratón: activa un bono y te muestro aquí cuánto falta para que se vuelva saldo real.', 'bn.vazio.at.b': 'Ver bonos disponibles',
  'bn.cassino': 'Casino', 'bn.esportes': 'Deportes',
  /* Programa VIP */
  'vip.t': 'Programa VIP.', 'vip.s': 'Cada apuesta suma XP. Al subir de nivel, la atención está más cerca de ti.',
  'vip.seu': 'Tu nivel', 'vip.xp': 'XP acumulado', 'vip.falta': 'Faltan {n} XP para {nv}.', 'vip.topo': 'Estás en el último nivel.',
  'vip.ben.k': 'Nivel {nv}', 'vip.ben.t': 'Tus beneficios.', 'vip.prox.k': 'La escalera', 'vip.prox.t': 'Próximos niveles.',
  'vip.voce': 'Tú', 'vip.aqui': 'Estás aquí', 'vip.apartir': 'Desde {xp} XP', 'vip.faltaN': 'Faltan {n} XP', 'vip.ok': 'Nivel alcanzado',
  'vip.escolha': 'Toca un nivel para ver qué cambia.', 'vip.como.t': 'Cómo sumar XP.',
  'vip.como.s': 'Cada $1.00 apostado en deportes o en el casino vale 1 XP [por confirmar]. Las misiones también dan XP.',
  'vip.chances': 'El nivel VIP no cambia tus probabilidades en ningún juego y no da dinero. Los beneficios son de atención y experiencia [por confirmar].',
  'vip.lim': 'Tus límites y pausas valen en cualquier nivel.', 'vip.lim.b': 'Ver mis límites', 'vip.missoes': 'Ver misiones',
  /* Missões */
  'ms.t': 'Misiones.', 'ms.s': 'Retos cortos, con plazo y recompensa. Elige los tuyos y juega a tu ritmo.',
  'ms.abas': 'Misiones', 'ms.minhas': 'Mis misiones', 'ms.disp': 'Disponibles', 'ms.prazo': 'Plazo', 'ms.rec': 'Recompensa', 'ms.prog': '{a} de {b} {u}',
  'ms.continuar': 'Continuar', 'ms.resgatar': 'Reclamar recompensa', 'ms.resgatada': 'Recompensa reclamada', 'ms.aceitar': 'Aceptar misión', 'ms.feita': 'Cumplida', 'ms.nova': 'Nueva',
  'ms.aceita.ok': 'Misión en tu lista: {n}.', 'ms.resg.ok': 'Recompensa reclamada: {r}.',
  'ms.vazio.t': 'Ninguna misión en tu lista.', 'ms.vazio.s': 'Soy el Jaguar: elige una misión disponible y marco cada paso tuyo hasta la recompensa.', 'ms.vazio.b': 'Ver misiones disponibles',
  'ms.vazio.d.t': 'Aceptaste todas.', 'ms.vazio.d.s': 'Soy el Jaguar: llegan misiones nuevas cada lunes [por confirmar]. Mientras, sigue con las tuyas.', 'ms.vazio.d.b': 'Ver mis misiones',
  'ms.regra': 'Las misiones no piden depósito. Las recompensas en giros o bonos siguen las reglas de cada bono [por confirmar].',
  /* Indique */
  'in.t': 'Invita amigos.', 'in.s': 'Trae a tu gente a la pista. Cuando se confirme la cuenta de quien invitaste, los dos reciben un bono.',
  'in.code.k': 'Tu código de invitación', 'in.copiar': 'Copiar código', 'in.copiado': 'Código copiado.', 'in.share': 'Compartir enlace',
  'in.share.ok': 'Enlace copiado. Ahora solo pégalo en la conversación.', 'in.link': 'cumbia.bet/c/{c}', 'in.link.l': 'Tu enlace', 'in.link.ac': '[dominio por confirmar]',
  'in.como.k': 'Cómo funciona', 'in.como.t': 'Tres pasos.',
  'in.p1.t': 'Manda el código o el enlace.', 'in.p1.s': 'Tu amigo lo usa al crear su cuenta.',
  'in.p2.t': 'Su cuenta se confirma.', 'in.p2.s': 'Cuenta con su propia CURP, identidad verificada y primer depósito de $100.00 o más [por confirmar].',
  'in.p3.t': 'Los dos reciben un bono.', 'in.p3.s': '$100.00 en bono para cada uno [por confirmar]. El bono tiene reglas de uso para volverse saldo real.',
  'in.regra': 'Solo para mayores de 18 años, con cuenta a su propio nombre y CURP. No vale invitarte a ti mismo ni abrir cuentas extra. Hasta 10 invitaciones confirmadas por mes [por confirmar].',
  'in.hist.k': 'Tus invitaciones', 'in.hist.t': 'Historial.', 'in.n.ind': 'Invitaciones', 'in.n.ok': 'Confirmadas', 'in.n.bn': 'Bono recibido', 'in.bn': '+{v} en bono',
  'in.vazio.t': 'Nadie ha usado tu código todavía.', 'in.vazio.s': 'Soy el Conejo: cuando alguien cree su cuenta con tu código, te aviso aquí.'
};

/* ===== dados de demonstração do módulo ===== */
/* apostas esportivas de exemplo · sel: ev (partida em MATCHES) ou evn + lg (partida encerrada) · r: open|won|lost */
const CX_BETS = [
  {id: 'AP-482913', st: 'open', date: '26/10/2026 · 09:05', stake: 20, sel: [
    {ev: 'caz-pum', desc: 'Sí', mk: 'Ambos anotan', val: 1.80, r: 'open'},
    {ev: 'riv-boc', desc: 'River Plate', mk: 'Resultado final', val: 2.15, r: 'open'},
    {ev: 'rma-bar', desc: 'Más de 2.5 goles', mk: 'Total de goles', val: 1.70, r: 'open'}]},
  {id: 'AP-477120', st: 'open', date: '25/10/2026 · 20:15', stake: 25, sel: [{ev: 'con-mil', desc: 'Conegliano', mk: 'Ganador', val: 1.40, r: 'open'}]},
  {id: 'AP-476508', st: 'open', date: '25/10/2026 · 18:30', stake: 50, sel: [{ev: 'ame-gdl', desc: 'América', mk: 'Resultado final', val: 1.72, r: 'open'}]},
  {id: 'AP-470336', st: 'won', date: '24/10/2026 · 21:40', stake: 40, sel: [{evn: 'Tigres × Toluca', lg: 'lmx', fim: '2:0', desc: 'Tigres', mk: 'Resultado final', val: 1.90, r: 'won'}]},
  {id: 'AP-465871', st: 'won', date: '23/10/2026 · 22:10', stake: 15, sel: [
    {evn: 'Lakers × Warriors', lg: 'nba', fim: '112:104', desc: 'Lakers', mk: 'Ganador', val: 1.85, r: 'won'},
    {evn: 'Astros × Panteras', lg: 'lnbp', fim: '88:79', desc: 'Más de 160.5 puntos', mk: 'Total de puntos', val: 1.80, r: 'won'}]},
  {id: 'AP-459402', st: 'lost', date: '22/10/2026 · 15:55', stake: 30, sel: [{evn: 'Arsenal × Chelsea', lg: 'pre', fim: '1:0', desc: 'Sí', mk: 'Ambos anotan', val: 1.70, r: 'lost'}]},
  {id: 'AP-455217', st: 'lost', date: '21/10/2026 · 21:05', stake: 10, sel: [
    {evn: 'Racing × Nacional', lg: 'lib', fim: '2:1', desc: 'Racing', mk: 'Resultado final', val: 2.05, r: 'won'},
    {evn: 'León × Puebla', lg: 'lmx', fim: '1:0', desc: 'Más de 1.5 goles', mk: 'Total de goles', val: 1.36, r: 'lost'}]},
  {id: 'AP-450964', st: 'won', date: '20/10/2026 · 13:40', stake: 10, sel: [{evn: 'R. Pacheco × T. Fritz', lg: 'atp', fim: '2 sets a 1', desc: 'R. Pacheco', mk: 'Ganador', val: 2.40, r: 'won'}]}
];
/* sessões de cassino · d: dias antes de hoje (26/10/2026) */
const CX_SES = [
  {g: 'tigre-pista', d: 0, ini: '08:50', min: 22, rod: 130, ap: 52.00, gan: 37.20},
  {g: 'salto-conejo', d: 0, ini: '00:12', min: 14, rod: 40, ap: 40.00, gan: 46.00},
  {g: 'fortune-dragon', d: 1, ini: '22:38', min: 32, rod: 190, ap: 76.00, gan: 86.40},
  {g: 'hot-rio-samba', d: 1, ini: '21:30', min: 35, rod: 210, ap: 84.00, gan: 61.80},
  {g: 'roleta-pista', d: 2, ini: '22:40', min: 28, rod: 24, ap: 60.00, gan: 45.00},
  {g: 'smoking-dragon', d: 4, ini: '20:15', min: 41, rod: 250, ap: 100.00, gan: 72.50},
  {g: 'fortune-panda', d: 6, ini: '19:00', min: 16, rod: 96, ap: 24.00, gan: 30.60},
  {g: 'coro-raton', d: 9, ini: '22:10', min: 25, rod: 120, ap: 48.00, gan: 12.00},
  {g: 'magic-scroll', d: 12, ini: '21:45', min: 30, rod: 180, ap: 54.00, gan: 61.20},
  {g: 'blackjack-gala', d: 16, ini: '23:20', min: 38, rod: 42, ap: 126.00, gan: 118.00},
  {g: 'yo-dragon', d: 21, ini: '20:30', min: 20, rod: 110, ap: 33.00, gan: 19.80},
  {g: 'fortune-dragon', d: 27, ini: '22:00', min: 26, rod: 150, ap: 60.00, gan: 66.00}
];
/* nome do jogo vem de data.js (G), com o nome atual como reserva */
const cxGn = (id, d) => (typeof G !== 'undefined' && G[id] && G[id].n) || d;
const CX_TIGRE = cxGn('tigre-pista', 'Tigre de la Pista');
const CX_TERMOS = {
  cassino: ['Rollover: apostar 10 veces el monto del bono para que se vuelva saldo real [por confirmar].', 'Apuesta máxima con bono: $20.00 por ronda [por confirmar].', 'Los slots cuentan el 100% de lo apostado; los juegos de mesa, el 10% [por confirmar].'],
  giros: ['Cada giro vale $2.00 [por confirmar].', 'Lo que ganes con los giros se vuelve bono, con rollover de 10 veces [por confirmar].', 'Un uso por CURP.'],
  esportes: ['Vale para una combinada de 3 selecciones o más, con momio mínimo de 1.50 en cada una.', 'La ganancia no incluye el monto de la apuesta gratis [por confirmar].', 'Un uso por CURP.']
};
/* bônus · st: disp | ativo · kind: dep (pede depósito) | roll (rollover) | giros | free (aposta grátis) */
const CX_BONUS = [
  {id: 'bv', st: 'ativo', tipo: 'cassino', kind: 'roll', t: 'Bono de bienvenida', d: '100% de tu primer depósito, hasta $2,000.00.', fi: '100%', tone: 'magenta', ate: '22/11/2026', val: 200, roll: [740, 2000], termos: 'cassino'},
  {id: 'sexta', st: 'disp', tipo: 'cassino', kind: 'dep', t: 'Recarga de viernes', d: '50% del depósito en bono, hasta $1,000.00.', fi: '50%', tone: 'magenta', ate: '30/10/2026', min: 100, termos: 'cassino'},
  {id: 'giros30', st: 'disp', tipo: 'cassino', kind: 'giros', t: 'Giros en ' + CX_TIGRE, d: '30 giros gratis en ' + CX_TIGRE + ', un original de la casa.', fi: '30', tone: 'rosa', ate: '29/10/2026', game: 'tigre-pista', giros: [0, 30], termos: 'giros'},
  {id: 'free10', st: 'disp', tipo: 'esportes', kind: 'free', t: 'Apuesta gratis de $50.00', d: 'Para usar en una combinada de deportes.', fi: '$50', tone: 'blanca', ate: '02/11/2026', termos: 'esportes'}
];
const CX_CODES = {
  PISTA50: {id: 'pista50', st: 'ativo', tipo: 'cassino', kind: 'giros', t: '50 giros gratis en ' + CX_TIGRE, d: '50 giros en ' + CX_TIGRE + ', liberados en cuanto aplicas el código.', fi: '50', tone: 'rosa', ate: '02/11/2026', game: 'tigre-pista', giros: [0, 50], termos: 'giros', extra: 'Vale por 7 días después de aplicarlo.'}
};
const CX_VIP_BEN = {
  1: [['suporte', 'Atención 24 horas, en español.'], ['missoes', 'Misiones cada semana, con XP y giros.'], ['torneio', 'Torneos abiertos de la casa.'], ['limite', 'Límites, pausa y autoexclusión a un toque.']],
  2: [['chat', 'Fila prioritaria en el chat [por confirmar].'], ['missoes', 'Misiones exclusivas del nivel [por confirmar].'], ['torneio', 'Invitación a torneos cerrados [por confirmar].']],
  3: [['perfil', 'Gerente de cuenta por chat [por confirmar].'], ['calendario', 'Agenda de eventos de la marca [por confirmar].'], ['torneio', 'Torneos cerrados del nivel [por confirmar].']],
  4: [['perfil', 'Gerente de cuenta dedicado [por confirmar].'], ['estrela', 'Invitaciones a eventos Cumbia [por confirmar].'], ['calendario', 'Detalle de cumpleaños [por confirmar].']],
  5: [['perfil', 'Atención personalizada [por confirmar].'], ['mic', 'Experiencias Cumbia: conciertos y partidos [por confirmar].'], ['estrela', 'Invitación al salón Maestro [por confirmar].']]
};
/* missões · on: na lista · ok: recompensa resgatada */
const CX_MIS = [
  {id: 'm1', on: 1, t: 'Calentamiento en el salón', d: 'Juega 50 rondas en cualquier slot.', ic: 'slots', a: 32, b: 50, u: 'rondas', prazo: 'Hasta el 01/11/2026', fi: '150', rec: '150 XP', tone: 'magenta', go: 'slots'},
  {id: 'm2', on: 1, t: 'Pronóstico en el clásico', d: 'Haz una apuesta en América × Chivas con momio de 1.50 o más.', ic: 'esportes', a: 1, b: 1, u: 'apuesta', prazo: 'Hasta hoy, 23:59', fi: '20', rec: '20 giros gratis', tone: 'rosa', go: 'evento:ame-gdl'},
  {id: 'm3', on: 1, t: 'Tres saltos', d: 'Juega 3 rondas en ' + cxGn('salto-conejo', 'El Salto del Conejo') + '.', ic: 'crash', a: 0, b: 3, u: 'rondas', prazo: 'Hasta el 31/10/2026', fi: '100', rec: '100 XP', tone: 'magenta', game: 'salto-conejo'},
  {id: 'm4', on: 0, t: 'Tour por los Originales', d: 'Juega 1 ronda en 5 juegos Originales de la casa.', ic: 'cassino', a: 0, b: 5, u: 'juegos', prazo: '7 días después de aceptarla', fi: '20', rec: '20 giros gratis', tone: 'rosa', go: 'slots'},
  {id: 'm5', on: 0, t: 'Combinada de domingo', d: 'Haz una combinada de 3 selecciones o más el domingo.', ic: 'cupom', a: 0, b: 1, u: 'apuesta', prazo: 'Dom 01/11/2026', fi: '200', rec: '200 XP', tone: 'magenta', go: 'esportes'},
  {id: 'm6', on: 0, t: 'Mesa de gala', d: 'Juega 10 manos en ' + cxGn('blackjack-gala', 'Blackjack de Gala') + '.', ic: 'cassino', a: 0, b: 10, u: 'manos', prazo: 'Hasta el 08/11/2026', fi: '100', rec: '100 XP', tone: 'magenta', game: 'blackjack-gala'},
  {id: 'm7', on: 0, t: 'Tus reglas, tu ritmo', d: 'Pon un límite de depósito o de tiempo de juego.', ic: 'limite', a: 0, b: 1, u: 'límite', prazo: 'Sin plazo', fi: '50', rec: '50 XP', tone: 'magenta', go: 'limites'}
];
const CX_REF = {code: 'GUI5485', hist: [
  {n: 'Diego A.', d: '25/10/2026', st: 'wait', tx: 'Verificando identidad'},
  {n: 'Valeria M.', d: '24/10/2026', st: 'wait', tx: 'Falta el primer depósito'},
  {n: 'Fernanda S.', d: '20/10/2026', st: 'ok', tx: 'Bono liberado', v: 100},
  {n: 'Alejandro T.', d: '14/10/2026', st: 'ok', tx: 'Bono liberado', v: 100},
  {n: 'Luis F.', d: '02/10/2026', st: 'no', tx: 'Registro vencido'}
]};

/* saldo de bônus único entre telas: a Carteira (dn) lê S.bonus; aqui ele vem da soma dos bônus ativos com valor */
function cxSyncBonus() { S.bonus = CX_BONUS.filter(b => b.st === 'ativo').reduce((a, b) => a + (b.val || 0), 0); bus.emit('balance', S.saldo); }
if (!(+S.bonus > 0)) S.bonus = CX_BONUS.filter(b => b.st === 'ativo').reduce((a, b) => a + (b.val || 0), 0);

/* estado do módulo (filtros e escolhas da sessão) */
const CX = {sp: 'todos', st: 'todas', per: '7', prov: 'all', bnTab: 'disp', misTab: 'minhas', vipSel: 0, applied: new Set(), codeOk: null};

/* ===== utilitários ===== */
const cxPad = n => String(n).padStart(2, '0');
const CX_WD = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
function cxDay(d) {
  const x = new Date(2026, 9, 26 - d); const dm = cxPad(x.getDate()) + '/' + cxPad(x.getMonth() + 1);
  return {dm, full: dm + '/' + x.getFullYear(), lab: d === 0 ? 'Hoy · ' + dm : d === 1 ? 'Ayer · ' + dm : CX_WD[x.getDay()] + ' ' + dm};
}
function cxDur(min) { const h = Math.floor(min / 60), m = min % 60; return h ? `${h} h${m ? ' ' + m + ' min' : ''}` : `${m} min`; }
function cxAdd(hhmm, min) { const [h, m] = hhmm.split(':').map(Number); const t2 = (h * 60 + m + min) % 1440; return cxPad(Math.floor(t2 / 60)) + ':' + cxPad(t2 % 60); }
function cxWhen(d) {
  if (d == null || d === '') return t('cx.ap.agora');
  if (typeof d === 'number' || d instanceof Date) { const x = new Date(d); return `${cxPad(x.getDate())}/${cxPad(x.getMonth() + 1)}/${x.getFullYear()} · ${cxPad(x.getHours())}:${cxPad(x.getMinutes())}`; }
  return String(d);
}
const cxOdd = sel => Math.round(sel.reduce((a, s) => a * (+s.val || 1), 1) * 100) / 100;
function cxEvOf(s) {
  const id = String(s.ev || s.id || '');
  const m = MATCHES.find(x => id === x.id || id.startsWith(x.id + '-'));
  return m ? m.id : null;
}
function cxEv(s) {
  const m = s.ev && M[s.ev];
  if (m) { const lg = LEAGUES[m.lg]; return {n: `${teamName(m.h)} × ${teamName(m.a)}`, lg: lg.n, sp: lg.sp, when: m.live ? `${t('cx.ap.vivo')} · ${m.live.m} · ${m.live.s.join(':')}` : m.t, live: !!m.live, id: m.id}; }
  if (s.evn) { const lg = LEAGUES[s.lg] || {}; return {n: s.evn, lg: lg.n || '', sp: lg.sp || null, when: s.fim ? t('cx.ap.fim') + ' · ' + s.fim : ''}; }
  if (s.jogo) return {n: s.jogo, lg: s.lg2 || '', sp: s.sp || null, when: s.quando || ''};
  return {n: '', lg: '', sp: null, when: ''};
}
/* apostas feitas no protótipo: o módulo de esportes guarda em S.bets. Aceita os dois formatos combinados
   ({id, sel, stake, odd, ret, date} do contrato e {id, sels, valor, cot, ret, em, status} do sport.js) e ordena da mais nova para a mais antiga. */
const CX_UST = {aberta: 'open', ganha: 'won', perdida: 'lost', abierta: 'open', ganada: 'won', open: 'open', won: 'won', lost: 'lost'};
function cxTs(d) {
  if (typeof d === 'number') return d; if (d instanceof Date) return +d;
  const m = String(d || '').match(/(\d{2})\/(\d{2})\/(\d{4})\D+(\d{2}):(\d{2})/);
  return m ? +new Date(+m[3], +m[2] - 1, +m[1], +m[4], +m[5]) : 0;
}
function cxUserBets() {
  const arr = Array.isArray(S.bets) ? S.bets : [];
  return arr.map((b, i) => ({b, i})).filter(({b}) => b && Array.isArray(b.sel || b.sels) && (b.sel || b.sels).length)
    .sort((x, y) => (cxTs(y.b.date ?? y.b.em) - cxTs(x.b.date ?? x.b.em)) || (x.i - y.i))
    .map(({b, i}) => {
      const sel = (b.sel || b.sels).map(s => ({ev: s.ev && M[s.ev] ? s.ev : cxEvOf(s), jogo: s.jogo, lg2: s.lg, sp: s.sp, quando: s.quando,
        desc: s.desc || '', mk: s.mk || '', val: +s.val || 0, r: CX_UST[s.status] || 'open'}));
      const stake = +(b.stake ?? b.valor) || 0; const odd = +(b.odd ?? b.cot) || cxOdd(sel);
      const st = CX_UST[b.status] || 'open';
      return {id: String(b.id || 'CB-agora-' + (arr.length - i)), st, date: cxWhen(b.date ?? b.em).replace(/(\d{2}\/\d{2}\/\d{4})\s+(\d{2}:\d{2})/, '$1 · $2'),
        stake, odd, ret: st === 'lost' ? 0 : (+b.ret || stake * odd), sel, mine: 1};
    });
}
function cxAllBets() {
  return [...cxUserBets(), ...CX_BETS.map(b => { const odd = cxOdd(b.sel); return {...b, odd, ret: b.st === 'lost' ? 0 : b.stake * odd}; })];
}
const cxSports = b => new Set(b.sel.map(s => cxEv(s).sp).filter(Boolean));
const CX_ST = {open: ['relogio', 'ap.st.open'], won: ['check-c', 'ap.st.won'], lost: ['fechar', 'ap.st.lost']};
const cxSt = st => `<span class="cx-st cx-st--${st}">${ic(CX_ST[st][0])}${t('cx.' + CX_ST[st][1])}</span>`;
const CX_SR = {open: ['relogio', 'ap.sel.open'], won: ['check-c', 'ap.sel.won'], lost: ['fechar', 'ap.sel.lost']};
const cxSr = r => `<span class="cx-r cx-r--${r}" title="${esc(t('cx.' + CX_SR[r][1]))}">${ic(CX_SR[r][0])}<span class="sr">${t('cx.' + CX_SR[r][1])}</span></span>`;
const cxTipo = b => b.sel.length > 1 ? t('cx.ap.multi', {n: b.sel.length}) : t('cx.ap.simples');
function cxNums(items, cls = '') {
  return `<dl class="cx-nums${cls ? ' ' + cls : ''}">${items.map(([l, v, s]) => `<div class="cx-num"><dt>${esc(l)}</dt><dd class="tnum">${v}</dd>${s ? `<dd class="cx-num-s">${esc(s)}</dd>` : ''}</div>`).join('')}</dl>`;
}
function cxProg(lab, a, b, o = {}) {
  const p = Math.max(0, Math.min(100, Math.round(a / b * 100)));
  const fmt = o.money ? mxn : num;
  return `<div class="cx-prog"><div class="cx-prog-h"><span>${esc(lab)}</span><b class="tnum">${p}%</b></div>
    <div class="cx-prog-bar" role="meter" aria-valuemin="0" aria-valuemax="${b}" aria-valuenow="${a}" aria-label="${esc(lab)}: ${fmt(a)} de ${fmt(b)}"><i style="width:${p}%"></i></div>
    ${o.foot ? `<p class="cx-prog-f">${o.foot}</p>` : ''}</div>`;
}
const cxTC = (txt = t('cx.bn.tc')) => age(txt);

/* ============ 1. MINHAS APOSTAS ============ */
function cxBetCard(b) {
  const show = b.sel.slice(0, 2); const more = b.sel.length - show.length;
  const retK = 'ap.ret.' + b.st;
  const aria = `${cxTipo(b)}, ${t('cx.ap.st.' + b.st)}. ${t('cx.ap.valor')} ${mxn(b.stake)}, ${t('cx.' + retK)} ${mxn(b.ret)}. ${t('cx.ap.ver')}.`;
  return `<li><button class="cx-bet${b.mine ? ' is-new' : ''}" data-act="cxBet" data-arg="${esc(b.id)}" aria-label="${esc(aria)}">
    <span class="cx-bet-hd">${cxSt(b.st)}<span class="cx-bet-tp">${cxTipo(b)}</span>${b.mine ? tag('new', t('cx.ap.nova.tag')) : ''}<span class="cx-bet-dt tnum">${esc(String(b.date).replace(/\/\d{4}/, ''))}</span></span>
    <span class="cx-sels">${show.map(s => { const e = cxEv(s); return `<span class="cx-sel">${cxSr(s.r)}<span class="cx-sel-t"><b>${esc(s.desc)}</b><small>${esc(s.mk)}${e.n ? ' · ' + esc(e.n) : ''}</small></span><span class="cx-sel-o tnum">${fmtOdd(s.val)}</span></span>`; }).join('')}
    ${more > 0 ? `<span class="cx-sel-more">${more === 1 ? t('cx.ap.mais1') : t('cx.ap.maisN', {n: more})}</span>` : ''}</span>
    <span class="cx-bet-ft"><span><small>${t('cx.ap.valor')}</small><b class="tnum">${mxn(b.stake)}</b></span><span><small>${t('cx.ap.odd')}</small><b class="tnum">${fmtOdd(b.odd)}</b></span><span class="cx-bet-ret cx-bet-ret--${b.st}"><small>${t('cx.' + retK)}</small><b class="tnum">${mxn(b.ret)}</b></span>${ic('seta-d', 'ic--s cx-bet-chev')}</span>
  </button></li>`;
}
function cxBetsBySport() { const all = cxAllBets(); return CX.sp === 'todos' ? all : all.filter(b => cxSports(b).has(CX.sp)); }
function cxBetList() {
  const all = cxBetsBySport(); const map = {abertas: 'open', ganhas: 'won', perdidas: 'lost'};
  const list = CX.st === 'todas' ? all : all.filter(b => b.st === map[CX.st]);
  if (!list.length) {
    const none = !cxAllBets().length;
    return empty({who: 'maestro', title: t(none ? 'cx.ap.vazio.t' : 'cx.ap.vazio.f.t'), text: t(none ? 'cx.ap.vazio.s' : 'cx.ap.vazio.f.s'), action: btn(t('cx.ap.vazio.b'), {kind: 'mag', go: 'esportes', icon: 'esportes'})});
  }
  return `<ul class="cx-bets">${list.map(cxBetCard).join('')}</ul>`;
}
function cxEspBody() {
  const all = cxBetsBySport(); const c = st => all.filter(b => b.st === st).length;
  const [o, w, l] = [c('open'), c('won'), c('lost')];
  return `${cxNums([[t('cx.ap.c.abertas'), o], [t('cx.ap.c.total'), all.length], [t('cx.ap.c.ganhas'), w], [t('cx.ap.c.perdidas'), l]], 'cx-nums--4')}
    <div class="cx-list">${tabs([{k: 'todas', n: t('cx.ap.st.todas'), c: all.length}, {k: 'abertas', n: t('cx.ap.st.abertas'), c: o}, {k: 'ganhas', n: t('cx.ap.st.ganhas'), c: w}, {k: 'perdidas', n: t('cx.ap.st.perdidas'), c: l}], {name: 'cxSt', active: CX.st, label: t('cx.ap.st')})}
    <div id="cxBets" role="tabpanel">${cxBetList()}</div></div>`;
}
function cxEspView() {
  const all = cxAllBets(); const n = k => all.filter(b => cxSports(b).has(k)).length;
  const items = [{k: 'todos', n: t('cx.ap.sp.todos'), c: all.length}, ...SPORTS.filter(s => s.ev > 0).map(s => ({k: s.k, n: s.n, ic: s.ic, c: n(s.k)}))];
  return `<section class="cx-sec" aria-labelledby="cxEspT"><h2 class="sr" id="cxEspT">${t('cx.ap.esp')}</h2>
    ${chips(items, {name: 'cxSp', active: CX.sp, label: t('cx.ap.sp'), scroll: true})}
    <div id="cxEspBody" class="cx-sec">${cxEspBody()}</div></section>`;
}
/* cassino */
function cxSesFiltered() {
  const max = {hoje: 1, 7: 7, 30: 30}[CX.per] || 7;
  return CX_SES.map((s, i) => ({...s, i, gm: G[s.g]})).filter(s => s.gm && s.d < max && (CX.prov === 'all' || s.gm.p === CX.prov));
}
function cxResTx(v) { return v < 0 ? t('cx.cs.res.neg') : v > 0 ? t('cx.cs.res.pos') : t('cx.cs.res.zero'); }
function cxSesRow(s) {
  const res = s.gan - s.ap; const dl = cxDay(s.d).lab;
  return `<li class="cx-ses"><button class="cx-ses-m" data-act="cxSes" data-arg="${s.i}" aria-label="${esc(`${s.gm.n}, ${dl}, ${s.ini}. ${t('cx.cs.ap')} ${mxn(s.ap)}, ${t('cx.cs.res')} ${mxn(res, {sign: true})}. ${t('cx.cs.det.ver')}.`)}">
      <span class="cx-ses-cv">${img(s.gm.img, {alt: ''})}</span>
      <span class="cx-ses-t"><b>${esc(s.gm.n)}</b><small>${esc(s.gm.p)}</small><small class="tnum">${s.ini}–${cxAdd(s.ini, s.min)} · ${cxDur(s.min)}</small></span>
      <span class="cx-ses-v"><b class="tnum">${mxn(res, {sign: true})}</b><small>${t('cx.cs.res')}</small><small class="tnum cx-ses-ap">${t('cx.cs.ap')} ${mxn(s.ap)}</small></span>
    </button>
    <button class="cx-ses-go" data-game="${s.g}" aria-label="${esc(t('cx.cs.ir') + ': ' + s.gm.n)}" title="${esc(t('cx.cs.ir'))}">${ic('play')}</button></li>`;
}
function cxCasBody() {
  const list = cxSesFiltered();
  const ap = list.reduce((a, s) => a + s.ap, 0), gan = list.reduce((a, s) => a + s.gan, 0), res = gan - ap, min = list.reduce((a, s) => a + s.min, 0);
  const nums = cxNums([[t('cx.cs.ap'), mxn(ap)], [t('cx.cs.gan'), mxn(gan)], [t('cx.cs.res'), mxn(res, {sign: true}), list.length ? cxResTx(res) : ''], [t('cx.cs.tempo'), cxDur(min), list.length === 1 ? t('cx.cs.ses1') : t('cx.cs.sesN', {n: list.length})]], 'cx-nums--m');
  const lim = `<p class="note cx-lim">${ic('relogio')}<span>${t('cx.cs.lim')} <button class="lnk" data-go="limites">${t('cx.cs.lim.b')}${ic('seta-d')}</button></span></p>`;
  if (!list.length) return `${nums}${empty({who: 'tigre', title: t('cx.cs.vazio.t'), text: t('cx.cs.vazio.s'), action: btn(t('cx.cs.vazio.b'), {kind: 'mag', go: 'slots', icon: 'cassino'})})}`;
  const days = [...new Set(list.map(s => s.d))];
  return `${nums}${lim}<div class="cx-days">${days.map(d => {
    const ss = list.filter(s => s.d === d); const dm = ss.reduce((a, s) => a + s.min, 0);
    return `<section class="cx-day" aria-labelledby="cxD${d}"><div class="cx-day-h"><h3 class="lab" id="cxD${d}">${cxDay(d).lab}</h3><span class="tnum">${ss.length === 1 ? t('cx.cs.ses1') : t('cx.cs.sesN', {n: ss.length})} · ${cxDur(dm)}</span></div>
      <ul class="card cx-sesl">${ss.map(cxSesRow).join('')}</ul></section>`;
  }).join('')}</div>`;
}
function cxCasView() {
  const provs = [...new Set(CX_SES.map(s => G[s.g]?.p).filter(Boolean))].sort((a, b) => a.localeCompare(b, LOC));
  return `<section class="cx-sec" aria-labelledby="cxCasT"><h2 class="sr" id="cxCasT">${t('cx.ap.cas')}</h2>
    <div class="cx-fil"><div class="fld cx-fil-per"><span class="fld-l" id="cxPerL">${t('cx.cs.per')}</span>${chips([{k: 'hoje', n: t('cx.cs.hoje')}, {k: '7', n: t('cx.cs.7')}, {k: '30', n: t('cx.cs.30')}], {name: 'cxPer', active: CX.per, label: t('cx.cs.per')})}</div>
      ${field({id: 'cxProv', label: t('cx.cs.prov'), select: [['all', t('cx.cs.prov.all')], ...provs.map(p => [p, p])], value: CX.prov, cls: 'cx-fil-prov'})}</div>
    <div id="cxCasBody" class="cx-sec">${cxCasBody()}</div></section>`;
}

SCREENS.apostas = {
  label: 'Mis apuestas', nav: 'menu', auth: 'Entra para ver tus apuestas.', asideLabel: 'Tu billetera',
  title: p => p === 'cassino' ? 'Mis apuestas en el casino' : 'Mis apuestas',
  aside: () => asideCarteira(),
  render(p) {
    const cas = p === 'cassino';
    if (CX.last !== 'apostas') Object.assign(CX, {sp: 'todos', st: 'todas', per: '7', prov: 'all'}); /* filtros valem dentro da tela; quem chega de fora vê tudo */
    return `${acctNav('apostas')}
    <header class="pg-head"><h1 class="pt">${t('cx.ap.t')}</h1><p class="lede">${t(cas ? 'cx.ap.s.cas' : 'cx.ap.s.esp')}</p></header>
    <div class="cx-bar">${seg([{k: 'esp', n: t('cx.ap.esp'), ic: 'esportes'}, {k: 'cas', n: t('cx.ap.cas'), ic: 'cassino'}], {name: 'cxModo', active: cas ? 'cas' : 'esp', label: t('cx.ap.modo')})}
      ${cas ? btn(t('cx.ap.irCas'), {kind: 'sec', icon: 'cassino', go: 'slots', cls: 'cx-bar-b'}) : btn(t('cx.ap.nova'), {kind: 'sec', icon: 'mais', go: 'esportes', cls: 'cx-bar-b'})}</div>
    ${cas ? cxCasView() : cxEspView()}<p class="sr" id="cxLive" aria-live="polite"></p>`;
  },
  init(root, p) {
    const sel = root.querySelector('#cxProv');
    if (sel) sel.addEventListener('change', () => { CX.prov = sel.value; const b = $('#cxCasBody'); if (b) b.innerHTML = cxCasBody(); cxSay(cxSesFiltered().length, 'ses'); });
    if (p === 'cassino') return;
    /* aposta feita com a tela aberta (cupom no celular): atualiza a lista */
    let n = (S.bets || []).length;
    const upd = () => { const k = (S.bets || []).length; if (k === n) return; n = k; const b = $('#cxEspBody'); if (b) b.innerHTML = cxEspBody(); };
    const offs = ['slip', 'bet', 'bets', 'balance'].map(e => bus.on(e, upd));
    return () => offs.forEach(f => f());
  }
};
ON.chip.cxModo = k => go(k === 'cas' ? 'apostas:cassino' : 'apostas');
/* filtros: troca só o miolo e anuncia a contagem numa região viva curta (a lista inteira não é lida de novo) */
function cxSay(n, kind) { const l = $('#cxLive'); if (l) l.textContent = kind === 'ses' ? (n === 1 ? t('cx.cs.ses1') : t('cx.cs.sesN', {n})) : (n === 1 ? t('cx.ap.n1') : t('cx.ap.nN', {n})); }
function cxBetCount() { const all = cxBetsBySport(); const map = {abertas: 'open', ganhas: 'won', perdidas: 'lost'}; return CX.st === 'todas' ? all.length : all.filter(b => b.st === map[CX.st]).length; }
ON.chip.cxSp = k => { CX.sp = k; const b = $('#cxEspBody'); if (b) b.innerHTML = cxEspBody(); cxSay(cxBetCount()); };
ON.tab.cxSt = k => { CX.st = k; const b = $('#cxBets'); if (b) b.innerHTML = cxBetList(); cxSay(cxBetCount()); };
ON.chip.cxPer = k => { CX.per = k; const b = $('#cxCasBody'); if (b) b.innerHTML = cxCasBody(); cxSay(cxSesFiltered().length, 'ses'); };

/* comprovante da aposta (painel) */
ACT.cxBet = el => {
  const b = cxAllBets().find(x => x.id === el.dataset.arg); if (!b) return;
  const retK = 'ap.ret.' + b.st;
  const sels = b.sel.map(s => {
    const e = cxEv(s);
    const when = e.live ? tag('live', t('cx.ap.vivo')) + `<span class="tnum">${esc(e.when.replace(t('cx.ap.vivo') + ' · ', ''))}</span>` : `<span class="tnum">${esc([e.lg, e.when].filter(Boolean).join(' · '))}</span>`;
    return `<li class="cx-tk-sel">${cxSr(s.r)}<div class="cx-tk-sel-t">
        <span class="cx-tk-pk"><b>${esc(s.desc)}</b><b class="tnum">${fmtOdd(s.val)}</b></span>
        <span class="cx-tk-ev">${esc(s.mk)}${e.n ? ' · ' + esc(e.n) : ''}</span>
        ${e.when || e.lg ? `<span class="cx-tk-when">${when}${e.id && b.st === 'open' ? `<button class="lnk" data-go="evento:${e.id}">${t('cx.ap.det.verJogo')}${ic('seta-d')}</button>` : ''}</span>` : ''}
      </div></li>`;
  }).join('');
  sheet(`<article class="cx-tk" aria-label="${esc(t('cx.ap.det.t'))}">
      <div class="cx-tk-hd">${cxSt(b.st)}<span class="cx-bet-tp">${cxTipo(b)}</span></div>
      <div class="cx-tk-ret"><span class="lab mut">${t('cx.' + retK)}</span><b class="tnum">${mxn(b.ret)}</b></div>
      <h3 class="lab mut cx-tk-h">${t('cx.ap.det.sels')}</h3>
      <ul class="cx-tk-sels">${sels}</ul>
      <div class="cx-tk-cut" aria-hidden="true"></div>
      <div class="cx-tk-kv">${kv(t('cx.ap.det.valor'), mxn(b.stake))}${kv(t('cx.ap.det.odd'), fmtOdd(b.odd))}${kv(t('cx.' + retK), mxn(b.ret))}${kv(t('cx.ap.det.tipo'), esc(cxTipo(b)))}${kv(t('cx.ap.det.data'), esc(b.date))}
        <div class="kv"><span>${t('cx.ap.det.n')}</span><b class="cx-tk-id"><span class="tnum">${esc(b.id)}</span><button class="btn btn--ghost btn--s btn--ico" data-copy="${esc(b.id)}" data-ok="${esc(t('cx.ap.det.copiado'))}" aria-label="${esc(t('cx.ap.det.copiar'))}" title="${esc(t('cx.ap.det.copiar'))}">${ic('copiar')}</button></b></div></div>
    </article>
    ${b.st === 'open' ? `<p class="note">${ic('info')}<span>${t('cx.ap.det.trava')}</span></p>` : ''}`,
  {title: t('cx.ap.det.t'), id: 'cxShBet', cls: 'cx-sh', foot: age(t('cx.ap.det.rg'))});
};
/* detalhe da sessão de cassino */
ACT.cxSes = el => {
  const s = CX_SES[+el.dataset.arg]; const g = s && G[s.g]; if (!g) return;
  const res = s.gan - s.ap;
  sheet(`<div class="cx-sd">
      <div class="cx-sd-cv">${img(g.img, {alt: ''})}</div>
      <div class="cx-sd-tx"><span class="lab mut">${t('cx.cs.det.k', {d: cxDay(s.d).full})}</span><p class="mut">${esc(g.p)}</p>
        <div class="cx-sd-res"><span class="lab mut">${t('cx.cs.res')}</span><b class="tnum">${mxn(res, {sign: true})}</b><small>${cxResTx(res)}</small></div></div>
    </div>
    <div class="card">${kv(t('cx.cs.ap'), mxn(s.ap))}${kv(t('cx.cs.gan'), mxn(s.gan))}${kv(t('cx.cs.det.ini'), cxDay(s.d).dm + ' · ' + s.ini)}${kv(t('cx.cs.det.fim'), cxAdd(s.ini, s.min))}${kv(t('cx.cs.det.dur'), cxDur(s.min))}${kv(t('cx.cs.det.rod'), num(s.rod))}${kv(t('cx.cs.det.media'), mxn(s.ap / s.rod))}</div>`,
  {title: g.n + '.', id: 'cxShSes', cls: 'cx-sh', foot: `${btn(t('cx.cs.ir'), {kind: 'mag', size: 'l', full: true, icon: 'play', attrs: {'data-game': g.id}})}${age(t('cx.ap.det.rg'))}`});
};

/* ============ 2. MEUS BÔNUS ============ */
function cxBnState(b) {
  if (b.kind === 'roll') { const [a, z] = b.roll; return cxProg(t('cx.bn.roll', {a: mxn(a), b: mxn(z)}), a, z, {money: true, foot: t('cx.bn.falta', {v: mxn(z - a)})}); }
  if (b.kind === 'giros') { const [a, z] = b.giros; return cxProg(t('cx.bn.giros', {a, b: z}), a, z); }
  if (b.kind === 'dep') return `<p class="cx-bn-st">${ic('info', 'ic--s')}<span>${t('cx.bn.dep', {v: mxn(b.min), d: b.ate})}</span></p>`;
  if (b.kind === 'free') return `<p class="cx-bn-st">${ic('check-c', 'ic--s')}<span>${t('cx.bn.pronta')}</span></p>`;
  return '';
}
function cxBnGo(b, o = {}) {
  if (b.kind === 'dep') return btn(t('cx.bn.depositar'), {kind: o.kind || 'mag', size: o.size || 's', icon: 'depositar', go: 'deposito', full: o.full});
  if (b.kind === 'free') return btn(t('cx.bn.apostar'), {kind: o.kind || 'mag', size: o.size || 's', icon: 'esportes', go: 'esportes', full: o.full});
  if (b.game) return btn(t('cx.bn.jogar', {g: G[b.game].n}), {kind: o.kind || 'mag', size: o.size || 's', icon: 'play', full: o.full, attrs: {'data-game': b.game}});
  if (b.kind === 'roll') return btn(t('cx.ap.irCas'), {kind: o.kind || 'mag', size: o.size || 's', icon: 'cassino', go: 'slots', full: o.full});
  return '';
}
function cxBnCard(b) {
  const on = b.st === 'ativo';
  return `<li class="card cx-bn" id="cxBn-${b.id}">
    <div class="cx-bn-fi">${ficha(b.fi, {tone: b.tone, size: 56})}</div>
    <div class="cx-bn-bd">
      <div class="cx-bn-tg">${tag('info', t('cx.bn.' + b.tipo))}${on ? tag('new', t('cx.bn.ativo')) : ''}</div>
      <h3 class="cx-bn-t" tabindex="-1">${esc(b.t)}</h3>
      <p class="cx-bn-d">${esc(b.d)}${b.val ? ` <b class="tnum">${t('cx.bn.val', {v: mxn(b.val)})}</b>` : ''}</p>
      <p class="cx-bn-v">${ic('calendario', 'ic--xs')}<span class="tnum">${t('cx.bn.valido', {d: b.ate})}</span></p>
      ${on ? cxBnState(b) : ''}
      <div class="cx-bn-a">${on ? cxBnGo(b) + btn(t('cx.bn.det'), {kind: 'ghost', size: 's', act: 'cxBnInfo', attrs: {'data-arg': b.id}}) : btn(t('cx.bn.ativar'), {kind: 'mag', size: 's', act: 'cxAtivar', attrs: {'data-arg': b.id}}) + btn(t('cx.bn.det'), {kind: 'ghost', size: 's', act: 'cxBnInfo', attrs: {'data-arg': b.id}})}</div>
      ${cxTC()}
    </div></li>`;
}
const cxBns = () => CX_BONUS;
function cxBnList() {
  const tab = CX.bnTab; const list = cxBns().filter(b => tab === 'ativos' ? b.st === 'ativo' : b.st === 'disp');
  if (!list.length) return tab === 'ativos'
    ? empty({who: 'raton', title: t('cx.bn.vazio.at.t'), text: t('cx.bn.vazio.at.s'), action: btn(t('cx.bn.vazio.at.b'), {kind: 'sec', act: 'cxBnTab', attrs: {'data-arg': 'disp'}})})
    : empty({who: 'raton', title: t('cx.bn.vazio.disp.t'), text: t('cx.bn.vazio.disp.s')});
  return `<ul class="cx-bns">${list.map(cxBnCard).join('')}</ul>`;
}
function cxBnSum() {
  const d = cxBns().filter(b => b.st === 'disp').length, a = cxBns().filter(b => b.st === 'ativo');
  const saldo = a.reduce((s, b) => s + (b.val || 0), 0);
  return cxNums([[t('cx.bn.disp'), d], [t('cx.bn.ativos'), a.length], [t('cx.bn.emBonus'), mxn(saldo)]], 'cx-nums--3');
}
function cxBnTabs() {
  const d = cxBns().filter(b => b.st === 'disp').length, a = cxBns().filter(b => b.st === 'ativo').length;
  return `${tabs([{k: 'disp', n: t('cx.bn.disp'), c: d}, {k: 'ativos', n: t('cx.bn.ativos'), c: a}], {name: 'cxBn', active: CX.bnTab, label: t('cx.bn.lista')})}
    <div id="cxBnList" role="tabpanel">${cxBnList()}</div>`;
}
function cxBnRefresh(focusId) {
  const s = $('#cxBnSum'); if (s) s.innerHTML = cxBnSum();
  const w = $('#cxBnWrap'); if (w) w.innerHTML = cxBnTabs();
  if (focusId) { const h = $(`#cxBn-${focusId} .cx-bn-t`); if (h) { h.focus({preventScroll: true}); h.scrollIntoView({block: 'center', behavior: RM.matches ? 'auto' : 'smooth'}); } }
}
function cxOffer(b, o = {}) {
  const termos = [...(b.extra ? [b.extra] : []), ...CX_TERMOS[b.termos]];
  return `<div class="cx-of-hd">${ficha(b.fi, {tone: b.tone, size: 56})}<div>${o.k ? `<span class="lab mut">${esc(o.k)}</span>` : ''}<h3 class="cx-of-t" ${o.id ? `id="${o.id}"` : ''}>${esc(b.t)}.</h3><p class="cx-of-d">${esc(b.d)}</p></div></div>
    <p class="cx-bn-v">${ic('calendario', 'ic--xs')}<span class="tnum">${t('cx.bn.valido', {d: b.ate})}</span></p>
    <div><h4 class="lab mut cx-of-h">${esc(o.h || t('cx.bn.regras'))}</h4><ul class="cx-terms">${termos.map(x => `<li>${ic('check', 'ic--xs')}<span>${esc(x)}</span></li>`).join('')}<li>${ic('check', 'ic--xs')}<span>${t('cx.bn.cancelar')}</span></li></ul></div>
    ${cxTC()}`;
}
SCREENS.bonus = {
  label: 'Mis bonos', nav: 'menu', auth: 'Entra para ver tus bonos.', asideLabel: 'Tu billetera',
  aside: () => asideCarteira(),
  render() {
    if (CX.last !== 'bonus') CX.bnTab = 'disp';
    return `${acctNav('bonus')}
    <header class="pg-head"><h1 class="pt">${t('cx.bn.t')}</h1><p class="lede">${t('cx.bn.s')}</p></header>
    <div id="cxBnSum">${cxBnSum()}</div>
    <section class="card cx-code" aria-labelledby="cxCodeT">
      <div class="cx-code-hd">${ic('cupom')}<div><span class="lab mut">${t('cx.bn.code.k')}</span><h2 class="cx-code-t" id="cxCodeT">${t('cx.bn.code.t')}</h2></div></div>
      <form class="cx-code-f" data-form="cxCode" novalidate>${field({id: 'cxCode', label: t('cx.bn.code.l'), placeholder: t('cx.bn.code.ph'), hint: t('cx.bn.code.h'), spell: false, enter: 'go', maxlength: 20})}${btn(t('cx.bn.code.b'), {kind: 'mag', type: 'submit', cls: 'cx-code-b'})}</form>
      <div id="cxCodeRes" class="cx-code-res" aria-live="polite"></div>
    </section>
    <section class="cx-sec" id="cxBnWrap" aria-label="${t('cx.bn.lista')}">${cxBnTabs()}</section>`;
  },
  init(root) {
    const f = root.querySelector('[data-form="cxCode"]'); const inp = f.querySelector('input');
    inp.setAttribute('autocapitalize', 'characters');
    inp.addEventListener('input', () => { const v = inp.value.toUpperCase().replace(/\s/g, ''); if (v !== inp.value) inp.value = v; });
    f.addEventListener('submit', e => { e.preventDefault(); cxCheckCode(inp); });
  }
};
function cxCodeErr(inp, msg) {
  setErr(inp, msg); const e = inp.closest('.fld').querySelector('.fld-err'); if (e) e.setAttribute('role', 'alert');
  $('#cxCodeRes').innerHTML = ''; inp.focus();
}
function cxCheckCode(inp) {
  const v = inp.value.trim().toUpperCase(); clearErr(inp);
  if (!v) return cxCodeErr(inp, t('cx.bn.code.vazio'));
  const b = CX_CODES[v];
  if (!b) return cxCodeErr(inp, t('cx.bn.code.err'));
  if (CX.applied.has(v)) return cxCodeErr(inp, t('cx.bn.code.ja'));
  CX.codeOk = v;
  const r = $('#cxCodeRes');
  r.innerHTML = `<div class="cx-of" role="region" aria-labelledby="cxOfT">${cxOffer(b, {k: t('cx.bn.code.of', {c: v}), id: 'cxOfT', h: t('cx.bn.code.antes')})}
    <div class="cx-of-a">${btn(t('cx.bn.code.aplicar'), {kind: 'mag', act: 'cxApply', icon: 'check'})}${btn(t('cx.bn.code.nao'), {kind: 'ghost', act: 'cxCodeX'})}</div></div>`;
  const h = $('#cxOfT'); if (h) { h.tabIndex = -1; h.focus({preventScroll: true}); }
}
ACT.cxApply = () => {
  const v = CX.codeOk; const b = v && CX_CODES[v]; if (!b) return;
  CX.applied.add(v); CX.codeOk = null;
  if (!CX_BONUS.some(x => x.id === b.id)) CX_BONUS.unshift({...b, giros: [...b.giros]});
  const inp = $('#cxCode'); if (inp) inp.value = '';
  $('#cxCodeRes').innerHTML = `<div class="cx-ok" role="status">${pedestal('tigre', {h: 104, tone: 'mag'})}<div class="cx-ok-tx"><h3>${t('cx.bn.code.ok.t')}</h3><p>${t('cx.bn.code.ok.s', {d: b.ate})}</p>${btn(t('cx.bn.code.ok.b', {g: cxGn(b.game, CX_TIGRE)}), {kind: 'sec', size: 's', icon: 'play', attrs: {'data-game': b.game}})}</div></div>`;
  CX.bnTab = 'ativos'; cxBnRefresh(); cxSyncBonus();
};
ACT.cxCodeX = () => { CX.codeOk = null; $('#cxCodeRes').innerHTML = ''; const i = $('#cxCode'); if (i) i.focus(); };
ON.tab.cxBn = k => { CX.bnTab = k; const l = $('#cxBnList'); if (l) l.innerHTML = cxBnList(); };
ACT.cxBnTab = el => { const b = $(`[data-tabs="cxBn"] [data-tab="${el.dataset.arg}"]`); if (b) { b.click(); b.focus(); } };
ACT.cxAtivar = el => {
  const b = CX_BONUS.find(x => x.id === el.dataset.arg); if (!b) return;
  sheet(`<div class="cx-of cx-of--sh">${cxOffer(b, {k: t('cx.bn.' + b.tipo)})}</div>`, {title: t('cx.bn.ativar.t'), id: 'cxShBn', cls: 'cx-sh',
    foot: `${btn(t('cx.bn.ativar.b'), {kind: 'luz', size: 'l', full: true, act: 'cxAtivarOk', attrs: {'data-arg': b.id}})}${btn(t('cx.bn.code.nao'), {kind: 'ghost', full: true, attrs: {'data-close': ''}})}`});
};
ACT.cxAtivarOk = el => {
  const b = CX_BONUS.find(x => x.id === el.dataset.arg); if (!b) return;
  b.st = 'ativo'; closeSheet(true); CX.bnTab = 'ativos'; cxBnRefresh(b.id); cxSyncBonus();
  toast(t('cx.bn.ativar.ok', {n: b.t}), {icon: 'bono'});
};
ACT.cxBnInfo = el => {
  const b = CX_BONUS.find(x => x.id === el.dataset.arg); if (!b) return;
  const on = b.st === 'ativo';
  sheet(`<div class="cx-of cx-of--sh">${cxOffer(b, {k: t('cx.bn.' + b.tipo)})}</div>${on ? `<div class="card">${cxBnState(b)}</div>` : ''}`, {title: b.t + '.', id: 'cxShBnI', cls: 'cx-sh',
    foot: on ? cxBnGo(b, {size: 'l', full: true}) : btn(t('cx.bn.ativar'), {kind: 'mag', size: 'l', full: true, act: 'cxAtivar', attrs: {'data-arg': b.id}})});
};

/* ============ 3. PROGRAMA VIP ============ */
function cxVipPanel(n) {
  const lv = VIP_NIVEIS.find(x => x.n === n) || VIP_NIVEIS[0]; const cur = ME.nivelN;
  const st = lv.n === cur ? t('cx.vip.aqui') : lv.n < cur ? t('cx.vip.ok') : t('cx.vip.faltaN', {n: num(lv.xp - ME.xp)});
  return `<div class="cx-vp-hd">${ficha(lv.n, {tone: lv.tone, size: 56})}<div><span class="lab mut">${t('cx.vip.apartir', {xp: num(lv.xp)})}</span><h3 class="cx-vp-t">${esc(lv.nome)}.</h3>
      <span class="cx-vp-st">${ic(lv.n > cur ? 'cadeado' : 'check-c', 'ic--xs')}${st}</span></div></div>
    <ul class="cx-bens">${(CX_VIP_BEN[lv.n] || []).map(([i, x]) => `<li>${ic(i)}<span>${esc(x)}</span></li>`).join('')}</ul>`;
}
SCREENS.vip = {
  label: 'Programa VIP', nav: 'menu', auth: 'Entra para ver tu nivel VIP.', asideLabel: 'Tu billetera',
  aside: () => asideCarteira(),
  render() {
    const cur = VIP_NIVEIS.find(n => n.n === ME.nivelN) || VIP_NIVEIS[0]; const next = VIP_NIVEIS.find(n => n.n === ME.nivelN + 1);
    if (!CX.vipSel) CX.vipSel = next ? next.n : cur.n;
    const falta = next ? next.xp - ME.xp : 0;
    return `${acctNav('vip')}
    <header class="pg-head"><h1 class="pt">${t('cx.vip.t')}</h1><p class="lede">${t('cx.vip.s')}</p></header>
    <section class="cx-vh cx-vh--${cur.tone}" aria-labelledby="cxVhT">
      <span class="trama trama--B" aria-hidden="true"></span>
      <div class="cx-vh-top">${ficha(cur.n, {tone: cur.tone, size: 80, label: t('cx.vip.ben.k', {nv: cur.nome})})}
        <div><span class="lab">${t('cx.vip.seu')}</span><h2 class="cx-vh-n" id="cxVhT">${esc(cur.nome)}.</h2></div></div>
      <div class="cx-vh-xp"><div class="cx-vh-xpn"><span class="lab">${t('cx.vip.xp')}</span><b class="tnum">${num(ME.xp)} XP</b></div>
        ${next ? `<div class="cx-vh-bar" role="meter" aria-valuemin="${cur.xp}" aria-valuemax="${next.xp}" aria-valuenow="${ME.xp}" aria-label="${esc(t('cx.vip.falta', {n: num(falta), nv: next.nome}))}"><i style="width:${Math.round((ME.xp - cur.xp) / (next.xp - cur.xp) * 100)}%"></i></div>
        <div class="cx-vh-f"><span class="tnum">${num(cur.xp)}</span><span>${t('cx.vip.falta', {n: `<b class="tnum">${num(falta)}</b>`, nv: esc(next.nome)})}</span><span class="tnum">${num(next.xp)}</span></div>` : `<p>${t('cx.vip.topo')}</p>`}</div>
    </section>
    <section aria-labelledby="cxBenT">${stitle({id: 'cxBenT', eyebrow: t('cx.vip.ben.k', {nv: cur.nome}), title: t('cx.vip.ben.t')})}
      <ul class="cx-bens cx-bens--grid">${(CX_VIP_BEN[cur.n] || []).map(([i, x]) => `<li>${ic(i)}<span>${esc(x)}</span></li>`).join('')}</ul></section>
    <section aria-labelledby="cxEscT">${stitle({id: 'cxEscT', eyebrow: t('cx.vip.prox.k'), title: t('cx.vip.prox.t')})}
      <p class="mut cx-esc-h">${t('cx.vip.escolha')}</p>
      <div class="cx-esc" role="tablist" aria-label="${esc(t('cx.vip.prox.t'))}" data-tabs="cxVip">${VIP_NIVEIS.map((n, i) => {
        const on = n.n === CX.vipSel, me = n.n === cur.n;
        return `<button class="cx-esc-b${on ? ' is-on' : ''}${me ? ' is-cur' : ''}${n.n > cur.n ? ' is-lock' : ''}" role="tab" id="cxEsc${n.n}" aria-selected="${on}" aria-controls="cxVipP" tabindex="${on ? 0 : -1}" data-tab="${n.n}" style="--i:${i}">
          ${me ? `<em class="cx-esc-me">${t('cx.vip.voce')}</em>` : ''}${ficha(n.n, {tone: n.tone, size: 40})}<span class="cx-esc-s"><b>${esc(n.nome)}</b><small class="tnum">${num(n.xp)} XP</small></span></button>`;
      }).join('')}</div>
      <div class="card cx-vp" id="cxVipP" role="tabpanel" aria-labelledby="cxEsc${CX.vipSel}">${cxVipPanel(CX.vipSel)}</div></section>
    <section class="card cx-vc" aria-labelledby="cxVcT"><h2 class="ttl" id="cxVcT">${t('cx.vip.como.t')}</h2><p class="mut">${t('cx.vip.como.s')}</p>
      <p class="note">${ic('info')}<span>${t('cx.vip.chances')}</span></p>
      <div class="cx-vc-b">${btn(t('cx.vip.missoes'), {kind: 'sec', size: 's', icon: 'missoes', go: 'missoes'})}${btn(t('cx.vip.lim.b'), {kind: 'ghost', size: 's', icon: 'limite', go: 'limites'})}</div>
      <p class="cx-vc-l">${t('cx.vip.lim')}</p></section>`;
  }
};
ON.tab.cxVip = k => { CX.vipSel = +k; const p = $('#cxVipP'); if (p) { p.innerHTML = cxVipPanel(CX.vipSel); p.setAttribute('aria-labelledby', 'cxEsc' + k); } };

/* ============ 4. MISSÕES ============ */
function cxMisCard(m) {
  const done = m.on && m.a >= m.b;
  let act;
  if (!m.on) act = btn(t('cx.ms.aceitar'), {kind: 'mag', size: 's', act: 'cxMisOk', attrs: {'data-arg': m.id}});
  else if (m.ok) act = `<span class="cx-ms-ok">${ic('check-c', 'ic--s')}${t('cx.ms.resgatada')}</span>`;
  else if (done) act = btn(t('cx.ms.resgatar'), {kind: 'mag', size: 's', act: 'cxMisClaim', attrs: {'data-arg': m.id}});
  else act = btn(t('cx.ms.continuar'), {kind: 'sec', size: 's', iconR: 'seta-d', go: m.go, attrs: m.game ? {'data-game': m.game} : null});
  return `<li class="card cx-ms${done ? ' is-done' : ''}" id="cxMs-${m.id}">
    <div class="cx-ms-hd"><span class="cx-ms-i">${ic(m.ic)}</span><div class="cx-ms-tt"><h3 tabindex="-1">${esc(m.t)}</h3><span class="cx-ms-pz">${ic('relogio', 'ic--xs')}<span class="tnum">${esc(m.prazo)}</span></span></div>
      ${done ? `<span class="cx-st cx-st--won">${ic('check-c')}${t('cx.ms.feita')}</span>` : ''}</div>
    <p class="cx-ms-d">${esc(m.d)}</p>
    ${m.on ? cxProg(t('cx.ms.prog', {a: m.a, b: m.b, u: m.u}), m.a, m.b) : ''}
    <div class="cx-ms-ft"><div class="cx-ms-rec">${ficha(m.fi, {tone: m.tone, size: 40})}<span><small>${t('cx.ms.rec')}</small><b>${esc(m.rec)}</b></span></div>${act}</div>
    ${cxTC()}</li>`;
}
function cxMisList() {
  const mine = CX.misTab === 'minhas'; const list = CX_MIS.filter(m => mine ? m.on : !m.on);
  if (!list.length) return mine
    ? empty({who: 'jaguar', title: t('cx.ms.vazio.t'), text: t('cx.ms.vazio.s'), action: btn(t('cx.ms.vazio.b'), {kind: 'mag', act: 'cxMisTab', attrs: {'data-arg': 'disp'}})})
    : empty({who: 'jaguar', title: t('cx.ms.vazio.d.t'), text: t('cx.ms.vazio.d.s'), action: btn(t('cx.ms.vazio.d.b'), {kind: 'sec', act: 'cxMisTab', attrs: {'data-arg': 'minhas'}})});
  return `<ul class="cx-mss">${list.map(cxMisCard).join('')}</ul>`;
}
function cxMisTabs() {
  return `${tabs([{k: 'minhas', n: t('cx.ms.minhas'), c: CX_MIS.filter(m => m.on).length}, {k: 'disp', n: t('cx.ms.disp'), c: CX_MIS.filter(m => !m.on).length}], {name: 'cxMis', active: CX.misTab, label: t('cx.ms.abas')})}
    <div id="cxMisList" role="tabpanel">${cxMisList()}</div>`;
}
SCREENS.missoes = {
  label: 'Misiones', nav: 'menu', auth: 'Entra para ver tus misiones.', asideLabel: 'Tu billetera',
  aside: () => asideCarteira(),
  render() {
    if (CX.last !== 'missoes') CX.misTab = 'minhas';
    return `${acctNav('missoes')}
    <header class="pg-head cx-hd"><div class="cx-hd-tx"><h1 class="pt">${t('cx.ms.t')}</h1><p class="lede">${t('cx.ms.s')}</p></div>${pedestal('jaguar', {h: 150, cls: 'cx-hd-art'})}</header>
    <section class="cx-sec" id="cxMisWrap" aria-label="${t('cx.ms.abas')}">${cxMisTabs()}</section>
    <p class="note">${ic('info')}<span>${t('cx.ms.regra')}</span></p>`;
  }
};
ON.tab.cxMis = k => { CX.misTab = k; const l = $('#cxMisList'); if (l) l.innerHTML = cxMisList(); };
ACT.cxMisTab = el => { const b = $(`[data-tabs="cxMis"] [data-tab="${el.dataset.arg}"]`); if (b) { b.click(); b.focus(); } };
function cxMisRefresh(focusId) {
  const w = $('#cxMisWrap'); if (!w) return; w.innerHTML = cxMisTabs();
  const h = focusId && $(`#cxMs-${focusId} h3`); if (h) h.focus({preventScroll: true});
  else { const tb = $('[data-tabs="cxMis"] .is-on'); if (tb) tb.focus({preventScroll: true}); }
}
ACT.cxMisOk = el => { const m = CX_MIS.find(x => x.id === el.dataset.arg); if (!m) return; m.on = 1; m.a = 0; cxMisRefresh(); toast(t('cx.ms.aceita.ok', {n: m.t}), {icon: 'missoes'}); };
ACT.cxMisClaim = el => { const m = CX_MIS.find(x => x.id === el.dataset.arg); if (!m) return; m.ok = 1; cxMisRefresh(m.id); toast(t('cx.ms.resg.ok', {r: m.rec}), {icon: 'check-c'}); };

/* ============ 5. INDIQUE ============ */
const CX_IST = {ok: ['check-c', 'won'], wait: ['relogio', 'open'], no: ['fechar', 'lost']};
SCREENS.indique = {
  label: 'Invita amigos', nav: 'menu', auth: 'Entra para ver tu código de invitación.', asideLabel: 'Tu billetera',
  aside: () => asideCarteira(),
  render() {
    const c = CX_REF.code, link = t('cx.in.link', {c}); const h = CX_REF.hist;
    const okN = h.filter(x => x.st === 'ok').length, bn = h.reduce((a, x) => a + (x.v || 0), 0);
    const steps = [1, 2, 3].map(i => `<li class="cx-step" style="--i:${i}"><span class="cx-step-n tnum" aria-hidden="true">${i}</span><div><h3>${t('cx.in.p' + i + '.t')}</h3><p>${t('cx.in.p' + i + '.s')}</p></div></li>`).join('');
    return `${acctNav('indique')}
    <header class="pg-head"><h1 class="pt">${t('cx.in.t')}</h1><p class="lede">${t('cx.in.s')}</p></header>
    <section class="cx-ref" aria-labelledby="cxRefK">
      <div class="cx-ref-tx"><span class="lab" id="cxRefK">${t('cx.in.code.k')}</span>
        <b class="cx-ref-c tnum" aria-describedby="cxRefK">${esc(c)}</b>
        <span class="cx-ref-l">${t('cx.in.link.l')}: <span class="tnum">${esc(link)}</span> <span class="cx-ref-ac">${t('cx.in.link.ac')}</span></span>
        <div class="cx-ref-b">${btn(t('cx.in.copiar'), {kind: 'noite', icon: 'copiar', attrs: {'data-copy': c, 'data-ok': t('cx.in.copiado')}})}${btn(t('cx.in.share'), {kind: 'noite', icon: 'compartilhar', act: 'cxShare'})}</div></div>
      <div class="cx-ref-art">${pedestal('conejo', {h: 170, tone: 'noite'})}</div>
    </section>
    <section class="cx-sec" aria-labelledby="cxComoT">${stitle({id: 'cxComoT', eyebrow: t('cx.in.como.k'), title: t('cx.in.como.t')})}
      <ol class="cx-steps">${steps}</ol>
      <p class="note cx-in-regra">${ic('info')}<span>${t('cx.in.regra')}</span></p>${cxTC()}</section>
    <section aria-labelledby="cxHistT">${stitle({id: 'cxHistT', eyebrow: t('cx.in.hist.k'), title: t('cx.in.hist.t')})}
      ${cxNums([[t('cx.in.n.ind'), h.length], [t('cx.in.n.ok'), okN], [t('cx.in.n.bn'), mxn(bn)]], 'cx-nums--3')}
      ${h.length ? `<ul class="card cx-hist">${h.map(x => `<li class="cx-hist-i"><span class="cx-av" aria-hidden="true">${esc(x.n.split(' ').map(p => p[0]).join('').slice(0, 2))}</span>
        <span class="cx-hist-t"><b>${esc(x.n)}</b><small class="tnum">${esc(x.d)}</small></span>
        <span class="cx-hist-r"><span class="cx-st cx-st--${CX_IST[x.st][1]}">${ic(CX_IST[x.st][0])}${esc(x.tx)}</span>${x.v ? `<b class="tnum">${t('cx.in.bn', {v: mxn(x.v)})}</b>` : ''}</span></li>`).join('')}</ul>`
        : empty({who: 'conejo', title: t('cx.in.vazio.t'), text: t('cx.in.vazio.s'), action: btn(t('cx.in.copiar'), {kind: 'mag', icon: 'copiar', attrs: {'data-copy': c, 'data-ok': t('cx.in.copiado')}})})}</section>`;
  }
};
/* Web Share não existe neste ambiente: compartilhar = copiar o link com aviso */
ACT.cxShare = () => copyText('https://' + t('cx.in.link', {c: CX_REF.code}), t('cx.in.share.ok'));

/* CORE-FIX: com nav:'menu', o menu lateral (≥ 1024) marcava só "Menu" mesmo quando a tela tem item próprio no grupo "Sua conta".
   Depois do setNav da casca, passa a marca para o item do grupo (só no menu lateral; o menu inferior continua em "Menu"). */
const CX_SIDE = {apostas: 'apostas', bonus: 'bonus', vip: 'vip', missoes: 'missoes'};
bus.on('screen', ({k}) => {
  CX.last = k;
  const it = CX_SIDE[k] && $(`.c-side [data-nav="${CX_SIDE[k]}"]`); if (!it) return;
  $$('.c-side [data-nav]').forEach(n => { n.classList.remove('is-on'); n.removeAttribute('aria-current'); });
  it.classList.add('is-on'); it.setAttribute('aria-current', 'page');
});
