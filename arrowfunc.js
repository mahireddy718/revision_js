//  6

//arrow fun->shorter syntax, call backs ,easy to chain operations
let sum=(a,b)=>{
    return a+b;
}
console.log(sum(2,3));

//we can write in one line also
let add=(a,b)=>a+b;
console.log(add(3,5));

let diff=(a,b)=>a-b;
console.log(diff(3,5))

mult=(a,b)=>a*b;
console.log(mult(3,2));

//functions returned from another functions


// function outer(){
//     function inner(){
//         console.log("inner");
//     }
//     return inner;
// }

// let returnedfunc=outer();
// console.log(returnedfunc); //it will print inner function code totally
// returnedfunc(); //inner  //it will print inner i.e ans


// let a=10;

// function outer(){
//     a=100;
//     function inner(){
//         console.log(a);//100
//     }
//     return inner;
// }

// let returnedfunc=outer();
// console.log(returnedfunc); //it will print inner function code totally
// returnedfunc(); //inner  //it will print inner i.e ans



//Function along with lexical scope=closure (will have ref to all variables)
//here reference to a is stored
let a=10;

function outer(){
    a=100;
    function inner(){
        console.log(a);//100
    }
    return inner;
}

let returnedfunc=outer(); //it go to outer loop and then inner loop take all values
  //now a is updated from 100 to 50 
a=50;
console.log(returnedfunc);  //it prints inner func

returnedfunc(); //50


//if we create lot of closure there will be over consumption of memory and then there will be memory leaks
//use closuers only when needed