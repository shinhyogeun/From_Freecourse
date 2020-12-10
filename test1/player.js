import { CardDeck } from "./cardDeck.js"

export class Player {
    constructor(name, money) {
        this.name = name;
        this.battingMoney = money;
        this.cards = [];
        this.cards.push(this.getOneRandomCard());
        this.cards.push(this.getOneRandomCard());
    }

    getOneRandomCard() {
        return CardDeck.returnOneCard();
    }

    calculateScore() {
        this.score = 0
        this.filteringJQK();
        return this.OptimizeScore(this.cardNumbers);
    }

    filteringJQK() {
        this.cardNumbers = this.cards.map(card => {
            if (this.isJQK(card[1])) {
                this.score += 10;
                return 10;
            }

            if (card[1] !== "A") {
                this.score += card[1];
            }

            return card[1];
        })
    }

    OptimizeScore(cardNumbers) {
        if (!cardNumbers.includes("A")) {
            return this.score;
        }

        cardNumbers.forEach((item) => {
            if (item === "A") {
                this.score += this.compareBtwTenOne();
            }
        });

        return this.score
    }

    compareBtwTenOne() {
        if (Math.abs(this.score + 10 - 21) > Math.abs(this.score + 1 - 21)) {
            return 1;
        }
        return 10;
    }

    isJQK(JQK) {
        const JQKArray = ["J", "Q", "K"];
        if (JQKArray.includes(JQK)) {
            return true;
        }

        return false;
    }

    showNowCard() {
        let cardList = this.cards.map(card => card.reverse().join(""));

        return cardList.join(", ");
    }

    makeNowSituationHTML() {
        return `<div>${this.name}카드 : ${this.showNowCard()}</div>`;
    }
}