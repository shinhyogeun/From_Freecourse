export default class Car {
    carName;
    constructor(carName) {
        this.carName = carName;
        this.nowPosition = "";
    };
    #makeRandomNumber() {
        return parseInt(Math.random() * 10);
    }
    makeOneIning() {
        if (this.#makeRandomNumber() <= 3) {
            this.nowPosition += "-";
            return this
        }
        return this;
    }
    printNowPosition() {
        return `${this.carName} : ${this.nowPosition}`
    }
}

let car = new Car("malibu")