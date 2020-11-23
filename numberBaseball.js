// 숫자야구게임 - 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임
//  
// 1. 컴퓨터는 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 만든다.
// 2. 사용자는 3자리의 숫자를 입력하고, 컴퓨터의 숫자와 비교하여 같은 수가 같은 자리에 있으면 스트라이크, 다른자리에 있으면 볼, 같은 수가 전혀 없으면 포볼(낫싱)을 출력해준다.
// 3. 사용자가 숫자를 맞출때까지 해당 기능을 반복한다.
// 4. 사용자가 숫자를 맞췄을 시 게임을 다시 시작하거나, 완전히 종료할 수 있다.


gameStart();

// 전반적 흐름 gameStart 함수
function gameStart(){
    let answer = makeThreeNumber()
    let gaming = true;
    while (gaming){
        let input = getInput();
        if (correct(input,answer)){
            return chooseRestart()
        };
        let result = makeResult(input,answer);
        let resultString = makeResultString(result);
        printResult(resultString);
    };
};

// 랜덤 넘버 3자리를 만드는 과정
function makeIntNumber() {
    return parseInt(Math.random()*10);
};
function makeNumberArray() {
    let number_arr = [];
    for (var i = 0 ; i < 3 ; i++){
        number_arr.push(makeIntNumber());
    };
    return number_arr;
};    
function checkFirstNumber(number_arr){
    if(number_arr[0] === 0){
        return false;
    };
    return true;
};
function makeThreeNumber() {
    let number_Array = makeNumberArray();
    if (checkFirstNumber(number_Array)){
        return number_Array;
    };
    return makeThreeNumber();
};

// 입력을 받는 과정
function getInput() {
    let input = prompt("3자리 수를 입력하세요");
    return input.split("").map((value)=>parseInt(value));
};

// 정답인지 확인하는 과정
function correct(input,answer){
    if (JSON.stringify(input) === JSON.stringify(answer)){
        return true;
    }
    return false;
};

// 스트라이크 볼 아웃을 계산하여 출력하는 과정
function makeResult(input,answer){
    let result = {
        'Strike':0,
        'Ball':0,
        'Out':0
                };
    for( i = 0; i < Object.keys(result).length ; i++){
        result = check(input,answer,result,i)
    };
    return result;
};
function makeResultString(result){
    resultString = '';
    for (element in result){
        if (result[element] !== 0){
            resultString += element + result[element];
        };
    };
    return resultString;
};
function printResult(resultString){
    return console.log(resultString);
};
function check(input,answer,result,i) {
    if (JSON.stringify(input[i]) === JSON.stringify(answer[i])){
        result["Strike"] = result["Strike"] + 1;
        return result;
    }
    if (input[i] in answer){
        result["Ball"] = result["Ball"] + 1;
        return result;
    }
    result["Out"] = result["Out"] + 1;
    return result;
};

// 다시 시작할지 끝낼지 선택하는 과정
function chooseRestart(){
    if (getRestartInput() === 1){
        return restart();
    };
    return finish();
};
function finish(){
    return 0;
};
function restart(){
    return gameStart();
};
function getRestartInput(){
    let restartInput = prompt("다시 시작하시려면 1, 끝내시려면 0을 입력해주세요.")
    return parseInt(restartInput)
};
