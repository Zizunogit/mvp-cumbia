/* data.js · datos de demostración (base Dev/UX §8), mercado México (MXN, CURP, SPEI). Todo aquí es ejemplo de prototipo. */
const ME = {
  nome:'Guillermo Pérez', primeiro:'Guillermo', id:'595485125466', nivel:'Bronce', nivelN:1, xp:1240, xpProx:2000,
  curp:'PEGG910314HDF••••07', cel:'+52 55 •••• 0658', email:'guille••••@email.com', nasc:'14/03/1991', desde:'08/2025'
};
const VIP_NIVEIS = [
  {n:1,nome:'Bronce',xp:0,tone:'noite'},{n:2,nome:'Plata',xp:2000,tone:'blanca'},{n:3,nome:'Platino',xp:6000,tone:'rosa'},
  {n:4,nome:'Diamante',xp:15000,tone:'magenta'},{n:5,nome:'Maestro',xp:40000,tone:'magenta'}
];

/* juegos · 6 del wireframe + originales de la casa con el elenco del manual */
const GAMES = [
  {id:'fortune-dragon',n:'Fortune Dragon',p:'TaDa Gaming',t:'slots',rtp:'96.50%',img:'g/fortune-dragon'},
  {id:'hot-rio-samba',n:'Hot Rio Samba',p:'Evoplay',t:'slots',rtp:'96.00%',img:'g/hot-rio-samba'},
  {id:'magic-scroll',n:'Magic Scroll',p:'CP Games',t:'slots',rtp:'96.30%',img:'g/magic-scroll'},
  {id:'smoking-dragon',n:'Smoking Dragon',p:'Hacksaw Gaming',t:'slots',rtp:'96.20%',img:'g/smoking-dragon'},
  {id:'yo-dragon',n:'Yo Dragon',p:'Popok Gaming',t:'slots',rtp:'96.10%',img:'g/yo-dragon'},
  {id:'fortune-panda',n:'Fortune Panda',p:'Popok Gaming',t:'slots',rtp:'96.40%',img:'g/fortune-panda'},
  {id:'tigre-pista',n:'Tigre de la Pista',p:'Cumbia Originales',t:'slots',rtp:'96.30%',img:'g/tigre-pista',host:'tigre',casa:1},
  {id:'salto-conejo',n:'El Salto del Conejo',p:'Cumbia Originales',t:'crash',rtp:'97.00%',img:'g/salto-conejo',host:'conejo',casa:1},
  {id:'multiplica-buey',n:'Multiplica Buey',p:'Cumbia Originales',t:'crash',rtp:'96.80%',img:'g/multiplica-buey',host:'buey',casa:1},
  {id:'escada-maestro',n:'La Escalera del Maestro',p:'Cumbia Originales',t:'ladders',rtp:'96.60%',img:'g/escada-maestro',host:'maestro',casa:1},
  {id:'coro-raton',n:'El Coro del Ratón',p:'Cumbia Originales',t:'slots',jack:1,rtp:'95.90%',img:'g/coro-raton',host:'raton',casa:1},
  {id:'trovao-zeus',n:'El Trueno de Zeus',p:'Cumbia Originales',t:'slots',jack:1,rtp:'96.10%',img:'g/trovao-zeus',host:'zeus',casa:1},
  {id:'dragon-neon',n:'Dragón Neón',p:'Cumbia Originales',t:'slots',rtp:'96.20%',img:'g/dragon-neon',host:'dragon',casa:1},
  {id:'mao-panda',n:'La Mano del Panda',p:'Cumbia Originales',t:'mesa',rtp:'99.40%',img:'g/mao-panda',host:'panda',casa:1},
  {id:'bingo-oso',n:'Bingo del Oso',p:'Cumbia Originales',t:'bingo',rtp:'95.00%',img:'g/bingo-oso',host:'oso',casa:1},
  {id:'pesca-mapache',n:'La Pesca del Mapache',p:'Cumbia Originales',t:'pesca',rtp:'96.50%',img:'g/pesca-mapache',host:'mapache',casa:1},
  {id:'roleta-pista',n:'Ruleta de la Pista',p:'Cumbia En Vivo',t:'aovivo',rtp:'97.30%',img:'g/roleta-pista',casa:1},
  {id:'blackjack-gala',n:'Blackjack de Gala',p:'Cumbia En Vivo',t:'aovivo',rtp:'99.50%',img:'g/blackjack-gala',casa:1},
  {id:'roda-cumbia',n:'La Rueda de la Cumbia',p:'Cumbia En Vivo',t:'aovivo',rtp:'96.10%',img:'g/roda-cumbia',casa:1}
];
const G = Object.fromEntries(GAMES.map(g=>[g.id,g]));
const TOP10 = ['fortune-dragon','tigre-pista','smoking-dragon','hot-rio-samba','magic-scroll','yo-dragon','fortune-panda','salto-conejo','trovao-zeus','coro-raton'];
const CATS = {
  comum:{n:'Categoría Común',d:'Los seis clásicos de la casa para empezar la noche.',ids:['fortune-dragon','hot-rio-samba','magic-scroll','smoking-dragon','yo-dragon','fortune-panda'],host:'tigre'},
  mais:{n:'Los más jugados',d:'Lo que más está jugando la pista esta semana.',ids:['fortune-dragon','smoking-dragon','hot-rio-samba','fortune-panda','tigre-pista','salto-conejo','coro-raton','trovao-zeus'],host:'maestro'},
  novos:{n:'Novedades',d:'Lanzamientos que acaban de llegar al salón.',ids:['yo-dragon','magic-scroll','fortune-panda','hot-rio-samba','dragon-neon','pesca-mapache','multiplica-buey','escada-maestro'],host:'conejo'},
  top10:{n:'Top 10',d:'Los diez juegos más jugados hoy, en orden.',ids:TOP10,fixed:1,host:'jaguar'},
  aovivo:{n:'Casino en vivo',d:'Mesas con crupier de verdad, toda la noche.',ids:['roleta-pista','blackjack-gala','roda-cumbia','mao-panda'],hide:1,host:'maestro'},
  jackpots:{n:'Jackpots',d:'Premios acumulados que crecen en cada ronda.',ids:['coro-raton','trovao-zeus','fortune-dragon','tigre-pista'],hide:1,host:'raton'},
  mesa:{n:'Juegos de mesa',d:'Cartas, ruleta y blackjack, a tu ritmo.',ids:['mao-panda','blackjack-gala','roleta-pista','bingo-oso'],hide:1,host:'panda'}
};
/* categorías del casino (tarjetas de Inicio, máx. 4 por avance) · destino en la base §6.4 */
const CASCATS = [
  {k:'slots',n:'Slots',host:'tigre',go:'slots:slots',ic:'slots'},
  {k:'crash',n:'Crash',host:'conejo',go:'slots:crash',ic:'crash'},
  {k:'ladders',n:'Escaleras',host:'maestro',go:'slots:ladders',ic:'escadas'},
  {k:'novos',n:'Novedades',host:'mapache',go:'categoria:novos',ic:'fogo'},
  {k:'mais',n:'Los más jugados',host:'oso',go:'categoria:mais',ic:'grafico'},
  {k:'aovivo',n:'Casino en vivo',host:'zeus',go:'categoria:aovivo',ic:'aovivo'},
  {k:'jackpots',n:'Jackpots',host:'raton',go:'categoria:jackpots',ic:'sino'},
  {k:'mesa',n:'Juegos de mesa',host:'panda',go:'categoria:mesa',ic:'cassino'}
];
const TOURN = [
  {id:'t1',n:'La Noche del Jaguar',pr:999000,insc:12480,fim:'2d 14h',img:'s/torneios',host:'jaguar',jogos:'Slots de la casa',min:'$1.00 por giro'},
  {id:'t2',n:'Copa de la Pista',pr:250000,insc:6210,fim:'1d 06h',img:'s/festival',host:'maestro',jogos:'Todos los slots',min:'$0.50 por giro'},
  {id:'t3',n:'El Giro del Tigre',pr:120000,insc:4380,fim:'9h 40min',img:'s/tigre',host:'tigre',jogos:'Tigre de la Pista',min:'$0.40 por giro'},
  {id:'t4',n:'La Carrera del Conejo',pr:80000,insc:2950,fim:'5h 15min',img:'s/conejo',host:'conejo',jogos:'Crash',min:'$1.00 por ronda'},
  {id:'t5',n:'El Coro del Ratón',pr:50000,insc:1870,fim:'3d 02h',img:'s/raton',host:'raton',jogos:'Jackpots',min:'$0.80 por giro'},
  {id:'t6',n:'Mesa de Gala',pr:30000,insc:940,fim:'6d 11h',img:'s/gala',host:'panda',jogos:'Juegos de mesa',min:'$5.00 por mano'}
];

