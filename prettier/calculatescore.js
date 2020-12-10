export default class CalculateScore {
    #stakedStrike;
    #stakedSpare;
    #totalScore;
    constructor() {
        this.#stakedStrike = [];
        this.#stakedSpare = [];
        this.#totalScore = 0;
    }

    isStrike(inningScore) {
        if (inningScore.length === 1) {
            return true;
        }

        return false;
    }

    isSpare(inningScore) {
        const sumInningScore = inningScore.reduce((a, b) => a + b, 0)
        if (inningScore.length === 2 && sumInningScore === 10) {
            return true;
        }

        return false;
    }

    isStrikeBefore() {
        if (this.#stakedStrike.length === 0) {
            return false;
        }

        return true;
    }

    isSpareBefore() {
        if (this.#stakedSpare.length === 0) {
            return false;
        }

        return true;
    }

    getTotalScore() {
        return this.#totalScore;
    }

    whenStrikeOccured() {
        if (this.isStrikeBefore) {
            this.#stakedStrike.map(item => item + 10);
        }

        if (this.isSpareBefore) {
            this.#totalScore += this.#stakedSpare[0] + 10;
            this.#stakedSpare = [];
        }

        this.#stakedStrike.push(10);
    }

    whenSpareOccured(inningScore) {
        if (this.isStrikeBefore) {
            this.#stakedStrike.map(item => item + 10);
            this.#totalScore += this.#stakedStrike.reduce((a, b) => a + b, 0);
            this.#stakedStrike = [];

            return;
        }

        if (this.isSpareBefore) {
            this.#totalScore += this.#stakedSpare[0] + inningScore[0];
            this.#stakedSpare = [];

            return;
        }

        this.#stakedSpare.push(10);
    }

    whenLastInningOrNormal(inningScore) {
        const sumInningScore = inningScore.reduce((a, b) => a + b, 0);

        if (this.isStrikeBefore) {
            this.#totalScore += this.#stakedStrike.reduce((a, b) => a + b, 0) + sumInningScore;

            return;
        }

        if (this.isSpareBefore) {
            this.#totalScore += this.#stakedSpare[0] + sumInningScore;

            return;
        }

        this.#totalScore += sumInningScore;
    }
}