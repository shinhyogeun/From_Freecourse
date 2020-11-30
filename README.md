
# 프리코스의 프리
1. github에 fork하고 pullrequest 하는 법을 다시 보자!! 
	* https://wayhome25.github.io/git/2017/07/08/git-first-pull-request-story/ 를 참고하면 좋습니다.
2. JS 기본 문법 및 컨벤션을 확인해보자!
	* https://velog.io/@recordboy/자바스크립트-변수-명명-규칙 를 참고하면 좋습니다.
3. 좋은 코드란 어떻게 만드는 것
	* https://github.com/qkraudghgh/clean-code-javascript-ko 자바스크립트를 통해 클린코드를 보자.
---------------------------------

# 1주차 미션- 숫자야구게임 만들기!-
---------------------------------
### 구현할 기능 목록

* 랜덤으로 서로 다르고 0이 아닌 3자리 숫자배열 만들기
    * 랜덤으로 0과 9사이의 숫자를 만든다.
    * 0이 아닌지 확인한다.
    * 기존에 뽑은 숫자와 동일한 숫자를 뽑았는지 확인한다.

* 사용자의 입력이 올바른 입력인지 판별하기(아니라면 alert을 보여준다.)
    * 입력의 길이가 3인지 확인한다.
    * 모두 숫자인지 확인한다.
    * 서로 모두 다른 숫자인지 확인한다.
    * 0이 없는지 확인한다.

* 결과 계산하기
    * 주어진 index가 strike, ball인지 확인한다
    * 깔끔하게 스트라이크, 볼, 낫싱을 String으로 출력한다.

* 정답을 맞췄는지 확인하기

  (정답이 맞을 경우)
    * '축하합니다.'문구 HTML 추가하기.
    * 다시하기 버튼 생성하기.
    * 다시 시작하는 restart 함수 만들기
        * 입력창 비우기
        * 추가된 버튼과 HTML를 모두 원상복귀 시킨다.
        * 랜덤으로 서로 다르고 0이 아닌 3자리 숫자를 만든다.
    * 다시하기 버튼에 restart 이벤트 리스너 추가하기

  (정답이 아닐 경우)
    * 결과 출력하기

* 확인버튼에 게임을 진행할 수 있도록 이벤트리스너 추가하기

    
 ### 느끼는 점
 * 확실히 README 파일을 잘 만들어야한다. README를 디테일하게 작성 후 프로그래밍을 시작해야 탄탄하고 보기 좋게 만들 수 있다.</br> 
 * 지금은 확실히 함수들을 각각 만들어서 그것을 다같이 돌리는 거대한 하나의 함수를 만드는 느낌이다.</br> 
 * '클래스는 언제 만드는 것이 가장 좋을까'에 대한 깊은 고민도 필요하다. </br>
 * 클래스를 어디까지 나눠야할까? 얼마나 잘게 쪼게야 하는 걸까?
 * 메서드 체이닝이란 걸 쓰는게 어떨까? </br>
 * 실생활에서 보이는 많은 물건들을 class로 만들어보자!!!!!! </br>


------------
# 작년 2주차 과제(자동차 경주를 만들어 보았다.)
* 자동차 class를 생성한다.
    * 자동차의 이름을 포함한다.
    * 랜덤으로 0과 9사이의 값을 생성한다.
    * 자동차의 전진,멈춤을 구현한다.
    * 자동차의 현재 진행결과를 HTML코드와 함께 반환하는 함수를 구현한다.
    
* 사용자의 입력을 배열로 만든다.
    *(예외처리)자동차의 이름이 5자를 넘는지 확인한다.
    
* 시도할 횟수를 입력 받는다.
    *(예외처리)시도할 횟수가 숫자인지 확인한다.
    *(예외처리)시도할 횟수가 자연수인지 확인한다.

* 배열의 원소들로 자동차 클래스를 생성한다.

* 게임을 진행한다.
    * 자동차들을 1번씩 시도한다.
    * 결과를 화면에 출력한다.

* 최종 우승자를 출력한다.

------------
### JS의 본질은 사용자와의 상호작용이다. 그 상호작용은 입력과 내부 알고리즘 그리고 출력으로 이루어진다.
그래서 나는 어떤 걸 만들던지 저 3개를 유념해야 한다고 느꼈다.

 1. 입력
 * 사용자는 HTML에 입력을 할 것이다. 그것은 클릭일 수도 또는 textInput일 수도 있다.</br>
   단지 내가 집중해야하는 것은 그것을 그 다음단계인 내부 알고리즘을 위해 소중히 가져와야한다는 것이다.</br> 
   그러한 일들은 모두 각각의 함수가 생성되어 각각의 일에 집중하게 만들어야한다.</br>
</br>

 2. 내부 알고리즘
 * 여러번 쓰인다면 주저하지말고 클래스를 만들자. 다만 여기서 주의할 점은 그 클래스의 속성과 기능들이다. </br>
   <strong>각각의 함수는 하나의 일을 해야한다.</strong> (#으로 외부에서 데이터를 조작하지 못하도록 하는 것도 있지말자)</br>
   또한 내부 알고리즘이 끝난다면 우리는 user에게 출력해줄 준비가 끝나야 한다. 출력파트에서는 오로지!!!! </br>
   사용자에게 보여주기 위해 DOM과 소통하는 JS만 있어야한다.(UI와 알고리즘의 이분화)</br>
</br>

 3. 출력
 * DOM과 소통해서 올바른 결과를 사용자에게 보여주고 재시작을 준비해야한다.</br>

#### 그렇다면 위의 3개를 만들어 놓으면 끝일까? 그렇지 않다.
#### 3개가 연결이 되어야 한다.  사용자가 입력을 끝내면 바로 내부에서 알고리즘이 돌고 출력이 되고 재시작까지 준비되어야한다.
#### 위 3개가 완성된다고 바로 이러한 프로그램이 만들어지는 것은 아니다. 이것은 큰 하나의 줄기가 필요하다.
#### 그러한 큰 흐름의 프로그램은 결국 하나의 클래스가 실행될 때 시작되는 것이다. 

