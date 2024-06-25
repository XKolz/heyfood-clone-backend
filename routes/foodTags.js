// routes/foodTags.js
const express = require('express');
const router = express.Router();
const FoodTag = require('../models/FoodTag');
const upload = require('../middleware/upload');

// Get all food tags
router.get('/', async (req, res) => {
  try {
    const foodTags = await FoodTag.find();
    res.json(foodTags);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new food tag
router.post('/', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err });
    }
    const { name } = req.body;
    const image = req.file ? req.file.path : '';

    const foodTag = new FoodTag({
      name,
      image,
    });

    try {
      const newFoodTag = await foodTag.save();
      res.status(201).json(newFoodTag);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
});

module.exports = router;
