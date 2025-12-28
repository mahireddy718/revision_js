//  2

//non primitive or reference types  
//objects, arrays, functions 

//when we want to group all properties together 
//we can't use many variables right for ex if a student having name,rool n.o ,age etc..
//so that's why we use these data types

let course={
    title:"jS",
    ds:"learning",
    rating:5,
};
console.log(course);  //here we are accesing entire course
console.log(typeof(course));

//to access specific el two ways 
//1
console.log(course.title);
//2
console.log(course["rating"]);  //single or double quotes any


//value types vs reference types

//copy by value
let x="mahi";
let y=x;
x="reddy"
console.log(x); //reddy //x will be updated
console.log(y); //mahi // y will take x previous value because x is updating after y

//copy by reference
//wheneve we use non primitive data types they copy reference of variable not value
let p={name:"ram"};
let q=p;
p.name="sri";
console.log(p);  //sri
console.log(q);  //sri

//arrays
//arrays and functions are actually objects
let subjects=['js','dsa','java',6,true,null];
console.log(subjects[0]);
console.log(subjects[3]);
console.log(subjects[4]);
console.log(typeof(subjects));
console.log(subjects);
console.log(subjects.length);
