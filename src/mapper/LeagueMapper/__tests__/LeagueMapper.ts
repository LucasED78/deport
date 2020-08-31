import LeagueMapper from "../LeagueMapper"

describe('LeagueMapper', () => {
  test('should map a data source to a League object', () => {
    const data = {
      "idLeague": "4346",
      "strLeague": "American Major League Soccer"
    }

    const leagueMapper = new LeagueMapper();

    const league = leagueMapper.map(data);

    expect(data.idLeague)
      .toBe(league.id)

    expect(data.strLeague)
      .toBe(league.name)
  })
})