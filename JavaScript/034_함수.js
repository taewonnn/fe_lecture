// 함수

// 함수의 구조

// 파라미터 선언 아규먼트 실행  -> 파선아실

function 안녕(파라미터) {
  console.log(파라미터)
  console.log('hello wolrd')
  return 100
}

let 아규먼트 = 1000
안녕(아규먼트)



console.log('hello world')
// hello world
// undefined

console.log(console.log('hello world'))
// hello world
// undefined
// undefined


function 안녕() {
  console.log('hello')
  return
  console.log('hello')
  console.log('hello')
  console.log('hello')
  console.log('hello')
}

안녕()   // hello는  1번만 나옴 return까지만 출력

function 안녕() {
  console.log('hello')
  console.log('hello')
  console.log('hello')
  console.log('hello')
  return 100
  console.log('hello')
}

안녕()  // hello는  4번 + 100 , return 뒤에 값 반환하며 그냥 return은 undefined를 반환해

// Return은 데이터를 반환하고 강제 종료함


///////////함수를 사용하는 이유//////////////////////

// 1. 재사용성
// 2. 유지보수
// 3. 구조 파악이 용이
// 4. 추상화로 개발하는 것이 객체지향 프로그래밍 언어의 언어 철학에 맞다


/* 
--- 집 짓기 ---
땅파기()  // 10만줄
기반다지기()  // 10만줄
기둥세우기()  // 10만줄
벽돌쌓기()  // 10만줄
지붕올리기()  // 10만줄
*/

/// 함수의 다양한 형태 ////

function 함수1 (a, b, c){
  return a + b + c
}

함수1(10, 20, 30)   // 60  
// console.log 하지 않았지만 60이라는 값을 출력해준 이유  ->  
// 콘솔창의 기능 : 마지막 라인에 한하여 console.log를 찍지 않아도 return값을 콘솔 창에 출력해줌


console.log(함수1(10, 20, 30))
console.log(함수1(10, 20, 50))
// 60 80 undefinded 출력


// 필요 이상의 아규먼트를 넣었을 때
함수1(10, 20, 30, 40)   // 60 마지막 40은 없는 것으로 인지함

// 필요 이하의 아규먼트를 넣었을 때
함수1(10, 20)  //  NaN -> 10+20+undefined로 계산되기에


// 구조분해할당을 이용한 아규먼트 처리

function 함수2(a, b, ...c) {
  return Math.max(...c)
}

함수2('hello', 'world', 10, 20, 30, 40)   // 40


function 함수2([a, b], ...c) {
  console.log(a)
  console.log(b)
  console.log(c)
}

함수2([1, 2], 10, 20, 30, 40)   // 1 2 [10, 20, 30, 40]


// 기본값 할당
function 함수3(a=10, b=20, c=30) {
  return a + b + c
}

console.log(함수3())   // 60
console.log(함수3(100))  // 150
console.log(함수3(100, 200))  // 330
console.log(함수3(100, 200, 300))  // 600

console.log(함수3(c=1000))  // 1050  -> 값이 순서대로 들어감.. 1000 + 20 + 30

console.log(함수3(c=1000, a=2000)) // 3030 -> 값이 순서대로 들어감..



// 함수에서 객체를 아규먼트로

//안좋은 예제 -> 가독성이 떨어짐
function 함수4(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부 ) {
  console.log('함수기능')
  return
}

함수4('gold', true, true, true, '대화방 전체 백업 가능', true)


// 좋은 예
function 함수4({
  회원등급, 
  글쓰기, 
  글읽기, 
  채널관리, 
  백업, 
  소셜로그인여부
}){
  console.log('함수기능')
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
  return
}


함수4({회원등급: 'silver', 
  글쓰기: true, 
  글읽기: true, 
  채널관: false, 
  백업: '부분가능', 
  소셜로그인여부: true
})


// 깔끔
function func2({
  a = 2, 
  b = 1, 
  c = 3
} = {}) {
  console.log(a, b, c);
  return a + b + c;
}
func2()
console.log(func2({a: 20, b: 30, c: 10}));




/// 재귀 함수 ////
// 내가 나를 호출하는 것

// 재귀함수(top-down에서 많이 사용, 분할정복) <-> 반복문(Bottom-up에서 많이 사용)

// 함수로 factorial
function factorial(n) {
  if (n <= 1){
    return 1
  }
  return n * factorial(n-1)
}

// 풀이
// 5! = 5 * 4 * 3 * 2 * 1

// n       n <= 1      return
// factorial(5)    5       false       5 * factorial(4) = 120
// factorial(4)    4       false       4 * factorial(3) = 24
// factorial(3)    3       false       3 * factorial(2) = 6
// factorial(2)    2       false       2 * factorial(1) = 2
// factorial(1)    1       true        1

factorial(5)  // 120



// 반복문으로 factorial
let result = 1;
for(let i = 1; i < 6; i++) {
  result *= i
}

console.log(result) // 120




// 함수로 Sigma
function 누적합(n) {
  if (n <= 1){
    return 1
  }
  return n + 누적합(n-1)
}

누적합(100)



// 반복문으로 sigma
let result2 = 0;
for(let i = 1; i <= 100; i++) {
  result += i
}

console.log(result2)




// 함수로 reverse

function reverse(txt) {
  if(txt.length <= 1) {
    return txt
  }
  return reverse(txt.slice(1)) + txt[0]
}

reverse('hello')

// 풀이

// n                  n <= 1      return
// reverse('hello')    false     reverse(txt.slice(1)) + 'h' => 'olleh'
// reverse('ello')     false     reverse(txt.slice(2)) +'e'  => 'olle'
// reverse('llo')      false     reverse(txt.slice(2)) +'l'  => 'oll'
// reverse('lo')       false     reverse(txt.slice(2)) +'l'  => 'ol'
// reverse(o)          true      'o'

// * 참고사항
// 'hello'.slice(1)  -> 'ello'



// 반목문으로 reverse 
txt = "hello world"
result =""
for(const i of txt) {
  result = i +result
}

console.log(result)




//지역변수와 전역변수
// https://velog.io/@bico/JavaScript-%EB%A0%89%EC%8B%9C%EC%BB%AC-%EC%8A%A4%EC%BD%94%ED%94%84lexical-scope

// 블록레벨 스코프
//case1
if(true) {
  let x = 10;
  const y = 10;
}

console.log(x,y)  // -> x,y 둘 다 출력 못함(블록레벨 스코프이기 때문)


// case2
let x = 100
function xplus(){
  x = x + 10
}
xplus()
console.log(x) // 110(밖에서 선언된 x는 함수 내부에서도 접근이 가능)


// case3
function xplus(){
  let x = 100
  x = x + 10
}
xplus()
console.log(x) // x 출력 못함(함수가 종료된 다음에 선언된 변수는 휘발된다)


// 함수 안에 함수
function a(){
  console.log('a실행')
  function b(){
    console.log('b실행')
  }
}

a()  // a실행만 나옴


function a(){
  console.log('a실행')
  function b(){
    console.log('b실행')
  }
  b()
}

a()  // a실행 / b실행


// 화살표 함수

// 기본함수
function 함수1(x, y) {
  return x + y
}

// 기본함수 -> 화살표함수
let 함수2 = (x, y) => x + y


// 기본함수
function 함수3(x, y) {
  let z = x + y
  return z
}

// 기본함수 -> 화살표함수
let 함수4 = (x, y) => {
  let z = x + y
  return z
}






















