"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const riot_api_1 = require("@fightmegg/riot-api");
(async () => {
    const rAPI = new riot_api_1.RiotAPI('');
    const summoner = await rAPI.summoner.getBySummonerName({
        region: riot_api_1.PlatformId.EUW1,
        summonerName: "09Nightmare09",
    });
    console.log(summoner);
})();