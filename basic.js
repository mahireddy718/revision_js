//  1

//JavaScript is fundamentally synchronous and single-threaded in its execution model. This means that, by default, JavaScript code runs line by line, and each operation must complete before the next one can begin.
console.log("mahi") //to run in terminal we use 
//node file_name 
//for ex to run this this file we use node basic.js


//primitive data types /value types
//string , number ,boolean, undefined,null,symbol

//js is weekly typed (loosely typed)->we donot have to declare a data type of variable and java script automatically converts types when needed
// weakly typed mean risk of bugs is higher and have automatic conversions
//js is dynamic language ->we can change type and value of variable for ex see in x

let x="reddy"   //to delclare a variable but we can declare variable without let aslo
console.log(x)
console.log(typeof(x))  //string  //it will give data type of variable 
x=10;
console.log(x);  //10
console.log(typeof(x));  //number

let b='p';   //normally it is char but in js it is also a string
console.log(b);
console.log(typeof(b));

//number

let y=1;
console.log(y);
console.log(typeof(y));  //number

let z=1.555;
console.log(z);
console.log(typeof(z)); //still a number

//boolean
let p=true;
console.log(p);
console.log(typeof(p));

//undefined
//before we are putting a value at the time of decl now check without value
let w;
console.log(w); //it will give type un defined
w=9;
console.log(w);

//object
let a=null;
console.log(a);
console.log(typeof(a));  

let c=undefined;
console.log(c); //undefined but instead of undefined we use null
