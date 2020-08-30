import { Team } from "../../stores/team/types";

interface TeamRepository {
  getByName(name: string): Promise<Team[] | string>

  getById(id: string): Promise<Team | string>
}

export default TeamRepository;