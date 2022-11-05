// callback 함수
// 나중에 함수를 부르겠다

function sum(x, y, 콜백함수){
  // 1000 줄
  콜백함수(x + y);
  // 1000 줄
  // return x + y
}

function documentWriter(s){
  document.write('콜백함수', s)
}

// sum(10, 20, console.log)
sum(10, 20, documentWriter)

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 구문 : arr.map(callback(currentValue[, index[, array]])[, thisArg])



function 제곱(x) {
  return x **2
}



// 위 함수를 화살표함수로 만들어 보기
// x => x**2


let arr = [10, 20, 30, 40, 50]
arr.map(제곱)
arr.map(x => x**2)


//////////////

function 두배(x) {
  console.log(x * 2)
}

let arr2 = [10, 20, 30, 40, 50]
arr.forEach(두배)


///////////////////////////

//문제 : 화살표 함수를 활용하여 아래 Map과 동일한 기능을 하는 forEach문을 완성해주세요
let arr3 = [10, 20, 30, 40, 50]
arr3.map(x => x**2)

// 정답
let result = []
arr3.forEach(e => {
  result.push(e ** 2)
})
console.log(result)