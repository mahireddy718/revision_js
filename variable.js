//  3

//let var const
//Hoisting ->memory is allocated before initialization and we can acces before allocation like incase of var
//temporal dead zone  ->these are memory alllocated we cannot access memory before initialization like for let and const(both are hoisted beacuse memory is allocated)

//for local variables like let and const(cannot acces before init)
//var global (can acces before init )
console.log(c);  //undefined
console.log(a);  //cannot acces before init
console.log(b);  //cannot acces before init
let a=10;
const b=20;  //values are not changed
var c=30;

//const and let are block scoped means {if we declare variable in that specific block it only accesible inside block only}
{
  let a=10;
const b=20; 
var c=30;  
}
console.log(c); //30
console.log(a); //a is not defined
console.log(b); //b is not defined

