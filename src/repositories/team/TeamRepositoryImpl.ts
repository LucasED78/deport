import TeamRepository from "./TeamRepository";
import api from '../api'
import { Team } from "../../stores/team/types";
import TeamMapper from "../../mapper/TeamMapper/TeamMapper";

class TeamRepositoryImpl implements TeamRepository {
  mapper = new TeamMapper()

  async getByName(name: string): Promise<Team[] | string> {
    try {
      const response = await api.get(`/searchteams.php?t=${name}`)

      const data = response.data['teams'];

      return data.map((team: any) => {
        return this.mapper.map(team)
      }) as Team[]
    } catch(e) {
      console.log(e);

      return ''
    }
  }
}

export default TeamRepositoryImpl;