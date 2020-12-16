import { Player } from "./player"

export class GameView {

    static makeBattingHTML = (playerNameArray) => {
        let battingHTML = document.createElement("div")
        battingHTML.innerHTML = playerNameArray.map((playerName) =>
            `<p>${playerName}의 배팅금액을 입력해주세요</p>
            <input>`
        ).join("");

        return battingHTML;
    }
    static makeGameStartHTML = () => {
        return `<br><button id=game-start-button>게임 시작!</button>`
    }

}