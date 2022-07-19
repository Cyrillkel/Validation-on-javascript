"use strict"

// этот код работает в современном режиме


let money = 50000;
let freelance = 30000;
let expenses = 'food, traffic, clothes, other';
let purpose = 300000;
let period = 12;

console.log(typeof money); // возвращает тип данных
console.log(typeof freelance); 
console.log(expenses.length); // длина строки

console.log('Период равен', period, 'месяцев');
console.log('Цель заработать', purpose, 'рублей');

// let budgetDay = 50000 / 30;
// console.log(budgetDay)

let budgetDay = money / 30;
console.log('Дневной бюджет', Math.ceil(budgetDay));

let newString = expenses.toLowerCase(); // нижний регистр
console.log(newString);

let arr = expenses.split(' '); // разбили строку на массив
console.log(arr);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

