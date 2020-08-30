import api from '../api'
import { Player } from "../../stores/player/types";
import PlayerRepository from "./PlayerRepository";
import PlayerMapper from '../../mapper/PlayerMapper/PlayerMapper';

class PlayerRepositoryImpl implements PlayerRepository {
  async getMostLovedPlayer(teamId: string): Promise<Player | string> {
    const response = await api.get(`/lookup_all_players.php?id=${teamId}`)

    const { data: json } = response;

    const data: any[] = json['player'];

    const players = data.map((player: any) => new PlayerMapper().map(player))

    const mostLoved = players.reduce((previous, current) => {
      if (previous.loved > current.loved){
        return previous;
      }

      return current;
    })

    console.log(mostLoved);
    

    return mostLoved;
  }
}

export default PlayerRepositoryImpl;