import Mapper from "../Mapper";
import { League, LeagueTable } from "../../stores/league/types";

class LeagueMapper implements Mapper<League> {
  map(data: any): League {
    return {
      id: data.idLeague,
      name: data.strLeague
    }
  }
  
  static toTable(table: LeagueTable): string[] {
    return [
      table.name,
      table.total.toString(),
      table.played.toString(),
      table.wins.toString(),
      table.draws.toString(),
      table.loss.toString(),
      table.goalsFor.toString(),
      table.goalsAgainst.toString(),
    ]
  }
}

export default LeagueMapper;