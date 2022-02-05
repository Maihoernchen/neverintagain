import { RiotAPI, RiotAPITypes, PlatformId } from '@fightmegg/riot-api'

(async () => {
    const rAPI = new RiotAPI('RGAPI-8824eecb-2766-4c3f-9c07-035a617efa98');

    const summoner = await rAPI.summoner.getBySummonerName({
        region: PlatformId.EUW1,
        summonerName: "90Nightmare09",
      });
})()