//business
function Order() {
  this.totalPrice = 0;
  this.pizzas = [];
  this.nextID = 0;
}

Order.prototype.assignID = function() {
  this.nextID += 1;
  return this.nextID;
}

Order.prototype.addPizza = function(pizza) {
  pizza.ID = this.assignID();
  this.pizzas.push(pizza);
  this.totalPrice += pizza.calculatePrice();
}

Order.prototype.deletePizza = function(id) {
  let pizzaToDelete;
  for (const pizza of this.pizzas) {
    if (pizza.ID === id) {
      pizzaToDelete = pizza;
      break;
    }
  }
  this.totalPrice -= pizzaToDelete.calculatePrice();
  this.pizzas = this.pizzas.filter(function(pizza) {
    return pizza != pizzaToDelete;
  })
}

function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addToppings = function(topping) {
  if (!this.toppings.includes(topping)) {
    this.toppings.push(topping);
  }
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
let order = new Order();
let pizza;

function newPizza(size) {
  pizza = new Pizza(size);
  $('#toppings').show();
}

function buildPizzaHTML(newPizza) {
  const price = newPizza.calculatePrice().toFixed(2);
  let pizzaHTML = `<p><strong>${pizza.size} Pizza</strong></p><ul class='toppingsList'>`;
  for (const topping of newPizza.toppings) {
    pizzaHTML += `<li><em>${topping}</em></li>`;
  }
  pizzaHTML += `</ul><p><strong>Price: $${price}</strong></p>`;
  return pizzaHTML;
}

function displayPizza() {
  const pizzaOutput = $('#pizzaOutput');
  pizzaOutput.empty();
  let pizzaHTML = buildPizzaHTML(pizza);
  pizzaHTML += `<button class="btn btn-info" id="confirmPizza">Add Pizza To Order</button>`
  pizzaHTML += `<button class="btn btn-warning" id="deletePizza">Discard Pizza</button>`
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

function resetPizza() {
  $("#pizzaOutput").empty();
    pizza = new Pizza();
    $("input:checkbox[name=topping]").each(function() {
      $(this).prop('checked', false);
    })
    $("#toppings").hide();
}

function addPizzaToOrderDisplay(newPizza) {
  const orderOutput = $("#orderOutput");
  const pizzaHTML = buildPizzaHTML(newPizza);
  let orderHTML = `<li>${pizzaHTML}</li>`;
  const price = `$${order.totalPrice.toFixed(2)}`;
  orderOutput.append(orderHTML);
  $("#totalPrice").text(price);
}

function attachPizzaButtons() {
  const pizzaOutput = $("#pizzaOutput");
  pizzaOutput.on("click", "#confirmPizza", function() {
    order.addPizza(pizza);
    addPizzaToOrderDisplay(pizza);
    resetPizza();
  })
  pizzaOutput.on("click", "#deletePizza", function() {
    resetPizza();
  })
}

$(document).ready(function() {
  attachPizzaButtons();
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