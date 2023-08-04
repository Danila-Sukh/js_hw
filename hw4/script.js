/*Задание 1*/

for (let i = 0; i <= 11; i++) {
    const element = i;
    if (element === 0){
        console.log(`${element} – это ноль`);
    } else if(element % 2 === 1){
        console.log(`${element} – нечетное число`);
    } else{
        console.log(`${element} – четное число`);
    }   
}

/*Задание 2*/

const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);


/*Задание 3*/

function createArray() {
    let array = [];
    let arrayLength = 5;
    for (let i = 0; i < arrayLength; i++) {
        array.push(Math.ceil(Math.random() * 10));
    }
    return array;
}
const result = createArray();
console.log(`Созданный массив: ${result}.`);


function getSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(`Сумма элементов массива ${result} равна: ${getSum(result)}.`);


function findMinNumber(array) {
    const minNumber = Math.min(...array);
    return minNumber;
}
console.log(`Минимальное число в массиве ${result}: ${findMinNumber(result)}.`);


function hasNumber(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 3) {
            count++;
        }
    }
    return count;
}
console.log(`Количество чисел "3" в массиве ${result} равно: ${hasNumber(result)}.`);


/*Задание 4*/

for (let i = 0; i < 20; i++) {
    let string = '';
    for (let j = 0; j <= i; j++) {
        string += 'х';
    }
    console.log(string);
}
