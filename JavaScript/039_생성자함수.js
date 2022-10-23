// 생성자 함수

let book = {
  책이름: '완전정복 javascript',
  가격: 1000,
  저자: '홍길동',
  출판일: '22. 10. 11'
}


let newbook = {}

newbook['책이름'] = '기초 javascript'
newbook['가격'] = '10000'
newbook['저자'] = '이호준'
newbook['출판일'] = '21. 1. 1.'

// 새로운 책(데이터)을 받을 때 일일이 다 써서 생성해야하는가?
// 효율적으로 새로운 데이터 생성하는 방법 -> 생성자 함수


function Book(책이름, 책가격, 저자, 출판일) {
  this.책이름 = 책이름
  this.책가격 = 책가격
  this.저자 = 저자
  this.출판일 = 출판일
  return this
}

// let data = Book('CSS', 20000, '유진', '22. 12. 30.')
// console.log(data) // return this가 없으면 undefined가 나옴

let data = new Book('CSS', 20000, '유진', '22. 12. 30.')
console.log(data) // new를 붙일 경우 객체처럼 나옴


let book1 = new Book('HTML', 10000, '유진', '21. 4. 5.')
let book2 = new Book('JAVA', 30000, 'hojun', '20. 12. 30.')
let book3 = new Book('JS', 40000, 'taewon', '22. 10. 10.')

console.log(book1, book2, book3);


// new 키워드를 사용했을 경우
function Book(책이름, 책가격, 저자, 출판일){
  // this = {}
  this.책이름 = 책이름
  this.책가격 = 책가격
  this.저자 = 저자
  this.출판일 = 출판일
  // return this
}