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
  if (ingredients.includes(newIngredient)) {
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

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
