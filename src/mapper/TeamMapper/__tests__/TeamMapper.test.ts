import TeamMapper from "../TeamMapper"

describe('TeamMapper', () => {
  it('should map data to a Team object', () => {
    const data = {
      "idTeam": "133739",
      "idSoccerXML": "155",
      "idAPIfootball": "529",
      "intLoved": "7",
      "strTeam": "Barcelona",
      "strTeamShort": null,
      "strAlternate": "FC Barcelona",
      "intFormedYear": "1899",
      "strSport": "Soccer",
      "strLeague": "Spanish La Liga",
      "idLeague": "4335",
      "strLeague2": "UEFA Champions League",
      "idLeague2": "4480",
      "strLeague3": "Copa del Rey",
      "idLeague3": "4483",
      "strLeague4": "Supercopa de Espana",
      "idLeague4": "4511",
      "strLeague5": "Club Friendlies",
      "idLeague5": "4569",
      "strLeague6": null,
      "idLeague6": null,
      "strLeague7": null,
      "idLeague7": null,
      "strDivision": null,
      "strManager": "",
      "strStadium": "Camp Nou",
      "strKeywords": "",
      "strRSS": "",
      "strStadiumThumb": "https://www.thesportsdb.com/images/media/team/stadium/rsvstp1420328111.jpg",
      "strStadiumDescription": "Camp Nou (\"new field\", often incorrectly referred to as the \"Nou Camp\" in English) is the home stadium of FC Barcelona since its completion in 1957.\r\n\r\nWith a seating capacity of 99,354, it is the largest stadium in Spain and Europe, and the second largest association football stadium in the world in terms of capacity. It has hosted two European Cup/Champions League finals in 1989 and 1999, five matches including the opening game of the 1982 FIFA World Cup and the football competition final at the 1992 Summer Olympics.",
      "strStadiumLocation": "Barcelona",
      "intStadiumCapacity": "99354",
      "strWebsite": "www.fcbarcelona.com",
      "strFacebook": "www.facebook.com/fcbarcelona",
      "strTwitter": "twitter.com/fcbarcelona",
      "strInstagram": "instagram.com/fcbarcelona",
      "strDescriptionEN": "Futbol Club Barcelona, also known as Barcelona and familiarly as Barça, is a professional football club, based in Barcelona, Catalonia, Spain.\r\n\r\nFounded in 1899 by a group of Swiss, English and Catalan footballers led by Joan Gamper, the club has become a symbol of Catalan culture and Catalanism, hence the motto \"Més que un club\" (More than a club). Unlike many other football clubs, the supporters own and operate Barcelona. It is the second most valuable sports team in the world, worth $3.2 billion, and the world's second-richest football club in terms of revenue, with an annual turnover of $613 million. The official Barcelona anthem is the \"Cant del Barça\", written by Jaume Picas and Josep Maria Espinàs.\r\n\r\nBarcelona is the joint most successful club in Spain, in terms of overall official titles won (80). It has won 22 La Liga, 26 Copa del Rey, 11 Supercopa de España, 2 Copa Eva Duarte and 2 Copa de la Liga trophies, as well as being the record holder for the latter four competitions. In international club football, Barcelona has won four UEFA Champions League, a record four UEFA Cup Winners' Cup, four UEFA Super Cup, a record three Inter-Cities Fairs Cup and a record two FIFA Club World Cup trophies. Barcelona was ranked first in the IFFHS Club World Ranking for 1997, 2009, 2011 and 2012 and currently occupies the second position on the UEFA club rankings. The club has a long-standing rivalry with Real Madrid; matches between the two teams are referred to as \"El Clásico\".\r\n\r\nBarcelona is one of the most supported teams in the world, and has the largest social media following in the world among sports teams. Barcelona's players have won a record number of Ballon d'Or awards (10), as well as a record number of FIFA World Player of the Year awards (7). In 2010, the club created history when three players who came through its youth academy (Messi, Iniesta & Xavi) were chosen as the three best players in the world, having bagged the top spots at the FIFA Ballon d'Or, an unprecedented feat for players from the same football school.\r\n\r\nBarcelona was one of the founding members of La Liga, and is one of three clubs which have never been relegated from the top division, along with Athletic Bilbao and Real Madrid. In 2009, Barcelona became the first Spanish club to win the continental treble consisting of La Liga, Copa del Rey, and the Champions League. That same year, it also became the first football club ever to win six out of six competitions in a single year, thus completing the sextuple, comprising the aforementioned treble and the Spanish Super Cup, UEFA Super Cup and FIFA Club World Cup. In 2011, the Blaugrana again became European champions and won a total of five titles, missing out only on the Copa del Rey (in which they finished runners-up). This Barcelona team, which reached a record six consecutive Champions League semi-finals and won 14 trophies in just four years under Guardiola's charge, is considered by some managers, players and experts to be the greatest team of all time.",
      "strDescriptionDE": null,
      "strDescriptionFR": null,
      "strDescriptionCN": null,
      "strDescriptionIT": null,
      "strDescriptionJP": null,
      "strDescriptionRU": null,
      "strDescriptionES": "El Fútbol Club Barcelona es una entidad polideportiva de Barcelona (España). Fue fundado como club de fútbol el 29 de noviembre de 1899 por doce jóvenes futbolistas aficionados, liderados por el suizo Hans Gamper. El F. C. Barcelona es conocido popularmente como Barça (abreviación de la pronunciación de Barcelona en catalán central) y sus hinchas como culés6 (pronunciación del catalán culers); también, y en referencia a sus colores, se utiliza el término azulgranas, que procede del catalán blaugranes, tal como aparece en su himno, el Cant del Barça, donde en su segunda línea se dice «Som la gent blaugrana» (en castellano, \"Somos la gente azulgrana\"). A nivel institucional, el Fútbol Club Barcelona denomina a sus aficionados como barcelonistas y tiene a su servicio, para atender a socios, simpatizantes y público en general, la OAB, sigla que significa Oficina de Atención al Barcelonista, donde quien lo solicita es atendido en los idiomas oficiales del club, que son el catalán, el castellano y el inglés.\r\n\r\nOtro de sus hechos distintivos es su masa social de socios y aficionados. El club alcanzó en 2011 los 180 000 socios,15 16 lo que lo convierte en el segundo club de fútbol con más asociados del mundo (el primero es el SL Benfica), seguido por el Manchester United.17 Existen, además, más de 1200 peñas barcelonistas repartidas por todo el mundo. Cabe anotar que el F. C. Barcelona es uno de los cuatro únicos clubes profesionales de España (junto a Real Madrid, Athletic Club y Osasuna) que no es sociedad anónima, de manera que la propiedad del club recae en sus socios.\r\n\r\nEs uno de los equipos más populares de su país –el segundo con la mayor cantidad de aficionados en España con el 25,7 % del total de simpatizantes al fútbol de acuerdo con un estudio realizado en el mes de mayo de 2007 por el Centro de Investigaciones Sociológicas (CIS) y del mundo. Es el equipo con más títulos nacionales de España, y en Europa,21 22 contando en sus vitrinas a nivel nacional con 22 Ligas, 26 Copas, 2 Copas de la Liga, 11 Supercopas y 3 Copas Eva Duarte y a nivel internacional con 2 Copa Mundial de Clubes, 4 Copas de Europa, 4 Recopas de Europa, 3 Copa de Ferias y 4 Supercopas de Europa. El F. C. Barcelona ha ganado 81 títulos oficiales, lo cual le convierte en el equipo con más títulos en España. Sus dos rivales históricos son el RCD Español, contra el que disputa el derbi catalán, y el Real Madrid, con quien se enfrenta en «El Clásico», siendo este uno de los encuentros de mayor rivalidad e interés del fútbol mundial.\r\n\r\nSegún las estadísticas que realiza el IFFHS, el F. C. Barcelona es el mejor equipo de fútbol europeo y mundial de la primera década del siglo XXI. Con fecha a 31 de diciembre del 2009, el F. C. Barcelona lidera con 807 puntos la clasificación histórica del ranking mundial de clubes que realizaba hasta finales de 2009 la IFFHS, con una diferencia de 81 puntos sobre el segundo en el ranking (Manchester United).28 Cabe destacar también que según la clasificación anual de clubes que realiza la IFFHS, en 1997, 2009 y 2011 fue designado como el mejor equipo del fútbol mundial, siendo también el club que más veces ha encabezado dicha clasificación. Es además el equipo de fútbol que más veces ha figurado en los podios del FIFA World Player (15) y del Balón de Oro (20).32\r\n\r\nEn 2009 el club ganó todas las competiciones que disputó (Liga, Copa, Supercopa de España, Liga de Campeones, Supercopa de Europa y Copa Mundial de Clubes), pasando a la historia por ser el primer equipo del mundo en lograr un «sextete», al ganar seis títulos oficiales en un mismo año.",
      "strDescriptionPT": null,
      "strDescriptionSE": null,
      "strDescriptionNL": null,
      "strDescriptionHU": null,
      "strDescriptionNO": null,
      "strDescriptionIL": null,
      "strDescriptionPL": null,
      "strGender": "Male",
      "strCountry": "Spain",
      "strTeamBadge": "https://www.thesportsdb.com/images/media/team/badge/xqwpup1473502878.png",
      "strTeamJersey": "https://www.thesportsdb.com/images/media/team/jersey/2019-133739-Jersey.png",
      "strTeamLogo": "https://www.thesportsdb.com/images/media/team/logo/vsqdh71536400613.png",
      "strTeamFanart1": "https://www.thesportsdb.com/images/media/team/fanart/swqxry1424485326.jpg",
      "strTeamFanart2": "https://www.thesportsdb.com/images/media/team/fanart/wrxvsw1433680782.jpg",
      "strTeamFanart3": "https://www.thesportsdb.com/images/media/team/fanart/yrustw1424184467.jpg",
      "strTeamFanart4": "https://www.thesportsdb.com/images/media/team/fanart/yvqprv1424485475.jpg",
      "strTeamBanner": "https://www.thesportsdb.com/images/media/team/banner/h3sewn1557002132.jpg",
      "strYoutube": "www.youtube.com/user/fcbarcelona",
      "strLocked": "unlocked"
    }

    const teamMapper = new TeamMapper()

    const team = teamMapper.map(data)

    expect(team.leagues.length)
      .toBe(5)
  })
})