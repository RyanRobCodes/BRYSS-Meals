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

module.exports = mealSchema;
