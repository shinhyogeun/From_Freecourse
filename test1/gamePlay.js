import { InputUtil } from "./inputUtil.js"
import { createPlayersAndDealer } from "./inputView.js"
import { moneyChecking } from "./moneyCheckor.js";
import { outputView } from "./outputView.js"
import { nameChecking } from "./playerNameCheckor.js"

export class GamePlay {
    constructor() {
        this.makePlayer()
    }

    makePlayer() {
        InputUtil.NameButton.addEventListener("click", () => {
            try {
                this.nameArray = nameChecking(InputUtil.getPlayerNameArray());
                this.nameArray.forEach((name, index) => { outputView.addBettingHTML(name, index) });
                outputView.addBettingButton();
                this.playStart();
            } catch (error) {
                alert(error)
            }
        });
    }

    playStart() {
        const button = document.querySelector("#betting-button");
        button.addEventListener("click", () => {
            this.moneyArray = moneyChecking(InputUtil.getBettingMoneyArray(this.nameArray));
            this.players = createPlayersAndDealer(this.nameArray, this.moneyArray);
            outputView.showResult(this.players.makeHTMLAboutTwoCard());
        });
    };

}

let a = new GamePlay()
