let numberOne = Number(prompt("Digite o primeiro número"));
let numberTwo = Number(prompt("Digite o segundo número"));

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const multi = numberOne * numberTwo;
const div = numberOne / numberTwo;
const restDiv = numberOne % numberTwo;

if (numberOne == numberTwo) {
    alert("Os números são iguais.")
}   else {
        alert("Os números são diferentes.")
}

alert(`A soma entre os dois números é ${sum}`);
if (sum % 2 == 0) {
    alert ("A soma é par.")
}   else {
        alert("A soma é ímpar.")
}

alert(`A subtração entre os dois números é ${sub}`);
alert(`A multiplicação entre os dois números é ${multi}`);
alert(`A divisão entre os dois números é ${div}`);
alert(`O resto da divisão entre os dois números é ${restDiv}`)

