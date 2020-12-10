export const moneyChecking = (moneyArray) => {
    moneyArray.forEach(money => check(money));

    return moneyArray;
}

const check = (money) => {
    isMoneyNotNumber(money);
    isMoneyNotNegative(money);
}

const isMoneyNotNumber = (money) => {
    if (isNaN(money)) {
        throw "숫자를 입력해주세요";
    }

    return true;
}

const isMoneyNotNegative = (money) => {
    if (money !== Math.abs(money)) {
        throw "돈 가져가실거에요?"
    }

    return true;
}