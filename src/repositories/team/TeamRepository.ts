import { Team } from "../../stores/team/types";

interface TeamRepository {
  getByName(name: string): Promise<Team[] | string>
}

export default TeamRepository;