// const age = 33;
// const userName = 'Roman';
// console.log('Имя', userName);
// console.log(typeof age);

// Приклад Confirm
// const shouldRenew = confirm('Продлить?');
// console.log(shouldRenew);

// Приклад Prompt
// let quantity = prompt('Скоко денег даш?');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// Числові літерали Number.parseInt
// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(result);

// Числові літерали Number.parseFloat
// let elementWidth = '50.544px';
// const result = Number.parseFloat(elementWidth);
// console.log(result);

// const salery = 9.2352;
// salery = Number(salery.toFixed(2));
// console.log(salery);

// console.log(Number('8989'));

// const base = 3;
// const power = 5;
// const result = Math.pow(base, power);

// console.log(result);

// console.log(3 ** 12);

// let base = prompt('Give me a number');
// base = Number(base);
// console.log(base);

// let power = prompt('give me a second number');
// power = Number(power);
// console.log(power);

// console.log(base ** power);

//Генерация чисел випадкова
// const max = 100;
// const min = 1;
// console.log(Math.round(Math.random() * (max - min) + min));

// const massage = 'тут сколько символов?';
// console.log(massage.length);

// SWITCH Задача 1
// const stars = 4;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такого нет');
// }

// SWITCH
// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого нет');
// }

// console.log(price);

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого нет');
// }

// console.log(price);

//Задача 2 Switch

// const option = 2;
// let message = '';

// switch (option) {
//   case 1:
//     message = 'Заберите завтра после 12.00';
//     break;
//   case 2:
//     message = 'Доставка курьера';
//     break;
//   case 3:
//     message = 'Посилка будет отправлена';
//     break;
//   default:
//     message = 'Вам перезвонит менеджер';
//     break;
// }

// console.log(message);

// Цикл FOR
// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }

// Задача 3
// const minSallery = 500;
// const maxSellery = 5000;
// const employees = 3;
// let totalSallery = 0;

// for (let i = 0; i <= employees; i += 1) {
//   const salery = Math.round(
//     Math.random() * (maxSellery - minSallery) + minSallery,
//   );
//   console.log(`ЗП работника номер ${i} - ${salery}`);

//   totalSallery += salery;
// }
// console.log('Total:', totalSallery);

//Задача 4
// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log('NOT Четное ', i);
//     continue;
//   }

//   console.log('Четное ', i);
//   total += i;
// }

// console.log('Тотал: ', total);

// let totalSpent = 50;
// const payment = 500;
// let discount = 0;

// if (totalSpent < 100) {
//   discount = 0;
// } else if (totalSpent > -100 && totalSpent < 1000) {
//   console.log('Бронза, скидка 2%');
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log('Серебро, скидка 5%');
//   discount = 0.05;
// } else {
//   console.log('Золото, скидка 5%');
// }

// console.log(`Оформляю заказ на суму ${payment} со скидкой ${discount * 100}%`);

// payment = payment - payment * discount;

// totalSpent += payment;

// console.log(`Загальна сума витраченого в магазині: ${totalSpent}`);

const cost = [123, 34, 98, 345, 556, 344, 78];
let total = 0;

for (let i = 0; i < cost.length; i += 1) {
  console.log(cost[i]);

  total += cost[i];
}

console.log('Total:', total);
