
console.log("Hello World!");

const text = "this is a message";

console.log(text);

console.info(text);

console.dir(text);

console.warn(text);

console.error(text);

console.log("%c" + text, "color: black; background-color: white; font-size: 20px; padding: 5px;");

console.log("%c" + text + "%c" + text,
"color:red;", "color:yellow;");

let Name = "Luke Taylor";
const surname = "Taylor";
const birthplace = "Oxford";
const starsign = "Scorpio";

let favcar = "Ford";
let model = "Focus RS";

console.log("my favourite car is " + favcar + " and the model is " + model );

console.log("%c" + Name, "color:orange; font-style: bold; padding: 10px; background-color:black; font-family : fantasy"); 

let totalMoney = 4000;
let moneyPaidSoFar = 2348
let totalLeftToPay = totalMoney - moneyPaidSoFar; 

console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);

let a = 1
let b = 2

a
++
b

console.log(`a = ${a}\nb = ${b}`);

let c =1;
let d = 1;

c++; d;

console.log(`c= ${c}\nb = ${d}`);

// iteration

//loops

//for
//uses a counter
//runs while a condition is met
for(let i =0; i < 10; i++) {
    console.log(` = ${i}`)
}

//while
//works with booleans
//run until a condition is no longer true

let condition = true;
let increment = 0;

while(condition === true){
    console.log(`increment = ${increment}`);
    increment ++

    if(increment===3) {
        condition= false;
    }
}

//do-while 
//like a while loop 
//but it will always run at least once

let ab = false;
do {
    console.log("run forest run");
} while(ab === true);

//switch cases
//run until a break or a return
//can be much more effective than lage if-else if statements

let num = 1

switch(num) {
    case 0:
        console.log("number is zero");
        break;
    case 1:
        console.log("we are number one");
    case 4:
        console.log("We are at 4");
    case 10:
        console.log("We made it to ten")
        break;
    default:
        console.warn("not here")
}

// iteration practice task

let i = 2;
while (i<=6) {
    console.log(i+1);
    i=i+2
}

for(let i = 2; i<=6; i= i +2) {
    console.log(i+1);
}

//QA Com excercise iteration

let ac = 100;
while(ac <= 200){
    console.log(ac);
    ac++;
}

for (let i = 0; i < 10; i++){
    for (let j =1; j <=10; j++){
        console.log(j)
    }
}

for(let ac = 100; ac <= 200; ac++){
    console.log(ac)
}



