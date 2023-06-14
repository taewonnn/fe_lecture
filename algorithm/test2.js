function findRange(num) {
  // Write your code here


  // 최대값
  let maxArr = num.toString().split('');
  let firstNum = maxArr[0];

  // 맨 앞자리가 이미 9인 경우
  if (firstNum === '9') {
    let notNine = '';

    for (let i = 1; i < maxArr.length; i++) {
      if (maxArr[i] !== '9') {
        notNine = maxArr[i];
        break;
      }
    }
    maxArr.forEach((ele, i) => {
      if (ele === notNine) {
        maxArr[i] = '9'
      }
    })
  }
  else {
    // 맨 앞 자리와 같은 것은 모두 9로 바꾸기
    for (let i = 0; maxArr.length; i++) {
      if (firstNum === maxArr[i]) {
        maxArr[i] = '9'
      }
    }
  }



  // 최소값
  let minArr = num.toString().split('');

  // 맨 앞자리가 이미 1인 경우
  if (firstNum === '1') {
    let notZero = -1;

    for (let i = 1; i < minArr.length; i++) {
      if (minArr[i] !== '0' && minArr[i] !== '1') {
        notZero = minArr[i]
      }
    }

    minArr.forEach((ele, i) => {
      if(ele === notZero) {
        minArr[i] = '0'
      }
    })
  } else {
    // 맨 앞 자리와 같은 숫자 1로 바꾸기
    minArr.forEach((ele, i) => {
      if (ele === firstNum) {
        minArr[i] = '1'
      }
    })
  }

  return parseInt(maxArr.join('')) - parseInt(minArr.join(''));

}