/* deportes · base §5.5 · momios fijos hasta que el sistema los cambie (hora de Ciudad de México) */
const SPORTS = [
  {k:'fut',n:'Fútbol',ic:'esportes',ev:128},{k:'vol',n:'Voleibol',ic:'volei',ev:24},
  {k:'bas',n:'Básquetbol',ic:'basquete',ev:36},{k:'ten',n:'Tenis',ic:'tenis',ev:18},
  {k:'mma',n:'MMA',ic:'mma',ev:0},{k:'esp',n:'eSports',ic:'esports',ev:0},{k:'f1',n:'Fórmula 1',ic:'f1',ev:0},{k:'hand',n:'Handball',ic:'handebol',ev:0}
];
const LEAGUES = {
  lmx:{n:'Liga MX',sp:'fut',pais:'México'},lib:{n:'Copa Libertadores',sp:'fut',pais:'Sudamérica'},cch:{n:'Concachampions',sp:'fut',pais:'Concacaf'},
  pre:{n:'Premier League',sp:'fut',pais:'Inglaterra'},lal:{n:'LaLiga',sp:'fut',pais:'España'},ucl:{n:'Champions League',sp:'fut',pais:'Europa'},
  lnbp:{n:'LNBP',sp:'bas',pais:'México'},nba:{n:'NBA',sp:'bas',pais:'EE. UU.'},
  sle:{n:'SuperLega',sp:'vol',pais:'Italia'},a1f:{n:'Serie A1 Femenina',sp:'vol',pais:'Italia'},
  atp:{n:'ATP Basilea',sp:'ten',pais:'Suiza'},wta:{n:'WTA Finals',sp:'ten',pais:'Arabia Saudita'}
};
const TEAMS = {
  AME:'América',GDL:'Guadalajara',CAZ:'Cruz Azul',PUM:'Pumas',MTY:'Monterrey',TIG:'Tigres',TOL:'Toluca',LEO:'León',
  PAC:'Pachuca',SAN:'Santos Laguna',ATL:'Atlas',NEC:'Necaxa',PUE:'Puebla',QRO:'Querétaro',LAG:'LA Galaxy',
  RIV:'River Plate',BOC:'Boca Juniors',RAC:'Racing',NAC:'Nacional',PAL:'Palmeiras',FLA:'Flamengo',
  ARS:'Arsenal',LIV:'Liverpool',MCI:'Manchester City',CHE:'Chelsea',RMA:'Real Madrid',BAR:'Barcelona',ATM:'Atlético de Madrid',SEV:'Sevilla',
  BAY:'Bayern Múnich',PSG:'Paris Saint-Germain',INM:'Inter de Milán',
  DRM:'Diablos Rojos',HXA:'Halcones de Xalapa',FRM:'Fuerza Regia',SOL:'Soles de Mexicali',LAL:'Lakers',BOS:'Celtics',GSW:'Warriors',NYK:'Knicks',
  PER:'Perugia',TRE:'Trentino',CON:'Conegliano',MIL:'Milano',
  RPA:'R. Pacheco',CAL:'C. Alcaraz',JSI:'J. Sinner',TFR:'T. Fritz',RZA:'R. Zarazúa',ISW:'I. Swiatek',ASA:'A. Sabalenka',CGA:'C. Gauff'
};
/* t: hora · live: {m:"2T 67'", s:[1,0], last:"Gol de Henry Martín, 52'"} · o: [1, X, 2] (tenis/voleibol/básquetbol: [1,null,2]) · mk: mercados */
const MATCHES = [
  {id:'ame-gdl',lg:'lmx',h:'AME',a:'GDL',live:{m:"2T 67'",s:[1,0],last:"Gol de Henry Martín, 52'"},o:[1.72,3.60,5.10],mk:142,dest:1},
  {id:'caz-pum',lg:'lmx',h:'CAZ',a:'PUM',t:'Hoy · 21:05',o:[2.35,3.10,3.05],mk:118,dest:1},
  {id:'mty-tig',lg:'lmx',h:'MTY',a:'TIG',t:'Mañana · 19:00',o:[1.95,3.30,3.90],mk:104},
  {id:'tol-leo',lg:'lmx',h:'TOL',a:'LEO',t:'Mié 28/10 · 19:00',o:[2.60,3.05,2.75],mk:96},
  {id:'pac-san',lg:'lmx',h:'PAC',a:'SAN',t:'Mié 28/10 · 21:10',o:[2.10,3.25,3.40],mk:92},
  {id:'atl-nec',lg:'lmx',h:'ATL',a:'NEC',t:'Jue 29/10 · 19:00',o:[2.05,3.20,3.70],mk:84},
  {id:'pue-qro',lg:'lmx',h:'PUE',a:'QRO',t:'Jue 29/10 · 21:00',o:[2.25,3.15,3.20],mk:81},
  {id:'riv-boc',lg:'lib',h:'RIV',a:'BOC',t:'Hoy · 18:30',o:[2.15,3.05,3.55],mk:110,dest:1},
  {id:'pal-rac',lg:'lib',h:'PAL',a:'RAC',t:'Mañana · 18:30',o:[1.65,3.80,5.40],mk:98},
  {id:'fla-nac',lg:'lib',h:'FLA',a:'NAC',t:'Mié 28/10 · 18:30',o:[1.55,4.00,6.20],mk:97},
  {id:'pac-lag',lg:'cch',h:'PAC',a:'LAG',t:'Mañana · 20:00',o:[2.30,3.10,3.15],mk:88},
  {id:'ars-liv',lg:'pre',h:'ARS',a:'LIV',live:{m:"1T 31'",s:[0,0],last:"Tarjeta amarilla, 24'"},o:[2.40,3.30,2.90],mk:126,dest:1},
  {id:'mci-che',lg:'pre',h:'MCI',a:'CHE',t:'Sáb 31/10 · 10:30',o:[1.62,4.10,5.00],mk:120},
  {id:'rma-bar',lg:'lal',h:'RMA',a:'BAR',t:'Sáb 31/10 · 14:00',o:[2.20,3.60,3.05],mk:131,dest:1},
  {id:'atm-sev',lg:'lal',h:'ATM',a:'SEV',t:'Dom 01/11 · 09:15',o:[1.75,3.50,4.80],mk:94},
  {id:'bay-psg',lg:'ucl',h:'BAY',a:'PSG',t:'Mar 03/11 · 14:00',o:[2.05,3.70,3.25],mk:128},
  {id:'inm-rma',lg:'ucl',h:'INM',a:'RMA',t:'Mié 04/11 · 14:00',o:[2.70,3.30,2.55],mk:124},
  {id:'drm-hxa',lg:'lnbp',h:'DRM',a:'HXA',t:'Hoy · 20:00',o:[1.80,null,1.95],mk:46},
  {id:'frm-sol',lg:'lnbp',h:'FRM',a:'SOL',live:{m:'3C 6:12',s:[58,51],last:'Triple de Fuerza Regia'},o:[1.45,null,2.65],mk:38},
  {id:'lal-bos',lg:'nba',h:'LAL',a:'BOS',t:'Mañana · 20:30',o:[2.05,null,1.75],mk:64},
  {id:'gsw-nyk',lg:'nba',h:'GSW',a:'NYK',t:'Mar 27/10 · 21:00',o:[1.70,null,2.15],mk:61},
  {id:'per-tre',lg:'sle',h:'PER',a:'TRE',t:'Hoy · 12:30',o:[1.55,null,2.35],mk:22},
  {id:'con-mil',lg:'a1f',h:'CON',a:'MIL',live:{m:'2.º set',s:[1,0],last:'25-21 en el 1.er set'},o:[1.40,null,2.80],mk:20},
  {id:'rpa-cal',lg:'atp',h:'RPA',a:'CAL',t:'Hoy · 07:00',o:[3.10,null,1.36],mk:34,dest:1},
  {id:'jsi-tfr',lg:'atp',h:'JSI',a:'TFR',t:'Mañana · 08:30',o:[1.30,null,3.40],mk:31},
  {id:'rza-isw',lg:'wta',h:'RZA',a:'ISW',t:'Mié 28/10 · 09:00',o:[3.60,null,1.28],mk:30},
  {id:'asa-cga',lg:'wta',h:'ASA',a:'CGA',t:'Mié 28/10 · 12:00',o:[1.75,null,2.05],mk:30}
];
const M = Object.fromEntries(MATCHES.map(m=>[m.id,m]));
/* momios mejorados: combinaciones elegidas con momio por encima del normal */
const BOOSTS = [
  {id:'b1',ev:'ame-gdl',sel:['Gana América','Más de 1.5 goles'],de:2.10,para:2.45},
  {id:'b2',ev:'caz-pum',sel:['Ambos anotan','Más de 8.5 tiros de esquina'],de:3.20,para:3.75},
  {id:'b3',ev:'riv-boc',sel:['Gana River Plate','Anota Boca'],de:4.10,para:4.80},
  {id:'b4',ev:'ars-liv',sel:['Empate al medio tiempo','Gana Liverpool'],de:5.50,para:6.50},
  {id:'b5',ev:'rma-bar',sel:['Anota Vini Jr.','Gana Real Madrid'],de:3.40,para:4.00},
  {id:'b6',ev:'mty-tig',sel:['Gana Monterrey','Menos de 3.5 goles'],de:2.35,para:2.70},
  {id:'b7',ev:'bay-psg',sel:['Ambos anotan','Más de 2.5 goles'],de:1.95,para:2.25},
  {id:'b8',ev:'lal-bos',sel:['Ganan los Lakers','Más de 221.5 puntos'],de:3.30,para:3.85},
  {id:'b9',ev:'pal-rac',sel:['Gana Palmeiras','Palmeiras no recibe gol'],de:2.90,para:3.40},
  {id:'b10',ev:'rpa-cal',sel:['R. Pacheco gana un set','Más de 22.5 games'],de:1.80,para:2.10}
];
const ODDS_TIME = '09:11';
const NOW = {dia:'Lunes, 26/10/2026'};

