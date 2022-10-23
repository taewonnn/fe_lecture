// map

// object(key-value쌍으로 이루어진)의 단점을 보완하기 위해


let m = new Map();
m
  .set('하나', 1)
  .set('둘', 2)
  .set('셋', 3)
  .set('넷', 4)
  .set(true, '진실')
  .set([1, 2], 'Really?')

console.log(m)

console.log(m.get('하나'));  // 1
console.log(m.get(true));  //  진실    * object에서는 true(boolean)불가능
console.log(m.get([1, 2]))  // undefined


// javascript 메모리 주소
// [1, 2] === [1, 2] //false
// [1, 2] == [1, 2] // false
// let x = [1, 2]
// let y = [1, 2]
// x == y // false
// x === y // false


// map에 해당 키 값이 있는지 확인하기
m.has('하나') // true
m.has('열')  // false

// map에 값을 제거하기
m.delete('하나')  // -> 하나를 제거
m.has('하나')  // false , 위에서 제거하였으니

// 크기 구하기
m.size


// Map 만드는 방법
let data = new Map([['one', 1], ['two',2]]) // O
let data = new Map(Object.entries({'one':1, 'two':2})) // O
let data = new Map({'one':1, 'two':2}) // X
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X


// 직접 순회가 가능한 Map!
let m = new Map();

m
  .set('하나', 1)
  .set('둘', 2)
  .set('셋', 3)
  .set('넷', 4)

  for(const i of m) {
    console.log(i)
  }
  // ['하나', 1], ['둘', 2], ['셋', 3], ['넷', 4]

  for(const [i, j] of m) {
    console.log(i,j)
  }
  // 하나 둘 셋 넷



// for of는 직접 순회가 불가능!
let data = {'one': 1, 'two': 2}
for (const i of {'one': 1, 'two': 2}) {
  console.log(i)
}


// map - objcet간의 형 변환
let 맵 = new Map(object.entriese({'one': 1, 'two: 2'}))
let 오브젝트 = Objcet.fromEntries(맵)


















