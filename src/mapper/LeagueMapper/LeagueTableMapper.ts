import Mapper from "../Mapper";
import { LeagueTable } from "../../stores/league/types";

class LeagueTableMapper implements Mapper<LeagueTable> {
  map(data: any): LeagueTable {
    return {
      name: data.name,
      teamId: data.teamid,
      played: data.played,
      goalsFor: data.goalsfor,
      goalsAgainst: data.goalsagainst,
      goalsDifference: data.goalsdifference,
      wins: data.win,
      draws: data.draw,
      loss: data.loss,
      total: data.total
    }
  }
}

export default LeagueTableMapper;