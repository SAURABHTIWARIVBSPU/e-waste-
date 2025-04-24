const { Request, Response } = require("express");
const OrderModel = require("../models/Order");

// Submit Order
 exports. submitOrder = async (req, res) => {
  try {
    const { name, email, phone, address, city, state, zip, pickupType, items, timeSlot, date } = req.body;

    if (!name || !email || !phone || !address || !city || !state || !zip || !pickupType || !items || !timeSlot || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Save to MongoDB
    const newOrder = new OrderModel({
      name,
      email,
      phone,
      address,
      city,
      state,
      zip,
      pickupType,
      items,
      timeSlot,
      date: new Date(date) // Convert date to valid Date object
    });

    await newOrder.save();

    res.status(201).json({ message: "✅ Order submitted successfully!" });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ message: "❌ Server error", error });
  }
};