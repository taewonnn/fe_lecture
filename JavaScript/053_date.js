// date

Date()  // 현재 시간 표시 'Thu Oct 13 2022 15:25:39 GMT+0900 (한국 표준시)'

let d = new Date()
d.getDate() // 13
d.getmonth  // 9  -> 10월이 나와야 하지만 0부터 시작이라 9라고 나옴  현재 달을 구하기 위해 +1을 해야함
d.getday   // 4  -> 일:0 월:1 화:2 수:3 목:4 금:5

let d = new Date()
switch (d.getDay) {
  case 0:
    console.log('일요일')
    break;
  case 1:
    console.log('월요일')
    break;
  case 2:
    console.log('화요일')
    break;
  case 3:
    console.log('수요일')
    break;
  case 4:
    console.log('목요일')
    break;
  default:
  case 5:
    console.log('금요일')
    break;
  case 6:
    console.log('토요일')
    break;
  case 7:
    console.log('일요일')
    break;
}

let d = new Date()
d.getHours() // 15  현재시간 - 시간

let d = new Date()
d.getMinutes // 26 현재시간 - 분

let d = new Date()
d.getSeconds // 23 현재시간 - 초

let d = new Date()
d.getFullYear() // 2022 현재년도


// 2023년 1월
new Date(2023, 0)

// 2023년 1월 21일 10시
new Date(2023, 0, 21, 10)

// 아래와 같이 표현하면 가독성이 좋다 하지만 문제 발생 1월이 아니라 2월로 나옴
new Date('2023/1/21/10:00:00')  // Sat Jan 21 2023 10:00:00 GMT+0900 (한국 표준시)


// UTC와 today의 지정 로캘 KST와 차이는 -9시간이다
today = new Date()
today.getTimezoneOffset() / 60  // -9


today.toString();     // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toTimeString(); // -> 12:30:00 GMT+0900 (대한민국 표준시)

today = new Date('2023/1/20/10:00:00')
today.toString();
today.toISOString();
today.toISOString().slice(0, 10);
today.toISOString().slice(0, 10).replace(/-/g, '')

//http://www.w3bai.com/ko/tags/ref_language_codes.html#gsc.tab=0
//http://www.w3bai.com/ko/tags/ref_country_codes.html#gsc.tab=0
today.toLocaleString('ko-KR'); // -> 2020. 7. 24. 오후 12:30:00
today.toLocaleString('en-US'); // -> 7/24/2020, 12:30:00 PM
today.toLocaleString('ja-JP'); // -> 2020/7/24 12:30:00


const dayNames = [
  '(일요일)',
  '(월요일)',
  '(화요일)',
  '(수요일)',
  '(목요일)',
  '(금요일)',
  '(토요일)'
];


// getDay 메서드는 해당 요일(0 ~ 6)을 나타내는 정수를 반환한다.
const day = dayNames[today.getDay()];

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
const ampm = hour >= 12 ? 'PM' : 'AM';






