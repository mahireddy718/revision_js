//  4

//functions 

createCourse('abc'); //creating abc because in js we can can acces functions from anywhere
console.log(a)// undefined  //if i use let it will thow error that accessing before decl
function createCourse(coursename){
    console.log('creating'+ coursename);
}

var a=10;   //if we use let or const it will thow error for above console.log(a) because those are strict and they must be initialized before accesing
console.log(a);//10
createCourse('dsa');

//Execution context
//1.memory allocation -variable environment
//2.code phase -thread of execution


//Hoisting->  able to access the variables and functions before they are actually intialized or putting any value into them

//window and this
console.log(b);  //undefined  these are in chrome console
console.log(this.b); ////undefined 
console.log(window.b); //undefined 
var b=10;
console.log(b);  //10
console.log(this.b); //10
console.log(window.b); //10
console.log(window); //global object in browser
console.log(this===window)// basically both window and this are same both contaun same info

function hello(){
    let x=1000;
    console.log(x);
}
let x=12; //it will have seperate local space but ouput is 1000
hello(); //when hello is called it will go inside func 
//now for let local variable is created with no value
//when i enter 33 line now value for x is assigned 
//for printing that 1000 in console we need to move to next line but memory is allocated before your output is printing 
//in scope sec of webbrowser memory is allocated

//when u come out of hello local  will be gone

//lexical scope 
//if variable is not declared inside func then
//we will take the value from outside function and before function call where variable is present
function reddy(){
    console.log(z);
}
let z=100;  
reddy();
