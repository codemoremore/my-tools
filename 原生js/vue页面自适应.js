window.onload = function(){
    function Foo(){
        getName = function(){
            console.log(1);
            return this;
        }
    }
    Foo.getName = function(){console.log(2);}
    Foo.prototype.getName = function(){console.log(3);}
    var getName = function(){console.log(4);}
    function getName(){console.log(5);}

    Foo.getName();          //2
    getName();              //4
    //Foo().getName();      // Uncaught TypeError
    getName();              //4
    new Foo.getName();      //2
    new Foo.getName();      //2
    new new Foo().getName(); //3
}
let name ="张三aa"
let ba ="202044"
const person ={
	name: "hah",
	ba:23,
	say:function(){
		console.log(`我的名字是${name},出生日期${ba}`)
	}
}
person.say()