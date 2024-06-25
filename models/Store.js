const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: '123 Main St, Anytown, USA', // Static location
  },
  image: {
    type: String,
    required: true,
  },
  tags: [{
    type: String,
    required: false,
  }],
}, { timestamps: true });

module.exports = mongoose.model('Store', StoreSchema);
