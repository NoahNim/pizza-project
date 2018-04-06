// Back End

// Variable to set price
var pizzaPrice = 0;

// Constructor for Pizza
function Pizza(size){
  this.toppings = [];
  this.size = size
}

// Pizza Pricing Method
Pizza.prototype.pricing = function(){
  // Loop through toppings array and change the pizza price
  for (i=0; i < this.toppings.length; i++){
    if (this.toppings.length >= 1) {
      pizzaPrice += 1.5;
    }
    console.log(pizzaPrice);
  }
  // Change price depending on size
  if (this.size == "large") {
    pizzaPrice += 10
  } else if (this.size == "medium") {
    pizzaPrice += 6
  } else if (this.size == "small") {
    pizzaPrice += 5
  }
  console.log(pizzaPrice);
};
