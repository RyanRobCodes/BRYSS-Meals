const { Schema, model } = require('mongoose');

const addressSchema = new Schema(
  {
    addressName: {
        type: String
      },
    streetName: {
        type: String
    },
    cityName: {
        type: String
    },
    state: {
        type: String
    },
    zipCode: {
        type: String
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Address = model('Address', addressSchema);


module.exports = Address;
