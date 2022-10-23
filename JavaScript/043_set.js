// set

// 집합, 합집합, 교집합, 차집합

let s = new Set('abcdeeeeee') // Set(5) {'a', 'b', 'c', 'd', 'e'}  * 중복 제거!
console.log(s.size)  // 5 

// 문제
회사게시판 = ['이호준', '이호준', '이호준','김은하', '김은하', '이준근']

// 문제1 : 몇 명이 게시판에 게시물을 썼나요?(각각의 인원이 유일해야 함)
// 정답
let board = new Set(회사게시판)
console.log(board.size)  // 3

// 문제2 : 각각 몇 개의 게시물을 작성하였나요?
// 정답
for(const i of board) {
  console.log(i, 회사게시판.filter(e => e === i))
}
// 이호준 (3) ['이호준', '이호준', '이호준']ㄴ
// 김은하 (2) ['김은하', '김은하']
// 이준근 ['이준근']

for(const i of board) {
  console.log(i, 회사게시판.filter(e => e === i).length)
}
// 이호준3 / 김은하2 / 이준근1


// 2번의 다른 정답
let map = new Map();
for (const i of 회사게시판) {
    map.set(i, (map.get(i) ||  0) + 1); // 순회 돌면서 해당 key값을 업데이트 해주는 식으로
}

// 설명
map.set('이호준', (map.get('이호준') ||  0) + 1)
// => map.set('이호준', 1)
map.set('이호준', (map.get('이호준') ||  0) + 1)
// => map.set('이호준', 2)
map.set('이호준', (map.get('이호준') ||  0) + 1)
// => map.set('이호준', 3)
map.set('김은하', (map.get('김은하') ||  0) + 1)
// => map.set('김은하', 1)


/////////

// set 순회

let r = new Set('abcdeeeeeeeee');
console.log(s);
console.log(s.size);

// Set에 값을 추가하기
r.add('f');
console.log(r);

// Set을 순환하기
for (var variable of r) {
  console.log(variable);
}

// 교집합

let a = new Set('abc');
let b = new Set('cde');

// 교집합
let cro = [...a].filter(value => b.has(value))

// 합집합
let union = new Set([...a].concat(...b))

// 차집합
let dif = new Set([...a].filter(x => !b.has(x)));





