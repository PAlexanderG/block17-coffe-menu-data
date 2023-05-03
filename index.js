// Prompt 1:
// Clean the coffee_data file: All prices should be numbers.
// Checklist :All items should be strings.
// Objects and properties should have commas separating them.
// Connect the coffee_data.js file to the index.js file.
// Module.exports to  export file forEach and module.exports
// I have to export the all data: creating 2 diferent js files and use module.exports

const coffeeMenu = require("./coffee_menu_data");

// Prompt 2:
// Using .map()to print an array of all the drinks on the menu.
// const nameDrinks = (item) => {
//   return item.name;
// };
// console.log(coffeeMenu.map(nameDrinks));

// Prompt 3:
// Print an array of drinks that cost 5 and under.
// Using .filter to get all drinks that cost 5 and under.
const underFive = (item) => {
  return item.price <= 50;
};
const itemUnderFive = coffeeMenu.filter(underFive);
console.table(itemUnderFive);
