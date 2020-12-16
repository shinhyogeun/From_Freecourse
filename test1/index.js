
export default class BlackJackGame {
    constructor() {

    }

    makePlayerBatting = () => {
        const playerInput = document.querySelector("#player-names-input");
        try {
            checking(playerInput)
            makePlayerBattionHTML(playerInput);
        } catch (error) {

        }
    }
}