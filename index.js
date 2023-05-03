// Prompt 1:
// Clean the coffee_data file: All prices should be numbers.
// Checklist :All items should be strings.
// Objects and properties should have commas separating them.
// Connect the coffee_data.js file to the index.js file.
// Module.exports to  export file forEach and module.exports
// I have to export the all data: creating 2 diferent js files and use module.exports

const coffeeMenu = require("./coffe_menu_data");

// Prompt 2 :
// Using .map()to print an array of all the drinks on the menu.

const allNameDrinks = (item) => {
    return item.name;
}
console.log(coffeeMenu.map(allNameDrinks))