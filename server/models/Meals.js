const { Schema } = require('mongoose');

const MealSchema = new Schema(
  {
    name: string,
    price: Number,
    mealType: string,
    description: string,
    ingredients: string,
    arrivalTime: date
  }
);

module.exports = MealSchema;
