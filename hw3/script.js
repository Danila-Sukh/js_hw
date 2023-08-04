// Задание 1

let exponentiation = number => Math.pow(number, 3);
console.log(exponentiation(2) + exponentiation(3));

// Задание 2"


function salaryAfterTaxes() {
    const userSalaryAmount = prompt('Введите размер Вашей зароботной платы: ');
    if (isNaN(userSalaryAmount)) {
        alert(`Вы ввели не число! Попробуйте еще раз!`);
        salaryAfterTaxes();
    } else {
        const resultOfMathOperation = userSalaryAmount - (userSalaryAmount * 0.13);
        console.log(`Размер заработной платы за вычетом налогов равен: ${resultOfMathOperation}.`);
    }
}
salaryAfterTaxes();


function salaryAfterTaxes() {
    const userSalaryAmount = prompt('Введите размер Вашей зароботной платы: ');
    if (isNaN(userSalaryAmount)) {
        alert(`Вы ввели не число! Попробуйте еще раз!`);
        return 0;
    } else {
        const resultOfMathOperation = userSalaryAmount - (userSalaryAmount * 0.13);
        return resultOfMathOperation;
    }
}
let result = salaryAfterTaxes();
console.log(`Размер заработной платы за вычетом налогов равен: ${result}.`);

// Задание 3

function maxNumber() {
    const num1 = Number(prompt(`Введите первое число: `));
    const num2 = Number(prompt(`Введите второе число: `));
    const num3 = Number(prompt(`Введите третье число: `));

    if(num1 >= num2 && num1 >= num3){
        return num1;
    } else if (num2 >= num1 && num2 >= num3){
        return num2;
    } else{
        return num3;
    }
}
const result =  maxNumber();
console.log(`Максимальное значение среди введенных чисел ${result}.`);

// Второй вариант

function maxNumber() {
    const num1 = Number(prompt(`Введите первое число: `));
    const num2 = Number(prompt(`Введите второе число: `));
    const num3 = Number(prompt(`Введите третье число: `));

    const largestNumber = Math.max(num1, num2, num3);
    return largestNumber;
}
const result =  maxNumber();
console.log(`Максимальное значение среди введенных чисел ${result}.`);


// Задание 4

let Addition = (num1, num2) => num1 + num2;
console.log(Addition(2, 6));

let Multiplication = (num1, num2) => num1 * num2;
console.log(Multiplication(2, 6));

let Division = (num1, num2) => num1 / num2;
console.log(Division(2, 6));

let Difference = (num1, num2) => num1 - num2;
console.log(Difference(2, 6));

function Difference(num1, num2) {
    if (num1 === num2) {
        return 0;
    } else if (num1 > num2) {
        return num1 - num2;
    } else {
        return num2 - num1;
    }
}
console.log(Difference(6, 6));
console.log(Difference(3, 6));
console.log(Difference(15, 6));