import { RiotAPI, RiotAPITypes, PlatformId } from '@fightmegg/riot-api'


async function maina() {
    let rAPI = new RiotAPI('RGAPI-8824eecb-2766-4c3f-9c07-035a617efa98');

    let summoner = rAPI.summoner.getBySummonerName({
        region: PlatformId.EUW1,
        summonerName: "09Nightmare09",
        });
    let summ = await summoner;
    return summ;
}
console.log(maina());