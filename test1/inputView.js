import { Players } from "./players.js";

export const createPlayersAndDealer = (nameArray, moneyArray) => {
    return new Players(nameArray, moneyArray);
}