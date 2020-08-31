import LeagueTableMapper from "../LeagueTableMapper"

describe('LeagueTableMapper', () => {
  test('should map data to a LeagueTable object', () => {
    const data = {
      "name": "Man City",
      "teamid": "133613",
      "played": 38,
      "goalsfor": 151,
      "goalsagainst": 38,
      "goalsdifference": 113,
      "win": 32,
      "draw": 2,
      "loss": 4,
      "total": 98
    }

    const leagueTableMapper = new LeagueTableMapper()

    const leagueTable = leagueTableMapper.map(data)

    expect(leagueTable)
      .toStrictEqual(leagueTable)
  })
})