/* banners superiores · el texto coincide con el estado real del contenido */
const BANNERS = [
  {id:'bn-t',k:'TORNEO',t:'La Noche del Jaguar.',s:'$999,000 en premios. Termina en 2d 14h.',img:'s/torneios',btn:'Ver torneo',act:'tourn',arg:'t1',tag:'new',pos:'60% 40%'},
  {id:'bn-c',k:'CASINO',t:'El momento del coro.',s:'Jackpot acumulado en El Coro del Ratón.',img:'s/coro',btn:'Ver jackpots',go:'categoria:jackpots',pos:'50% 35%'},
  {id:'bn-e',k:'EN VIVO AHORA',t:'América × Chivas.',s:"2.º tiempo, 67'. Más de 140 mercados.",img:'s/estadio',btn:'Ver el partido',go:'evento:ame-gdl',live:1,pos:'45% 30%'}
];

/* billetera y movimientos (ejemplo) */
const TX = [
  {id:'tx1',tp:'dep',d:'26/10/2026 08:42',met:'SPEI',v:200,st:'Completado',ses:'Celular · Ciudad de México'},
  {id:'tx2',tp:'gan',d:'25/10/2026 23:10',met:'Fortune Dragon',v:86.4,st:'Completado',ses:'Casino'},
  {id:'tx3',tp:'sac',d:'25/10/2026 19:02',met:'SPEI · CLABE',v:-150,st:'En revisión',ses:'Celular · Ciudad de México'},
  {id:'tx4',tp:'apo',d:'25/10/2026 18:30',met:'América × Chivas',v:-50,st:'Abierta',ses:'Deportes'},
  {id:'tx5',tp:'dep',d:'23/10/2026 21:15',met:'OXXO',v:100,st:'Completado',ses:'Computadora · Ciudad de México'},
  {id:'tx6',tp:'gan',d:'22/10/2026 22:48',met:'Cruz Azul × Pumas',v:132.5,st:'Completado',ses:'Deportes'},
  {id:'tx7',tp:'sac',d:'20/10/2026 10:05',met:'SPEI · BBVA',v:-300,st:'Completado',ses:'Computadora · Ciudad de México'},
  {id:'tx8',tp:'dep',d:'18/10/2026 20:33',met:'Tarjeta de débito',v:250,st:'Completado',ses:'Celular · Ciudad de México'}
];
const LEGAL = {
  legal:{n:'Legal',docs:[['contrato','Contrato de licencia'],['termos','Términos y Condiciones Generales']]},
  priv:{n:'Privacidad',docs:[['privacidade','Aviso de Privacidad'],['cookies','Política de Cookies'],['pld','Política PLD/FT y KYC']]},
  apostas:{n:'Apuestas',docs:[['regras','Reglas de Apuestas'],['jr','Juego Responsable']]}
};
