const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  price: Number,
  hasDrink: Boolean,
  quantity: Number,
  categories: {
    type: [String],            
    default: [],              
  }
});

const OrderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: String,
    required: true
  },
  productIds: [CartItemSchema],
  total: {

    type: Number,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  }
}, { timestamps: true });
module.exports = mongoose.model('Order', OrderSchema);
