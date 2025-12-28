//  5

//Functions- first class citizens ->it can be assigned to variables,passed as arguments and even stored in d.s
//higher-order functions ->it is a function that takes one pr more more functions as argumnets ,or returns a function as a result
//ex->operate is higher order func

function add(a,b){  //it is global
    return a+b;
}
console.log(add); //it will print add function totally not ans
console.log(add(2,3))

//we can assign function to a variable also
let sum=function (a,b){  //because of let sum is local and this func also local
    return a+b;
}
console.log(add); //or
console.log(add(2,3))

//functions can be passed as arguments 
function mult(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}

function operate(operation,a,b){
    return operation(a,b);
}
console.log(operate(mult,10,2));
console.log(operate(div,10,2));