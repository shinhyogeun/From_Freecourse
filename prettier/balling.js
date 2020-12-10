import CalculateScore from './calculatescore.js'

export default class BallingGame {
    #calculator;
    #oneInningArray;
    #inning;

    constructor() {
        const BALLING_INNING = 10;
        const LAST_INNING = 10;
        const ONE_SHOT = 1;
        const TWO_SHOT = 2;
        this.#calculator = new CalculateScore();
        this.#oneInningArray = [];
        this.#inning = 0;
        this.startGame()
    }

    makeHalfInning() {
        const halfInningScore = parseInt(Math.random() * 11);
        this.#oneInningArray.push(halfInningScore);

        return halfInningScore;
    }

    makeLastInning(number) {
        if (number !== 10) {
            const halfInningScore = parseInt(Math.random() * (11 - number));
            this.#oneInningArray.push(halfInningScore);

            return halfInningScore;
        }

        return;
    }

    makeOneInning() {
        this.#inning += 1
        this.#oneInningArray = [];
        const firstScore = this.makeHalfInning();

        this.makeLastInning(firstScore);
    }

    addOneInning() {
        this.makeOneInning();
        const oneInningScore = this.#oneInningArray;
        if (this.#inning === 10) {
            this.#calculator.whenLastInningOrNormal(oneInningScore);

            return;
        }

        if (this.#calculator.isStrike(oneInningScore)) {
            this.#calculator.whenStrikeOccured();

            return;
        }

        if (this.#calculator.isSpare(oneInningScore)) {
            this.#calculator.whenSpareOccured(oneInningScore);

            return;
        }

        this.#calculator.whenLastInningOrNormal(oneInningScore);
    }

    startGame() {
        for (var i = 0; i < 10; i++) {
            this.addOneInning()
        }
            
        return this.#calculator.getTotalScore()
    }
}

console.log(new BallingGame());
