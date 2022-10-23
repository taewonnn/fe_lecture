// this 

// 누가 나를 불렀는가?
// . 바로 앞에있는것이 this...


function a(){
  console.log(this)
}
a();   // window

console.log(window)  // Window

function 함수() {
  console.log(this);
}  
함수()  // window

var 오브젝트 = {
  data: "kim",
  함수 : function() {
    console.log(this)
  }
}

오브젝트.함수();  //  {data: 'kim', 함수: ƒ}


let test = {
  one: 1,
  two: 2,
  three: function() {
      console.log(this);
  }
}
test.three()  // {one: 1, two: 2, three: ƒ}


let test2 = test.three


// 추가 예제 //

function sayName(){
  console.log(this.name)
}

var name = 'Hero'

let peter = {
  name : 'Peter Parker',
  sayName : sayName
}

let bruce = {
  name : 'Bruce Wayne',
  sayName : sayName
}

sayName(); // window
peter.sayName();
bruce.sayName();



//////


var c = {
  'hello':'world',
  'say':sayName
}

var b = {
  'c':c
}

var a = {
  'b':b
}

a.b.c.say()  //c