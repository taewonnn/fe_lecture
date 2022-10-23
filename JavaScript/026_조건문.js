//구조
if (조건식) {
  // 조건식이 참일 경우 실행될 코드
  console.log("중괄호를 사용했습니다.")
}

let 조건식1 = true;
let 조건식2 = true;

if (조건식1) {
  console.log(1);
  // 조건식1이 참(true)일 경우 실행될 코드
} else if (조건식2) {
  console.log(2);
  // 조건식1이 거짓(false)이고 조건식2가 참(true)일 경우 실행될 코드
} else {
  console.log(3);
  // 조건식1, 2 모두 거짓일 경우 실행될 코드
}

// 예제
let money = 1000;
let score = 89;

if (score > 90) {
    console.log('mom : "i\'m so happy"');
    money += 1000000;
} else if (score > 80) {
    console.log('mom : "i\'m happy"');
    money += 100000;
} else if (score > 70) {
    console.log('mom : "happy?"');
    money += 10000;
} else if (score > 60) {
    console.log('mom : "happy!!!"');
} else {
    console.log('mom : "..."');
    money = 0;
}

///

// switch

let value3 = "three"

switch (value3) {
  case 'one':
    console.log(1);
    break;
  case 'two':
    console.log(2);
    break;
  case 'three':
    console.log(3);
    break;
  case 'four':
    console.log(4);
    break;
}
