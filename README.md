
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
 
 **JS의 본질은 사용자와의 상호작용이다. 그 상호작용은 입력과 내부 알고리즘 그리고 출력으로 이루어진다.**
  그래서 나는 어떤 걸 만들던지 저 3개를 유념해야 한다고 느꼈다.

 1. 입력
 * 사용자는 HTML에 입력을 할 것이다. 그것은 클릭일 수도 또는 textInput일 수도 있다.</br>
   단지 내가 집중해야하는 것은 그것을 그 다음단계인 내부 알고리즘을 위해 소중히 가져와야한다는 것이다.</br> 
   그러한 일들은 모두 각각의 함수가 생성되어 각각의 일에 집중하게 만들어야한다.</br>
</br>

 2. 내부 알고리즘
 * 여러번 쓰인다면 주저하지말고 클래스를 만들자. 다만 여기서 주의할 점은 그 클래스의 속성과 기능들이다. </br>
   <strong>각각의 함수는 하나의 일을 해야한다.</strong> (#으로 외부에서 데이터를 조작하지 못하도록 하는 것도 잊지말자)</br>
   또한 내부 알고리즘이 끝난다면 우리는 user에게 출력해줄 준비가 끝나야 한다. 출력파트에서는 오로지!!!! </br>
   사용자에게 보여주기 위해 DOM과 소통하는 JS만 있어야한다.(UI와 알고리즘의 이분화)</br>
</br>

 3. 출력
 * DOM과 소통해서 올바른 결과를 사용자에게 보여주고 재시작을 준비해야한다.</br>

#### 그렇다면 위의 3개를 만들어 놓으면 끝일까? 그렇지 않다.
#### 3개가 연결이 되어야 한다.  사용자가 입력을 끝내면 바로 내부에서 알고리즘이 돌고 출력이 되고 재시작까지 준비되어야한다.
#### 위 3개가 완성된다고 바로 이러한 프로그램이 만들어지는 것은 아니다. 이것은 큰 하나의 줄기가 필요하다.
#### 그러한 큰 흐름의 프로그램은 결국 하나의 클래스가 실행될 때 시작되는 것이다. 
#### 다른 분들 20~30명 정도 코드를 본 결과 1.2.3.을 파일을 나누어 class를 분리해서 푸신 분들 있었고 굳이 그렇게 하지 않고 index.js에서 모두 하신 분들도 있었다. 
#### 나는 후자이다. 다만 한 클래스에서 앞(내부알고리즘)과 뒤(UI)로 나누었다. 다음주 주차에서는 나누어서 만들어보자.부디 이 내용이 공통피드백에 있었으면 좋겠다..

---------------------------------

# 2주차 미션- 레이싱게임 만들기!-
---------------------------------
## 📝 구현 기능 목록

- 입력
  - 자동차 이름들
  - 시도할 횟수

- 중간 과정.
  - 자동차의 이름들이 올바른 이름인지 확인한다.
  <br>**(예외처리)**<br>
  - 1.) 자동차의 이름이 5글자보다 길 때
  - 2.) 자동차의 이름이 공백일때
  - 3.) 자동차의 이름이 다른 자동차의 이름과 같을 때

- 시도할 횟수가 정상적인 입력인지 확인한다.
  <br>**(예외처리)**<br>
  - 1.) 음수가 입력되었을 때
  - 2.) 소수(ex1.5)가 입력되었을 때
  - 3.) 아무것도 입력이 안되었을 때

- 1회의 레이스를 진행한다.

- 화면에 결과를 출력한다.

- 위의 과정 시도할 횟수만큼 반복한다.

- 1등을 찾는다.

- 최종 1등을 출력한다.

------------------------
 

## 📝 생각했던 부분

- class.. 어떻게 나눠야할까?
  <p>이 부분은 프리코스를 진행하는 분들 모두가 고민하는 부분일 것입니다. 저도 너무 많이 고민하고 찾아가며 이전에 다른 분들이 쓴 코드들을 정말 많이 찾아봤습니다. 저는 프로그램으 크게 input과 output 그리고 내부 알고리즘으로 나누고 여기서 서로 소통하는 부분(예를 들어 input의 조건이 내부알고리즘을 필요할 경우)을 위한 별도의 파일을 만들었습니다.(저의 파일에서는 inputView.js에서 input.js와 carNameCheckor.js가 같이 만나 하나의 과정을 수행합니다.) 또한 내부알고리즘에서는 자동차(car)객체를 만들어 자동차가 가져야하는 기능들을 수행할 수 있게 했습니다. 또한 자동차들(cars)라는 객체도 추가로 만들어 자동차들의 경주 1이닝을 다룰 수 있게 하고 그에대한 결과HTML생성 기능 그리고 1등찾기 및 우승자HTML생성 기능을 구현하였습니다. 또한 cars를 생성한 이유로는 일급컬렉션을 위한 의도도 있습니다. 추후 자동차의 집합을 사용하는 모든 곳에 쉽게 제약을 줄 수 있기때문입니다. 이렇게 2주차에서는 프로그램을 만들 때 이용할 객체지향 구조에 대해 깊게 생각해보았습니다. </p>
  
