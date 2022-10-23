// nulish 병합 연산자

let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null이나 undefined가 아닌 첫 번째 피연산자
console.log(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛


let a = 10;
let b = 20;
let c = 30;

let d = a ?? b ?? c   // d = 10


let a1 = null;
let b1 = 20;
let c1 = null;

let d1 = a1 ?? b1 ?? c1;  // d1 = 20


let a2;
let b2;
let c2;

let d2 = a2 ?? b2 ?? c2;  // d2 = undefined


let 실명;
let 별명 = "licat"
let 기본값 = "프로도"

let 채팅창아이디 = 실명 ?? 별명 ?? 기본값;  // 채팅창아이디 : licat



// ?? || 차이점

let height = 0;

console.log(height || 100); // 100  * ||는 true를 반환!
console.log(height ?? 100); // 0