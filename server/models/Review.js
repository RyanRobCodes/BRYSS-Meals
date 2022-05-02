const { Schema, model } = require('mongoose');
const Meals = require('./Meals');
const dateFormat = require('../utils/dateFormat');

const reviewSchema = new Schema(
  {
    reviewText: {
      type: String,
      required: 'Leave a review',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    meals: [Meals]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

Meals.virtual('reviewCount').get(function() {
  return this.reviews.length;
});

const Review = model('Review', reviewSchema);

module.exports = Review;
