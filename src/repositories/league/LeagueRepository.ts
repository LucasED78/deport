import { League, LeagueTable } from "../../stores/league/types";

interface LeagueRepository {
  getById(leagueId: string): Promise<League | string>
  getTableByLeagueId(leagueId: string, season: string): Promise<LeagueTable[] | string>
}

export default LeagueRepository;