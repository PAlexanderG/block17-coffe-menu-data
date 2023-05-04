// Prompt 1:
// Clean the coffee_data file: All prices should be numbers.
// Checklist :All items should be strings.
// Objects and properties should have commas separating them.
// Connect the coffee_data.js file to the index.js file.
// Module.exports to  export file forEach and module.exports
// Export the all data: creating 2 diferent js files and use module.exports

const coffeeMenu = require("./coffee_menu_data");

// Prompt 2:
// Using .map()to print an array of all the drinks on the menu.
const nameDrinks = (item) => {
  return item.name;
};
console.log(coffeeMenu.map(nameDrinks));

// Prompt 3:
// Print an array of drinks that cost 5 and under.
// Using .filter to get all drinks that cost 5 and under.
const underFive = (item) => {
  return item.price <= 5;
};
const itemUnderFive = coffeeMenu.filter(underFive);
console.table(itemUnderFive);
// Question for Jonathan: Why says: No debugger, cannot send 'variables
// then it says: please a debug session to evaluate expresions.

// Prompt 4:
// Print an array of drinks that are priced at an even number.
​
// Prompt 4:
// Print an array of drinks that are priced at an even number.
// Using destructuring: ({price}) to extract the price property from the object
// If statement and % operator to return prices with a remainder of 0(even)
// using the filter() method to create a new array containing drinks with even prices
console.log("All drinks with even prices");
const isEven = ({ price }) => {
  if (price % 2 === 0) {
    return price;
  }
};
const evenPrice = coffeeMenu.filter(isEven).map(getName);
console.log(evenPrice);

//  Prompt 5:
// Print the total if you were to order one of every drink.
// Using .reduce method the sum of all objects = sum, object
// Return the sum of objects. price=number (sum + object.price)
const totalCost = coffeeMenu.reduce((sum, object) => {
  return sum + object.price;
}, 0);
console.log(totalCost);

// Prompt 6:
// Print an array with all the drinks that are seasonal.
const arraySeasonal = coffeeMenu.filter(
  (object) => object.condition === "seasonal"
);
console.log(arraySeasonal);
