//business
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.calculatePrice = function() {
  let price = 0;
  switch (this.size) {
    case ('small'):
      price += 8;
      break;
    case ('medium'):
      price += 10;
      break;
    case ('large'):
      price += 12;
      break;
  }
  this.toppings.forEach(function(topping) {
    price += .25;
  })
  return price;
}

//ui
let pizza = new Pizza();

function newPizza(size) {
  pizza = new Pizza(size);
  $('#toppings').show();
}

$(document).ready(function() {
  $("#small").click(function(event) {
    event.preventDefault();
    newPizza('small');
  })
  $("#medium").click(function(event) {
    event.preventDefault();
    newPizza('medium');
  })
  $("#large").click(function(event) {
    event.preventDefault();
    newPizza('large');
  })
  $("#submit").click(function(event) {
    event.preventDefault();
  })
})