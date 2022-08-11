"use strict"

// этот код работает в современном режиме


// console.log('--------------------------------lesson-02');

// let money = 50000;
// let profit = 'freelance';
// let expenses = 'food, traffic, clothes, other';
// let purpose = 300000;
// let period = 12;

// console.log(typeof money); // возвращает тип данных
// console.log(typeof profit); 
// console.log(expenses.length); // длина строки

// console.log('Период равен', period, 'месяцев');
// console.log('Цель заработать', purpose, 'рублей');

// let budgetDay = money / 30;
// console.log('Дневной бюджет', Math.ceil(budgetDay));

// let newString = expenses.toLowerCase(); // нижний регистр
// console.log(newString);

// let arr = expenses.split(' '); // разбили строку на массив
// console.log(arr);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);



// console.log('--------------------------------lesson-03');

// money = prompt('Какой ваш месячный доход?');

// alert(`Ваш бюджет на месяц: ${money}`);

// expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую.');

// alert(`Ваши расходы: ${expenses}`);

// let amount = prompt('Во сколько обойдуться обязательные статьи расходов?');

// alert(`Ваши обязательные статьи расходов: ${amount}`);

// let deposit = confirm('Есть ли у вас вклад в банке?');

// purpose = 1000000;

// budgetDay = Math.floor(money / 30);
// console.log(`Ваш дневной бюджет: ${budgetDay}`);

// if ( budgetDay >= 6000 ) {
//   console.log('У вас высокий упрвень дохода');
// } 
// else if ( budgetDay > 3000 && budgetDay < 6000 ) {
//   console.log('У вас средний уровень дохода');
// } 
// else if ( budgetDay < 3000 && budgetDay > 0 ) {
//   console.log('К сожалению у вас уровень дохода ниже среднего');
// } 
// else  ( 0 < budgetDay ) 
//   console.log('Что то пошло не так');


// console.clear();


// console.log('--------------------------------lesson-04');


// let extraMoney = +prompt(`Перечислите возможный доход за ваши дополнительные работы: ${profit}`);

// const getAccumulatedIncome = () => {
//   return Math.ceil(money - amount + extraMoney);
// }

// let accumulatedIncome = getAccumulatedIncome();

// const getTargetMounth = () => {
//   return Math.ceil(purpose / getAccumulatedIncome());
// }

// budgetDay = Math.ceil(accumulatedIncome / 30);

// console.log('Ваш бюджет на месяц с учетом ваших расходов составляет:', getAccumulatedIncome());
// console.log(`Ваша цель накопить ${purpose} с учетом ваших расходов будет достигнута через`, getTargetMounth() + ` месяца`);
// console.log('Дневной бюджет', budgetDay);


// console.log('--------------------------------lesson-05');


// money = parseInt(prompt('Какой ваш месячный доход?'));
// while(isNaN(money)) {
//   alert('Введите число');
//   money = parseInt(prompt('Введите число'));
// }

// extraMoney = parseInt(prompt('Во сколько обойдуться обязательные статьи расходов?'));
// while(isNaN(extraMoney)) {
//   alert('Введите число');
//   extraMoney = parseInt(prompt('Введите число'));
// }

// amount = parseInt(prompt('Во сколько обойдуться обязательные статьи расходов?'));
// while(isNaN(amount)) {
//   alert('Введите число');
//   amount = parseInt(prompt('Введите число'));
// }

// let getTargetSum = getTargetMounth();

// if (getTargetSum <= 0 ) {  
//   alert('Цель не будет достигнута');
// } else {
//   alert('Цель будет достигнута');
// }

// Усложноненка


// let numbers = [];
// numbers.push('1546826');
// numbers.push('2215475');
// numbers.unshift('5235410');
// numbers.unshift('42354123');
// console.log(numbers);

// for (let i = 0; i < numbers.length; i++) {
// if (String(numbers[i]).startsWith('2') || String(numbers[i]).startsWith('4')) {
//   console.log(numbers[i])
//   }
// }


console.log('--------------------------------lesson-07');



let promise = fetch('https://reqres.in/api/users?per_page=12')
.then((response) => {
    console.log(response);
    return response.json();
}).then((body) => {
    
    console.log('-----------');
    console.log('Пункт №1:')
    console.log('-----------');
    console.log(body);
    
    console.log('-----------');
    console.log('Пункт №2:')
    console.log('-----------');
    body.data.forEach(element => {
        console.log(element.last_name)
    });

    console.log('-----------');
    console.log('Пункт №3:')
    console.log('-----------');
    body.data.filter(item=>item.last_name.startsWith('F')).forEach(element => {
        console.log(element.last_name)
    });

    console.log('-----------');
    console.log('Пункт №4:')
    console.log('-----------');
    console.log(body.data.reduce((acc, item)=>acc + item.first_name + " " + item.last_name +', ', "Наша база содержит данные следующих пользователей:"));
    
    console.log('-----------');
    console.log('Пункт №5:')
    console.log('-----------');
    Object.keys(body.data[0]).forEach(element=>
        console.log(element)
    );
});
