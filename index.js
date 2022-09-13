//1.What is a Temporal Dead Zone?

console.log("Temporal Dead Zone");
// console.log(variableA);
// let variableA = 10;//reference error

// console.log(variableB);
// const variableB = 10;

let variableA = 10;
console.log(variableA);//declare the variable above

console.log("------------------------------------------------------");

//2.What is the for-in loop in JavaScript? Give its syntax
console.log("---------For in Loop--------");
const fruits=["Guva","Apple","Orange","Mango","Litchie"];

for(const index in fruits){
    console.log(index);
}

// let object = {
//     name:'sush',
//     age:20,
//     salary:20000
// }

// for(let key in object){
//     console.log(key);
// }
console.log("------------------------------------------------------");

//6.Write code to explain map and filter in arrays
console.log("----------------map--------------");
const listOfNum=[2,3,4,5,6,8,9,1];
const mappedNum=listOfNum.map(item => item*2)
console.log(listOfNum);
console.log(mappedNum);

console.log("----------------Filter--------------");
const filteredNum=listOfNum.filter(item => item > 2)
console.log(listOfNum);
console.log(filteredNum);
console.log("------------------------------------------------------");


//7.Explain passed by value and passed by reference
console.log("pass by value");
let a=10;
let b = a;

b = a + 5;
console.log(b);
console.log(a);

console.log("pass by reference");

let obj1 = {
    name:'sush',
    age:20,
}

let obj2 =obj1;

obj2.age = 25;
console.log(obj2);

let x = [1,2,3];
let y = x;

y.push = 4;
console.log(y);
console.log(x);



console.log("------------------------------------------------------");
