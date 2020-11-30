

export default class Lotto {
    #numbers = [];
    constructor() {
        this.makeLotto();
        const LOTTO_LENGTH = 6;
    }

    #makeRandomNumbers() {
        const randomNumber = parseInt(1 + Math.random() * 30);
        if (this.#numbers.includes(randomNumber)) {
            return this.#makeRandomNumbers();
        }
        this.#numbers.push(randomNumber);
    }

    makeLotto() {
        for (var i = 0; i < 6; i++) {
            this.#makeRandomNumbers();
        }
        return this.#numbers.sort()
    }

    getNumbers() {
        return this.#numbers.sort(function (a, b) {
            return a - b;
        })
    }

}

let lotto = new Lotto()
console.log(lotto.getNumbers())

