"use strict"

// // этот код работает в современном режиме


let money = 50000;
let profit = 'freelance';
let expenses = 'food, traffic, clothes, other';
let purpose = 300000;
let period = 12;

console.log(typeof money); // возвращает тип данных
console.log(typeof profit); 
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



// lesson-03


console.log('--------------------------------lesson-03');



money = prompt('Какой ваш месячный доход?');

alert(`Ваш бюджет на месяц: ${money}`);

expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую.');

alert(`Ваши расходы: ${expenses}`);

let amount = prompt('Во сколько обойдуться обязательные статьи расходов?');

alert(`Ваши обязательные статьи расходов: ${amount}`);

let deposit = confirm('Есть ли у вас вклад в банке?');

// console.log(typeof deposit); 

// let budgetMounth = money - amount;
// console.log(`Ваш бюджет на месяц: ${budgetMounth}`);

purpose = 1000000;

// purpose = Math.ceil(purpose / budgetMounth);
// console.log(`Вы накопите необходимую сумму за ${purpose} месяцев`);

budgetDay = Math.floor(money / 30);
console.log(`Ваш дневной бюджет: ${budgetDay}`);

if ( budgetDay >= 6000 ) {
  console.log('У вас высокий упрвень дохода');
} 
else if ( budgetDay > 3000 && budgetDay < 6000 ) {
  console.log('У вас средний уровень дохода');
} 
else if ( budgetDay < 3000 && budgetDay > 0 ) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} 
else  ( 0 < budgetDay ) 
  console.log('Что то пошло не так');



console.clear();

// lesson-04

console.log('--------------------------------lesson-04');

let extraMoney = +prompt(`Перечислите возможный доход за ваши дополнительные работы: ${profit}`);

const getAccumulatedIncome = () => {
  return Math.ceil(money - amount + extraMoney);
}

let accumulatedIncome = getAccumulatedIncome();

const getTargetMounth = () => {
  return Math.ceil(purpose / getAccumulatedIncome());
}

budgetDay = Math.ceil(accumulatedIncome / 30);

console.log('Ваш бюджет на месяц с учетом ваших расходов составляет:', getAccumulatedIncome());
console.log(`Ваша цель накопить ${purpose} с учетом ваших расходов будет достигнута через`, getTargetMounth() + ` месяца`);
console.log('Дневной бюджет', budgetDay);





















// let budgetDay = Math.ceil(money-amount) / Math.ceil(30);
// console.log(`Дневной бюджет: ${budgetDay} рублей`);





// let budgetMounth = amount * 30;
// console.log(`Ваши обязательные расходы за месяц: ${budgetMounth}`);

// budgetMounth = purpose / Math.ceil(money-amount);
// console.log(`Ваша цель будет достигнута за: ${purpose} месяцев.`);


// budgetDay = Math.flor(budgetMounth/30);
// console.log(`Ваш бюджет на день: ${budgetDay}`);

// let purpose = Math.ceil(30000 / money - amount);
// console.log(purpose);

// purpose = math.ceil(300000 / money -amount);































// console.log('-------------------------');
// let userName = 'Katerina';
// let metUser = `This is ${userName}, we met in Shtakensnaider`;
// console.log(metUser);
// console.log(metUser.length);


// console.log('-----------------------');

// let str1 = "Anna" + " Lisa ";

// console.log(str1.length);
// console.log(str1.split(" ", (10))); //разбивает на массив
// console.log(typeof(str1));
// console.log(str1.repeat(10)); // повторяет строку 
// console.log(str1.charAt(3)); // возвращает символ по указанному индексу;
// console.log(str1.includes("Anna", 0)); //Проверяет, содержит ли строка указанную подстроку. 
// console.log(str1.indexOf(""));
// console.log('toLowerCase:', str1.toLowerCase()); // нижний регистр
// console.log('toUpperCase:', str1.toUpperCase()); // верхний регистр 
// console.log(str1.trim()); //trim - это метод удаления пробелов с начала и конца строки

// console.log('-----------------------');

// // условие в JavaScript
// // 2 вида конструкций js

// // 1) if / else
// // 2) switch

// if (2 > 4) {
//   console.log('Верно');
// } else {
//   console.log('Ошибка');
// }

// // if // else if
// let age = 19;

// if (age < 18) {
//   console.log('Доступ запрещен');
// } else if (age == 18) {
//   console.log('Доступ разрешен, но рекомендуем подождать год');
// } else if (age >= 19) {
//   console.log('Доступ разрешен');
// }

// // switch - вторая конструкция условия в js
// let result = 5 + 4;

// let victorina = +prompt('Угадай число?');

// switch(result) {
//   case victorina:
//     alert('Многовато');
//     break;
//   case victorina: 
//     alert('Верно угадали');
//     break; // break останавливает при совпадении с условием  
//   case victorina:
//     alert('Мало не угадали');
//     break;
//   default: //если не одно условие не выполнится, то сработает по умолчанию
//     alert('сочувствуем повезет в следующий раз');
// } 

// логические операторы




// console.log('length str3', str3.length);
// const name =  propmt('')

// let names = 

// - методы - 




