const { Schema } = require('mongoose');

const mealSchema = new Schema(
  {
    name: {
    type: String,
    required: true
    },
    price: {
    type: Number,
    required: true
    },
    mealType:{
    type: String,
    required: true
    },
    description: {
    type: String,
    required: true
    },
    image: {
    type: String,
    required: true
    }
  }

);

const meals = [
  {
    name: "Walnut-Lentil Bolognese",
    price: 12,
    mealType: "Vegetarian",
    description: "Healthy, hearty, vegan, rich, quick, easy, yummy—this walnut and lentil bolognese is an update on childhood favorite and a weeknight superstar.",
    image: "client/src/assets/meals/meal1.jpg"
  },
  {
    name: "Creamy Goat Cheese Polenta With Ratatouille",
    price: 12,
    mealType: "Vegetarian",
    description: "Bowl of super creamy, cheesy goat cheese polenta that makes a dinner that’s hearty and warming, fresh and oh-so-flavorful.",
    image: "client/src/assets/meals/meal2.jpg"
  },
  {
    name: "Butternut Squash Soup",
    price: 12,
    mealType: "Vegetarian",
    description: "We gathered all the best fall ingredients, roasted them in the oven and then placed them in a blender for a silky smooth soup.",
    image: "client/src/assets/meals/meal3.jpg"
  },
  {
    name: "Kung Pao Tofu",
    price: 12,
    mealType: "Vegetarian",
    description: "Think tofu fried in little sesame oil, doused in spicy Kung Pao sauce and tossed with plenty of veggies.",
    image: "client/src/assets/meals/meal4.jpg"
  },
  {
    name: "Blackened Salmon with Mango Salsa and Avocado",
    price: 16,
    mealType: "Pescatarian",
    description: "Healthy, fresh, vibrant and so-satisfying, this blackened salmon recipe is here to transform your dinnertime rut blues into vibrant, glittery rainbows of excitement.",
    image: "client/src/assets/meals/meal5.jpg"
  },
  {
    name: "Shrimp Melt with Capers and Old Bay Seasoning",
    price: 16,
    mealType: "Pescatarian",
    description: "Healthy, hearty, vegan, rich, quick, easy, yummy—this walnut and lentil bolognese is an update on childhood favorite and a weeknight superstar.",
    image: "client/src/assets/meals/meal6.jpg"
  },
  {
    name: "Chimichurri Shrimp with Creamy Polenta",
    price: 16,
    mealType: "Pescatarian",
    description: "Healthy, hearty, vegan, rich, quick, easy, yummy—this walnut and lentil bolognese is an update on childhood favorite and a weeknight superstar.",
    image: "client/src/assets/meals/meal7.jpg"
  },
  {
    name: "Clam Chowder",
    price: 16,
    mealType: "Pescatarian",
    description: "Healthy, hearty, vegan, rich, quick, easy, yummy—this walnut and lentil bolognese is an update on childhood favorite and a weeknight superstar.",
    image: "client/src/assets/meals/meal8.jpg"
  },
  {
    name: "Chicken Adobo",
    price: 14,
    mealType: "Carnivore",
    description: "Healthy, hearty, vegan, rich, quick, easy, yummy—this walnut and lentil bolognese is an update on childhood favorite and a weeknight superstar.",
    image: "client/src/assets/meals/meal9.jpg"
  },
  {
    name: "5-Ingredient Chicken Meatball Soup with Kale & Parmesan",
    price: 14,
    mealType: "Carnivore",
    description: "Healthy, hearty, vegan, rich, quick, easy, yummy—this walnut and lentil bolognese is an update on childhood favorite and a weeknight superstar.",
    image: "client/src/assets/meals/meal10.jpg"
  },
  {
    name: "Pork Loin Roast",
    price: 14,
    mealType: "Carnivore",
    description: "Healthy, hearty, vegan, rich, quick, easy, yummy—this walnut and lentil bolognese is an update on childhood favorite and a weeknight superstar.",
    image: "client/src/assets/meals/meal11.jpg"
  },
  {
    name: "Turkey Shepherd’s Pie",
    price: 14,
    mealType: "Carnivore",
    description: "Healthy, hearty, vegan, rich, quick, easy, yummy—this walnut and lentil bolognese is an update on childhood favorite and a weeknight superstar.",
    image: "client/src/assets/meals/meal12.jpg"
  }
]

module.exports = mealSchema;
