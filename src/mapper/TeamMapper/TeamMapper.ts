import Mapper from "../Mapper";
import { Team, League } from "../../stores/team/types";

class TeamMapper implements Mapper<Team> {
  parserLimit = 20
  
  map(data: any): Team {
    return {
      id: data.idTeam,
      name: data.strTeam,
      fullName: data.strAlternate,
      year: data.intFormedYear,
      badge: data.strTeamBadge,
      logo: data.strTeamLogo,
      leagues: this._mapLeagues(data),
      stadium: data.strStadium,
      stadiumThumbnail: data.strStadiumThumb,
      description: data.strDescriptionEN,
      website: data.strWebsite,
      facebook: data.strFacebook,
      twitter: data.strTwitter,
      instagram: data.strInstagram,
      youtube: data.strYoutube,
    }
  }

  _mapLeagues(data: any): League[] {
    return [...Array(this.parserLimit)].filter((_, index) => {
      const realIndex = index === 0 ? '' : index
      const id = data[`idLeague${realIndex}`]
      const name = data[`idLeague${realIndex}`]

      if (id && name) {
        return {
          id,
          name
        } as League
      }
    })
  }
}

export default TeamMapper;