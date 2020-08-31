import TeamRepository from "./TeamRepository";
import api from '../api'
import { Team } from "../../stores/team/types";
import TeamMapper from "../../mapper/TeamMapper/TeamMapper";

class TeamRepositoryImpl implements TeamRepository {
  mapper = new TeamMapper()

  async getByName(name: string): Promise<Team[] | string> {
    try {
      const response = await api.get(`/searchteams.php?t=${name}`)

      const { data: json } = response;

      const data = json['teams'].filter((team: any) => team.strSport === 'Soccer')

      return data.map((team: any) => {
        return this.mapper.map(team)
      }) as Team[]
    } catch(e) {
      console.log(e);

      return ''
    }
  }

  async getById(id: string): Promise<Team | string> {
    try {
      const response = await api.get(`/lookupteam.php?id=${id}`);

      const { data: json } = response;

      const [ data ] = json['teams']

      return this.mapper.map(data)
    } catch(e) {
      console.error(e);

      return '';
    }
  }
}

export default TeamRepositoryImpl;