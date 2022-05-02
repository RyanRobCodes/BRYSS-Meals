const db = require('../config/connection');
const { Meal} = require('../models')

db.once('open', async () => {
    await Meal.deleteMany();
    const meals = await Meal.insertMany([
        {
          name: "Walnut-Lentil Bolognese",
          price: 12,
          mealType: "Vegetarian",
          description: "Healthy, hearty, vegan, rich, quick, easy, yummy—this walnut and lentil bolognese is an update on childhood favorite and a weeknight superstar.",
          image: "meal1.jpg"
        },
        {
          name: "Creamy Goat Cheese Polenta With Ratatouille",
          price: 12,
          mealType: "Vegetarian",
          description: "Bowl of super creamy, cheesy goat cheese polenta that makes a dinner that’s hearty and warming, fresh and oh-so-flavorful.",
          image: "meal2.jpg"
        },
        {
          name: "Butternut Squash Soup",
          price: 12,
          mealType: "Vegetarian",
          description: "We gathered all the best fall ingredients, roasted them in the oven and then placed them in a blender for a silky smooth soup.",
          image: "meal3.jpg"
        },
        {
          name: "Kung Pao Tofu",
          price: 12,
          mealType: "Vegetarian",
          description: "Think tofu fried in little sesame oil, doused in spicy Kung Pao sauce and tossed with plenty of veggies.",
          image: "meal4.jpg"
        },
        {
          name: "Blackened Salmon with Mango Salsa and Avocado",
          price: 16,
          mealType: "Pescatarian",
          description: "Healthy, fresh, vibrant and so-satisfying, this blackened salmon recipe is here to transform your dinnertime rut blues into vibrant, glittery rainbows of excitement.",
          image: "meal5.jpg"
        },
        {
          name: "Shrimp Melt with Capers and Old Bay Seasoning",
          price: 16,
          mealType: "Pescatarian",
          description: "Healthy, hearty, vegan, rich, quick, easy, yummy—this walnut and lentil bolognese is an update on childhood favorite and a weeknight superstar.",
          image: "meal6.jpg"
        },
        {
          name: "Chimichurri Shrimp with Creamy Polenta",
          price: 16,
          mealType: "Pescatarian",
          description: "Healthy, hearty, vegan, rich, quick, easy, yummy—this walnut and lentil bolognese is an update on childhood favorite and a weeknight superstar.",
          image: "meal7.jpg"
        },
        {
          name: "Clam Chowder",
          price: 16,
          mealType: "Pescatarian",
          description: "Healthy, hearty, vegan, rich, quick, easy, yummy—this walnut and lentil bolognese is an update on childhood favorite and a weeknight superstar.",
          image: "meal8.jpg"
        },
        {
          name: "Chicken Adobo",
          price: 14,
          mealType: "Carnivore",
          description: "Healthy, hearty, vegan, rich, quick, easy, yummy—this walnut and lentil bolognese is an update on childhood favorite and a weeknight superstar.",
          image: "meal9.jpg"
        },
        {
          name: "5-Ingredient Chicken Meatball Soup with Kale & Parmesan",
          price: 14,
          mealType: "Carnivore",
          description: "Healthy, hearty, vegan, rich, quick, easy, yummy—this walnut and lentil bolognese is an update on childhood favorite and a weeknight superstar.",
          image: "meal10.jpg"
        },
        {
          name: "Pork Loin Roast",
          price: 14,
          mealType: "Carnivore",
          description: "Healthy, hearty, vegan, rich, quick, easy, yummy—this walnut and lentil bolognese is an update on childhood favorite and a weeknight superstar.",
          image: "meal11.jpg"
        },
        {
          name: "Turkey Shepherd’s Pie",
          price: 14,
          mealType: "Carnivore",
          description: "Healthy, hearty, vegan, rich, quick, easy, yummy—this walnut and lentil bolognese is an update on childhood favorite and a weeknight superstar.",
          image: "meal12.jpg"
        }
      ]

    )
    console.log('products seeded');

    process.exit();
})