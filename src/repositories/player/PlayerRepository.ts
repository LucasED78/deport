import { Player } from "../../stores/player/types";

interface PlayerRepository {
  getMostLovedPlayer(teamId: string): Promise<Player | string>
}

export default PlayerRepository;