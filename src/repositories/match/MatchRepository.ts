import { Match } from "../../stores/match/types";

interface MatchRepository {
  getLastMatchByTeamId(teamId: string): Promise<Match | string>
}

export default MatchRepository;