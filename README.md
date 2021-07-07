# vue-intermediate-try

##### 참고
vue init webpack-simple vue-todo

컨테이너 컴포넌트 - 프레젠터 컴포넌트   
: 데이터 처리는 컨테이너 컴포넌트에서 담당. 프레젠터 컴포넌트는 화면을 표현하는 역할을 담당한다.

##### const & let  
- 블록 단위 { }로 변수의 범위가 제한되었음
- const: 상수  
  객체나 배열의 내부는 변경할 수 있다.
- let: 변수

##### Hoisting
- 선언한 함수와 변수를 해석기가 가장 상단에 있는 것처럼 인식한다.
- js 해석기는 코드 라인 순서와 관계 없이 함수 선언식과 변수를 위한 메모리 공간을 먼저 확보한다.
  funtion sum() {} // 함수 선언식
  var sum = function() {} // 함수 표현식
- 순서 : 함수 선언식과 변수 선언을 hoisting -> 변수 대입 및 할당

##### 자바스크립트 모듈화
- import, export
- 재사용성이 뛰어난 기능을 묶어 필요할 때마다 가져다 쓸 수 있도록 한다.
- 호출되기 전까지는 코드 실행과 동작을 하지 않는 특징이 있다.

##### Vuex
- 복잡한 애플리케이션의 많은 컴포넌트들을 효율적으로 관리하는 상태 관리 패턴이자 라이브러리
- MVC 패턴의 문제점: ModelView가 많아질수록 데이터의 흐름을 추적할 수 없는 문제점이 발생한다.(페이스북 채팅 화면) -> 
  Flux: 데이터를 단방향으로만 처리하여 데이트 흐름을 정형화. 안정성 있는 코딩 가능
- state(=data), getters(=computed), mutations(=method), actions(=비동기 methods)
- Helper 기능
- Vuex구조화, 모듈 구조화

##### Helper
- state -> mapState
  ```
  // App.vue
  import { mapState } from 'vuex

  computed() {
    ...mapState(['num'])
    // num() {return this.$store.state.num; }
  }

  // store.js
  state: { num: 10 }
  ```
- getters -> mapGetters
- mutations -> mapMutations
- actions -> mapActions
- 
  ```
  // App.vue
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    computed() { ...mapState(['num']) }
    // this.num으로 접근 가능
  }
  ```

###### ES6 
- object spread operator : ``` ... ```

##### 기타 참고
- (비동기 처리와 콜백 함수)https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/
- (Promise)https://joshua1988.github.io/web-development/javascript/promise-for-beginners/