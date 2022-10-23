// 즉시 실행함수

// 익명 즉시 실행 함수  -> 메모리 효율때문에 사용하며 재사용성은 x
(function () {
  let a = 1;
  let b = 2;
  return a + b;
}());


// 기명 즉시 실행 함수
(function foo() {
  let a = 3;
  let b = 5;
  return a * b;
}());

foo();



// 연습문제
// 중간고사 점수를 다 더하는 코드를 함수로 작성해주세요.

let data = [{
  반 : 1, 
  번 : 1, 
  이름 : "호준", 
  중간고사점수 : 55
}, {
  반 : 1, 
  번 : 2, 
  이름 : "길동", 
  중간고사점수 : 60
}, {
  반 : 1, 
  번 : 3, 
  이름 : "영희", 
  중간고사점수 : 30
}, {
  반 : 1, 
  번 : 4, 
  이름 : "철수", 
  중간고사점수 : 20
}, {
  반 : 1, 
  번 : 5, 
  이름 : "규리", 
  중간고사점수 : 100
}]

// 여러가지 풀이

function 평균값구하기(data){
  let sum = 0;
  for(student of data){
      sum += student["중간고사점수"]
  }
  return sum / data.length
}

function 평균값구하기(data) {
  let 중간고사점수 = data.map((x) => x.중간고사점수)
  let 중간고사점수합 = 중간고사점수.reduce((a, b) => a + b)
  return 중간고사점수합 / data.length
}

function 평균값구하기(data) {
  return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}

console.log(function () {
  return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}());

let a = (data) => data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
console.log(a(data));

let b = (data) => { return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length }
console.log(b(data));



// call by value(값의 전달), call by reference(참조-주소값의 전달), sharing
// array, convenstion 자료형을 넘길 때에는 함수 안에서 값의 수정이 된다!

// 면접 질문 : javascript의 call by value, call by reference에 대해서 설명하시오
// 답변 : javascript는 call by value만 존재합니다.

let test = [10, 20, 30]
function 함수(a) {
  a[0] = 1000
}

함수(test)   // [1000, 20, 30] 


let test1 = 100
function 함수(a) {
  a = 1000
}

함수(test1)   // 100


// 반례
var a = {};
function test(b) {
    b = 1000;
}

test(a)  // {}Object



// 클로저

function 제곱(x) {
  function 승수(y) {
    return y ** x
  }
  return 승수
}

let 제곱2 = 제곱(2) // y의 2승 값
console.log(제곱(2)(3))  // 9  -> 승수(3)


//////

function makeAdder(x) {
  var y = 1;
  return function(z) {
      y = 100;
      return x + y + z;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2));  // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
//지역스코프에서 값을 찾고, 없으면 그 밖에 있는 스코프에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프체이닝
//어려운 얘기로는 내부 렉시컬 환경에서 찾고 없으면 전역 렉시컬 환경에서 찾는다 얘기함.
//함수가 수행된 이후에도 상위함수의 렉시컬 환경에 접근 가능