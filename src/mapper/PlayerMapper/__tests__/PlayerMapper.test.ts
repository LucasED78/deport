import PlayerMapper from "../PlayerMapper"

describe('PlayerMapper', () => {
  it('should parser a source of data to a Player', () => {
    const data = {
      "idPlayer": "34146370",
      "idTeam": "133739",
      "idTeam2": "134509",
      "idTeamNational": null,
      "idSoccerXML": "155",
      "idAPIfootball": null,
      "idPlayerManager": "7458500",
      "strNationality": "Argentina",
      "strPlayer": "Lionel Messi",
      "strTeam": "Barcelona",
      "strTeam2": "Argentina",
      "strSport": "Soccer",
      "intSoccerXMLTeamID": "155",
      "dateBorn": "1987-06-24",
      "strNumber": "10",
      "dateSigned": "2004-10-16",
      "strSigning": "Youth",
      "strWage": "",
      "strOutfitter": "",
      "strKit": "adidas Nemeziz 19.1",
      "strAgent": "Relatives",
      "strBirthLocation": "Rosario, Argentina",
      "strDescriptionEN": "Lionel Andrés Messi Cuccittini (born 24 June 1987) is an Argentine professional footballer who plays as a forward and captains both Spanish club Barcelona and the Argentina national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time, Messi has won a record six Ballon d'Or awards, and a record six European Golden Shoes. He has spent his entire professional career with Barcelona, where he has won a club-record 34 trophies, including ten La Liga titles, four UEFA Champions League titles and six Copas del Rey. A prolific goalscorer and a creative playmaker, Messi holds the records for most goals in La Liga (441), a La Liga and European league season (50), most hat-tricks in La Liga (36) and the UEFA Champions League (8), and most assists in La Liga (181) and the Copa América (12). He has scored over 700 senior career goals for club and country.\r\n\r\nBorn and raised in central Argentina, Messi relocated to Spain to join Barcelona at age 13, for whom he made his competitive debut aged 17 in October 2004. He established himself as an integral player for the club within the next three years, and in his first uninterrupted season in 2008–09 he helped Barcelona achieve the first treble in Spanish football; that year, aged 22, Messi won his first Ballon d'Or. Three successful seasons followed, with Messi winning four consecutive Ballons d'Or, making him the first player to win the award four times and in a row. During the 2011–12 season, he set the La Liga and European records for most goals scored in a single season, while establishing himself as Barcelona's all-time top scorer. The following two seasons, Messi finished second for the Ballon d'Or behind Cristiano Ronaldo (his perceived career rival), before regaining his best form during the 2014–15 campaign, becoming the all-time top scorer in La Liga and leading Barcelona to a historic second treble, after which he was awarded a fifth Ballon d'Or in 2015. Messi assumed the captaincy of Barcelona in 2018, and in 2019 he secured a record sixth Ballon d'Or.\r\n\r\nAn Argentine international, Messi is his country's all-time leading goalscorer. At youth level, he won the 2005 FIFA World Youth Championship, finishing the tournament with both the Golden Ball and Golden Shoe, and an Olympic gold medal at the 2008 Summer Olympics. His style of play as a diminutive, left-footed dribbler drew comparisons with his compatriot Diego Maradona, who described Messi as his successor. After his senior debut in August 2005, Messi became the youngest Argentine to play and score in a FIFA World Cup during the 2006 edition, and reached the final of the 2007 Copa América, where he was named young player of the tournament. As the squad's captain from August 2011, he led Argentina to three consecutive finals: the 2014 FIFA World Cup, for which he won the Golden Ball, and the 2015 and 2016 Copas América. After announcing his international retirement in 2016, he reversed his decision and led his country to qualification for the 2018 FIFA World Cup, and a third-place finish at the 2019 Copa América.\r\n\r\nOne of the most famous athletes in the world, Messi has been sponsored by sportswear company Adidas since 2006 and has established himself as their leading brand endorser. According to France Football, he was the world's highest-paid footballer for five years out of six between 2009 and 2014, and was ranked the world's highest-paid athlete by Forbes in 2019. Messi was among Time's 100 most influential people in the world in 2011 and 2012. In 2020, he was awarded the Laureus World Sportsman of the Year.",
      "strDescriptionDE": null,
      "strDescriptionFR": null,
      "strDescriptionCN": null,
      "strDescriptionIT": null,
      "strDescriptionJP": null,
      "strDescriptionRU": "Лионель Месси родился 24 июня 1987 года в аргентинском городе Росарио. Отец — Хорхе Орасио Месси, фабричный рабочий на сталелитейном комбинате, мать — Селия Мария Месси (девичья фамилия Куччиттини), частично занятая уборщица. У него есть два старших брата по имени Родриго и Матиас, а также сестра по имени Мария Соль. Двое его двоюродных братьев — Эмануэль[en] и Максимилиано Бьянкуччи также являются футболистами.\r\n\r\nСемья его отца происходит из итальянского города Анконы, откуда его предок, Анджело Месси, эмигрировал в Аргентину в 1883 году. Другие его предки были родом из Каталонии; в частности, его прапрадед Рамон Льобера Перес (родился в 1895 году в Эль-Поале), чья внучка Роза Мария Перес в Аргентине вышла замуж за Эусебио Месси Баро, потомка Анджело. Брат Рамона, Гонсаль Льобера Перес (родился в 1904 году в Эль-Поале), приходится прапрадедом другому известному футболисту, Бояну Кркичу.\r\n\r\nМесси начал заниматься футболом в возрасте пяти лет, в любительском клубе «Грандоли», тренируемом его отцом Хорхе. На первые занятия его отводила бабушка Селия, единственная из семьи, кто хотела видеть его футболистом; впоследствии все свои голы Лионель посвящал ей. В 1995 году он стал играть за профессиональный клуб — «Ньюэллс Олд Бойз», а в 1997 году, будучи игроком этого клуба, завоевал Кубок Дружбы Перу. В возрасте 11 лет у него был диагностирован дефицит соматотропина (гормона роста). «Ривер Плейт» проявлял интерес к Месси, но не имел достаточного количества денег, чтобы заплатить за лечение, поскольку это стоило $ 900 в месяц.\r\n\r\nКогда Лионелю было 13 лет, один из акционеров клуба «Барселона» узнал о юном футболисте. Он нанял двух скаутов Мартина Монтеро и Фабиана Сольдини, которые уговорили отца Месси пройти просмотр в клубе. 17 сентября 2000 года Месси с отцом прибыли в Каталонию, однако из-за занятости спортивного директора клуба, Карлеса Решака, просмотр прошёл лишь 3 октября. Решак был настолько впечатлён талантом игрока, что уговорил совет директоров «сине-гранатовых» оплатить переезд семьи Месси в Европу, а также лечение, стоившее 90 тысяч евро в год. С тех пор он начал выступать в молодёжной команде клуба.",
      "strDescriptionES": "Lionel Andrés Messi Cuccittini (Rosario, Provincia de Santa Fe, 24 de junio de 1987), conocido también como Leo Messi, es un futbolista y medallista olímpico argentino que también tiene nacionalidad española desde 2005.11 Juega como delantero en el F. C. Barcelona, de la Primera División de España, y en la selección argentina, de la que es también capitán.\r\n\r\nDesde 2009 es considerado por diversos organismos deportivos, por varios futbolistas, por gran cantidad de exjugadores legendarios, entrenadores, deportistas de élite y para algunos deportistas, jugadores y técnicos el mejor de la historia. En 2013, el presidente de la FIFA, Joseph Blatter, también lo destacó como el mejor del mundo. Recibió el premio al Mejor Jugador del Mundo de la FIFA y el Balón de Oro en 2009. Además es el primer ganador del FIFA Balón de Oro que desde 2010 engloba ambos premios, volviendo a ganar las ediciones de 2011 y 2012. Con la obtención del cuarto Balón de Oro consecutivo, Messi logró superar el récord de Michel Platini y, a su vez, la obtención del reconocimiento por cuarta vez consecutiva como mejor jugador del mundo por la FIFA, hito que superaría también a los alcanzados en el pasado y de manera alternada en tres ocasiones por Ronaldo y Zinedine Zidane. Por su habilidad y estilo de juego lo han comparado con Diego Armando Maradona, quien declaró al mismo Messi como su «sucesor». Messi ha batido diversos récords con el Fútbol Club Barcelona, dado que es el máximo goleador de la historia del club, el máximo goleador de la Primera División de España, el máximo goleador en la historia del Clásico del fútbol español y el jugador extranjero con más partidos disputados con la camiseta blaugrana.69\r\n\r\nLeo Messi comenzó a jugar al fútbol a una edad joven y su potencial fue rápidamente identificado por el F. C. Barcelona. Dejó Rosario —mientras jugaba en el Club Atlético Newell's Old Boys— y a los 13 años, junto con su familia, se trasladó a España, donde el Barcelona se ofreció a pagar los gastos del tratamiento de su enfermedad hormonal (900 USD por mes). Realizó su debut en el primer equipo del F. C. Barcelona el 16 de noviembre de 2003 en un partido amistoso ante el F. C. Porto, entrenado por José Mourinho.70 No obstante, su debut en un partido oficial llegó al año siguiente, en la temporada 2004/2005, en liga ante el R. C. D. Español. Messi logró convertirse, a los 17 años, en el jugador más joven del Barcelona en jugar un partido de la Primera División de la Liga española. Su gran avance fue en la temporada 2006/07. A partir de ese momento pasó a formar parte del cuadro titular. En la temporada 2007/08 recibió la dorsal 10 tras la marcha de Ronaldinho al AC Milan. La temporada 2008/2009 fue la de su consagración como mejor jugador del mundo del momento. En la temporada 2009/2010, Messi consiguió unos registros goleadores históricos, tras anotar 47 goles, de los cuales 34 fueron en la competición de liga. De este modo acabó llevándose la Bota de Oro e igualando el registro goleador de Ronaldo en la temporada 1996/1997.71 En la temporada 2011/2012 Messi obtuvo la primera edición del Premio al Mejor Jugador de Europa de la UEFA y posteriormente su tercer Balón de Oro. En cuanto a cifras individuales, estableció un récord mundial histórico con 73 goles oficiales con el F.C. Barcelona y superó el anterior, de Archie Stark, que estuvo vigente por 87 años. También concretó un total de 82 goles oficiales, incluyendo aquellos convertidos con la selección argentina y logró una nueva marca al convertir 50 goles en la Liga (récord para la Bota de Oro, superando a Dudu Georgescu). En la Liga de Campeones de la UEFA consiguió anotar 5 goles en un partido (7-1 en contra del Bayer Leverkusen) y posicionarse como máximo artillero en la edición del certamen con 14 goles y ser cuatro veces seguidas máximo goleador del torneo. En la temporada 2012/2013, Messi consiguió una serie de récords históricos entre los cuales se destacan el Récord Guinness por sus 91 goles oficiales en un año, el Balón de Oro por cuarta vez consecutiva y la Bota de Oro por tercera vez. Con la obtención de estos dos últimos galardones, logró posicionarse como el máximo ganador en solitario de dos de las más importantes distinciones individuales a nivel mundial. En la temporada 2013/14 obtuvo la Supercopa de España, su 23° título, y se convirtió en el argentino más ganador junto a Esteban Cambiasso. Superó a Paulino Alcántara como máximo goleador en la historia del F.C. Barcelona (amistosos y oficiales), a Telmo Zarra como el máximo anotador para un club español (354 goles) y a Alfredo Di Stefano como máximo goleador en la historia del Clásico Español (21 goles).\r\n\r\nMessi es un jugador destacado de la selección argentina, donde actualmente se desempeña como capitán del equipo.72 En 2006 llegó a ser el jugador más joven de la selección argentina en asistir a una Copa Mundial de Fútbol, con la cual obtuvo el subcampeonato en la Copa América 2007 y en la Copa Mundial de Fútbol de 2014. En 2008, en los Juegos Olímpicos de Pekín, consiguió su primer premio internacional, una medalla de oro. A fines de 2011 fue seleccionado dentro de las 32 personalidades más populares del año por la revista Time, postulándose como candidato a la «persona del año», siendo el único deportista nominado en dicha lista. En 2012, consiguió anotar 12 goles en un año con su selección nacional, igualando así la marca establecida por Gabriel Batistuta en 1998.",
      "strDescriptionPT": null,
      "strDescriptionSE": null,
      "strDescriptionNL": null,
      "strDescriptionHU": null,
      "strDescriptionNO": null,
      "strDescriptionIL": null,
      "strDescriptionPL": null,
      "strGender": "Male",
      "strSide": "Left",
      "strPosition": "Right Wing",
      "strCollege": null,
      "strFacebook": "www.facebook.com/leomessi/",
      "strWebsite": "",
      "strTwitter": "",
      "strInstagram": "www.instagram.com/leomessi/",
      "strYoutube": "",
      "strHeight": "1.70 m (5 ft 7 in)",
      "strWeight": "66 kg",
      "intLoved": "4",
      "strThumb": "https://www.thesportsdb.com/images/media/player/thumb/rgevg81516994688.jpg",
      "strCutout": "https://www.thesportsdb.com/images/media/player/cutout/07t81y1580776864.png",
      "strRender": "https://www.thesportsdb.com/images/media/player/render/2ikmns1580781479.png",
      "strBanner": "https://www.thesportsdb.com/images/media/player/banner/yzrspt1549398433.jpg",
      "strFanart1": "https://www.thesportsdb.com/images/media/player/fanart/vsywsp1421580471.jpg",
      "strFanart2": "https://www.thesportsdb.com/images/media/player/fanart/t8ez191549398257.jpg",
      "strFanart3": "https://www.thesportsdb.com/images/media/player/fanart/uxd9mz1549398266.jpg",
      "strFanart4": "https://www.thesportsdb.com/images/media/player/fanart/icrnu31549398274.jpg",
      "strCreativeCommons": "No",
      "strLocked": "unlocked"
    }

    const playerMapper = new PlayerMapper();

    const player = playerMapper.map(data)

    expect(player.name)
      .toBe(data.strPlayer)

    expect(player.number)
      .toBe(parseInt(data.strNumber))
  })
})