const calculator = document.getElementById("calculator-screen")
const calculatorButtons= document.getElementById("calculatorButtons")

const one = () => {
    calculatorButtons.value = calculatorButtons.value + 1 ;
    
}

const two = () => {
    calculatorButtons.value =calculatorButtons.value + 2;
    

}

const three = () => {
    calculatorButtons.value = calculatorButtons.value + 3;
    

}

const four = () => {
    calculatorButtons.value = calculatorButtons.value + 4;
   

}

const five = () => {
    calculatorButtons.value = calculatorButtons.value + 5;
    

}

const six = () => {
    calculatorButtons.value = calculatorButtons.value + 6;
    

}

const seven = () => {
    calculatorButtons.value = calculatorButtons.value + 7;
    

}

const eight = () => {
    calculatorButtons.value = calculatorButtons.value + 8

}

const nine = () => {
    calculatorButtons.value = calculatorButtons.value + 9;
    

}

const zero = () => {
    calculatorButtons.value = calculatorButtons.value + 0;
   
}

const plus = () => {
    calculatorButtons.value = "+";
    

}

const minus = () => {
    calculatorButtons.value = "-";
   

}

const mult = () => {
    calculatorButtons.value = "*";
    

}

const divide = () => {
    calculatorButtons.value = "/";
    

}

const clearIt = () => {
    calculatorButtons.value = "";
    

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