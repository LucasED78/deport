import Mapper from "../Mapper";
import { Match } from "../../stores/match/types";

class MatchMapper implements Mapper<Match> {
  map(data: any): Match {
    return {
      id: data.idEvent,
      name: data.strEvent,
      alternateName: data.strEventAlternate,
      season: data.strSeason,
      description: data.strDescriptionEN,
      homeTeam: data.strHomeTeam,
      awayTeam: data.strAwayTeam,
      homeScore: data.intHomeScore,
      awayScore: data.intAwayScore,
      homeTeamId: data.idHomeTeam,
      awayTeamId: data.idAwayTeam,
      thumbnail: data.strThumb,
      video: data.strVideo
    }
  }
}

export default MatchMapper;