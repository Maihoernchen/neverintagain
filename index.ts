import { RiotAPI, RiotAPITypes, PlatformId } from '@fightmegg/riot-api'

(async () => {
    const rAPI = new RiotAPI('');

    const summoner = await rAPI.summoner.getBySummonerName({
        region: PlatformId.EUW1,
        summonerName: "Yoru 2",
      });
})()