- class 생성 할 때 조건을 주는 것은 어떨까?
  <p>객체를 생성하면서 constructor안에서 조건을 주어 조건에 맞지 않으면 error 던지게 하여 존재하는 객체는 특정 조건 만족을 보장할 수 있게 만들 수 있습니다.예를 들면 car라는 객체를 만들 때 constructor에서 car의 이름이 만족해야하는 조건들을 넣어두고 이를 만족하지 못하면 error를 던지는 것입니다.이는 일급 컬렉션을 만들 때도 이용될 수 있지만 생각해보면 car의 이름이 5글자 이하여야 한다는 것은 이 RacingGame의 규칙이지 car의 규칙은 아니었습니다. 만약 다른 게임에서 만약 7자리 이하로 조건을 다르게 적용한다면 그 게임에서는 car class를 사용하지 못할 것 입니다. 따라서 car와 cars에 생성할 때의 조건을 주어 만드려고 했으나 이번 미션에서는 별도의 class를 만들어 이름을 검사했습니다. 그런데 반대로 만약 positive라는 객체를 만들 때 음수값이 들어오면 error를 발생시키는 것은 positive자체의 지켜져야하는 규칙이므로 이는 적절합니다. 여기서 저는 "그럼 언제 내부적으로 조건을 주는 것이 좋을까?"에 대해서 생각해 보았고 "꼭 필요하고 만족되지 않으면 프로그램에 영향을 줄 수 있는 객체의 조건이면 이렇게 객체속에 조건을 주는 것이 좋을 수 있다"고 생각했습니다.</p>
  
## 📝 노력했던 부분

- 모듈을 분리해서 체계적인 프로그램을 만드려고 노력했습니다.
  
- 하드코딩을 하지않으려고 했습니다.
  - 하드코딩을 하지 않으면 제 코드가 가독성이 떨어지는 것같습니다. 상수들을 의미있게 바꾸어 가독성을 높이려고 노력했습니다.

- 추상화 정도를 맞추려고 노력했습니다.
  - 추상화가 되어 있다면 코드보다는 영어 문장에 가까워져 코드의 가독성이 높아졌습니다. 따라서 글처럼 부드럽게 읽을 수 있게 만드려고 노력했습니다.

- 위에서 아래로 읽을 수 있게 만들어 보고자 했습니다.
  - 가장 추상적인 부분은 위에 그리고 그보다 조금은 구체적인 부분은 밑으로 위치시켜 위에서부터 아래로 읽을 수 있게 구성하려고 노력했습니다.
     
     
## 📝 참고했던 자료들
- [우아한테크세미나] 190425 TDD 리팩토링 by 자바지기 박재성님(https://www.youtube.com/watch?v=bIeqAlmNRrA&t=4062s)
- 생각하라 객체지향처럼 -우아한 형제들-(https://woowabros.github.io/study/2016/07/07/think_object_oriented.html)
- 일급 컬렉션 (First Class Collection)의 소개와 써야할 이유(https://jojoldu.tistory.com/412)

---------------------------------

# 3주차 미션- 지하철 노선도 관리 시스템 만들기!-
---------------------------------

## 📝 구현 기능 정리

### 1. 입력
- 역관리의 경우
  - 추가할 역이름
- 노선관리의 경우
  - 추가할 노선이름
  - 상행 종점
  - 하행 종점
- 구간관리의 경우
  - 수정할 노선
  - 추가할 역이름
  - 순서

### 2. 알고리즘(과정)
**1) 역관리의 경우**<br>
 ##### (추가)
  - 역이름을 입력받는다.
   **(예외처리)**<br>
    - 지하철역의 이름이 1글자 이하인지(공백포함)
    - 이미 존재하는 지하철역의 이름을 입력하였는지
  - 지하철 역 목록 마지막에 새로운 역에 대한 행을 추가한다.

  ##### (삭제)
  - 지하철 노선에 등록된 역인지 확인한다.
  - 등록되지 않았다면 제거한다.
  - 등록되어 있다면 지울 수 없다고 알려준다.
    
**2) 노선관리의 경우**<br>
  #### (추가)
  - 노선이름을 입력받는다.
   **(예외처리)**<br>
    - 노선이름을 공백으로 입력하지 않았는지
    - 이미 존재하는 노선이름을 입력하지 않았는지
    - 상행 종점과 하행종점을 입력받는다.
  - 지하철 노선 목록 마지막에 새로운 노선에 대한 행을 추가한다.

  #### (삭제)
  - 지하철 노선 목록에서 제거한다.
    
**3) 구간관리의 경우**<br>
  #### (추가)
  - 구간을 수정할 노선을 선택받는다.
  - 구간 등록할 역을 선택받는다.
  - 삽입할 순서를 입력받는다.
   **(예외처리)**<br>
    - 순서가 음수가 아닌지 확인
    - 순서가 소수(ex1.2)가 아닌지 확인한다.
    - 순서가 이미 존재하는 순서인지를 확인한다.(이미 존재하는 순서라면 길이 갈라지므로)
  - 구간관리 목록에 순서에 맞는 행에 새로운 구간을 등록한다.
  - 새로 생긴 구간 뒤에 오는 모든 구간의 순서를 하나씩 증가시킨다.(표 업데이트)

  #### (삭제)
  - 지하철 구간관리 목록에서 제거한다.
  - 제거한 구간의 순서 뒤에 오는 모든구간의 순서를 하나씩 감소시킨다.(표 업데이트)

**4) 지하철 노선도 출력의 경우**<br>
  - 모든 호선에 대한 모든 역을 출력한다.
----------------------------------------------------------------
<고민하는 부분>

1. Data로 저장하는 것을 객체로 만들까?

ex) line Repository ={
                                    1호선 : new Line("1호선","인천","소요산"), 
                                    2호선 : new Line("2호선","신촌","신도림")
                                   }
    그리고 저 객체 안에는 호선이 포함하는 역들의 배열이 있다.
    
2. HTML과의 상호작용에 대한 공부가 더 필요하다.
