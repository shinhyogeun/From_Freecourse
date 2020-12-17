
export const checkCountInput = (countInput) => {
    if (countInput === null) {
        return null;
    }
    if (isCountNotNumber(countInput) || isCountInputEmpty(countInput)) {
        throw "숫자를 입력해주세요.";
    }

    if (isCountSmallThanZero(countInput) || isCountNotInteger(countInput)) {
        throw "자연수를 입력해주세요.";
    }

    return Number(countInput);
}

const isCountNotNumber = (countInput) => {
    return isNaN(Number(countInput));
}

const isCountSmallThanZero = (countInput) => {
    return Number(countInput) <= 0;
}

const isCountNotInteger = (countInput) => {
    return parseInt(Number(countInput)) !== Number(countInput);
}

const isCountInputEmpty = (countInput) => {
    return countInput.trim() === "";
}