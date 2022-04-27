const { Schema } = require('mongoose');

const MealSchema = new Schema(
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
    ingredients: {
    type: String,
    required: true
    },
    arrivalTime: Date,
    required: true
  }

);

module.exports = MealSchema;
