export class CardDeck {
    static cardDeck = {
        "하트": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
        "클로버": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
        "스페이드": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
        "다이아": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
    }

    static returnOneCard = () => {
        this.checkIfCardEmpty();
        const randomNumber = parseInt(Math.random() * 4);
        const cardLength = this.cardDeck[Object.keys(this.cardDeck)[randomNumber]].length

        if (cardLength === 0) {
            return this.returnOneCard();
        }

        const randomCardIndexNumber = parseInt(Math.random() * (cardLength - 1));
        const cardNumber = this.cardDeck[Object.keys(this.cardDeck)[randomNumber]].splice(randomCardIndexNumber, 1);

        return [Object.keys(this.cardDeck)[randomNumber], cardNumber[0]];
    }

    static checkIfCardEmpty = () => {
        if (Object.keys(this.cardDeck).every(element => { return this.cardDeck[element].length === 0 })) {
            throw "카드를 모두 사용하셨습니다.";
        };
    }

    static refillCard = () => {
        this.cardDeck = {
            "하트": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
            "클로버": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
            "스페이드": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
            "다이아": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
        };
    }
}
