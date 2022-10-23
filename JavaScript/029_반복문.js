// 반목문

// for
for(let i = 0; i < 10; i++) {
  console.log(i);
}


// airbnb 컨벤션 권장사항
// for in -> 배열의 키(index)를 가져옴
for(const i in ['one', 'two', 'three']) {
  console.log(i);  // 0 1 2
}


// airbnb 컨벤션 권장사항
// for of -> 배열의 value(값) 가져옴
for(const i of ['one', 'two', 'three']) {
  console.log(i);    // one two three
}


////

// var 사용하면 안되는 이유!
if(true) {
  var a = "1"
  let b = "2"
  const c = "3"
}

console.log(a);   // 1로 출력됨
console.log(b);   // 출력 불가  if 밖에서 사용 불가능
console.log(c);   // 출력 불가  if 밖에서 사용 불가능
// => let과 const는 블록레벨 스코프라 출력이 안된다



for(let i = 0; i < 10; i++) {
  // i라는 변수를 스코프마다 잠근다
  var a = "1"
  let b = "2"
  const c = "3"
  console.log(i);
}

console.log(a);  // 1로 출력됨
console.log(b);  // 출력 불가  for 밖에서 사용 불가능
console.log(c);  // 출력 불가  for 밖에서 사용 불가능


//////


for(let i = 0; i < 10; i++) {
  console.log(i);
  if(i > 3) {
    break;
  }
}
// 4까지 출력됨 4가 if문에 들어가야 break가 되기에


let data1 = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < data1.length; i++) {
  console.log(data1[i]);
}



// 알고리즘 문제 예시
let data1 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < data1.length; i++) {
    console.log(data1[i]);
}

let data2 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < data2.length; i++) {
    console.log(data2[i+1] - data2[i]);
}

let data3 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < data3.length - 1; i++) {
    console.log(data3[i+1] - data3[i]);
}

let data4 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 1; i < data4.length; i++) {
    console.log(data4[i] - data4[i-1]);
}



// 무한 반복
let i = 0;
for(;;) {
  i++;
  console.log(i);
  if(i > 5);
    break;
}

for(let i = 0;; i++) {
  console.log(i);
  if(i > 5);
    break;
}



// 문제) 다음 수학 점수의 평균을 구하라
let 수학점수 = [10, 99, 88, 85, 21, 35]

// 방법1
let s = 0;
수학점수.forEach(value => s += value)
console.log(s / 수학점수.length);

// const 함수 = function(value) {
//   value = value + s
// }

let moneys = [1000, 10000, 2000]

function daram(num) {
  console.log(num * 2)
}

moneys.forEach(daram)







//방법2
console.log(수학점수.reduce((a, b) => a + b, 0) / 6)

//방법3
let s2 = 0;
for(i=0; i < 수학점수.length; i++) {
  s2 += 수학점수[i];
}
console.log(s2 / 수학점수.length);


// 문제) user의 성별 구분하여 파악하기
let user = [
  {
    "_id": "633e5b1711926cc42d1fbb4b",
    "index": 0,
    "guid": "e6ef4abc-a6fc-4ed5-a9b0-8060240c48ab",
    "age": 28,
    "name": "Mai Montoya",
    "gender": "female"
  },
  {
    "_id": "633e5b1718d6c001d2f771c7",
    "index": 1,
    "guid": "9b07b16c-7a4a-4152-83cf-fb64625f52fe",
    "age": 22,
    "name": "Shelley Potts",
    "gender": "female"
  },
  {
    "_id": "633e5b17fecc26a897aa2283",
    "index": 2,
    "guid": "cfb29cc6-8381-4695-8c2f-0c273a9d33c2",
    "age": 22,
    "name": "Hensley Flores",
    "gender": "male"
  },
  {
    "_id": "633e5b17267fe16c24f00591",
    "index": 3,
    "guid": "6e189d90-0981-4086-9ee2-12242fda76d1",
    "age": 20,
    "name": "Holmes Morrow",
    "gender": "male"
  },
  {
    "_id": "633e5b17b30766b9c38594f5",
    "index": 4,
    "guid": "f1505113-9383-4249-bbb3-0e5f8ea634b2",
    "age": 25,
    "name": "Elisa Miller",
    "gender": "female"
  }
]

// 풀이 - for
let 여성 = 0;
let 남성 = 0;
for (let i = 0; i < user.length; i++) {
  if (user[i]["gender"] === "female"){
    여성 += 1;
  }else if (user[i]["gender"] === "male"){
    남성 += 1;
  }
}
console.log(여성);
console.log(남성);

// 풀이2 - filter
user.filter(i => i['gender'] === 'female').length;
user.filter(i => i['gender'] === 'male').length;



// 암기사항(재귀함수 비교할 때 for문)

// 1.for 중첩 - 구구단
for ( let 단 = 2; 단 < 10; 단++) {
  for (let 곱 = 1; 곱 < 10; 곱++) {
    console.log(`${단} X ${곱} = ${단 * 곱}`);
  }
}


// 2. 문자열 뒤집기
let txt = "hello world";
let result = '';
for(let i = txt.length - 1; i >= 0; i--) {
  result += txt[i];
}

result = '';
for(let i = 0; i < txt.length; i++) {
  result = txt[i] + result;
}


// 3. 시그마(=누적합)
// ex. 100까지
let ss = 0;
for (let i = 1; i < 101; i++) {
  s += i;
}


// 4. 팩토리얼(=누적곱)
// ex. 5팩토리얼
let ss2 = 1;
for (let i = 1; i < 6; i++) {
  ss2 *= i;
}



// 문제1 : 다음 입력된 숫자들의 합을 구하라
// input : '12345'
// result : 15

let x10 = '12345';
result10 = 0;

for (let i = 0; i < x10.length; i++) {
  result10 += parseInt(x10[i]);
}


// 문제2 : 1부터 10,000까지 8이라는 숫자가 몇 번 나오는가?
//        8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅해야 함
//        ex. 8803은 3, 8888은 4로 카운팅함

// 100까지만 했을 때

Array(100).fill(0).map((_, index) => (index + 1).toString())
Array(100).fill(0).map((_, index) => (index + 1)).join('')

let x20 = Array(100).fill(0).map((_, index) => (index + 1)).join('')
let result20 = 0;
for (let i = 0; i < x20.length; i++) {
    if(x20[i] === '8'){
        result20 += 1;
    }
}