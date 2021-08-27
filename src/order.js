
function takeOrder(newOrder, orderType){
  var orderType;
  if (orderType.length < 3) {
  orderType.push(newOrder);
} else {
  console.log("Oops, the order list is full!")
}
  return orderType;
};

function refundOrder(orderToRefund, orderType){
  var orderType;
  for (var i = 0; i < orderType.length; i++){
    if (orderType[i].orderNumber === orderToRefund) {
      orderType.splice(i, 1);
    }
  }
  return orderType;
};

function listItems(orderType){
  var itemList = [];
  for (var i = 0; i < orderType.length; i++){
    itemList.push(orderType[i].item);
  }
  return itemList.join(', ');
};

function searchOrder(orderType, orderToSearch){
  var orderType;
  var itemList = [];
  for (var i = 0; i < orderType.length; i++){
    itemList.push(orderType[i].item);
  }
  if (itemList.includes(orderToSearch)) {
    return true
  } else {
    return false
  }

};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
