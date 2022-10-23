// while문

// while(조건문) {
//  실행문;
// }

let i = 0;
While(i < 10) {
  console.log(i)
  i++;
}

let i = 2;
let j = 1;
while (i < 10) {
  while (j < 10) {
    console.log(`${i} X ${j} = ${i * j}`)
    j++;
  }
  j = 1;
  i++;
}


let value = [10, 20, 30, 40];
let x = 0;
while(x < value.length) {
  console.log(value[x]);
  x++
}


// do while문  - 무조건 일단 한 번 실행은 해라
do {
  실행문;
} while(조건문);

// Ex
let sum = 0;
let i = 0;

do {
		i++;
		sum += i;
} while (i < 10);

console.log(sum);


// continue / break



for(let i =0; i < 10; i++) {
  if ( i === 4 || i ===5) {
    continue;
  }
  console.log(i);
}

for(let i =0; i < 10; i++) {
  if ( i === 4 || i ===5) {
    break;
  }
  console.log(i);
}




// 레이블

// 💡 레이블 사용시 주의사항

// - 레이블은 반드시 `break`문 또는 `continue`문 위에 있어야 한다.
// - `break`문은 모든 레이블에서 사용할 수 있다.
// - `continue`문은 반복문에서만 사용 가능하다.


timestable:
for (let x = 2; x < 10; x++) {
	for (let y = 1; y < 10; y++) {
		if (x === 4) break timestable;
		console.log(`${x} X ${y} = ${x * y}`);
	}
}
