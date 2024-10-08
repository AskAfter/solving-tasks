// homework 1 - task 1
// function makeTransaction(quantity, pricePerDroid) {
//   return `You ordered ${quantity} droids worth ${
//     quantity * pricePerDroid
//   } credits!`;
// }
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// homework 1 - task 2
// function getShippingMessage(country, price, deliveryFee) {
//   return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
// }
// console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"

// homework 1 - task 3
// function getElementWidth(content, padding, border) {
//   const n =
//     parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
//   return n;
// }
// console.log(getElementWidth('50px', '8px', '4px')); // 74
// console.log(getElementWidth('60px', '12px', '8.5px')); // 101
// console.log(getElementWidth('200px', '0px', '0px')); // 200

// homework 2 - task 1
// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   const sumOrder = quantity * pricePerDroid;
//   if (sumOrder > customerCredits) {
//     return 'Insufficient funds!';
//   }
//   return `You ordered ${quantity} droids worth ${
//     quantity * pricePerDroid
//   } credits!`;
// }
// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// homework 2 - task 2
// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     return message;
//   }
//   return `${message.slice(0, maxLength)}...`;
// }
// console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
// console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
// console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
// console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"

// homework 2 - task 3
// function checkForSpam(message) {
//   const messageLowerCase = message.toLowerCase();

//   if (messageLowerCase.includes('spam') || messageLowerCase.includes('sale')) {
//     return true;
//   }
//   return false;
// }
// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('Amazing SalE, only tonight!')); // true
// console.log(checkForSpam('Trust me, this is not a spam message')); // true
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// homework 2 - task 4
// function getShippingCost(country) {
//   let price = 0;
//   switch (country) {
//     case 'China':
//       price = 100;
//       break;
//     case 'Chile':
//       price = 250;
//       break;
//     case 'Australia':
//       price = 170;
//       break;
//     case 'Jamaica':
//       price = 120;
//       break;
//     default:
//       return 'Sorry, there is no delivery to your country';
//   }
//   return `Shipping to ${country} will cost ${price} credits`;
// }
// console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

// homework 3 - task 1
