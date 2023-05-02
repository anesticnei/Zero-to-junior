const numberOne = Number(prompt("Podaj pierwsza liczbę działania"));
const operatorArythmetic = prompt("Podaj operator wybierajac z (+,-,*,/ lub %");
const numberTwo = Number(prompt("Podaj druga liczbe działania"));
let error = '';
let result = 0;

function add(num1, num2){return num1 + num2}
function substract(num1, num2){return num1 - num2}
function multiply(num1, num2){return num1 * num2}
function divide(num1, num2){
    if(num2 === 0){alert("Nie dzielimy przez zero");
    return 0;
    }
    else{return num1 / num2}
    }

function percentage(num1, num2){return num1 % num2};

function calculate(num1, operatorArythmetic, num2){
    error = '';
    if(isNaN(num1) || isNaN(num2)){
        error = alert("Podane właściwości nie sa liczbami");
        return 0;
    }
    switch(operatorArythmetic){
        case "+": return add(num1, num2);
        case "-": return substract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        case "%": return percentage(num1, num2);
        default:
            error = "Podany operator jest niewłaściwy";
            return 0;
    }
}

function displeyResult(){
    if(error) alert(error);
    else alert(result);
}

result = calculate(numberOne, operatorArythmetic, numberTwo);
displeyResult();

while(true){
    const nextOperator = prompt("Podaj kolejny operator wybierajac z (+,-,*,/ lub %");
    if(!nextOperator)
    break;

    const nextNumber = Number(prompt("Podaj kolejna liczbę działania"));

    result = calculate(result, nextOperator, nextNumber);
    displeyResult();
};
