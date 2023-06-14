function getFinalString(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    if (stack.length >= 3 && stack.slice(-3).join('') === 'AWS') {
      stack.pop(); // 'S' 제거
      stack.pop(); // 'W' 제거
      stack.pop(); // 'A' 제거
    }
  }

  let result = stack.join('');
  return result.length > 0 ? result : '-1';
}

console.log(getFinalString('AAWSWS')); // 출력: 'WS'
console.log(getFinalString('ABCDSW')); // 출력: 'ABCD'
console.log(getFinalString('AWAWSSG')); // 출력: 'G'





// 2번


function findRange(num) {
  // Write your code here

  // 최대값
  // array 변환
  let maxArr = num.toString().split('');

  let firstNum = maxArr[0];

  maxArr.forEach((el, i) => {

    if (el === firstNum) {
      maxArr[i] = '9'
    }
  })



  // 최소값
  // array2 변환
  let minArr = num.toString().split('');


  if ( firstNum === '1') {
    // 맨 앞이 1인 경우 -> 0이 아닌 가장 앞자리수 찾기
    let notzero = -1;
    for (let i = 0; i < minArr.length; i++) {
      if (minArr[i] !== '0' && minArr[i]  !== '1') {
        notzero = minArr[i];
      }
    }

    // 숫자와 같은 숫자인 것들 모두 바꾸기
    minArr.forEach((ele, i) => {
      if(ele === notzero) {
        minArr[i] = '0'
      }
    })
  } else {
    // 맨앞 자리와 같은 숫자 1로 바꾸기
    minArr.forEach((ele, i) => {
      if(ele === firstNum) {
        minArr[i] = '1'
      }
    })
  }


  // 최대값 - 최소값
  let dif = parseInt(maxArr.join('')) - parseInt(minArr.join(''));


  return dif;

}

// 예시 입력값과 findRange 함수를 호출하여 결과를 출력합니다.
console.log(findRange(111));    // 예상 결과: 888
console.log(findRange(10018));  // 예상 결과: 80088
