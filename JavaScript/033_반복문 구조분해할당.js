let value = [10, 1, 100, 200, 300, 10];
let value2 = {
    one:1,
    two:2,
    three:3,
    four:4,
}

Object.keys(value)
Object.keys(value2)

for (i in value2){ // for of로 순회를 돌 수가 없음
    console.log(i)
}

for (i of value2){ // of로 순회를 돌아야 key와 value를 한꺼번에 출력하고 싶은 것입니다. -> error
    console.log(i)
}

Object.entries(value)
Object.entries(value2)


for (i of Object.entries(value2)){ 
    console.log(i)
}

for ([i, j] of Object.entries(value2)){ 
  console.log(`key는 ${i}고 value는 ${j}입니다.`)
}



// 구조 분해 할당 원리
for ([i, j] of [[10, 20],[30, 40]]){ 
  console.log(i, j)
}

for ([i, j] of [[10, 20, 300],[30, 40, 500]]){ 
  console.log(i, j)
}   // 300과 500을 받지 못함

for ([i, j, ...k] of [[10, 20, 300, 1 ,2],[30, 40, 500, 1]]){ 
  console.log(i, j, k)
}   // 몇 개 들어올지 모르는 경우 전개구문(...)을 활용

for ([[i, j], k] of [[[10, 20], 300, 1 ,2],[[30, 40], 500, 1]]){ 
  console.log(i, j, k)
}   

for ([i, j] of [[[10, 20], 300, 1 ,2],[[30, 40], 500, 1]]){ 
  console.log(i, j)
}   


// 일반 변수 선언의 구조분해할당

let a, b, c 
[a, b] = [10, 20]

let one, two, three
[one, two, three] = '010-9232-2394'.split('-')

let one1, two1, three1, four1
[one1, two1, three1, four1] = '010-9232-2394-0000'.split('-')


// 문제 1 
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, b에는 20, 30, 40, c에는 50을 할당해보세요.
[a1, ...b1, c1] = [10, 20, 30, 40, 50] // (X)
[a1, b1, c1] = [data[0], [data[1], data[2], data[3]], data[4]]; // O

// 문제 2
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, 20, 30, b에는 40, c에는 50을 할당해보세요.
[...a2, b2, c2] = [10, 20, 30, 40, 50] // (X)
[a2, b2, c2] = [[data[0], data[1], data[2]], data[3], data[4]]; // O



// 문제3
// a, b, c로 각각을 분해할 것임
// a에는 10 , b에는 20 , c에는 30,40,50을 할당해보라
[a3, b3, ...c3] = [10, 20, 30, 40, 50]



// object 구조분해할당
let data = {
  name : 'hojun',
  age : 10,
  money : 100
}

// 방법1 
let {name, age} = data

// 방법2
let {name, age} = {name:'hojun', age:10}


let data2 = {
  name : 'hojun',
  age : 10,
  money : 100,
  company : 'weniv'
}

let {name, age, ...rest} = data2



let a = [10, 20, 30]

// 뒤에 추가
a.push(100)   // 10, 20, 30, 100

// 앞에 추가
a.unshift(1000)  // 1000, 10, 20, 30


// spread 방법
let a = [10, 20, 30]
a = [1000, ...a, 100]


let a5 = [1, 2, 3]
let b5 = [10, 20, 30]
let c5 = [...a, ...b]

let str = 'hello world'
console.log([str])

let str = 'hello world'
console.log([...str])


'!'.repeat(10)
[...'!'.repeat(10)]














