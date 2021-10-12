function sayHello(name){
    console.log("Hello",name)
}
sayHello("Anupam")

console.log(this)
//console.log(window)
//console.log(this==window)

//console.log(window.document)
//console.log(document)

var foo 
console.log(typeof foo)

foo ="anupam"
console.log(typeof foo)
console.log(typeof this.foo)
console.log(typeof global.foo)
//console.log(typeof window.foo)

console.log(this.foo == foo == global.foo)

foo = 1000
console.log(typeof foo)
foo = 123456789077746345375834745777575858577433
console.log(foo)
console.log(typeof foo)
foo = 1.23
console.log(typeof foo)


foo=true
console.log(typeof foo)

foo = '#'
console.log(typeof foo)
foo = function(){
    console.log("Inside the function")
}
console.log(typeof foo)

foo()

foo={}
console.log(typeof foo)

foo.name="Anupam"
foo.location="Mumbai"
console.log(typeof foo)
console.log(foo)
console.log(foo['name'])
console.log(foo['location'])

var property = 'location'
console.log(foo[property])

var no ='10'
console.log(no==10)
console.log(no===10)

console.log(no+10+20)
console.log(10+20+no)

console.log(no*10)

f1()

function f1(){
    console.log("inside f1")
}

f1()
//f2()
var f2=function(){
    console.log("Inside f2")
}

f2()

f3()

function f3(){
    for (var i=1;i<=10;i++){
        console.log("i value inside : ",i)
    }
    console.log("i value outside :",i)
}

//console.log("i value outside f3 :",i)












