//8
//promises
//promises are introuced when we have nested call backs ( problems like ->callback hell ,pyramid of doom) 
//You’ve got it — Promises were introduced mainly to handle nested callbacks (also called callback hell) and make asynchronous code easier to read, chain, and manage.


//promises-object  (promises are nothing but an obj)
//3 states -pending,fulfilled,rejected

//if u have a promise u can handle with then and catch 
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('data fetched'); //if we use reject-> error
        },5000);
    });
}
// getData()
//   .then(result=>{           //we can see chain over here then and catch
//     console.log(result);   
//   })
//   .catch(error=>{
//     console.error(error);
//   })


//instead of .this and .catch we use
async function fetchData(){
    try{
        const result=await getData();
        console.log(result);
    }catch(error){
        console.error(error);
    }
}
fetchData();

//common higher order functions
//1.Map

const nums=[1,2,3,4,5];
console.log(nums);
const doublednums=nums.map((num)=>2*num);
console.log(doublednums);

//2.Filter
const number=[5,6,7,8];
console.log(number);
const even=number.filter((numb)=>numb%2===0);
console.log(even);

//3.reduce  like sum of all or product of all in one

const val=[2,3,4,5,6];
console.log(val);
const sum=val.reduce((accumulator,values)=>accumulator+values,0)  //sum=0 initially that 0 indicates
console.log(sum);