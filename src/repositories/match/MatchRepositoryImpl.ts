import MatchRepository from "./MatchRepository";
import { Match } from "../../stores/match/types";

import api from '../api'
import MatchMapper from "../../mapper/MatchMapper/MatchMapper";
import TeamRepository from "../team/TeamRepository";
import { Team } from "../../stores/team/types";

class MatchRepositoryImpl implements MatchRepository {
  teamRepository: TeamRepository;

  constructor(teamRepository: TeamRepository) {
    this.teamRepository = teamRepository;
  }

  async getLastMatchByTeamId(teamId: string): Promise<Match | string> {
    try {
      const response = await api.get(`/eventslast.php?id=${teamId}`);

      const { data: json } = response;

      const [ data ] = json['results']

      const match = new MatchMapper().map(data)

      const teamToSearchId = teamId === match.homeTeamId ? match.awayTeamId : match.homeTeamId

      const team = await this.teamRepository.getById(teamToSearchId) as Team;

      if (teamId === match.homeTeamId) {
        match.awayTeamLogo = team.badge;
      } else {
        match.homeTeamLogo = team.badge;
      }

      return match;
    } catch(e) {
      console.error(e)
      return 'erro'
    }
  }
}

export default MatchRepositoryImpl;