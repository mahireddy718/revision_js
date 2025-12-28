//  7
//functions without parameters are called anonymous func
//A closure is when a function “remembers” the variables from its outer (enclosing) function, even after the outer function has finished executing.
//closure store reference of a variable

//callback ->function that is passed as an argument to another function it is called not immediately it is called after some operation is succesfully completed 
//if call backs are no there then console.log runs before the asynchronous task(set timeout) is complete. output leads to undefined sometime and causes errors
//callback  ->to handle assync operations
//whenever we register a callback op is put into event queue
//1.event queue 
//2.event loop  //it check op is finished after finishing it is put in call stack to your scope then it is caught
function fetchData(callback){
    setTimeout(()=>{
        let data="fetched data";
        callback(data,null);
    },5000);  //it will be called atleast 5 seconds means at 5 or 6 or 7 sec later
}

function handleData(data,error){
    if(error){
        console.error(error);
    }
    else{
        console.log(data);
    }
}
console.log("start");
fetchData(handleData);

// A callback function is:
// A function that is passed as an argument to another function and is called later, usually after some operation is complete.
//is it yes. possible to pass a function as parameter to another func in call back func without using asynchronous state 

//nested call backs are hard to read difficult to handle and hard to chain
//problems  -callback hell ,pyramid of doom
//also called inversion of control
asyncOperation1(arg1,(result1)=>{
    asyncOperation2(result1,(result2)=>{
        asyncOperation3(result2,(result3)=>{  
            //more nested callbacks
            asyncOperation4(result3,(result4)=>{
                //and so on..
            }); 

        });

    });
});

