// Back End

// Variable to set price
var pizzaPrice = 0;
// Vaiable for a new pizza
var newPizza;

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
    pizzaPrice += 7
  } else if (this.size == "small") {
    pizzaPrice += 4
  }
  console.log(pizzaPrice);
};

// Front End Logic
$(document).ready(function(){
  $("#pizza").submit(function(event){
  event.preventDefault();
  pizzaPrice = 0;

  //Variables for pizza settings
    var pizzaSize = $("#pizza-size option:selected").val();

    if (pizzaSize == $("#small").val()) {
      newPizza = new Pizza("small");
    } else if (pizzaSize == $("#medium").val()) {
      newPizza = new Pizza("medium");
    } else if (pizzaSize == $("#large").val()) {
      newPizza = new Pizza("large");
    }

    // Grab and push checkboxes to new piza
    $("#toppings input:checked").each(function() {
      newPizza.toppings.push($(this).attr("value"));
    });

    newPizza.pricing();

    $("#pricing-info").text("You got a " + newPizza.size + " pizza with " + newPizza.toppings.join(", and ") + ". The price is: " + pizzaPrice)

  });
});
