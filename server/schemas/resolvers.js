const { AuthenticationError } = require('apollo-server-express');
const { User, Meal, Review, Address } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('Meal')
          .populate('Review')
          .populate('Address')

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('Meal')
        .populate('Review')
        .populate('Address')
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
      .populate('Meal')
      .populate('Review')
      .populate('Address')
    },
    reviews: async (parent, { username, mealName }) => {
      const params = username && mealName ? { username, mealName } : {};
      return Review.find(params)
    },
    review: async (parent, { _id }) => {
      return Review.findOne({ _id });
    },
    meals: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Meal.find(params)
    },
    meal: async (parent, { _id }) => {
      return Meal.findOne({ _id });
    },
    addresses: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Address.find(params)
    },
    address: async (parent, { _id }) => {
      return Address.findOne({ _id });
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addAddress: async (parent, args, context) => {
      if (context.user) {
        const address = await Address.create({...args, username: context.user.username});
          
        await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: {addresses: address._id }},
            { new: true }
          );

        return address;
      }

      throw new AuthenticationError('You need to be logged in!');
    }, 
    addMeals: async (parent, args, context) => {
      if (context.user && context.meal) {
        const review = await Meal.create({...args, username: context.user.username, mealName: context.meal.name});
          
        await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: {reviews: review._id }},
            { new: true }
          );
        await Meal.findByIdAndUpdate(
          { _id: context.meal._id },
          { $push: {reviews: review._id}},
          { new: true }
        )

        return review;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReview: async (parent, args, context) => {
      if (context.user) {
        const review = await Review.create({...args, username: context.user.username});
          
        await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: {reviews: review._id }},
            { new: true }
          );

        return review;
      }

      throw new AuthenticationError('You need to be logged in!');
    }, 
  }
};

module.exports = resolvers;
