// this 조작


// this - call()   -- 인자 한 개 사용할 때

var peter = {
  name : 'Peter Parker',
  sayName : function(){    
		console.log(this.name);
	}
}

var bruce = {
  name : 'Bruce Wayne',
}

peter.sayName(); // Peter Parker
peter.sayName.call(bruce);  // Bruce Wayne




// this - apply()  -- 인자 여러 개 사용할 때

var peter = {
  name : 'Peter Parker',
  sayName : function(is, is2){    
		console.log(this.name+ ' is '+ is + ' or ' + is2);
	}
}

var bruce = {
  name : 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']);   // Bruce Wayne is batman or richman




// this - bind()

function sayName(){
  console.log(this.name);
}

var bruce = {
  name: 'bruce',
  sayName : sayName
}

var peter = {
  name : 'peter',
  sayName : sayName.bind(bruce)
}

sayName(); // window
peter.sayName();  // bruce
bruce.sayName();  // bruce
