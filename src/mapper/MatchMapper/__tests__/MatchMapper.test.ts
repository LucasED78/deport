import MatchMapper from "../MatchMapper"

describe('MatchMapper', () => {
  it('Should map a data to a MatchMapper object', () => {
    const data = {
      "idEvent": "1012551",
      "idSoccerXML": null,
      "idAPIfootball": "585042",
      "strEvent": "Barcelona vs Bayern Munich",
      "strEventAlternate": "Bayern Munich @ Barcelona",
      "strFilename": "UEFA Champions League 2020-08-14 Barcelona vs Bayern Munich",
      "strSport": "Soccer",
      "idLeague": "4480",
      "strLeague": "UEFA Champions League",
      "strSeason": "2019-2020",
      "strDescriptionEN": "Lionel Messi leads Barcelona against Alphonso Davies' Bayern Munich in the UEFA Champions League quarter-finals. The clubs last met five years ago, when a 5-3 aggregate win saw the Spanish team advance to the final and beat Juventus.",
      "strHomeTeam": "Barcelona",
      "strAwayTeam": "Bayern Munich",
      "intHomeScore": "2",
      "intRound": "125",
      "intAwayScore": "8",
      "intSpectators": null,
      "strOfficial": null,
      "strHomeGoalDetails": null,
      "strHomeRedCards": null,
      "strHomeYellowCards": null,
      "strHomeLineupGoalkeeper": null,
      "strHomeLineupDefense": null,
      "strHomeLineupMidfield": null,
      "strHomeLineupForward": null,
      "strHomeLineupSubstitutes": null,
      "strHomeFormation": null,
      "strAwayRedCards": null,
      "strAwayYellowCards": null,
      "strAwayGoalDetails": null,
      "strAwayLineupGoalkeeper": null,
      "strAwayLineupDefense": null,
      "strAwayLineupMidfield": null,
      "strAwayLineupForward": null,
      "strAwayLineupSubstitutes": null,
      "strAwayFormation": null,
      "intHomeShots": null,
      "intAwayShots": null,
      "strTimestamp": null,
      "dateEvent": "2020-08-14",
      "dateEventLocal": "2020-08-14",
      "strDate": null,
      "strTime": "19:00:00",
      "strTimeLocal": "20:00:00",
      "strTVStation": null,
      "idHomeTeam": "133739",
      "idAwayTeam": "133664",
      "strResult": "",
      "strVenue": "Estádio da Luz",
      "strCountry": "Portugal",
      "strCity": "Lisbon",
      "strPoster": null,
      "strFanart": null,
      "strThumb": "https://www.thesportsdb.com/images/media/event/thumb/5v6st81597491877.jpg",
      "strBanner": null,
      "strMap": null,
      "strTweet1": "https://twitter.com/ChampionsLeague/status/1294376459939639296",
      "strTweet2": "https://twitter.com/ChampionsLeague/status/1294386758411530243",
      "strTweet3": "https://twitter.com/ChampionsLeague/status/1294391719757307911",
      "strVideo": "https://www.youtube.com/watch?v=nMt56fQKLIQ",
      "strStatus": null,
      "strPostponed": "no",
      "strLocked": "unlocked"
    }

    const matchMapper = new MatchMapper();

    const match = matchMapper.map(data);

    expect(match.homeTeam)
      .toBe("Barcelona")
  })
})