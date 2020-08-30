import Mapper from "../Mapper";
import { Player } from "../../stores/player/types";

class PlayerMapper implements Mapper<Player> {
  map(data: any): Player {
    return {
      id: data.idPlayer,
      teamId: data.idTeam,
      name: data.strPlayer,
      birthLocalization: data.strBirthLocation,
      dateSigned: data.dateSigned,
      description: data.strDescriptionEN,
      gender: data.strGender,
      height: data.strHeight,
      weight: data.strWeight,
      loved: +data.intLover,
      nationality: data.strNationality,
      position: data.strPosition,
      number: +data.strNumber,
      instagram: data.strInstagram,
      twitter: data.strTwitter,
      avatar: data.strCutout
    }
  }
}

export default PlayerMapper;