
export default class Balling {
    #score = 0;
    #scoreArray = [];
    #oneInningArray = [];
    #stakedStrike = [];
    #stakedSpare = [];
    constructor() {
        const BALLING_INNING = 10;
    }

    #makeHalfInning() {
        const halfInningScore = parseInt(Math.random() * 11);
        this.#oneInningArray.push(halfInningScore);

        return halfInningScore;
    }

    #makeLastInning(number) {
        if (number !== 10) {
            const halfInningScore = parseInt(Math.random() * (11 - number));
            this.#oneInningArray.push(halfInningScore);

            return halfInningScore;
        }

        return;
    }

    #makeOneInning() {
        const firstScore = this.#makeHalfInning();
        this.#makeLastInning(firstScore);
    }

    #calculateScore() {
        const inningScore = this.#oneInningArray.reduce((score, item) => score + item, 0)
        const ONE_SHOT = 1
        const TWO_SHOT = 2
        // 스트라이크를 친 경우(In this case, inningScore is equals to 10)
        if (this.#oneInningArray.length === ONE_SHOT) {
            this.#stakedScore.map(item => item + inningScore).push(inningScore);
            this.#oneInningArray = []
        }
        // 스페어 처리를 한 경우
        if (this.#oneInningArray.length === TWO_SHOT && inningScore === 10) {
            this.#stakedScore
        }
    }

    makeGame() {
        for (var i = 0; i < BALLING_INNING; i++) {
            this.#makeOneInning()
        }
    }

}
