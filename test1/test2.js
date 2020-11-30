import Car from "./test.js";

export default class RacingGame {

    constructor(carNames, number) {
        this.carNames = carNames
        this.number = number
        this.carArray = []
        this.makeCarArray()
        this.makeCompleteGame()
        this.compareResult()
        this.printResult()
    }

    makeCarArray() {
        let carNamesArray = this.carNames.split(",")
        for (var i = 0; i < carNamesArray.length; i++) {
            this.carArray.push(new Car(carNamesArray[i]));
        }
    }

    makeOneGame() {
        for (var i = 0; i < this.carArray.length; i++) {
            this.carArray[i].makeOneIning().printNowPosition()
        }
    }

    makeCompleteGame() {
        for (var i = 0; i < this.number; i++) {
            this.makeOneGame();
        }
    }
    compareResult() {
        this.result = []
        for (var i = 0; i < this.carArray.length; i++) {
            this.result.push([this.carArray[i].carName, this.carArray[i].nowPosition.length])
        }
        console.log(this.result.sort(function (a, b) { return a[1] - b[1] }))
    }

    printResult() {
        let resultString = ""
        for (var i = 0; i < this.result.length; i++) {
            resultString += `${i + 1}등은 ${this.result[i][0]}  `
        }
        console.log(resultString)
    }

    #apple = () => {
        console.log("apple");
    }

};

new RacingGame("ma,asd,asdasd", 6)
