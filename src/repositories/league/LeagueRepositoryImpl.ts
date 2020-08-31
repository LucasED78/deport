import api from '../api'
import LeagueRepository from "./LeagueRepository";
import { League, LeagueTable } from "../../stores/league/types";
import LeagueTableMapper from '../../mapper/LeagueMapper/LeagueTableMapper';
import LeagueMapper from '../../mapper/LeagueMapper/LeagueMapper';

class LeagueRepositoryImpl implements LeagueRepository {
  async getById(leagueId: string): Promise<League | string> {
    try {
      const response = await api.get(`/lookupleague.php?id=${leagueId}`)

      const { data: json } = response;

      const [ data ] = json['leagues']

      let leagueTable = await this.getTableByLeagueId(leagueId, '2019-2020') as LeagueTable[]

      if (typeof leagueTable === 'string') {
        leagueTable = await this.getTableByLeagueId(leagueId, '2020') as LeagueTable[]
      }

      const league = new LeagueMapper().map(data)

      return {
        ...league,
        table: leagueTable
      }
    } catch(e) {
      return 'erro';
    }
  }
  async getTableByLeagueId(leagueId: string, season: string): Promise<LeagueTable[] | string> {
    try {
      const response = await api.get(`/lookuptable.php?l=${leagueId}&s=${season}`);

      const { data: json } = response;

      const data = json['table'] as []

      return data.map(data => {
        return new LeagueTableMapper().map(data)
      })
    } catch(e){
      return 'erro'
    }
  }

}

export default LeagueRepositoryImpl;