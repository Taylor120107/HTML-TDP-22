console.group("Hellos");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.groupEnd();

//variables
//3 specific ways to declare variable
//there is var but not used anymore 
//due to it being a global variable meaning it can be amended anywhere 
// let is block scoped so can update its value
let a = 500
const b = 600

// data types
//string, boolean, symbol, null, bigInt, undefined, number, nAn
// typeof tells you which data type you are working with 

//operators
// +,-,*,/,%- this is called modulus! finds remainders
// >, <, >==, <==
//& and or - bitwise
//&& --- or - logical 
//= - assignment operator
//== - compares and checks equality of values 
//=== - checks the quality of values and also their data types
console.log(1 == "1"); //will give values of true
consolelog(1 === "1");// will give false as it states that the data type is different
// !- not- can use this instead of one of the equals to get the same result above 

//iteration otherwise known as loop
//have a set of instructions want to repeatedly complete until an outcome is met
//3 types
//for loop- if you know the end point of loop use this i.e 10 times
//use the below two loops when you dont know the end point
//while loop-only executes when the given condition is true
//do while- executes at least once regardless of if the condition is true

//for(initialisation; condition; iterator;){statement you want to run}
for(leti=0; i<=10; i++){
    console.log(i);
}
//while loop
let i = 15
while(i>20){
    console.log("while loop")
}
//do-while
do{
    console.log("do while loop");
}while(i>20);

//conditionals
//truthy or falsey- stating that all value have an inherant boolean value defaults to truthy
//abc 123 will always be truthy
//null undefined etc will always be falsey
//example of falsey
let g;
console.log(typeof g);

if(g){
console.log("flasey, not executed");
}
//example of truthy
let h = 45
if(h){
    console.log("truthy,executed")
}

//if statements
//if(condition){statement}else if(condition){statement2}...else(default)
//if else if used need to finish with else
let temp =12;
if(temp<20){
    console.log("turn on heating");
}else if(temp>=20 && temp<=27){
    console.log("turn n ac");
}else{
    console.group("do nothing")
}
// you can nest if statments as well 
let temp2 =12;
if(temp<20){
    console.log("turn on heating");
    if(temp==15){
        console.log("ideal")
    }
}else if(temp>=20 && temp<=27){
    console.log("turn n ac");
}else{
    console.group("do nothing")
}

//switch cases
let day = "Mon"
switch(day){
    case"Mon":
        console.log("Day 1");
        break;
    case"Tues":
        console.log("Day 2");
        break;
    case"Weds":
        console.log("Day 3");
        break;
    case("Thurs"):
        console.log("Day 4");
        break;
    case("Fri"):
        console.log("Day 5");
        break;
    case("Sat"):
        console.log("Day 6");
        break;
    case("Sun"):
        console.log("Day 7");
        break;
    default:
        console.log("Default");
}

//ternary statements
//ternary operator - ?
//syntax condition ? valueIfTrue : valueIfFalse
let age = 10
if(age>=25){
    console.log("Can but alco")
}else{
    console.log("cant buy alco")
}
// ternary version
let tern = age>=25 ? "can buy alco" : "cant buy alco";
console.log(tern, "ternary");

//objects - used to store an un ordered collection of related data (key:value pairs)
let personObj = {
    name:"Luke",
    age:"28",
}
console.log("person", personObj); // shows obj 
console.log(JSON.stringify(personObj)); //shows data as string

//json- javascript object notation- 
//it creates a file of data and needs a request to acces it 
// called GET request

let myObj =`[{
    "name" : "Luke"
    "age" : "23"
},
{
    "name" : "John"
    "age" : "12"
}]`;
console.log("JSON", myObj);

//arrays
const myArr = [1,"2",3,4,5,6];
const names = ["Luke", "bob",];
console.log(myArr);
console.log(names);
consoloe.log(names[1]);//specifies individual vales from array
names.push("John");//add new data to array 

//destructuring 
const [a1,a2,a3,a4,a5,a6,a7] = myArr
console.log(myArr[0]+myArr[1]);
console.log(a1+a2);
console.log(a1+parseInt(a2));//enables you to chage string to int
//spread operator
const[name1,name2,...rest] = names;
console.log(name2)
console.log("rest:",rest);

const grades=[21,43,56,67,67,88];
const[,,,grade, ...others]=grades;// the commas skip the items then the others has been defined as all other details
console.log(grade);
console.log(others);

//functions/methods - are a set of instructions you want to execute or re use
//3 ways to write functions

//functions- global scope, can call the function before its been declared

myFun("normal function","hi");//will still run even if its not defined

function myFun(p,x){
    console.log(p);
    console.log(p+x);
}

//function expression- has to be initialised before called
myFun2("functions expression")// this needs to be below as the const is the initialisation
const myFun2=function(x){
    console.log(x);
}
myFun2("functions expression")

//arrow functions - more concise way of writing function expressions
const myfun3 = (z) => console.log(z);

const myFun4 = (t,u) => {
    let sum =t + u;
    console.log(t, "+", u, "=", sum);
}
myfun3("arrow function");// z- arrow function now
myFun4(3,4);

//callbacks - pass in a function as an arguement/parameter/input in to another function

//promises- an operation that hasnt been completed
//they have 3 states in which they can be whicha re:
//-fulfilled
//-rejected
//-pending

// closures are utilised for data privacy
//outer function
const fullName = (fname) => {
    let intro = "My name is ";
    //inner  function
    let lName = (s) => {
        return `$(intro) $(fname) $(s)`;//return exposes result of a function
    }
    return lName;
}

let first = fullName("Luke");
console.log(first);

let second = first("Taylor");
console.log(second);

// qa closure excercise

let multiply = (a) => {
    return (y) => {
        return x * y
    };
    }



