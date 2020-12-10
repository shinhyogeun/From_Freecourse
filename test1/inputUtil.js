export class InputUtil {

    static NameButton = document.querySelector("#player-names-submit");

    static getPlayerNameArray = () => {
        const playerInput = document.querySelector("#player-names-input").value;
        return this.checkNameInputEmpty(playerInput);
    }

    static checkNameInputEmpty = (value) => {
        if (value === "") {
            throw "입력해주세요";
        }

        return value.split(",");
    }

    static getBettingMoneyArray = (nameArray) => {
        let bettingMoneyArray = []
        nameArray.forEach((name, index) => {
            const bettingMony = document.querySelector(`#betting-${index}-input`).value;
            bettingMoneyArray.push(bettingMony);
        });

        return this.checkBettinMoneyEmpty(bettingMoneyArray);
    }

    static checkBettinMoneyEmpty = (bettingMoneyArray) => {
        bettingMoneyArray.forEach(money => {
            if (money === "") {
                throw "베팅머니를 입력하지 않은 플레이어가 있습니다."
            }
        })

        return bettingMoneyArray.map(money => (Number(money)));
    }

}