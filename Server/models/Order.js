const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  pickupType: { type: String, required: true },
  items: { type: String, required: true },
  timeSlot: { type: String, required: true },
  date: { type: Date, required: true }
});

const OrderModel = mongoose.model("Order", orderSchema);

module.exports = OrderModel;
