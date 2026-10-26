/* conta.js · Meu perfil, Segurança da conta, Limites e jogo responsável, Central de ajuda + chat (BASE §5.14).
   Prefixo ct-, textos em TXT.ct. Tudo dentro de um IIFE para não colidir com outros módulos.
   Limites: o que é salvo atualiza S.lim (o Depósito lê S.lim.dep via limBar) e emite bus 'lim'.
   Forma de S.lim depois deste módulo:
     dep:{per,val,usado} · perda:{per,val}|null · tempo:minutos|null · lemb:{ses:min|null,res:'sem'|'mes'|null,av:bool}
     pend:{dep|perda|tempo:{v,ts}}  (aumento ou retirada de limite aguardando a carência) */
(() => {
'use strict';

TXT.ct = {
  /* comuns */
  'cancelar': 'Cancelar', 'fechar': 'Cerrar', 'continuar': 'Continuar', 'voltar': 'Volver', 'editar': 'Editar', 'copiar': 'Copiar',
  'jr': 'Juega con responsabilidad.',

  /* perfil */
  'pf.t': 'Mi perfil.', 'pf.s': 'Tus datos, tu seguridad y cómo te hablamos.',
  'id.id': 'ID {id}', 'id.copiar': 'Copiar el ID de la cuenta', 'id.copiado': 'ID de la cuenta copiado.',
  'id.nivel': 'Nivel {n}', 'id.xp': '{a} de {b} XP', 'id.xp.aria': '{a} de {b} XP en el nivel {n}',
  'id.falta': 'Te faltan {n} XP para el nivel {p}.', 'id.topo': 'Estás en el nivel más alto.', 'id.vip': 'Ver beneficios',
  'id.verif': 'Identidad verificada', 'id.cpf': 'CURP validada', 'id.desde': 'Cuenta desde {d}',
  'dica.k': 'Consejo de seguridad', 'dica.t': 'Activa la verificación en 2 pasos.', 'dica.s': 'Además de la contraseña, te pedimos un código en tu celular cuando alguien intente entrar desde un dispositivo nuevo.',
  'dica.b': 'Activar', 'dica.b.aria': 'Activar la verificación en 2 pasos',
  'dados.t': 'Datos personales.', 'dados.nome': 'Nombre completo', 'dados.cpf': 'CURP', 'dados.nasc': 'Fecha de nacimiento', 'dados.email': 'Correo', 'dados.cel': 'Celular',
  'dados.fixo': 'No se puede cambiar aquí', 'dados.trocar': 'Cambiar', 'dados.trocar.aria': 'Cambiar {x}', 'dados.conf': 'Confirmado',
  'dados.nota': 'Tu nombre, CURP y fecha de nacimiento vienen del registro de tu CURP y solo cambian con soporte.',
  'seg.t': 'Seguridad.', 'seg.more': 'Ver todo',
  'seg.senha': 'Contraseña', 'seg.senha.s': 'Cambiada el {d}',
  'seg.dois': 'Verificación en 2 pasos', 'seg.dois.off': 'Desactivada', 'seg.dois.on': 'Activada · SMS a {c}',
  'seg.sess': 'Sesiones y dispositivos', 'seg.sess.s': '{n} dispositivos con la cuenta abierta', 'seg.sess.s1': 'Solo este dispositivo con la cuenta abierta',
  'seg.lim': 'Límites y juego responsable', 'seg.lim.s': 'Depósito: {v} {p}', 'seg.lim.s0': 'Ningún límite activo',
  'seg.pausa': 'Pausa y autoexclusión', 'seg.pausa.s': 'Un tiempo lejos de las apuestas, y puedes retirar tu saldo.',
  'pref.t': 'Preferencias.',
  'pref.of': 'Ofertas y novedades por correo', 'pref.of.s': 'Bonos, torneos y estrenos. +18 · Aplican T&C.',
  'pref.sms': 'Ofertas por SMS', 'pref.sms.s': 'Mensajes cortos con las ofertas de la semana.',
  'pref.of.on': 'Listo: vas a recibir ofertas por correo.', 'pref.of.off': 'Ofertas por correo desactivadas.',
  'pref.sms.on': 'Listo: vas a recibir ofertas por SMS.', 'pref.sms.off': 'Ofertas por SMS desactivadas.',
  'pref.nota': 'Los avisos de seguridad, depósito y retiro siempre llegan, por correo y SMS.',
  'pref.idioma': 'Idioma', 'pref.idioma.s': 'Español (México)', 'pref.tema': 'Tema', 'pref.tema.s': 'Oscuro',
  'sair': 'Salir de la cuenta',

  /* segurança */
  'sg.t': 'Seguridad de la cuenta.', 'sg.s': 'Quién entra, desde dónde y cómo confirmas cada cambio.', 'sg.crumb': 'Mi perfil',
  'sg.sum.n': '{a} de {b}', 'sg.sum.t': 'protecciones activas.', 'sg.sum.aria': '{a} de {b} protecciones activas',
  'sg.sum.falta': 'Falta activar la verificación en 2 pasos.', 'sg.sum.ok': 'Todo activado. Tu cuenta tiene todas las protecciones.', 'sg.sum.b': 'Activar verificación',
  'sg.p.senha': 'Contraseña segura', 'sg.p.email': 'Correo confirmado', 'sg.p.cel': 'Celular confirmado', 'sg.p.dois': 'Verificación en 2 pasos',
  'sg.acesso': 'Acceso.', 'sg.acesso.s': 'Cada cambio se confirma con un código de 6 dígitos.',
  'sg.trocar': 'Cambiar', 'sg.ativar': 'Activar', 'sg.desligar': 'Desactivar',
  'sg.sess.t': 'Sesiones y dispositivos.', 'sg.sess.atual': 'Este dispositivo', 'sg.sess.enc': 'Cerrar', 'sg.sess.todas': 'Cerrar las otras sesiones',
  'sg.sess.vazio': 'Solo este dispositivo tiene la cuenta abierta.',
  'sg.atv.t': 'Actividad reciente.', 'sg.atv.nota': '¿No reconoces alguna actividad? Cambia tu contraseña y habla con soporte.', 'sg.atv.chat': 'Hablar con soporte',
  'sg.pz.t': 'Pausa y autoexclusión.',

  /* painel do código de 6 números */
  'cod.env.sms': 'Te enviamos un código de 6 dígitos por SMS a {d}.', 'cod.env.mail': 'Te enviamos un código de 6 dígitos a {d}.',
  'cod.l': 'Código de 6 dígitos', 'cod.demo': 'En el prototipo, 000000 simula un código que no coincide. Cualquier otro pasa.',
  'cod.re': 'Reenviar código', 'cod.re.ok': 'Te enviamos un código nuevo a {d}.',
  'cod.b': 'Confirmar código', 'cod.busy': 'Confirmando…',
  'cod.e.falta': 'Faltan dígitos. El código tiene 6, como 482913.',
  'cod.e.erro': 'Ese código no coincide. Revisa el mensaje más reciente y escribe los 6 dígitos, como 482913.',

  /* trocas */
  'f.senha.t': 'Cambiar contraseña.', 'f.senha.atual': 'Contraseña actual', 'f.senha.nova': 'Contraseña nueva',
  'f.senha.r1': '8 caracteres o más', 'f.senha.r2': 'Letras y números', 'f.senha.r3': 'Una letra mayúscula',
  'f.senha.e.atual': 'La contraseña actual no coincide. Si la olvidaste, sal de la cuenta y usa "Olvidé mi contraseña".',
  'f.senha.e.nova': 'La contraseña nueva necesita 8 caracteres o más, con letras, números y una mayúscula, como Pista2026.',
  'f.senha.ok.t': 'Contraseña cambiada.', 'f.senha.ok.s': 'Usa la contraseña nueva la próxima vez que entres.',
  'f.mostrar': 'Mostrar', 'f.ocultar': 'Ocultar', 'f.enviar': 'Enviar código',
  'f.dois.t': 'Verificación en 2 pasos.', 'f.dois.ok.t': 'Verificación activada.', 'f.dois.ok.s': 'Desde ahora, al entrar desde un dispositivo nuevo, te pedimos un código por SMS a {c}.',
  'f.doisOff.t': 'Desactivar 2 pasos.', 'f.doisOff.ok.t': 'Verificación desactivada.', 'f.doisOff.ok.s': 'Tu cuenta queda con 3 de 4 protecciones. Puedes volver a activarla cuando quieras.',
  'f.email.t': 'Cambiar correo.', 'f.email.l': 'Correo nuevo', 'f.email.ph': 'nombre@correo.com', 'f.email.h': 'El código llega a tu correo nuevo.',
  'f.email.e': 'Usa un correo completo, como nombre@correo.com.', 'f.email.novo': 'tu correo nuevo',
  'f.email.ok.t': 'Correo cambiado.', 'f.email.ok.s': 'Los avisos de la cuenta ahora llegan a {e}.',
  'f.cel.t': 'Cambiar celular.', 'f.cel.l': 'Celular nuevo', 'f.cel.ph': '55 1234 5678', 'f.cel.h': 'El código llega por SMS al número nuevo.',
  'f.cel.e': 'Usa un celular de 10 dígitos, como 55 1234 5678.', 'f.cel.novo': 'tu celular nuevo',
  'f.cel.ok.t': 'Celular cambiado.', 'f.cel.ok.s': 'Ahora los códigos llegan al {c}.',
  'atv.senha': 'Contraseña cambiada', 'atv.dois': 'Verificación en 2 pasos activada', 'atv.doisOff': 'Verificación en 2 pasos desactivada',
  'atv.email': 'Correo cambiado', 'atv.cel': 'Celular cambiado', 'atv.enc': 'Sesión cerrada', 'atv.lim': 'Límites actualizados',
  'atv.pz': 'Pausa solicitada', 'atv.ex': 'Autoexclusión solicitada', 'atv.aqui': 'iPhone · Safari · Ciudad de México, CDMX',

  /* sessões */
  'enc.t': '¿Cerrar esta sesión?', 'enc.s': 'Quien esté usando ese dispositivo sale de la cuenta al instante.', 'enc.b': 'Cerrar sesión',
  'enc.ok': 'Sesión cerrada: {d}.', 'enc.ap': 'Dispositivo', 'enc.loc': 'Ubicación', 'enc.ult': 'Última actividad',
  'enc.all.t': '¿Cerrar las otras sesiones?', 'enc.all.s': 'Todos los dispositivos, menos este, salen de la cuenta al instante.', 'enc.all.b': 'Cerrar {n} sesiones',
  'enc.all.ok': 'Otras sesiones cerradas. Solo este dispositivo sigue con la cuenta abierta.',

  /* pausa e autoexclusão */
  'pz.k': 'Pausa y autoexclusión', 'pz.h': '¿Necesitas una pausa?', 'pz.t': 'La mejor fiesta tiene pausa.',
  'pz.alt': 'El Maestro descansa en una terraza de noche, con el acordeón guardado en su estuche.',
  'pz.s': 'Las apuestas y los depósitos se cierran por el tiempo que elijas. Tu saldo sigue siendo tuyo: puedes retirarlo.',
  'pz.dur.l': 'Duración de la pausa', 'pz.d.24h': '24 horas', 'pz.d.7d': '7 días', 'pz.d.30d': '30 días', 'pz.b': 'Pausar por {d}',
  'ex.t': '¿Necesitas más tiempo?', 'ex.s': 'La autoexclusión va de 1 mes a tiempo indefinido y no se puede deshacer antes de que termine.',
  'ex.l': 'Periodo de autoexclusión', 'ex.b': 'Revisar autoexclusión',
  'ex.p.1m': '1 mes', 'ex.p.3m': '3 meses', 'ex.p.6m': '6 meses', 'ex.p.1a': '1 año', 'ex.p.ind': 'Indefinida',
  'rs.pz.t': '¿Pausar por {d}?', 'rs.ex.t': 'Revisa tu autoexclusión.',
  'rs.per': 'Periodo', 'rs.ate': 'Vale hasta', 'rs.ind': 'Sin fecha de fin',
  'rs.ind.n': 'Para volver, hay que pedirlo a soporte, y solo después de 6 meses [por confirmar].',
  'rs.lib': 'Sigue disponible', 'rs.blq': 'Queda bloqueado',
  'rs.lib.1': 'Retirar tu saldo de {v}', 'rs.lib.2': 'Ver movimientos y comprobantes', 'rs.lib.3': 'Hablar con soporte',
  'rs.blq.1': 'Apuestas en deportes y en el casino', 'rs.blq.2': 'Depósitos', 'rs.blq.3': 'Bonos, torneos y ofertas (se detienen los correos y SMS de ofertas)', 'rs.blq.4': 'Abrir otra cuenta con tu CURP',
  'rs.pz.nota': 'La pausa vale hasta el final del plazo y no se puede terminar antes [por confirmar].',
  'rs.ex.nota': 'La autoexclusión no se puede deshacer antes del final del plazo.',
  'rs.ck': 'Leí el resumen y quiero autoexcluirme por {p}.', 'rs.ck.ind': 'Leí el resumen y quiero autoexcluirme por tiempo indefinido.',
  'rs.ck.e': 'Marca la confirmación de arriba para seguir.',
  'rs.pz.b': 'Confirmar pausa', 'rs.ex.b': 'Confirmar autoexclusión', 'rs.nao': 'Ahora no',
  'ok.pz.t': 'Pausa confirmada.', 'ok.ex.t': 'Autoexclusión confirmada.',
  'ok.ate': 'Apuestas y depósitos cerrados hasta el {d}.', 'ok.ind': 'Apuestas y depósitos cerrados por tiempo indefinido.',
  'ok.fala': 'Soy el Maestro: ya lo anoté. Tu saldo sigue guardado a tu nombre y puedes retirarlo cuando quieras.', 'ok.sacar': 'Retirar mi saldo',
  'st.pz': 'Cuenta en pausa hasta el {d}.', 'st.ex': 'Cuenta en autoexclusión hasta el {d}.', 'st.exi': 'Cuenta en autoexclusión por tiempo indefinido.',
  'st.s': 'Apuestas y depósitos cerrados. Puedes seguir retirando tu saldo.', 'st.demo': 'Deshacer (solo en el prototipo)', 'st.demo.ok': 'Prototipo de vuelta al estado inicial.',
  'st.hasta': 'Hasta el {d}',

  /* ajuda externa */
  'ext.t': 'Ayuda fuera de Cumbia.', 'ext.s': 'Si el juego te está pesando, hablar con alguien de fuera puede ayudar.',
  'ext.cvv': 'Línea de la Vida', 'ext.cvv.n': '800 911 2000', 'ext.cvv.s': 'Llamada gratis, 24 horas. Orientación sobre adicciones y salud emocional [por confirmar].',
  'ext.ligar': 'Llamar a la línea', 'ext.cop.cvv.b': 'Copiar número', 'ext.cop.ja.b': 'Copiar dirección', 'ext.cop.cvv': 'Copiar el número de la Línea de la Vida', 'ext.cop.cvv.ok': 'Número de la Línea de la Vida copiado.',
  'ext.ja': 'Jugadores Anónimos', 'ext.ja.u': 'gamblersanonymous.org', 'ext.ja.s': 'Grupos de apoyo para quien quiere dejar de jugar. Grupos en México [por confirmar].',
  'ext.cop.ja': 'Copiar la dirección de Jugadores Anónimos', 'ext.cop.ja.ok': 'Dirección copiada.',

  /* limites */
  'lm.k': 'Juego responsable', 'lm.t': 'Tus límites.', 'lm.s': 'Pon tu límite y baila a tu ritmo. Todos los pasos son opcionales y puedes cambiarlos cuando quieras.',
  'lm.dep.back': 'Volver a Depositar',
  'lm.now': 'Activos ahora', 'lm.now.vazio': 'Ningún límite activo.',
  'lm.now.dep': 'Depósito: {v} {p}', 'lm.now.perda': 'Pérdida: {v} {p}', 'lm.now.tempo': 'Tiempo: {v} por día', 'lm.now.lemb': 'Recordatorios activados',
  'lm.pend': '{o} a partir del {d} [plazo por confirmar].', 'lm.pend.k': 'Pendiente', 'lm.pend.x': 'Cancelar', 'lm.pend.x.aria': 'Cancelar el cambio pendiente: {o}',
  'lm.pend.ok': 'Cambio cancelado. Sigue el límite actual.',
  'lm.pend.dep': 'Depósito: {v}', 'lm.pend.perda': 'Pérdida: {v}', 'lm.pend.tempo': 'Tiempo: {v}', 'lm.pend.sem': 'sin límite',
  'wz.l': 'Pasos del asistente de límites', 'wz.n': 'Paso {a} de {b}', 'wz.opc': 'Opcional',
  'wz.s.dep': 'Depósito', 'wz.s.perda': 'Pérdida', 'wz.s.tempo': 'Tiempo', 'wz.s.lemb': 'Avisos', 'wz.s.rev': 'Revisión',
  'per.l': 'Periodo', 'per.dia': 'Por día', 'per.semana': 'Por semana', 'per.mes': 'Por mes',
  'per.s.dia': 'por día', 'per.s.semana': 'por semana', 'per.s.mes': 'por mes',
  'val.l': 'Monto del límite', 'val.falta': 'Activado: falta escribir el monto.', 'val.e': 'Escribe el monto del límite, como 500.00. O desactiva el límite para seguir sin él.', 'val.q': 'Montos rápidos',
  'dep.t': 'Límite de depósito.', 'dep.s': 'Cuánto puedes depositar por día, semana o mes.',
  'dep.on': 'Limitar mis depósitos', 'dep.d0': 'Desactivado: sin límite de depósito.', 'dep.d1': 'Activado: {v} {p}.',
  'dep.usado': 'Hoy ya depositaste {v}.',
  'rule.base': 'Bajar un límite vale al momento. Subirlo o quitarlo solo vale después de 24 horas [plazo por confirmar], para que lo decidas con calma.',
  'rule.up': 'Tu nuevo límite de {v} {p} vale a partir del {d} [plazo por confirmar]. Hasta entonces, sigue el de {o}.',
  'rule.down': 'Tu nuevo límite de {v} {p} vale al momento, en cuanto lo guardes.',
  'rule.off': 'Sin límite a partir del {d} [plazo por confirmar]. Hasta entonces, sigue el de {o}.',
  'perda.t': 'Límite de pérdida.', 'perda.s': 'Un tope para lo que sale de tu bolsillo en el periodo.',
  'perda.o': 'Qué es pérdida', 'perda.o.s': 'Es lo que apostaste menos lo que volvió en premios en el periodo.',
  'perda.eq.a': 'Apostaste', 'perda.eq.b': 'Recibiste en premios', 'perda.eq.c': 'Tu pérdida',
  'perda.eq.aria': 'Ejemplo: apostaste {a} y recibiste {b} en premios. La pérdida fue de {c}.',
  'perda.fim': 'Al llegar al límite, las apuestas nuevas se cierran hasta que cambie el periodo. Tu saldo sigue siendo tuyo.',
  'perda.on': 'Limitar mis pérdidas', 'perda.d0': 'Desactivado: sin límite de pérdida.', 'perda.d1': 'Activado: {v} {p}.',
  'tempo.t': 'Tiempo por día.', 'tempo.s': 'Cuánto tiempo de juego al día, sumando casino y apuestas en vivo [por confirmar].',
  'tempo.on': 'Limitar mi tiempo de juego', 'tempo.d0': 'Desactivado: sin límite de tiempo.', 'tempo.d1': 'Activado: {v} por día.',
  'tempo.l': 'Tiempo máximo por día', 'tempo.fim': 'Cuando se acabe el tiempo, te avisamos y las apuestas se cierran hasta la medianoche [por confirmar].',
  'lemb.t': 'Avisos y recordatorios.', 'lemb.s': 'Un toque en el hombro mientras juegas.',
  'lemb.ses': 'Recordatorio de tiempo de sesión', 'lemb.ses.d': 'Te muestra cuánto tiempo llevas jugando.', 'lemb.cada': 'Recordar cada',
  'lemb.res': 'Resumen de gastos', 'lemb.res.d': 'Cuánto depositaste, apostaste y recibiste, por correo.', 'lemb.freq': 'Frecuencia',
  'lemb.f.sem': 'Cada semana', 'lemb.f.mes': 'Cada mes',
  'lemb.av': 'Aviso cerca del límite', 'lemb.av.d': 'Cuando llegues al 80% de un límite.',
  'rev.t': 'Revisa y guarda.', 'rev.s': 'Revisa lo que cambia antes de guardar.',
  'rev.dep': 'Depósito', 'rev.perda': 'Pérdida', 'rev.tempo': 'Tiempo por día', 'rev.lemb': 'Recordatorios',
  'rev.sem': 'Sin límite', 'rev.desl': 'Desactivados', 'rev.igual': 'Sin cambios', 'rev.agora': 'Vale al momento',
  'rev.depois': 'Vale a partir del {d} [plazo por confirmar]', 'rev.editar': 'Editar {x}', 'rev.nada': 'No cambiaste nada. Todo sigue igual.',
  'rev.ses': 'Sesión cada {v}', 'rev.res.sem': 'Resumen cada semana', 'rev.res.mes': 'Resumen cada mes', 'rev.av': 'Aviso al 80%',
  'salvar': 'Guardar mis límites', 'salvo': 'Límites guardados.', 'nada': 'Nada cambió en tus límites.',
  'ok.t': 'Límites guardados.', 'ok.lfala': 'Soy el Maestro: anoté tus límites. Aquí el ritmo lo pones tú.',
  'ok.dep': 'Ver en Depositar', 'ok.denovo': 'Ajustar de nuevo',
  'ok.pend': 'Lo que subiste o quitaste vale a partir del {d} [plazo por confirmar]. Lo demás ya vale.', 'ok.agora': 'Todo vale desde ahora.',

  /* central de ajuda */
  'aj.t': 'Centro de ayuda.', 'aj.s': 'Respuestas rápidas y personas de verdad en el chat. Atención 24 horas, en español.',
  'aj.busca.l': 'Buscar en la ayuda', 'aj.busca.ph': 'Ej.: SPEI, retiro, bono', 'aj.busca.b': 'Buscar',
  'aj.chat.on': 'En línea ahora', 'aj.chat.t': 'Habla con nuestro equipo.', 'aj.chat.s': 'Una persona de verdad te responde en el chat, a cualquier hora.',
  'aj.chat.b': 'Abrir el chat', 'aj.chat.voltar': 'Volver a la conversación',
  'aj.cat.t': 'Elige un tema.', 'aj.cat.n': '{n} artículos',
  'aj.top.t': 'Los más buscados.', 'aj.res.t': 'Resultados para "{q}".', 'aj.res.n': '{n} artículos', 'aj.res.1': '1 artículo', 'aj.ver.top': 'Los más buscados',
  'aj.vazio.t': 'Sin resultados.', 'aj.vazio.s': 'Soy el Maestro: no encontré "{q}" por aquí. Prueba otra palabra, como SPEI o retiro, o habla con el equipo en el chat.',
  'aj.can.t': 'Otros canales.', 'aj.mail': 'Correo', 'aj.mail.v': 'soporte@cumbia.bet', 'aj.mail.s': 'soporte@cumbia.bet [por confirmar]', 'aj.mail.ok': 'Correo de soporte copiado.',
  'aj.lim': 'Límites y juego responsable', 'aj.lim.s': 'Depósito, pérdida, tiempo, pausa y autoexclusión.',
  'aj.seg': 'Seguridad de la cuenta', 'aj.seg.s': 'Contraseña, 2 pasos y sesiones abiertas.',
  'aj.lim.motivo': 'Entra para definir tus límites.', 'aj.seg.motivo': 'Entra para ver la seguridad de tu cuenta.',
  'art.util': '¿Te sirvió?', 'art.sim': 'Sí', 'art.nao': 'No', 'art.obg': 'Gracias. Esto nos ayuda a mejorar la ayuda.',
  'art.obg.nao': 'Gracias por avisar. Si quieres, el equipo te ayuda en el chat.', 'art.chat': 'Hablar en el chat',

  /* chat */
  'ch.t': 'Chat en vivo.', 'ch.log': 'Conversación con soporte', 'ch.entrou': 'Entraste a la fila.',
  'ch.fila': 'Eres el {n}.º en la fila.', 'ch.fila.s': 'Puedes seguir navegando: la conversación se queda aquí y te avisamos cuando alguien del equipo entre.',
  'ch.on': 'Te atiende {a}', 'ch.on.s': 'Del equipo Cumbia · Atención 24 horas, en español.',
  'ch.tema': '¿De qué quieres hablar?', 'ch.at': '{a}, del equipo Cumbia, entró a la conversación.', 'ch.toast': '{a}, del equipo Cumbia, entró al chat.',
  'ch.msg.l': 'Tu mensaje', 'ch.msg.ph': 'Escribe aquí', 'ch.env': 'Enviar mensaje', 'ch.vazio': 'Escribe un mensaje antes de enviar.',
  'ch.aguarde': 'Tu mensaje se queda aquí. Quien te atienda lo lee primero.', 'ch.rodape': 'Atención 24 horas, en español.', 'ch.voce': 'Tú',
  'ch.oi': '¡Hola, {n}! Soy {a}. Ya estoy contigo.', 'ch.oi.out': '¡Hola! Soy {a}. Ya estoy contigo.',
  'ch.u.tp': 'Quiero hablar sobre {t}.',
  'ch.tp.dep': 'Depósitos', 'ch.tp.saq': 'Retiros', 'ch.tp.bon': 'Bonos', 'ch.tp.con': 'Mi cuenta', 'ch.tp.jr': 'Juego responsable', 'ch.tp.out': 'Otro tema',
  'ch.r.dep': 'Vamos a revisar tu depósito. Dime el monto y la hora aproximada de tu SPEI o de tu pago en OXXO, por favor.',
  'ch.r.saq': 'Vamos a revisar tu retiro. Aparece en tu Billetera con sus etapas, de Solicitado a Enviado. ¿En qué etapa está el tuyo?',
  'ch.r.bon': 'Con los bonos te ayudo. ¿Qué bono quieres activar o entender?',
  'ch.r.con': 'Sobre tu cuenta: ¿es un dato personal, la contraseña o la verificación de identidad?',
  'ch.r.jr': 'Gracias por contarnos. Puedo ayudarte a poner límites o una pausa ahora mismo. Si quieres hablar con alguien de fuera, la Línea de la Vida atiende en el 800 911 2000, 24 horas [por confirmar].',
  'ch.r.out': 'Cuéntame qué pasó, con todo el detalle que puedas.',
  'ch.r.gen': 'Anotado. Lo estoy revisando y te respondo en esta conversación.', 'ch.r.gen2': 'Sigo aquí contigo.',

  /* artigos ({min}, {max}, {a}, {b}, {c} = valores formatados com mxn()) */
  'a.pix.t': '¿Cómo deposito por SPEI?',
  'a.pix.b': 'En Depositar, elige SPEI y escribe el monto. Te damos una CLABE de depósito y una referencia solo para ese pago.\nEn la app de tu banco, transfiere a esa CLABE. El saldo se acredita cuando tu banco confirme.\nSolo aceptamos SPEI desde cuentas a tu nombre.',
  'a.pix.g': 'Ir a Depositar',
  'a.depnao.t': 'Mi depósito no aparece. ¿Y ahora?',
  'a.depnao.b': 'Revisa en la app de tu banco que el SPEI se completó, que salió de una cuenta a tu nombre y que usaste la CLABE y la referencia correctas. Un SPEI de otra persona se devuelve a quien lo envió.\nSi pagaste en OXXO, guarda tu ticket.\nSi tu banco muestra el SPEI completado y tu saldo no cambió, abre el chat con tu comprobante a la mano.',
  'a.depval.t': '¿Cuáles son los montos mínimo y máximo?',
  'a.depval.b': 'El depósito mínimo es de {min} y el máximo por operación es de {max} [por confirmar]. En OXXO puede haber un tope por pago [por confirmar].\nSi definiste un límite de depósito, ese va primero.',
  'a.terc.t': '¿Puedo depositar desde la cuenta de otra persona?',
  'a.terc.b': 'No. Los depósitos y retiros son solo desde y hacia cuentas a tu nombre, el mismo de tu CURP. Así cuidamos tu dinero y tu cuenta.',
  'a.oxxo.t': '¿Cómo pago en OXXO?',
  'a.oxxo.b': 'En Depositar, elige OXXO y escribe el monto. Te damos una referencia de pago con código de barras.\nMuéstrala en la caja de cualquier OXXO y paga en efectivo. Guarda tu ticket. El saldo se acredita cuando OXXO confirme el pago.\nLa referencia vence en [por confirmar] y la tienda puede cobrar una comisión [por confirmar].',
  'a.oxxo.g': 'Ir a Depositar',
  'a.tarj.t': '¿Puedo depositar con tarjeta?',
  'a.tarj.b': 'Sí, con tarjeta de débito o de crédito a tu nombre. En Depositar, elige Débito o Crédito, agrega tu tarjeta y escribe el monto.\nTu banco puede pedirte que confirmes el pago en su app.',
  'a.tarj.g': 'Ir a Depositar',
  'a.saq.t': '¿Cómo retiro mi saldo?',
  'a.saq.b': 'En Retirar, elige SPEI y una cuenta CLABE a tu nombre, o tu tarjeta de débito; escribe el monto y confirma.\nSigue cada etapa en tu Billetera, de Solicitado a Enviado.',
  'a.saq.g': 'Ir a Retirar',
  'a.saqtempo.t': '¿Cuánto tarda un retiro?',
  'a.saqtempo.b': 'Depende de la revisión y de tu banco, por eso no prometemos horario. Cada etapa aparece en tu Billetera, de Solicitado a Enviado.\nSi tu retiro se queda detenido en una etapa, habla con el equipo en el chat.',
  'a.saqan.t': '¿Por qué mi retiro está en revisión?',
  'a.saqan.b': 'Todo retiro pasa por una revisión de seguridad para confirmar que el dinero va a una cuenta a tu nombre.\nSi necesitamos algún documento, te avisamos por correo y aquí en el chat.',
  'a.bon.t': '¿Cómo activo un bono?',
  'a.bon.b': 'En Mis bonos, elige un bono disponible, lee las reglas y toca Activar. Si tienes un código promocional, escríbelo en el campo de código y revisa la oferta antes de aplicarlo.\n+18 · Aplican T&C.',
  'a.bon.g': 'Ver mis bonos',
  'a.bonreg.t': '¿Qué son las reglas de apuesta de un bono?',
  'a.bonreg.b': 'Algunos bonos se tienen que apostar cierto número de veces antes de volverse saldo para retirar. Ese número (rollover) aparece en las reglas de cada bono, junto con la vigencia y los juegos que cuentan.\n+18 · Aplican T&C.',
  'a.verif.t': '¿Cómo verifico mi identidad?',
  'a.verif.b': 'Antes del primer depósito, te pedimos una selfie y una foto de tu INE [por confirmar]. Se hace una sola vez [por confirmar].\nLa cuenta queda a nombre del titular de la CURP.',
  'a.senha.t': 'Olvidé mi contraseña. ¿Y ahora?',
  'a.senha.b': 'En la pantalla de Entrar, toca Olvidé mi contraseña. Te mandamos un código de 6 dígitos a tu correo y creas una contraseña nueva.',
  'a.dados.t': '¿Cómo cambio mi correo o mi celular?',
  'a.dados.b': 'En Mi perfil o en Seguridad de la cuenta, toca Cambiar junto al dato. Cada cambio se confirma con un código de 6 dígitos.\nTu nombre, CURP y fecha de nacimiento solo cambian con soporte.',
  'a.dados.g': 'Ir a Seguridad de la cuenta',
  'a.lim.t': '¿Cómo defino mis límites?',
  'a.lim.b': 'En Límites y juego responsable, elige qué quieres limitar: depósito, pérdida y tiempo por día, además de recordatorios. Todos los pasos son opcionales.\nBajar un límite vale al momento. Subirlo solo vale después de 24 horas [plazo por confirmar].',
  'a.lim.g': 'Definir mis límites',
  'a.pausa.t': '¿Cómo pido una pausa o la autoexclusión?',
  'a.pausa.b': 'En Límites y juego responsable, elige una pausa de 24 horas, 7 o 30 días, o la autoexclusión de 1 mes a tiempo indefinido. Antes de confirmar, te mostramos qué sigue disponible y qué queda bloqueado.\nPuedes seguir retirando tu saldo.',
  'a.pausa.g': 'Ver pausa y autoexclusión',
  'a.perda.t': '¿Qué cuenta como pérdida?',
  'a.perda.b': 'Pérdida es lo que apostaste menos lo que volvió en premios en el periodo.\nEjemplo: apostaste {a} y recibiste {b} en premios. La pérdida fue de {c}.'
};

/* ===== utilitários do módulo ===== */
const tc = (k, v) => t('ct.' + k, v);
const T = (k, v) => esc(tc(k, v));
const p2 = n => String(n).padStart(2, '0');
const fd = d => `${p2(d.getDate())}/${p2(d.getMonth() + 1)}/${d.getFullYear()}`;
const hm = d => `${p2(d.getHours())}:${p2(d.getMinutes())}`;
const fdt = d => `${fd(d)} a las ${hm(d)}`;
const CAR_H = 24; /* carência para aumentar ou tirar um limite [a confirmar o prazo] */
const carencia = () => new Date(Date.now() + CAR_H * 36e5);
const PER = {dia: 1, semana: 7, mes: 30};
const perS = p => tc('per.s.' + (p || 'dia'));
const fmtV = v => v ? (+v).toLocaleString(LOC, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '';
const fmtMin = m => m < 60 ? `${m} min` : `${m / 60} h`;
const isOn = id => document.getElementById(id)?.getAttribute('aria-checked') === 'true';
const chipOf = name => $(`[data-chips="${name}"] .is-on`)?.dataset.chip;
const cancelBtn = (label = tc('cancelar')) => btn(label, {kind: 'ghost', full: true, attrs: {'data-close': ''}});
const maskMail = e => { const [u, d] = e.split('@'); return u.slice(0, 3) + '••••@' + d; };
const maskCel = c => { const d = c.replace(/\D/g, ''); return `+52 ${d.slice(0, 2)} •••• ${d.slice(-4)}`; };
const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
const smooth = () => (RM.matches ? 'auto' : 'smooth');
/* exemplos em pesos (sempre pelo mxn do core) */
const EQ = () => ({a: mxn(100), b: mxn(30), c: mxn(70)});
const ARTV = () => ({...EQ(), min: mxn(100), max: mxn(50000)});

/* ===== estado do módulo (demonstração) ===== */
const CT = {
  sec: {senha: '12/07/2026', dois: false},
  prefs: {of: false, sms: false}, /* como no cadastro: ofertas desmarcado */
  sess: [
    {id: 's1', dev: 'iPhone · Safari', ic: 'celular', loc: 'Ciudad de México, CDMX', q: 'Ahora', atual: true},
    {id: 's2', dev: 'Windows · Chrome', ic: 'globo', loc: 'Ciudad de México, CDMX', q: 'Ayer, 21:15'},
    {id: 's3', dev: 'Android · Chrome', ic: 'celular', loc: 'Guadalajara, Jal.', q: '22/10/2026, 19:02'}
  ],
  atv: [
    {ic: 'entrada', t: 'Entrada en este dispositivo', s: 'iPhone · Safari · Ciudad de México, CDMX', d: 'Hoy, 08:40'},
    {ic: 'entrada', t: 'Entrada', s: 'Windows · Chrome · Ciudad de México, CDMX', d: '25/10/2026, 21:15'},
    {ic: 'saque', t: 'Retiro solicitado', s: 'SPEI · BBVA •••• 4521 · ' + mxn(150), d: '25/10/2026, 19:02'},
    {ic: 'limite', t: 'Límite de depósito definido', s: mxn(500) + ' por día', d: '10/09/2026, 20:12'},
    {ic: 'cadeado', t: 'Contraseña cambiada', s: 'iPhone · Safari · Ciudad de México, CDMX', d: '12/07/2026, 09:30'}
  ],
  pausa: null, excl: null
};
const logAtv = (icn, title, sub) => CT.atv.unshift({ic: icn, t: title, s: sub || tc('atv.aqui'), d: 'Hoy, ' + hm(new Date())});

/* limites: completa S.lim, restaura o que foi salvo nesta aba e aplica mudanças cuja carência já passou */
S.lim.perda ??= null; S.lim.tempo ??= null; S.lim.lemb ??= {ses: null, res: null, av: false}; S.lim.pend ??= {};
(() => {
  const s = store.get('ct.lim', null);
  if (!s || typeof s !== 'object') return;
  if (s.dep && s.dep.val) { S.lim.dep.per = s.dep.per; S.lim.dep.val = s.dep.val; }
  ['perda', 'tempo', 'lemb', 'pend'].forEach(k => { if (k in s) S.lim[k] = s[k]; });
})();
function applyDue() {
  const P = S.lim.pend || {}; let ch = false;
  Object.keys(P).forEach(k => {
    if (P[k].ts > Date.now()) return;
    if (k === 'dep') { if (P[k].v) { S.lim.dep.per = P[k].v.per; S.lim.dep.val = P[k].v.val; } else S.lim.dep.val = 0; }
    else S.lim[k] = P[k].v;
    delete P[k]; ch = true;
  });
  if (ch) persist();
}
function persist() {
  store.set('ct.lim', {dep: {per: S.lim.dep.per, val: S.lim.dep.val}, perda: S.lim.perda, tempo: S.lim.tempo, lemb: S.lim.lemb, pend: S.lim.pend});
  bus.emit('lim', S.lim);
}
applyDue();

/* ===== peças compartilhadas ===== */
function extHelp() {
  return `<div class="card ct-ext"><p class="ct-ext-s">${T('ext.s')}</p>
    <div class="ct-ext-i"><div class="ct-ext-tx"><span class="lab">${T('ext.cvv')}</span><b class="ct-ext-n tnum">${T('ext.cvv.n')}</b><small>${T('ext.cvv.s')}</small></div>
      <div class="ct-ext-b">${btn(tc('ext.ligar'), {kind: 'sec', size: 's', href: 'tel:' + tc('ext.cvv.n').replace(/\D/g, ''), icon: 'celular'})}${btn(tc('ext.cop.cvv.b'), {kind: 'ghost', size: 's', icon: 'copiar', aria: tc('ext.cop.cvv'), attrs: {'data-copy': tc('ext.cvv.n'), 'data-ok': tc('ext.cop.cvv.ok')}})}</div></div>
    <div class="ct-ext-i"><div class="ct-ext-tx"><span class="lab">${T('ext.ja')}</span><b class="ct-ext-u">${T('ext.ja.u')}</b><small>${T('ext.ja.s')}</small></div>
      <div class="ct-ext-b">${btn(tc('ext.cop.ja.b'), {kind: 'ghost', size: 's', icon: 'copiar', aria: tc('ext.cop.ja'), attrs: {'data-copy': tc('ext.ja.u'), 'data-ok': tc('ext.cop.ja.ok')}})}</div></div>
  </div>`;
}

/* pausa e autoexclusão (Segurança e Limites) */
const EXP = [['1m', 1], ['3m', 3], ['6m', 6], ['1a', 12], ['ind', 0]];
const PZD = {'24h': 1, '7d': 7, '30d': 30};
function pzBlock(o = {}) {
  const st = CT.excl || CT.pausa;
  const art = o.art ? `<div class="ct-pz-art">${img('s/pausa', {alt: tc('pz.alt'), sizes: '(min-width:1024px) 400px, 92vw'})}<p class="ct-pz-q" aria-hidden="true">${T('pz.t')}</p></div>` : '';
  if (st) return `<div class="card ct-pz${o.art ? ' ct-pz--art' : ''}">${art}<div class="ct-pz-bd">${pzStatus()}</div></div>`;
  return `<div class="card ct-pz${o.art ? ' ct-pz--art' : ''}">${art}<div class="ct-pz-bd">
    ${o.art ? `<p class="sr">${T('pz.t')}</p>` : ''}<p class="ct-pz-s">${T('pz.s')}</p>
    <div class="ct-g"><span class="fld-l" id="ctPzDurL">${T('pz.dur.l')}</span>${seg(Object.keys(PZD).map(k => ({k, n: tc('pz.d.' + k)})), {name: 'ctPzDur', active: '24h', label: tc('pz.dur.l')})}</div>
    ${btn(tc('pz.b', {d: tc('pz.d.24h')}), {kind: 'sec', act: 'ctPausa', id: 'ctPzB', icon: 'pausa', full: true})}
    <div class="ct-ex"><h3 class="ct-ex-t">${T('ex.t')}</h3><p class="ct-pz-s">${T('ex.s')}</p>
      <div class="ct-ex-row">${field({id: 'ctExPer', label: tc('ex.l'), select: EXP.map(([k]) => [k, tc('ex.p.' + k)]), value: '6m'})}
      ${btn(tc('ex.b'), {kind: 'sec', act: 'ctExcl', icon: 'cadeado'})}</div></div>
  </div></div>`;
}
function pzStatus() {
  const ex = CT.excl; const d = ex ? ex.ate : CT.pausa.ate;
  const tt = ex ? (d ? tc('st.ex', {d: fdt(d)}) : tc('st.exi')) : tc('st.pz', {d: fdt(d)});
  return `<div class="ct-pzst" role="status"><span class="ct-pzst-i">${ic('pausa')}</span><div class="ct-pzst-tx"><h3>${esc(tt)}</h3><p>${T('st.s')}</p>
    <div class="ct-pzst-b">${btn(tc('ok.sacar'), {kind: 'mag', size: 's', go: 'saque', icon: 'saque'})}${btn(tc('st.demo'), {kind: 'ghost', size: 's', act: 'ctPzUndo'})}</div></div></div>`;
}
const pzPaint = () => $$('[data-ct-pz]').forEach(e => { e.innerHTML = pzBlock({art: e.dataset.ctPz === 'art'}); });
ON.chip.ctPzDur = k => { const b = $('#ctPzB span'); if (b) b.textContent = tc('pz.b', {d: tc('pz.d.' + k)}); };

function rsSheet(kind, k) {
  const now = new Date(); let ate = null; let per;
  if (kind === 'pz') { ate = new Date(+now + PZD[k] * 864e5); per = tc('pz.d.' + k); }
  else { const m = EXP.find(x => x[0] === k)[1]; per = tc('ex.p.' + k); if (m) { ate = new Date(now); ate.setMonth(ate.getMonth() + m); } }
  const lib = [1, 2, 3].map(i => `<li>${ic('check-c', 'ic--s')}<span>${T('rs.lib.' + i, {v: mxn(S.saldo)})}</span></li>`).join('');
  const blq = [1, 2, 3, 4].map(i => `<li>${ic('cadeado', 'ic--s')}<span>${T('rs.blq.' + i)}</span></li>`).join('');
  const body = `<div class="card ct-rs-h">${kv(tc('rs.per'), esc(per))}${kv(tc('rs.ate'), ate ? esc(fdt(ate)) : T('rs.ind'))}</div>
    ${!ate ? `<p class="ct-rs-n">${T('rs.ind.n')}</p>` : ''}
    <div class="ct-rs-g"><section class="ct-rs-c ct-rs-c--ok" aria-labelledby="ctRsL"><h3 class="lab" id="ctRsL">${T('rs.lib')}</h3><ul>${lib}</ul></section>
      <section class="ct-rs-c ct-rs-c--no" aria-labelledby="ctRsB"><h3 class="lab" id="ctRsB">${T('rs.blq')}</h3><ul>${blq}</ul></section></div>
    <p class="note note--alert">${ic('alerta')}<span>${T(kind === 'pz' ? 'rs.pz.nota' : 'rs.ex.nota')}</span></p>
    ${kind === 'ex' ? `<div class="ct-rs-ck">${check({id: 'ctExCk', label: ate ? tc('rs.ck', {p: per.toLowerCase()}) : tc('rs.ck.ind')})}<span class="fld-err" id="ctExCk-e" role="alert" hidden></span></div>` : ''}`;
  CT.rs = {kind, k, ate};
  sheet(body, {title: kind === 'pz' ? tc('rs.pz.t', {d: per}) : tc('rs.ex.t'), id: 'ctRs', cls: 'ct-sh', onClose: () => refocus(['#ctPzB', '.ct-pzst h3', '#ctPzT']),
    foot: btn(tc(kind === 'pz' ? 'rs.pz.b' : 'rs.ex.b'), {kind: 'mag', full: true, size: 'l', act: 'ctRsOk'}) + cancelBtn(tc('rs.nao'))});
}
ACT.ctPausa = () => rsSheet('pz', chipOf('ctPzDur') || '24h');
ACT.ctExcl = () => rsSheet('ex', $('#ctExPer')?.value || '6m');
ACT.ctRsOk = () => {
  const r = CT.rs; if (!r) return; const el = $('#ctRs');
  if (r.kind === 'ex') {
    const ck = $('#ctExCk'); const er = $('#ctExCk-e');
    if (!ck.checked) { er.hidden = false; er.innerHTML = ic('alerta') + T('rs.ck.e'); ck.focus(); return; }
  }
  if (r.kind === 'pz') CT.pausa = {ate: r.ate}; else CT.excl = {ate: r.ate};
  logAtv('pausa', tc(r.kind === 'pz' ? 'atv.pz' : 'atv.ex'), r.ate ? tc('st.hasta', {d: fdt(r.ate)}) : tc('rs.ind'));
  okView(el, {title: tc(r.kind === 'pz' ? 'ok.pz.t' : 'ok.ex.t'), text: r.ate ? tc('ok.ate', {d: fdt(r.ate)}) : tc('ok.ind'), who: 'maestro', fala: tc('ok.fala'),
    foot: btn(tc('ok.sacar'), {kind: 'mag', full: true, size: 'l', go: 'saque', icon: 'saque'}) + cancelBtn(tc('fechar')), extra: extHelp()});
  pzPaint(); ctPaint();
};
ACT.ctPzUndo = () => { CT.pausa = null; CT.excl = null; pzPaint(); ctPaint(); toast(tc('st.demo.ok'), {icon: 'info'}); refocus(['#ctPzB']); };

/* confirmação dentro do painel (personagem em 1ª pessoa só aqui e nos vazios) */
function okView(el, o) {
  if (!el) return;
  el.querySelector('.sh-hd h2').textContent = o.title;
  el.querySelector('.sh-bd').innerHTML = `<div class="ct-ok">${o.who ? pedestal(o.who, {h: 132, cls: 'ct-ok-ped'}) : `<span class="ct-ok-i">${ic('check-c')}</span>`}
    <div class="ct-ok-tx">${o.text ? `<p class="ct-ok-s">${esc(o.text)}</p>` : ''}${o.fala ? `<p class="ct-fala">${esc(o.fala)}</p>` : ''}</div></div>${o.extra || ''}`;
  el.querySelector('.sh-ft').innerHTML = o.foot || btn(tc('fechar'), {kind: 'sec', full: true, size: 'l', attrs: {'data-close': ''}});
  el.querySelector('.sh-bd').scrollTop = 0;
  el.querySelector('.sh-hd h2').focus({preventScroll: true});
}

/* ===== trocas com código de 6 números ===== */
const FLOWS = {
  senha: {
    title: () => tc('f.senha.t'),
    form: () => `${field({id: 'ctPwA', label: tc('f.senha.atual'), type: 'password', autocomplete: 'current-password', action: pwBtn()})}
      ${field({id: 'ctPwN', label: tc('f.senha.nova'), type: 'password', autocomplete: 'new-password', action: pwBtn()})}
      <ul class="ct-rules" id="ctRules" aria-label="Reglas de la contraseña nueva">${['len', 'mix', 'up'].map((r, i) => `<li data-r="${r}">${ic('check-c', 'ic--xs')}<span>${T('f.senha.r' + (i + 1))}</span></li>`).join('')}</ul>`,
    live: f => { const n = f.querySelector('#ctPwN'); n.addEventListener('input', () => pwRules(n.value)); },
    check: f => {
      const a = f.querySelector('#ctPwA'), n = f.querySelector('#ctPwN'); let first = null;
      if (a.value === '000000') { setErr(a, tc('f.senha.e.atual')); first ||= a; }
      if (n.value && !Object.values(pwOk(n.value)).every(Boolean)) { setErr(n, tc('f.senha.e.nova')); first ||= n; }
      if (first) { first.focus(); return false; }
      return ME.cel;
    },
    ok: () => { CT.sec.senha = fd(new Date()); logAtv('cadeado', tc('atv.senha')); return {title: tc('f.senha.ok.t'), text: tc('f.senha.ok.s')}; }
  },
  dois: {title: () => tc('f.dois.t'), dest: () => ME.cel,
    ok: () => { CT.sec.dois = true; logAtv('escudo', tc('atv.dois')); return {title: tc('f.dois.ok.t'), text: tc('f.dois.ok.s', {c: ME.cel})}; }},
  doisOff: {title: () => tc('f.doisOff.t'), dest: () => ME.cel,
    ok: () => { CT.sec.dois = false; logAtv('escudo', tc('atv.doisOff')); return {title: tc('f.doisOff.ok.t'), text: tc('f.doisOff.ok.s')}; }},
  email: {
    title: () => tc('f.email.t'), mail: true,
    form: () => field({id: 'ctNewMail', label: tc('f.email.l'), type: 'email', inputmode: 'email', autocomplete: 'email', placeholder: tc('f.email.ph'), hint: tc('f.email.h'), spell: false}),
    check: f => {
      const i = f.querySelector('#ctNewMail'); const v = i.value.trim();
      if (v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) { setErr(i, tc('f.email.e')); i.focus(); return false; }
      FLOWS.email.v = v; return v || tc('f.email.novo');
    },
    ok: () => { const v = FLOWS.email.v; if (v) ME.email = maskMail(v); logAtv('email', tc('atv.email')); return {title: tc('f.email.ok.t'), text: tc('f.email.ok.s', {e: ME.email})}; }
  },
  cel: {
    title: () => tc('f.cel.t'),
    form: () => field({id: 'ctNewCel', label: tc('f.cel.l'), type: 'tel', inputmode: 'tel', autocomplete: 'tel-national', prefix: '+52', placeholder: tc('f.cel.ph'), hint: tc('f.cel.h'), mask: 'cel', maxlength: 12}),
    check: f => {
      const i = f.querySelector('#ctNewCel'); const d = i.value.replace(/\D/g, '');
      if (d && !/^[2-9]\d{9}$/.test(d)) { setErr(i, tc('f.cel.e')); i.focus(); return false; }
      FLOWS.cel.v = d ? i.value : ''; return d ? '+52 ' + i.value : tc('f.cel.novo');
    },
    ok: () => { const v = FLOWS.cel.v; if (v) ME.cel = maskCel(v); logAtv('celular', tc('atv.cel')); return {title: tc('f.cel.ok.t'), text: tc('f.cel.ok.s', {c: ME.cel})}; }
  }
};
const pwBtn = () => `<button type="button" class="fld-act" data-act="ctPw" aria-pressed="false">${T('f.mostrar')}</button>`;
const pwOk = v => ({len: v.length >= 8, mix: /[a-z]/i.test(v) && /\d/.test(v), up: /[A-Z]/.test(v)});
function pwRules(v) { const ok = pwOk(v); $$('#ctRules li').forEach(li => li.classList.toggle('is-ok', !!v && ok[li.dataset.r])); }
ACT.ctPw = el => {
  const i = el.closest('.fld-box').querySelector('input'); const show = i.type === 'password';
  i.type = show ? 'text' : 'password'; el.textContent = tc(show ? 'f.ocultar' : 'f.mostrar'); el.setAttribute('aria-pressed', show);
};

/* o botão que abriu o painel pode ter sido repintado: devolve o foco a um equivalente */
function refocus(sels) {
  setTimeout(() => {
    const a = document.activeElement; if (a && a !== document.body && !a.closest('.sh')) return;
    for (const s of sels) { const e = s && $(s); if (e && !e.closest('[hidden]')) { if (!e.matches('button,a,input,select,[tabindex]')) e.tabIndex = -1; e.focus({preventScroll: true}); return; } }
  }, 0);
}
function secFlow(k) {
  const F = FLOWS[k]; if (!F) return;
  const alt = {dois: 'doisOff', doisOff: 'dois'}[k];
  const el = sheet('', {title: F.title(), id: 'ctSec', cls: 'ct-sh', foot: ' ',
    onClose: () => refocus([`[data-act=ctSec][data-arg="${k}"]`, alt && `[data-act=ctSec][data-arg="${alt}"]`, '#ctSumT', '#ctTipT', '#main h1'])});
  if (F.form) formStep(el, F); else codeStep(el, F, F.dest());
}
ACT.ctSec = el => secFlow(el.dataset.arg);

function formStep(el, F) {
  el.querySelector('.sh-bd').innerHTML = `<form class="ct-form" id="ctSecF" novalidate>${F.form()}</form>`;
  el.querySelector('.sh-ft').innerHTML = btn(tc('f.enviar'), {kind: 'mag', full: true, size: 'l', type: 'submit', attrs: {form: 'ctSecF'}}) + cancelBtn();
  const f = el.querySelector('#ctSecF');
  f.addEventListener('submit', e => { e.preventDefault(); const dest = F.check(f); if (dest !== false) codeStep(el, F, dest); });
  if (F.live) F.live(f);
}

function codeStep(el, F, dest) {
  el.querySelector('.sh-bd').innerHTML = `<p class="ct-cod-p">${T(F.mail ? 'cod.env.mail' : 'cod.env.sms', {d: dest})}</p>
    <form class="ct-form" id="ctCodF" novalidate>
      <div class="fld ct-code"><label for="ctCode">${T('cod.l')}</label>
        <div class="ct-code-box"><input id="ctCode" name="code" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" pattern="[0-9]*" enterkeyhint="done" spellcheck="false" aria-describedby="ctCode-e ctCode-h"><span class="ct-code-c" aria-hidden="true">${'<i></i>'.repeat(6)}</span></div>
        <span class="fld-err" id="ctCode-e" role="alert" hidden></span><span class="fld-hint" id="ctCode-h">${T('cod.demo')}</span></div>
    </form>
    <button type="button" class="lnk ct-cod-re" data-act="ctResend" data-arg="${esc(dest)}">${T('cod.re')}</button>`;
  el.querySelector('.sh-ft').innerHTML = btn(tc('cod.b'), {kind: 'mag', full: true, size: 'l', type: 'submit', id: 'ctCodB', attrs: {form: 'ctCodF'}}) + cancelBtn();
  const f = el.querySelector('#ctCodF'), inp = f.querySelector('#ctCode'), cells = $$('.ct-code-c i', f);
  const paint = () => { const v = inp.value; cells.forEach((c, i) => { c.textContent = v[i] || ''; c.classList.toggle('is-cur', i === Math.min(v.length, 5)); c.classList.toggle('is-full', !!v[i]); }); };
  inp.addEventListener('input', () => { const v = inp.value.replace(/\D/g, '').slice(0, 6); if (v !== inp.value) inp.value = v; paint(); });
  paint();
  f.addEventListener('submit', e => {
    e.preventDefault(); const b = el.querySelector('#ctCodB'); if (b.getAttribute('aria-busy') === 'true') return;
    const v = inp.value;
    if (v && v.length < 6) { setErr(inp, tc('cod.e.falta')); inp.focus(); return; }
    b.setAttribute('aria-busy', 'true'); inp.readOnly = true; const old = b.innerHTML;
    b.innerHTML = `<span class="busy" aria-hidden="true"><i></i><i></i><i></i></span><span>${T('cod.busy')}</span>`;
    setTimeout(() => {
      if (!el.isConnected) return;
      b.removeAttribute('aria-busy'); inp.readOnly = false; b.innerHTML = old;
      if (v === '000000') { setErr(inp, tc('cod.e.erro')); inp.select(); inp.focus(); return; }
      okView(el, F.ok()); ctPaint();
    }, 650);
  });
  setTimeout(() => el.isConnected && inp.focus({preventScroll: true}), 60);
}
ACT.ctResend = el => toast(tc('cod.re.ok', {d: el.dataset.arg}), {icon: 'celular'});

/* ===== Meu perfil ===== */
function idCard(p) {
  const L = VIP_NIVEIS.find(v => 'n' + v.n === p) || VIP_NIVEIS.find(v => v.n === ME.nivelN) || VIP_NIVEIS[0];
  const nx = VIP_NIVEIS.find(v => v.n === L.n + 1);
  const xp = L.n === ME.nivelN ? ME.xp : L.xp + Math.round(((nx ? nx.xp : L.xp * 2) - L.xp) * .62);
  const goal = nx ? nx.xp : xp;
  const pc = nx ? Math.max(4, Math.min(100, Math.round((xp - L.xp) / (nx.xp - L.xp) * 100))) : 100;
  const ini = ME.nome.split(/\s+/).map(s => s[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return `<div class="ct-idw ct-id--${L.tone}"><section class="ct-id" aria-labelledby="ctIdN">
    <span class="trama trama--M ct-id-tr" aria-hidden="true"></span>
    <div class="ct-id-top">
      <span class="ct-av" aria-hidden="true">${esc(ini)}</span>
      <div class="ct-id-who"><h2 class="ct-id-n" id="ctIdN">${esc(ME.nome)}</h2>
        <span class="ct-id-id"><span class="tnum">${T('id.id', {id: ME.id})}</span><button class="ct-id-cp" data-copy="${esc(ME.id)}" data-ok="${T('id.copiado')}" aria-label="${T('id.copiar')}">${ic('copiar', 'ic--xs')}</button></span></div>
      ${ficha(L.n, {tone: L.tone, size: 64, label: tc('id.nivel', {n: L.nome})})}
    </div>
    <div class="ct-id-lv">
      <div class="ct-id-lvh"><span class="lab">${T('id.nivel', {n: L.nome})}</span><span class="tnum">${T('id.xp', {a: num(xp), b: num(goal)})}</span></div>
      <div class="ct-id-bar" role="meter" aria-valuemin="0" aria-valuemax="${goal}" aria-valuenow="${xp}" aria-label="${T('id.xp.aria', {a: num(xp), b: num(goal), n: L.nome})}"><i style="width:${pc}%"></i></div>
      <div class="ct-id-lvf"><span class="tnum">${nx ? T('id.falta', {n: num(nx.xp - xp), p: nx.nome}) : T('id.topo')}</span><button class="lnk" data-go="vip">${T('id.vip')}${ic('seta-d')}</button></div>
    </div>
    <ul class="ct-id-ok"><li>${ic('verificado', 'ic--s')}${T('id.verif')}</li><li>${ic('check-c', 'ic--s')}${T('id.cpf')}</li><li class="ct-id-desde tnum">${T('id.desde', {d: ME.desde})}</li></ul>
  </section></div>`;
}
function tipHTML() {
  if (CT.sec.dois) return '';
  return `<section class="ct-tip" aria-labelledby="ctTipT"><span class="ct-tip-i">${ic('escudo')}</span>
    <div class="ct-tip-tx"><span class="lab">${T('dica.k')}</span><h2 class="ct-tip-t" id="ctTipT">${T('dica.t')}</h2><p>${T('dica.s')}</p></div>
    ${btn(tc('dica.b'), {kind: 'sec', size: 's', go: 'seguranca:2fa', cls: 'ct-tip-b', aria: tc('dica.b.aria'), iconR: 'seta-d'})}</section>`;
}
function row(o) {
  const right = o.k ? btn(tc('dados.trocar'), {kind: 'ghost', size: 's', act: 'ctSec', attrs: {'data-arg': o.k}, aria: tc('dados.trocar.aria', {x: o.l.toLowerCase()})})
    : `<span class="ct-lock" role="img" aria-label="${T('dados.fixo')}">${ic('cadeado', 'ic--s')}</span>`;
  return `<div class="ct-row"><div class="ct-row-tx"><span class="ct-row-l">${esc(o.l)}</span><b class="ct-row-v tnum">${esc(o.v)}</b>${o.s ? `<small class="ct-row-s">${ic('check-c', 'ic--xs')}${esc(o.s)}</small>` : ''}</div><div class="ct-row-r">${right}</div></div>`;
}
const dadosHTML = () => [
  row({l: tc('dados.nome'), v: ME.nome}), row({l: tc('dados.cpf'), v: ME.curp}), row({l: tc('dados.nasc'), v: ME.nasc}),
  row({l: tc('dados.email'), v: ME.email, s: tc('dados.conf'), k: 'email'}), row({l: tc('dados.cel'), v: ME.cel, s: tc('dados.conf'), k: 'cel'})
].join('');
function segLinksHTML() {
  const others = CT.sess.length - 1; const L = S.lim.dep;
  return [
    li({icon: 'cadeado', title: tc('seg.senha'), sub: tc('seg.senha.s', {d: CT.sec.senha}), go: 'seguranca'}),
    li({icon: 'escudo', title: tc('seg.dois'), sub: CT.sec.dois ? tc('seg.dois.on', {c: ME.cel}) : tc('seg.dois.off'), go: CT.sec.dois ? 'seguranca' : 'seguranca:2fa'}),
    li({icon: 'celular', title: tc('seg.sess'), sub: others ? tc('seg.sess.s', {n: CT.sess.length}) : tc('seg.sess.s1'), go: 'seguranca'}),
    li({icon: 'limite', title: tc('seg.lim'), sub: L && L.val ? tc('seg.lim.s', {v: mxn(L.val), p: perS(L.per)}) : tc('seg.lim.s0'), go: 'limites'}),
    li({icon: 'pausa', title: tc('seg.pausa'), sub: tc('seg.pausa.s'), go: 'seguranca:pausa'})
  ].join('');
}

SCREENS.perfil = {
  label: 'Mi perfil', nav: 'menu', auth: 'Entra para ver tu perfil.', asideLabel: 'Tu billetera',
  aside: () => asideCarteira(),
  render: p => `${acctNav('perfil')}
    <header class="pg-head"><h1 class="pt">${T('pf.t')}</h1><p class="lede">${T('pf.s')}</p></header>
    ${idCard(p)}
    <div id="ctTip" class="ct-tipw">${tipHTML()}</div>
    <div class="ct-grp">
      <section aria-labelledby="ctDadT">${stitle({id: 'ctDadT', title: tc('dados.t')})}<div class="card ct-list" id="ctDados">${dadosHTML()}</div>
        <p class="ct-foot-n">${ic('info', 'ic--xs')}<span>${T('dados.nota')}</span></p></section>
      <section aria-labelledby="ctSegT">${stitle({id: 'ctSegT', title: tc('seg.t'), more: tc('seg.more'), moreGo: 'seguranca'})}<div class="card ct-list" id="ctSegL">${segLinksHTML()}</div></section>
      <section aria-labelledby="ctPrfT">${stitle({id: 'ctPrfT', title: tc('pref.t')})}<div class="card ct-list ct-prefs">
        ${toggle({id: 'ctPrefOf', label: tc('pref.of'), desc: tc('pref.of.s'), on: CT.prefs.of})}
        ${toggle({id: 'ctPrefSms', label: tc('pref.sms'), desc: tc('pref.sms.s'), on: CT.prefs.sms})}
        ${li({icon: 'globo', title: tc('pref.idioma'), sub: tc('pref.idioma.s'), act: 'prefs', arg: 'idioma'})}
        ${li({icon: 'lua', title: tc('pref.tema'), sub: tc('pref.tema.s'), act: 'prefs', arg: 'tema'})}</div>
        <p class="ct-foot-n">${ic('info', 'ic--xs')}<span>${T('pref.nota')}</span></p></section>
    </div>
    <div class="ct-out">${btn(tc('sair'), {kind: 'sec', icon: 'sair', act: 'logout', cls: 'ct-out-b'})}${age(tc('jr'))}</div>`
};

/* ===== Segurança da conta ===== */
function sumHTML() {
  const P = [['senha', true], ['email', true], ['cel', true], ['dois', CT.sec.dois]];
  const n = P.filter(x => x[1]).length; const ord = [...P].sort((a, b) => b[1] - a[1]);
  return `<section class="card ct-sum" aria-labelledby="ctSumT">
    <div class="ct-sum-m" role="img" aria-label="${T('sg.sum.aria', {a: n, b: 4})}">${ord.map(([, on], i) => `<i class="${on ? 'is-on' : ''}" style="--i:${i}"></i>`).join('')}</div>
    <div class="ct-sum-tx"><h2 class="ct-sum-h" id="ctSumT"><b class="tnum">${T('sg.sum.n', {a: n, b: 4})}</b> ${T('sg.sum.t')}</h2>
      <ul class="ct-sum-l">${P.map(([k, on]) => `<li class="${on ? 'is-on' : ''}">${ic(on ? 'check-c' : 'alerta', 'ic--xs')}<span>${T('sg.p.' + k)}${on ? '' : ' · ' + T('seg.dois.off').toLowerCase()}</span></li>`).join('')}</ul>
      ${n < 4 ? `<div class="ct-sum-b">${btn(tc('sg.sum.b'), {kind: 'mag', size: 's', act: 'ctSec', attrs: {'data-arg': 'dois'}, icon: 'escudo'})}</div>` : `<p class="ct-sum-ok">${T('sg.sum.ok')}</p>`}</div>
  </section>`;
}
const accRow = o => `<div class="li ct-acc"><span class="li-i">${ic(o.ic)}</span><span class="li-t"><b>${esc(o.t)}</b><small class="tnum">${esc(o.s)}</small></span><span class="li-r">${btn(o.b, {kind: 'sec', size: 's', act: 'ctSec', attrs: {'data-arg': o.k}, aria: o.b + ': ' + o.t})}</span></div>`;
const accHTML = () => [
  accRow({ic: 'cadeado', t: tc('seg.senha'), s: tc('seg.senha.s', {d: CT.sec.senha}), k: 'senha', b: tc('sg.trocar')}),
  accRow({ic: 'escudo', t: tc('seg.dois'), s: CT.sec.dois ? tc('seg.dois.on', {c: ME.cel}) : tc('seg.dois.off'), k: CT.sec.dois ? 'doisOff' : 'dois', b: tc(CT.sec.dois ? 'sg.desligar' : 'sg.ativar'), hot: !CT.sec.dois}),
  accRow({ic: 'email', t: tc('dados.email'), s: ME.email + ' · ' + tc('dados.conf'), k: 'email', b: tc('sg.trocar')}),
  accRow({ic: 'celular', t: tc('dados.cel'), s: ME.cel + ' · ' + tc('dados.conf'), k: 'cel', b: tc('sg.trocar')})
].join('');
function sessHTML() {
  const others = CT.sess.filter(s => !s.atual);
  return CT.sess.map(s => `<div class="li ct-ses"><span class="li-i">${ic(s.ic)}</span><span class="li-t"><b>${esc(s.dev)}</b><small>${esc(s.loc)} · <span class="tnum">${esc(s.q)}</span></small></span>
      <span class="li-r">${s.atual ? tag('info', tc('sg.sess.atual')) : btn(tc('sg.sess.enc'), {kind: 'ghost', size: 's', act: 'ctEnd', attrs: {'data-arg': s.id}, aria: tc('sg.sess.enc') + ': ' + s.dev})}</span></div>`).join('')
    + (others.length > 1 ? `<div class="ct-ses-all">${btn(tc('sg.sess.todas'), {kind: 'sec', size: 's', act: 'ctEnd', icon: 'sair', attrs: {'data-arg': 'all'}})}</div>` : '')
    + (!others.length ? `<p class="ct-ses-v">${ic('check-c', 'ic--xs')}${T('sg.sess.vazio')}</p>` : '');
}
const atvHTML = () => CT.atv.slice(0, 6).map(a => `<div class="li ct-atv-i"><span class="li-i">${ic(a.ic)}</span><span class="li-t"><b>${esc(a.t)}</b><small>${esc(a.s)}<span class="ct-atv-dm tnum"> · ${esc(a.d)}</span></small></span><span class="li-r ct-atv-d tnum">${esc(a.d)}</span></div>`).join('');

ACT.ctEnd = el => {
  const id = el.dataset.arg; const all = id === 'all'; const others = CT.sess.filter(s => !s.atual); const s = CT.sess.find(x => x.id === id);
  if (!all && !s) return;
  const body = all ? `<p class="ct-sh-p">${T('enc.all.s')}</p><div class="card ct-list">${others.map(o => `<div class="li"><span class="li-i">${ic(o.ic)}</span><span class="li-t"><b>${esc(o.dev)}</b><small>${esc(o.loc)} · <span class="tnum">${esc(o.q)}</span></small></span></div>`).join('')}</div>`
    : `<div class="card ct-rs-h">${kv(tc('enc.ap'), esc(s.dev))}${kv(tc('enc.loc'), esc(s.loc))}${kv(tc('enc.ult'), esc(s.q))}</div><p class="ct-sh-p">${T('enc.s')}</p>`;
  sheet(body, {title: tc(all ? 'enc.all.t' : 'enc.t'), id: 'ctEnc', cls: 'ct-sh',
    foot: btn(all ? tc('enc.all.b', {n: others.length}) : tc('enc.b'), {kind: 'mag', full: true, size: 'l', icon: 'sair', act: 'ctEndOk', attrs: {'data-arg': id}}) + cancelBtn()});
};
ACT.ctEndOk = el => {
  const id = el.dataset.arg; const s = CT.sess.find(x => x.id === id);
  if (id === 'all') { CT.sess = CT.sess.filter(x => x.atual); logAtv('sair', tc('atv.enc'), tc('sg.sess.todas')); toast(tc('enc.all.ok'), {icon: 'sair'}); }
  else if (s) { CT.sess = CT.sess.filter(x => x.id !== id); logAtv('sair', tc('atv.enc'), s.dev + ' · ' + s.loc); toast(tc('enc.ok', {d: s.dev}), {icon: 'sair'}); }
  closeSheet(); ctPaint();
  const box = $('#ctSess'); if (box) { box.tabIndex = -1; box.focus({preventScroll: true}); }
};

SCREENS.seguranca = {
  label: 'Seguridad de la cuenta', nav: 'menu', auth: 'Entra para ver la seguridad de tu cuenta.', asideLabel: 'Tu billetera',
  aside: () => asideCarteira(),
  render: () => `<nav class="crumb" aria-label="Ruta de navegación"><button data-go="perfil">${T('sg.crumb')}</button>${ic('seta-d', 'ic--xs')}<span aria-current="page">${T('sg.t').replace(/\.$/, '')}</span></nav>
    <header class="pg-head ct-head-c"><h1 class="pt">${T('sg.t')}</h1><p class="lede">${T('sg.s')}</p></header>
    <div id="ctSum">${sumHTML()}</div>
    <section aria-labelledby="ctAccT">${stitle({id: 'ctAccT', title: tc('sg.acesso')})}<p class="ct-sec-s">${T('sg.acesso.s')}</p><div class="card ct-list" id="ctAcc">${accHTML()}</div></section>
    <section aria-labelledby="ctSesT">${stitle({id: 'ctSesT', title: tc('sg.sess.t')})}<div class="card ct-list" id="ctSess">${sessHTML()}</div></section>
    <section aria-labelledby="ctAtvT">${stitle({id: 'ctAtvT', title: tc('sg.atv.t')})}<div class="card ct-list ct-atv" id="ctAtv">${atvHTML()}</div>
      <p class="ct-foot-n">${ic('info', 'ic--xs')}<span>${T('sg.atv.nota')} <button class="lnk ct-inl" data-act="chat">${T('sg.atv.chat')}</button></span></p></section>
    <section id="ctPzSec" aria-labelledby="ctPzT">${stitle({id: 'ctPzT', title: tc('sg.pz.t')})}<div data-ct-pz="">${pzBlock()}</div></section>
    ${age(tc('jr'))}`,
  init: (root, p) => {
    if (p === '2fa' && !CT.sec.dois) secFlow('dois');
    if (p === 'pausa') setTimeout(() => $('#ctPzSec')?.scrollIntoView({block: 'start'}), 40);
  }
};

/* repinta o que estiver na tela depois de uma troca */
function ctPaint() {
  const set = (id, html) => { const e = document.getElementById(id); if (e) e.innerHTML = html; };
  set('ctSum', sumHTML()); set('ctAcc', accHTML()); set('ctSess', sessHTML()); set('ctAtv', atvHTML());
  set('ctTip', tipHTML()); set('ctDados', dadosHTML()); set('ctSegL', segLinksHTML());
  set('ctNow', nowHTML());
}

/* ===== Limites e jogo responsável (assistente) ===== */
const WZ = ['dep', 'perda', 'tempo', 'lemb', 'rev'];
let wzI = 0;
const PERS = () => Object.keys(PER).map(k => ({k, n: tc('per.' + k)}));
const TMP = [30, 60, 120, 180, 240];
const cur = () => ({dep: S.lim.dep && S.lim.dep.val ? {per: S.lim.dep.per || 'dia', val: S.lim.dep.val} : null, perda: S.lim.perda, tempo: S.lim.tempo, lemb: S.lim.lemb});
const valOf = id => parseMoney($('#' + id)?.value);
function draft() {
  return {
    dep: isOn('ctDepOn') ? {per: chipOf('ctDepPer') || 'dia', val: valOf('ctDepVal')} : null,
    perda: isOn('ctPerOn') ? {per: chipOf('ctPerPer') || 'dia', val: valOf('ctPerVal')} : null,
    tempo: isOn('ctTmpOn') ? +(chipOf('ctTmpMin') || 60) : null,
    lemb: {ses: isOn('ctLemSes') ? +(chipOf('ctLemCada') || 60) : null, res: isOn('ctLemRes') ? (chipOf('ctLemFreq') || 'mes') : null, av: isOn('ctLemAv')}
  };
}
const daily = x => x == null ? Infinity : (typeof x === 'number' ? x : x.val / PER[x.per]);
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const looser = (a, b) => daily(b) > daily(a) + 1e-9;
const limTxt = x => x ? `${mxn(x.val)} ${perS(x.per)}` : tc('rev.sem');
const tmpTxt = x => x ? `${fmtMin(x)} ${perS('dia')}` : tc('rev.sem');
const lemTxt = L => { const a = []; if (L.ses) a.push(tc('rev.ses', {v: fmtMin(L.ses)})); if (L.res) a.push(tc('rev.res.' + L.res)); if (L.av) a.push(tc('rev.av')); return a.length ? a.join(' · ') : tc('rev.desl'); };

function nowHTML() {
  applyDue();
  const L = S.lim; const it = [];
  if (L.dep && L.dep.val) it.push(['depositar', tc('lm.now.dep', {v: mxn(L.dep.val), p: perS(L.dep.per)})]);
  if (L.perda) it.push(['grafico', tc('lm.now.perda', {v: mxn(L.perda.val), p: perS(L.perda.per)})]);
  if (L.tempo) it.push(['relogio', tc('lm.now.tempo', {v: fmtMin(L.tempo)})]);
  if (L.lemb && (L.lemb.ses || L.lemb.res || L.lemb.av)) it.push(['sino', tc('lm.now.lemb')]);
  const P = L.pend || {};
  const pend = Object.keys(P).map(k => {
    const v = P[k].v; const o = tc('lm.pend.' + k, {v: v == null ? tc('lm.pend.sem') : (k === 'tempo' ? `${fmtMin(v)} ${perS('dia')}` : `${mxn(v.val)} ${perS(v.per)}`)});
    const txt = tc('lm.pend', {o, d: fdt(new Date(P[k].ts))});
    return `<li class="ct-pend">${ic('relogio', 'ic--s')}<span><b class="lab">${T('lm.pend.k')}</b> <span class="tnum">${esc(txt)}</span></span><button class="lnk" data-act="ctPendX" data-arg="${k}" aria-label="${T('lm.pend.x.aria', {o})}">${T('lm.pend.x')}</button></li>`;
  }).join('');
  return `<div class="ct-now"><h2 class="lab ct-now-k">${T('lm.now')}</h2><ul class="ct-now-l">${it.length ? it.map(([i, s]) => `<li>${ic(i, 'ic--s')}<span class="tnum">${esc(s)}</span></li>`).join('') : `<li class="is-vazio">${T('lm.now.vazio')}</li>`}</ul>${pend ? `<ul class="ct-pends">${pend}</ul>` : ''}</div>`;
}
ACT.ctPendX = el => { delete S.lim.pend[el.dataset.arg]; persist(); ctPaint(); toast(tc('lm.pend.ok'), {icon: 'check-c'}); refocus(['#ctNow .ct-now-k']); };

function stepperHTML() {
  return `<ol class="ct-stp" aria-label="${T('wz.l')}">${WZ.map((k, j) => `<li><button class="ct-stp-b${j === wzI ? ' is-on' : ''}${j < wzI ? ' is-done' : ''}" data-act="ctWzGo" data-arg="${j}" ${j === wzI ? 'aria-current="step"' : ''} style="--k:${j}">
    <span class="ct-stp-bar" aria-hidden="true"></span><span class="ct-stp-l"><span class="ct-stp-n tnum" aria-hidden="true">${j + 1}</span>${T('wz.s.' + k)}</span></button></li>`).join('')}</ol>`;
}
const panel = (k, inner) => `<div class="ct-wz-p" data-step="${k}" ${k === WZ[wzI] ? '' : 'hidden'}>
  <div class="ct-wz-h"><span class="lab ct-wz-n tnum">${T('wz.n', {a: WZ.indexOf(k) + 1, b: WZ.length})}${k !== 'rev' ? ' · ' + T('wz.opc') : ''}</span><h2 class="ct-wz-t" tabindex="-1">${T(k + '.t')}</h2><p class="ct-wz-s">${T(k + '.s')}</p></div>${inner}</div>`;
const quick = id => `<div class="chips ct-quick" role="group" aria-label="${T('val.q')}">${[100, 250, 500, 1000].map(v => `<button class="chip" data-act="ctQuick" data-arg="${v}" data-for="${id}">${mxn0(v)}</button>`).join('')}</div>`;
const valField = (id, v) => field({id, label: tc('val.l'), prefix: '$', inputmode: 'decimal', mask: 'money', value: fmtV(v), placeholder: '0.00', enter: 'next'});

function wzPanels() {
  const c = cur(); const lem = S.lim.lemb || {};
  return panel('dep', `${toggle({id: 'ctDepOn', label: tc('dep.on'), desc: c.dep ? tc('dep.d1', {v: mxn(c.dep.val), p: perS(c.dep.per)}) : tc('dep.d0'), on: !!c.dep})}
      <div class="ct-cfg" id="ctDepOnCfg" ${c.dep ? '' : 'hidden'}>
        <div class="ct-g"><span class="fld-l">${T('per.l')}</span>${seg(PERS(), {name: 'ctDepPer', active: c.dep ? c.dep.per : 'dia', label: tc('per.l')})}</div>
        ${valField('ctDepVal', c.dep && c.dep.val)}${quick('ctDepVal')}
        <p class="ct-used">${ic('depositar', 'ic--xs')}<span class="tnum">${T('dep.usado', {v: mxn(S.lim.dep.usado || 0)})}</span></p>
      </div><p class="ct-rule" id="ctDepRule" aria-live="polite"></p>`)
    + panel('perda', `<div class="ct-explain"><h3 class="lab">${T('perda.o')}</h3><p>${T('perda.o.s')}</p>
        <div class="ct-eq" role="img" aria-label="${T('perda.eq.aria', EQ())}"><span><small>${T('perda.eq.a')}</small><b class="tnum">${EQ().a}</b></span><i aria-hidden="true">−</i><span><small>${T('perda.eq.b')}</small><b class="tnum">${EQ().b}</b></span><i aria-hidden="true">=</i><span class="is-r"><small>${T('perda.eq.c')}</small><b class="tnum">${EQ().c}</b></span></div>
        <p class="ct-explain-f">${T('perda.fim')}</p></div>
      ${toggle({id: 'ctPerOn', label: tc('perda.on'), desc: c.perda ? tc('perda.d1', {v: mxn(c.perda.val), p: perS(c.perda.per)}) : tc('perda.d0'), on: !!c.perda})}
      <div class="ct-cfg" id="ctPerOnCfg" ${c.perda ? '' : 'hidden'}>
        <div class="ct-g"><span class="fld-l">${T('per.l')}</span>${seg(PERS(), {name: 'ctPerPer', active: c.perda ? c.perda.per : 'semana', label: tc('per.l')})}</div>
        ${valField('ctPerVal', c.perda && c.perda.val)}${quick('ctPerVal')}
      </div><p class="ct-rule" id="ctPerRule" aria-live="polite"></p>`)
    + panel('tempo', `${toggle({id: 'ctTmpOn', label: tc('tempo.on'), desc: c.tempo ? tc('tempo.d1', {v: fmtMin(c.tempo)}) : tc('tempo.d0'), on: !!c.tempo})}
      <div class="ct-cfg" id="ctTmpOnCfg" ${c.tempo ? '' : 'hidden'}>
        <div class="ct-g"><span class="fld-l">${T('tempo.l')}</span>${seg(TMP.map(m => ({k: String(m), n: fmtMin(m)})), {name: 'ctTmpMin', active: String(c.tempo || 60), label: tc('tempo.l')})}</div>
        <p class="ct-used">${ic('relogio', 'ic--xs')}<span>${T('tempo.fim')}</span></p>
      </div><p class="ct-rule" id="ctTmpRule" aria-live="polite"></p>`)
    + panel('lemb', `<div class="ct-lembs">
        ${toggle({id: 'ctLemSes', label: tc('lemb.ses'), desc: tc('lemb.ses.d'), on: !!lem.ses})}
        <div class="ct-cfg" id="ctLemSesCfg" ${lem.ses ? '' : 'hidden'}><div class="ct-g"><span class="fld-l">${T('lemb.cada')}</span>${seg([30, 60, 120].map(m => ({k: String(m), n: fmtMin(m)})), {name: 'ctLemCada', active: String(lem.ses || 60), label: tc('lemb.cada')})}</div></div>
        ${toggle({id: 'ctLemRes', label: tc('lemb.res'), desc: tc('lemb.res.d'), on: !!lem.res})}
        <div class="ct-cfg" id="ctLemResCfg" ${lem.res ? '' : 'hidden'}><div class="ct-g"><span class="fld-l">${T('lemb.freq')}</span>${seg([{k: 'sem', n: tc('lemb.f.sem')}, {k: 'mes', n: tc('lemb.f.mes')}], {name: 'ctLemFreq', active: lem.res || 'mes', label: tc('lemb.freq')})}</div></div>
        ${toggle({id: 'ctLemAv', label: tc('lemb.av'), desc: tc('lemb.av.d'), on: !!lem.av})}
      </div>`)
    + panel('rev', `<div class="ct-rev" id="ctRev"></div>`);
}
function wzHTML() {
  return `<section class="ct-wz" id="ctWz" aria-labelledby="ctWzL"><h2 class="sr" id="ctWzL">${T('wz.l')}</h2>
    <div id="ctWzStp">${stepperHTML()}</div>
    <div class="card ct-wz-card" id="ctWzBody">${wzPanels()}
      <div class="ct-wz-ft">${btn(tc('voltar'), {kind: 'ghost', icon: 'seta-e', act: 'ctWzBack', id: 'ctWzBack', attrs: {hidden: wzI === 0}})}${btn(tc('continuar'), {kind: 'luz', size: 'l', act: 'ctWzNext', id: 'ctWzNext', iconR: 'seta-d'})}</div></div>
  </section>`;
}

/* regra viva (diminuir vale na hora; aumentar ou tirar espera a carência) */
function ruleFor(kind) {
  const c = cur()[kind], d = draft()[kind];
  const v = d ? (kind === 'tempo' ? fmtMin(d) : mxn(d.val)) : '', p = d ? (kind === 'tempo' ? perS('dia') : perS(d.per)) : '';
  const o = kind === 'tempo' ? tmpTxt(c) : limTxt(c);
  if (!d) return c ? {k: 'pend', t: tc('rule.off', {d: fdt(carencia()), o})} : {k: 'base', t: tc('rule.base')};
  if (kind !== 'tempo' && !d.val) return {k: 'base', t: tc('rule.base')};
  if (same(c, d)) return {k: 'base', t: tc('rule.base')};
  if (looser(c, d)) return {k: 'pend', t: tc('rule.up', {v, p, d: fdt(carencia()), o})};
  return {k: 'now', t: tc('rule.down', {v, p})};
}
function wzLive() {
  const D = draft();
  const desc = (id, txt) => { const s = $('#' + id + ' .tg-t small'); if (s) s.textContent = txt; };
  desc('ctDepOn', D.dep && D.dep.val ? tc('dep.d1', {v: mxn(D.dep.val), p: perS(D.dep.per)}) : (D.dep ? tc('val.falta') : tc('dep.d0')));
  desc('ctPerOn', D.perda && D.perda.val ? tc('perda.d1', {v: mxn(D.perda.val), p: perS(D.perda.per)}) : (D.perda ? tc('val.falta') : tc('perda.d0')));
  desc('ctTmpOn', D.tempo ? tc('tempo.d1', {v: fmtMin(D.tempo)}) : tc('tempo.d0'));
  [['dep', 'ctDepRule'], ['perda', 'ctPerRule'], ['tempo', 'ctTmpRule']].forEach(([k, id]) => {
    const e = document.getElementById(id); if (!e) return; const r = ruleFor(k);
    e.className = 'ct-rule is-' + r.k; e.innerHTML = ic(r.k === 'pend' ? 'relogio' : r.k === 'now' ? 'check-c' : 'info', 'ic--s') + `<span>${esc(r.t)}</span>`;
  });
}
function revHTML() {
  const a = cur(), b = draft(); const d = fdt(carencia());
  const rows = [['dep', 0, limTxt(a.dep), limTxt(b.dep), a.dep, b.dep], ['perda', 1, limTxt(a.perda), limTxt(b.perda), a.perda, b.perda],
    ['tempo', 2, tmpTxt(a.tempo), tmpTxt(b.tempo), a.tempo, b.tempo], ['lemb', 3, lemTxt(a.lemb || {}), lemTxt(b.lemb), 0, 0]];
  let n = 0;
  const html = rows.map(([k, j, x, y, ca, cb]) => {
    const eq = k === 'lemb' ? same(a.lemb, b.lemb) || x === y : same(ca, cb); if (!eq) n++;
    const pend = !eq && k !== 'lemb' && looser(ca, cb);
    return `<div class="ct-rev-r${eq ? '' : ' is-chg'}"><div class="ct-rev-h"><h3 class="lab">${T('rev.' + k)}</h3><button class="lnk" data-act="ctWzGo" data-arg="${j}" aria-label="${T('rev.editar', {x: tc('rev.' + k).toLowerCase()})}">${T('editar')}</button></div>
      <p class="ct-rev-v">${eq ? `<b class="tnum">${esc(y)}</b><small>${T('rev.igual')}</small>` : `<s class="tnum">${esc(x)}</s>${ic('ir', 'ic--xs')}<b class="tnum">${esc(y)}</b>`}</p>
      ${eq ? '' : `<p class="ct-rev-q${pend ? ' is-pend' : ''}">${ic(pend ? 'relogio' : 'check-c', 'ic--xs')}<span class="tnum">${pend ? T('rev.depois', {d}) : T('rev.agora')}</span></p>`}</div>`;
  }).join('');
  return html + (n ? '' : `<p class="note">${ic('info')}<span>${T('rev.nada')}</span></p>`);
}
function wzShow(i, focus = true) {
  wzI = Math.max(0, Math.min(WZ.length - 1, i));
  $$('.ct-wz-p').forEach(p => { p.hidden = p.dataset.step !== WZ[wzI]; });
  if (WZ[wzI] === 'rev') $('#ctRev').innerHTML = revHTML();
  $('#ctWzStp').innerHTML = stepperHTML();
  const back = $('#ctWzBack'); if (back) back.hidden = wzI === 0;
  const next = $('#ctWzNext span'); if (next) next.textContent = tc(WZ[wzI] === 'rev' ? 'salvar' : 'continuar');
  const nb = $('#ctWzNext'); if (nb) nb.querySelector('.ic')?.classList.toggle('ct-hide', WZ[wzI] === 'rev');
  if (focus) {
    const h = $(`.ct-wz-p[data-step="${WZ[wzI]}"] .ct-wz-t`); if (h) h.focus({preventScroll: true});
    const w = $('#ctWz'); const top = w.getBoundingClientRect().top;
    if (top < 0 || top > innerHeight * .6) w.scrollIntoView({block: 'start', behavior: smooth()});
  }
}
function wzValid() {
  const k = WZ[wzI];
  const chk = (on, id) => { if (!isOn(on)) return true; const i = $('#' + id); if (parseMoney(i.value) > 0) return true; setErr(i, tc('val.e')); i.focus(); return false; };
  if (k === 'dep') return chk('ctDepOn', 'ctDepVal');
  if (k === 'perda') return chk('ctPerOn', 'ctPerVal');
  return true;
}
/* antes de Revisar/Salvar, confere os passos com valor (um passo pode ter ficado ligado e vazio) */
function wzValidAll() {
  for (const [k, on, id] of [['dep', 'ctDepOn', 'ctDepVal'], ['perda', 'ctPerOn', 'ctPerVal']]) {
    if (isOn(on) && !(parseMoney($('#' + id).value) > 0)) { wzShow(WZ.indexOf(k), false); const i = $('#' + id); setErr(i, tc('val.e')); i.focus(); return false; }
  }
  return true;
}
ACT.ctWzNext = () => { if (!wzValid()) return; if (wzI + 1 >= WZ.length - 1 && !wzValidAll()) return; if (WZ[wzI] === 'rev') return wzSave(); wzShow(wzI + 1); };
ACT.ctWzBack = () => wzShow(wzI - 1);
ACT.ctWzGo = el => { const j = +el.dataset.arg; if (j === wzI) return; if (j > wzI && !wzValid()) return; if (WZ[j] === 'rev' && !wzValidAll()) return; wzShow(j); };
ACT.ctQuick = el => { const i = $('#' + el.dataset.for); if (!i) return; i.value = fmtV(+el.dataset.arg); clearErr(i); wzLive(); };
['ctDepPer', 'ctPerPer', 'ctTmpMin'].forEach(n => { ON.chip[n] = () => wzLive(); });

function wzSave() {
  const a = cur(), b = draft(); const ts = +carencia(); const P = S.lim.pend ||= {}; let n = 0;
  const apply = (k, set) => {
    if (same(a[k], b[k])) { if (P[k]) { delete P[k]; n++; } return; }
    n++;
    if (looser(a[k], b[k])) P[k] = {v: b[k], ts}; else { delete P[k]; set(b[k]); }
  };
  apply('dep', v => { S.lim.dep.per = v.per; S.lim.dep.val = v.val; });
  apply('perda', v => { S.lim.perda = v; });
  apply('tempo', v => { S.lim.tempo = v; });
  if (!same(a.lemb, b.lemb)) { S.lim.lemb = b.lemb; n++; }
  if (!n) { toast(tc('nada'), {icon: 'info'}); return; }
  persist(); logAtv('limite', tc('atv.lim'));
  toast(tc('salvo'), {icon: 'check-c'});
  $('#ctNow').innerHTML = nowHTML();
  $('#ctWzStp').innerHTML = `<ol class="ct-stp is-done" aria-label="${T('wz.l')}">${WZ.map((k, j) => `<li><span class="ct-stp-b is-done" style="--k:${j}"><span class="ct-stp-bar" aria-hidden="true"></span><span class="ct-stp-l"><span class="ct-stp-n tnum" aria-hidden="true">${j + 1}</span>${T('wz.s.' + k)}</span></span></li>`).join('')}</ol>`;
  $('#ctWzBody').innerHTML = `<div class="ct-wz-ok">${pedestal('maestro', {h: 150, cls: 'ct-ok-ped'})}<div class="ct-wz-okt">
      <h2 class="ct-wz-t" tabindex="-1">${T('ok.t')}</h2><p class="ct-fala">${T('ok.lfala')}</p>
      <p class="ct-ok-s">${Object.keys(S.lim.pend || {}).length ? T('ok.pend', {d: fdt(new Date(Math.min(...Object.values(S.lim.pend).map(x => x.ts))))}) : T('ok.agora')}</p>
      <div class="ct-wz-okb">${btn(tc('ok.dep'), {kind: 'sec', go: 'deposito', icon: 'depositar'})}${btn(tc('ok.denovo'), {kind: 'ghost', act: 'ctWzReset', icon: 'editar'})}</div></div></div>`;
  $('#ctWzBody .ct-wz-t').focus({preventScroll: true});
  const w = $('#ctWz'); if (w.getBoundingClientRect().top < 0) w.scrollIntoView({block: 'start', behavior: smooth()});
}
ACT.ctWzReset = () => { wzI = 0; const w = $('#ctWz'); w.outerHTML = wzHTML(); wzLive(); wzShow(0); };

SCREENS.limites = {
  label: 'Límites y juego responsable', nav: 'menu', auth: 'Entra para definir tus límites.', luz: true,
  render: p => { wzI = 0; return `${acctNav('limites')}
    ${p === 'dep' ? `<nav class="crumb" aria-label="Ruta de navegación"><button data-go="deposito">${ic('seta-e', 'ic--xs')}${T('lm.dep.back')}</button></nav>` : ''}
    <header class="pg-head"><span class="lab ct-k">${ic('passo', 'ic--xs')}${T('lm.k')}</span><h1 class="pt">${T('lm.t')}</h1><p class="lede">${T('lm.s')}</p></header>
    <div id="ctNow" aria-live="polite">${nowHTML()}</div>
    <div class="ct-lm">
      <div class="ct-lm-main">${wzHTML()}</div>
      <div class="ct-lm-side">
        <section aria-labelledby="ctPzT">${stitle({id: 'ctPzT', eyebrow: tc('pz.k'), title: tc('pz.h')})}<div data-ct-pz="art">${pzBlock({art: true})}</div></section>
        <section aria-labelledby="ctExtT">${stitle({id: 'ctExtT', title: tc('ext.t')})}${extHelp()}</section>
        ${age(tc('jr'))}
      </div>
    </div>`; },
  init: (root, p) => {
    wzLive();
    const onIn = e => { const m = e.target.dataset?.mask; if (m && MASK[m]) e.target.value = MASK[m](e.target.value); if (e.target.closest('#ctWz')) wzLive(); };
    root.addEventListener('input', onIn);
    if (p === 'dep') setTimeout(() => { $('#ctWz')?.scrollIntoView({block: 'start'}); const i = $('#ctDepVal'); if (i && !i.closest('[hidden]')) i.focus({preventScroll: true}); }, 80);
  }
};

/* interruptores do módulo (o core troca aria-checked e avisa no barramento) */
bus.on('switch', ({id, on}) => {
  if (!id || !id.startsWith('ct')) return;
  const cfg = document.getElementById(id + 'Cfg'); if (cfg) cfg.hidden = !on;
  if (id === 'ctPrefOf' || id === 'ctPrefSms') {
    const k = id === 'ctPrefOf' ? 'of' : 'sms'; CT.prefs[k] = on;
    toast(tc('pref.' + k + (on ? '.on' : '.off')), {icon: on ? 'email' : 'info'});
    return;
  }
  if (S.cur === 'limites') wzLive();
});

/* ===== Central de ajuda + chat ===== */
const ACATS = [{k: 'dep', ic: 'depositar', n: 'Depósitos'}, {k: 'saq', ic: 'saque', n: 'Retiros'}, {k: 'bon', ic: 'bono', n: 'Bonos'}, {k: 'con', ic: 'perfil', n: 'Cuenta'}, {k: 'jr', ic: 'limite', n: 'Juego responsable'}];
const ARTS = [
  {id: 'pix', c: 'dep', kw: 'spei clabe transferencia referencia banco depositar deposito', go: 'deposito'}, {id: 'depnao', c: 'dep', kw: 'deposito no aparece llego saldo spei oxxo ticket comprobante'},
  {id: 'depval', c: 'dep', kw: 'minimo maximo monto deposito tope'}, {id: 'terc', c: 'dep', kw: 'otra persona tercero cuenta curp nombre'},
  {id: 'oxxo', c: 'dep', kw: 'oxxo efectivo tienda referencia pago codigo barras deposito', go: 'deposito'}, {id: 'tarj', c: 'dep', kw: 'tarjeta debito credito visa mastercard deposito', go: 'deposito'},
  {id: 'saq', c: 'saq', kw: 'retirar retiro spei clabe tarjeta debito cuenta', go: 'saque'}, {id: 'saqtempo', c: 'saq', kw: 'tiempo plazo retiro tarda cuando'},
  {id: 'saqan', c: 'saq', kw: 'revision retiro documento'},
  {id: 'bon', c: 'bon', kw: 'bono activar codigo promocional', go: 'bonus'}, {id: 'bonreg', c: 'bon', kw: 'rollover reglas bono apostar'},
  {id: 'verif', c: 'con', kw: 'verificar identidad selfie ine documento kyc'}, {id: 'senha', c: 'con', kw: 'contrasena olvide recuperar'},
  {id: 'dados', c: 'con', kw: 'correo email celular cambiar datos', go: 'seguranca'},
  {id: 'lim', c: 'jr', kw: 'limite deposito perdida tiempo', go: 'limites'}, {id: 'pausa', c: 'jr', kw: 'pausa autoexclusion parar dejar', go: 'limites'},
  {id: 'perda', c: 'jr', kw: 'perdida limite'}
];
const TOP = ['pix', 'saqtempo', 'depnao', 'bon', 'verif', 'lim'];
const aCat = k => ACATS.find(c => c.k === k);
const artLi = a => li({icon: aCat(a.c).ic, title: tc('a.' + a.id + '.t'), sub: aCat(a.c).n, act: 'ctArt', arg: a.id});
let ajMode = {m: 'top'};
function artsHTML() {
  const {m, k, q} = ajMode; let list, title, more = '';
  if (m === 'cat') { list = ARTS.filter(a => a.c === k); title = aCat(k).n + '.'; }
  else if (m === 'q') {
    const w = norm(q).split(/\s+/).filter(Boolean);
    list = ARTS.filter(a => { const h = norm(tc('a.' + a.id + '.t') + ' ' + a.kw + ' ' + aCat(a.c).n); return w.every(x => h.includes(x)); });
    title = tc('aj.res.t', {q});
  } else { list = TOP.map(id => ARTS.find(a => a.id === id)); title = tc('aj.top.t'); }
  if (m !== 'top') more = tc('aj.ver.top');
  const head = stitle({id: 'ctArtT', title, more, moreAct: more ? 'ctArtTop' : null});
  const count = m === 'q' && list.length ? `<p class="ct-sec-s tnum">${list.length === 1 ? T('aj.res.1') : T('aj.res.n', {n: list.length})}</p>` : '';
  if (!list.length) return head + `<div class="card">${empty({who: 'maestro', title: tc('aj.vazio.t'), text: tc('aj.vazio.s', {q}), action: btn(tc('aj.chat.b'), {kind: 'mag', icon: 'chat', act: 'ctChat'})})}</div>`;
  return head + count + `<div class="card ct-list ct-arts">${list.map(artLi).join('')}</div>`;
}
function ajPaint(scroll) {
  const box = $('#ctArts'); if (!box) return; box.innerHTML = artsHTML();
  $$('.ct-cat').forEach(b => b.setAttribute('aria-pressed', ajMode.m === 'cat' && ajMode.k === b.dataset.arg));
  if (scroll) { const top = box.getBoundingClientRect().top; if (top < 60 || top > innerHeight * .7) box.scrollIntoView({block: 'start', behavior: smooth()}); }
}
ACT.ctCat = el => { const k = el.dataset.arg; ajMode = ajMode.m === 'cat' && ajMode.k === k ? {m: 'top'} : {m: 'cat', k}; const q = $('#ctQ'); if (q) q.value = ''; ajPaint(true); };
ACT.ctArtTop = () => { ajMode = {m: 'top'}; const q = $('#ctQ'); if (q) q.value = ''; ajPaint(false); };
ACT.ctArt = el => {
  const a = ARTS.find(x => x.id === el.dataset.arg); if (!a) return; const c = aCat(a.c);
  const paras = tc('a.' + a.id + '.b', ARTV()).split('\n').map(p => `<p>${esc(p)}</p>`).join('');
  sheet(`<span class="lab ct-art-k">${ic(c.ic, 'ic--xs')}${esc(c.n)}</span><div class="ct-art">${paras}</div>
    ${a.go ? `<div>${btn(tc('a.' + a.id + '.g'), {kind: 'sec', go: a.go, iconR: 'seta-d'})}</div>` : ''}
    <div class="ct-util" id="ctUtil"><span>${T('art.util')}</span><div class="ct-util-b">${btn(tc('art.sim'), {kind: 'sec', size: 's', act: 'ctUtil', attrs: {'data-arg': '1'}})}${btn(tc('art.nao'), {kind: 'sec', size: 's', act: 'ctUtil', attrs: {'data-arg': '0'}})}</div></div>`,
  {title: tc('a.' + a.id + '.t'), id: 'ctArtSh', cls: 'ct-sh', foot: btn(tc('art.chat'), {kind: 'mag', full: true, icon: 'chat', act: 'ctChat'})});
};
/* artigos sem botão de destino próprio não têm a chave .g; evita aviso de texto faltando */
ARTS.forEach(a => { if (a.go && TXT.ct['a.' + a.id + '.g'] == null) TXT.ct['a.' + a.id + '.g'] = aCat(a.c).n; });
ACT.ctUtil = el => { const u = $('#ctUtil'); if (u) { u.innerHTML = `<p class="ct-util-ok" role="status">${ic('check-c', 'ic--s')}${T(el.dataset.arg === '1' ? 'art.obg' : 'art.obg.nao')}</p>`; } };

const CHAT = {stage: 0, pos: 2, msgs: [], topic: null, open: false, replies: 0, waitNote: false, agent: 'Ana'};
const TOPICS = ['dep', 'saq', 'bon', 'con', 'jr', 'out'];
function chatCard() {
  return `<section class="ct-chatc" aria-labelledby="ctChatT">
    <div class="ct-chatc-tx"><span class="ct-on"><i aria-hidden="true"></i>${T('aj.chat.on')}</span><h2 class="ct-chatc-t" id="ctChatT">${T('aj.chat.t')}</h2><p>${T('aj.chat.s')}</p>
      ${btn(tc(CHAT.stage ? 'aj.chat.voltar' : 'aj.chat.b'), {kind: 'mag', icon: 'chat', act: 'ctChat', id: 'ctChatB'})}</div>
    <div class="ct-chatc-art">${pedestal('maestro', {h: 156})}</div>
  </section>`;
}
const msgHTML = m => m.who === 'sys' ? `<p class="ct-m ct-m--sys">${esc(m.txt)}</p>`
  : m.who === 'me' ? `<div class="ct-m ct-m--me"><p>${esc(m.txt)}</p><small class="tnum">${T('ch.voce')} · ${m.at}</small></div>`
  : `<div class="ct-m ct-m--ag"><span class="ct-m-av" aria-hidden="true">${esc(CHAT.agent[0])}</span><div><p>${esc(m.txt)}</p><small class="tnum">${esc(CHAT.agent)} · ${m.at}</small></div></div>`;
function qHTML() {
  if (CHAT.stage >= 2) return `<div class="ct-q-in is-on"><span class="ct-m-av ct-m-av--l" aria-hidden="true">${esc(CHAT.agent[0])}</span><div><h3>${T('ch.on', {a: CHAT.agent})}</h3><p>${T('ch.on.s')}</p></div></div>`;
  return `<div class="ct-q-in"><b class="ct-q-n tnum" aria-hidden="true">${CHAT.pos}.º</b><div><h3>${T('ch.fila', {n: CHAT.pos})}</h3><p>${T('ch.fila.s')}</p></div></div>`;
}
const tpHTML = () => CHAT.topic ? '' : `<p class="lab ct-tp-k">${T('ch.tema')}</p><div class="chips">${TOPICS.map(k => `<button class="chip" data-act="ctChTp" data-arg="${k}">${T('ch.tp.' + k)}</button>`).join('')}</div>`;
function chatPush(m) {
  m.at = hm(new Date()); CHAT.msgs.push(m);
  const log = $('#ctChLog'); if (log) { log.insertAdjacentHTML('beforeend', msgHTML(m)); chatScroll(); }
}
function chatScroll() { const bd = $('#ctChat .sh-bd'); if (bd) bd.scrollTo({top: bd.scrollHeight, behavior: smooth()}); }
function chatPaintQ() { const q = $('#ctChQ'); if (q) q.innerHTML = qHTML(); const b = $('#ctChatB span'); if (b) b.textContent = tc('aj.chat.voltar'); }
function agentSay(key, ms = 1100) { setTimeout(() => chatPush({who: 'ag', txt: tc(key)}), ms); }
function chatStart() {
  CHAT.stage = 1; CHAT.pos = 2; chatPush({who: 'sys', txt: tc('ch.entrou')});
  setTimeout(() => { CHAT.pos = 1; chatPaintQ(); }, 2600);
  setTimeout(() => {
    CHAT.stage = 2; chatPaintQ();
    chatPush({who: 'sys', txt: tc('ch.at', {a: CHAT.agent})});
    chatPush({who: 'ag', txt: S.in ? tc('ch.oi', {n: ME.primeiro, a: CHAT.agent}) : tc('ch.oi.out', {a: CHAT.agent})});
    if (CHAT.topic) agentSay('ch.r.' + CHAT.topic, 900);
    if (!CHAT.open) toast(tc('ch.toast', {a: CHAT.agent}), {icon: 'chat'});
  }, 5200);
}
function chatOpen() {
  const first = !CHAT.stage;
  const el = sheet(`<div class="ct-chat"><div class="ct-q" id="ctChQ" aria-live="polite">${qHTML()}</div>
      <div class="ct-log" id="ctChLog" role="log" aria-live="polite" aria-label="${T('ch.log')}">${CHAT.msgs.map(msgHTML).join('')}</div>
      <div class="ct-tp" id="ctChTp">${tpHTML()}</div></div>`,
    {title: tc('ch.t'), id: 'ctChat', cls: 'ct-chat-sh sh--full',
      foot: `<form class="ct-cmp" id="ctChF" novalidate><label class="sr" for="ctChMsg">${T('ch.msg.l')}</label><div class="fld-box"><input id="ctChMsg" type="text" autocomplete="off" placeholder="${T('ch.msg.ph')}" enterkeyhint="send" aria-describedby="ctChMsg-e"></div>${btn('', {kind: 'mag', type: 'submit', icon: 'ir', title: tc('ch.env')})}</form>
        <p class="ct-cmp-n" id="ctChMsg-e" aria-live="polite">${T('ch.rodape')}</p>`,
      onClose: () => { CHAT.open = false; if (S.cur === 'ajuda' && S.param === 'chat') { history.replaceState(null, '', '#ajuda'); S.param = ''; } }});
  CHAT.open = true;
  if (first) chatStart();
  const f = el.querySelector('#ctChF'), inp = el.querySelector('#ctChMsg');
  f.addEventListener('submit', e => {
    e.preventDefault(); const v = inp.value.trim(); const n = el.querySelector('#ctChMsg-e');
    if (!v) { n.textContent = tc('ch.vazio'); inp.focus(); return; }
    n.textContent = tc('ch.rodape'); inp.value = ''; chatPush({who: 'me', txt: v});
    if (CHAT.stage < 2) { if (!CHAT.waitNote) { CHAT.waitNote = true; chatPush({who: 'sys', txt: tc('ch.aguarde')}); } return; }
    agentSay(CHAT.replies++ ? 'ch.r.gen2' : 'ch.r.gen');
  });
  setTimeout(chatScroll, 40);
}
ACT.ctChat = () => chatOpen();
ACT.ctChTp = el => {
  const k = el.dataset.arg; CHAT.topic = k; const tp = $('#ctChTp'); if (tp) tp.innerHTML = '';
  chatPush({who: 'me', txt: tc('ch.u.tp', {t: tc('ch.tp.' + k).toLowerCase()})});
  if (CHAT.stage >= 2) agentSay('ch.r.' + k, 900);
  $('#ctChMsg')?.focus({preventScroll: true});
};

SCREENS.ajuda = {
  label: 'Centro de ayuda', nav: 'menu',
  render: () => { ajMode = {m: 'top'}; return `
    <header class="pg-head"><h1 class="pt">${T('aj.t')}</h1><p class="lede">${T('aj.s')}</p></header>
    <div class="ct-ajg">
    <div class="ct-ajl">
    <form class="ct-srch" role="search" id="ctSrch"><label class="sr" for="ctQ">${T('aj.busca.l')}</label>
      <div class="fld-box">${ic('busca')}<input id="ctQ" name="q" type="search" placeholder="${T('aj.busca.ph')}" autocomplete="off" enterkeyhint="search"></div>${btn(tc('aj.busca.b'), {kind: 'mag', type: 'submit'})}</form>
    <section class="ct-ajcat" aria-labelledby="ctCatT">${stitle({id: 'ctCatT', title: tc('aj.cat.t')})}
      <div class="ct-cats">${ACATS.map(c => { const n = ARTS.filter(a => a.c === c.k).length; return `<button class="ct-cat" data-act="ctCat" data-arg="${c.k}" aria-pressed="false"><span class="ct-cat-i">${ic(c.ic)}</span><b>${esc(c.n)}</b><small class="tnum">${T('aj.cat.n', {n})}</small></button>`; }).join('')}</div></section>
    <section class="ct-aj-main" id="ctArts" aria-labelledby="ctArtT">${artsHTML()}</section>
    </div>
    <div class="ct-ajr">
    ${chatCard()}
    <section class="ct-ajcan" aria-labelledby="ctCanT">${stitle({id: 'ctCanT', title: tc('aj.can.t')})}<div class="card ct-list">
      ${li({icon: 'email', title: tc('aj.mail'), sub: tc('aj.mail.s'), attrs: {'data-copy': tc('aj.mail.v'), 'data-ok': tc('aj.mail.ok')}, right: ic('copiar', 'ic--s')})}
      ${li({icon: 'limite', title: tc('aj.lim'), sub: tc('aj.lim.s'), go: 'limites', auth: tc('aj.lim.motivo')})}
      ${li({icon: 'escudo', title: tc('aj.seg'), sub: tc('aj.seg.s'), go: 'seguranca', auth: tc('aj.seg.motivo')})}</div></section>
    <section class="ct-ajext" aria-labelledby="ctExtT">${stitle({id: 'ctExtT', title: tc('ext.t')})}${extHelp()}</section>
    </div>
    </div>`; },
  init: (root, p) => {
    const f = root.querySelector('#ctSrch'), q = f.querySelector('#ctQ'); let tmr = 0;
    const run = scroll => { const v = q.value.trim(); ajMode = v ? {m: 'q', q: v} : {m: 'top'}; ajPaint(scroll); };
    f.addEventListener('submit', e => { e.preventDefault(); run(true); });
    q.addEventListener('input', () => { clearTimeout(tmr); tmr = setTimeout(() => run(false), 220); });
    if (p === 'chat') chatOpen();
    return () => clearTimeout(tmr);
  }
};
})();
