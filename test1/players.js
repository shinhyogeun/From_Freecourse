import { Player } from "./player.js"

export class Players {
    constructor(nameArray, bettingArray) {
        this.nameArray = nameArray;
        this.bettingArray = bettingArray;
        this.players = [];

        for (let index = 0; index < nameArray.length; index++) {
            this.players.push(new Player(nameArray[index], bettingArray[index]));
        }
    }

    makeHTMLAboutTwoCard() {
        let firstTwoCardHTML = `<br> <div>`;
        firstTwoCardHTML += `<div>딜러와 ${this.nameArray.join(", ")}에게 2장의 카드를 나누었습니다.</div>`;
        this.players.forEach(player => {
            firstTwoCardHTML += player.makeNowSituationHTML();
        });
        return firstTwoCardHTML += `</div>`;
    }
}