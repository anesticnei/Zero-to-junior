const firstNumber = prompt("Dodaj Pierwsza Liczbe");
const operator = prompt("Podaj operator arytmetyczny(+,-,*,/ lub %");
const secoundNumber = prompt("Podaj druga liczbe");

const num1 = parseFloat(firstNumber)
const num2 = parseFloat(secoundNumber)
if((!(isNaN(firstNumber))) && (!(isNaN(secoundNumber)))){
    if( operator === "+"){
        alert(`Wynik ${num1 + num2}`)
    }else if(operator === "-"){
        alert(`Wynik ${num1 - num2}`)
    }else if(operator === "*"){
        alert(`Wynik ${num1 * num2}`)
    }else if(operator === "/"){
        if(num1 === 0 || num2 === 0){
            alert("nie przez ziroo");
        }else{
            alert(`Wynik ${parseInt(num1) / parseInt(num2)}`)
        }
    }else if(operator === "%"){
        alert(`Wynik ${parseInt(num1) % parseInt(num2)}`)
    }
}else{
    alert("Coś nie gra")
}

// const firstNumber = Number.parseFloat(prompt("Dodaj Pierwsza Liczbe"));
// const operator = prompt("Podaj operator arytmetyczny(+,-,*,/ lub %");
// const secoundNumber = Number.parseFloat(prompt("Dodaj Pierwsza Liczbe"));
// let result = null;

//     if( (!(isNaN(firstNumber))) && ((operator === "+") || (operator === "-") || (operator === "*") || (operator === "/") || (operator === "%")) && (!(isNaN(secoundNumber))) ){
//         switch (operator){
//             case "+":
//                 result = firstNumber + secoundNumber;
//                 break;
//             case '-':
//                 result = firstNumber - secoundNumber;
//                 break;
//             case '*':
//                 result = firstNumber * secoundNumber;
//                 break;
//             case '/':
//                 if(secoundNumber === 0){
//                     result = "Nie przez ziroo";
//                 }else{
//                     result = firstNumber / secoundNumber;            
//                 }
//                 break;
//             case '%':
//                 result = firstNumber % secoundNumber;
//                 break;   
//             }
//     alert (`Wynik: ${result}`);
//     }else{
//         alert("Coś nie gra")
//     }