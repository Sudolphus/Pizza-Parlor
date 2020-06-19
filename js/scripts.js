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
    case ('Small'):
      price += 8;
      break;
    case ('Medium'):
      price += 10;
      break;
    case ('Large'):
      price += 12;
      break;
  }
  this.toppings.forEach(function(topping) {
    price += .25;
  })
  return price;
}

//ui
let pizza;

function newPizza(size) {
  pizza = new Pizza(size);
  $('#toppings').show();
}

function displayPizza() {
  const pizzaOutput = $('#pizzaOutput');
  const price = pizza.calculatePrice().toFixed(2);
  let pizzaHTML = `<p><strong>${pizza.size} Pizza</strong></p><ul class='toppingsList'>`;
  for (const topping of pizza.toppings) {
    pizzaHTML += `<li><em>${topping}</em></li>`;
  }
  pizzaHTML += `</ul><p><strong>Price: $${price}</strong></p>`;
  pizzaOutput.append(pizzaHTML);
}

function collectToppings() {
  const toppings = [];
  $('input:checkbox[name=topping]:checked').each(function() {
    toppings.push($(this).val());
  })
  toppings.forEach(function(topping) {
    pizza.addToppings(topping);
  })
  displayPizza();
}

$(document).ready(function() {
  $("#small").click(function(event) {
    event.preventDefault();
    newPizza('Small');
  })
  $("#medium").click(function(event) {
    event.preventDefault();
    newPizza('Medium');
  })
  $("#large").click(function(event) {
    event.preventDefault();
    newPizza('Large');
  })
  $("#toppingsSubmit").click(function(event) {
    event.preventDefault();
    collectToppings();
  })
})