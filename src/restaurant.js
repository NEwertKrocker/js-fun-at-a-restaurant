
function createRestaurant(restaurantName){
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
  return restaurant;
};

function addMenuItem(restaurantName, newMenuItem) {
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
  var correctMenuType = newMenuItem.type;
  if (correctMenuType === "breakfast" && restaurantName.menus.breakfast.includes(newMenuItem) === false){
  restaurantName.menus.breakfast.push(newMenuItem);
} else if (correctMenuType === "lunch"  && restaurantName.menus.lunch.includes(newMenuItem) === false){
  restaurantName.menus.lunch.push(newMenuItem);
} else if (correctMenuType === "dinner" && restaurantName.menus.dinner.includes(newMenuItem) === false){
  restaurantName.menus.dinner.push(newMenuItem);
} else {
};
  return restaurant;
};

function removeMenuItem(restaurantName, targetItem, removedItemType){
  var itemToRemove = targetItem;
  for (var i = 0; i < restaurantName.menus.breakfast.length; i++){
    if (restaurantName.menus.breakfast[i].name === itemToRemove && restaurantName.menus.breakfast[i].type === removedItemType) {
      restaurantName.menus.breakfast.splice(i, 1);
      return `No one is eating our ${itemToRemove} - it has been removed from the ${removedItemType} menu!`;
    };
  };
  for (var i = 0; i < restaurantName.menus.lunch.length; i++){
    if (restaurantName.menus.lunch[i].name === itemToRemove && restaurantName.menus.lunch[i].type === removedItemType) {
      restaurantName.menus.lunch.splice(i, 1);
      return `No one is eating our ${itemToRemove} - it has been removed from the ${removedItemType} menu!`;
    };
  };
    for (var i = 0; i < restaurantName.menus.dinner.length; i++){
      if (restaurantName.menus.dinner[i].name === itemToRemove && restaurantName.menus.dinner[i].type === removedItemType) {
        restaurantName.menus.dinner.splice(i, 1);
        return `No one is eating our ${itemToRemove} - it has been removed from the ${removedItemType} menu!`;
    }
  };
  return `Sorry, we don't sell ${targetItem}, try adding a new recipe!`
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem

}
