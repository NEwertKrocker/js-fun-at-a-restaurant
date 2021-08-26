function nameMenuItem(menuItemName) {
  return menuItemName = "Delicious " + menuItemName;
}
function createMenuItem(name, price, type){
  var menuItem = {
    name: name,
    price: price,
    type: type,
  }
  return menuItem;
}
var ingredients = []; // should I declare this variable up top?
function addIngredients(newIngredient, ingredients) {
  if (ingredients.includes(newIngredient)) { // this ensures that the new ingredient isn't already in the array
    return ingredients;
  } else {
    ingredients.push(newIngredient);
  return ingredients;
  }
}
function formatPrice(formatPriceInput){
  var formattedPrice = "$" + formatPriceInput;
  return formattedPrice;
}
// ^^ I don't like this because it doesn't work with the other functions,
// but I think you'd need to create a menuItem CLASS to make it work smoothly...
function decreasePrice(priceToDiscount) {
  var decreasedPrice = priceToDiscount * .90;
  return decreasedPrice;
}
function createRecipe(title, ingredients, type){
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  }
  return recipe;
}

// Okay, the tests all pass. If there's time, I can go back and refactor
// once I'm a little more confident with object classes, so the functions
// will integrate better. 
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
