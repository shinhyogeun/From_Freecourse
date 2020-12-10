export const nameChecking = (NameArray) => {
    NameArray.forEach(name => checkName(name));
    return NameArray;
}

const checkName = (name) => {
    if (isEmpty(name)) {
        throw "player이름으로 공백은 올 수 없습니다."
    }
}

const isEmpty = (name) => {
    if (name.trim() === "") {
        return true;
    }

    return false;
}