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
  let pizzaHTML = `<div class='row'><div class='col-md-6'><h3>Current Pizza</h3>`
  pizzaHTML += buildPizzaHTML(pizza);
  pizzaHTML += `</div><div class='col-md-6 buttonGroup'>`
  pizzaHTML += `<button class="btn btn-info" id="confirmPizza">Add Pizza To Order</button><br>`
  pizzaHTML += `<button class="btn btn-warning" id="deletePizza">Discard Pizza</button></div></div>`
  pizzaOutput.append(pizzaHTML);
  $(".pizzaBox").show();
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
    $(".pizzaBox").hide();
}

function addPizzaToOrderDisplay(newPizza) {
  const orderOutput = $("#orderOutput");
  const pizzaHTML = buildPizzaHTML(newPizza);
  let orderHTML = `<li id='pizza${newPizza.ID}'>${pizzaHTML}</li>`;
  orderHTML += `<button class='btn btn-warning deleteFromOrder' id='delete${newPizza.ID}'>Remove This Pizza</button>`;
  orderOutput.append(orderHTML);
  $("#totalPrice").text(`$${order.totalPrice.toFixed(2)}`);
  $("#resetOrder").show();
  $(".orderBox").show();
}

function deletePizza(id) {
  const pizzaToDelete = $(`#orderOutput > li#pizza${id}`);
  order.deletePizza(id);
  pizzaToDelete.remove();
  $(`button#delete${id}`).remove();
  $("#totalPrice").text(`$${order.totalPrice.toFixed(2)}`);
  if (order.pizzas.length === 0) {
    $("#resetOrder").hide();
    $(".orderBox").hide();
  }
}

function resetOrder() {
  $("#orderOutput").empty();
  order = new Order();
  $("#totalPrice").text('$0.00');
  resetPizza();
  $("#resetOrder").hide();
}

function attachPizzaButtons() {
  const pizzaOutput = $("#pizzaOutput");
  const orderOutput = $("#orderOutput");
  pizzaOutput.on("click", "#confirmPizza", function() {
    order.addPizza(pizza);
    addPizzaToOrderDisplay(pizza);
    resetPizza();
  })
  pizzaOutput.on("click", "#deletePizza", function() {
    resetPizza();
  })
  orderOutput.on("click", ".deleteFromOrder", function() {
    deletePizza(parseInt($(this).attr('id').slice(6)));
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
  $("#resetOrder").click(function(event) {
    event.preventDefault();
    resetOrder();
  })
  $("#visual").click(function(event) {
    event.preventDefault();
    const background = $("div.background");
    if (background.hasClass("visualImpair")) {
      background.removeClass("visualImpair");
    } else {
      background.addClass("visualImpair");
    }
  })
})