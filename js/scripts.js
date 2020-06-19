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
  
}

//ui