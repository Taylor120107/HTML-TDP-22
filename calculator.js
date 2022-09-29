const calculator = document.getElementById("calculator")

const one = () => {
    calculator.value = 1 ;
    
}

const two = () => {
    calculator.value = 2;
    

}

const three = () => {
    calculator.value = 3;
    

}

const four = () => {
    calculator.value = 4;
   

}

const five = () => {
    calculator.value = 5;
    

}

const six = () => {
    calculator.value = 6;
    

}

const seven = () => {
    calculator.value = 7;
    

}

const eight = () => {
    calculator.value = 8

}

const nine = () => {
    calculator.value = 9;
    

}

const zero = () => {
    calculator.value = 0;
   
}

const plus = () => {
    calculator.value = "=";
    

}

const minus = () => {
    calculator.value = "-";
   

}

const mult = () => {
    calculator.value = "*";
    

}

const divide = () => {
    calculator.value = "/";
    

}

const clear = () => {
    calculator.value = 0;
    

}


const calc = (a,b,operator) =>{
    let result;
    switch(operator){
        case"+":
        result = a+b;
        break;
        case "-":
        result = a-b;
        break;
        case"*":
        result = a*b;
        break;
        case"/":
        result = a/b;
        break;
    default:""
    }
    
}