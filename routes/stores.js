const express = require('express');
const router = express.Router();
const Store = require('../models/Store');
const upload = require('../middleware/upload');

// Get all stores with search, sorting, and filtering by tags
router.get('/', async (req, res) => {
  try {
    const { search, sort, tags } = req.query;
    let query = {};
    if (search) {
      query = { ...query, name: { $regex: search, $options: 'i' } };
    }
    if (tags) {
      query = { ...query, tags: { $in: tags.split(',') } };
    }

    let stores = await Store.find(query);

    if (sort) {
      const sortOptions = sort.split(',').join(' ');
      stores = await Store.find(query).sort(sortOptions);
    } else {
      stores = await Store.find(query).sort({ createdAt: -1 }); // Default sorting by createdAt descending
    }

    res.json(stores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new store
router.post('/', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err });
    }
    const { name, description, location = '123 Main St, Anytown, USA', tags } = req.body;
    const image = req.file ? req.file.path : '';

    const store = new Store({
      name,
      description,
      location,
      image,
      tags: tags ? tags.split(',') : [],
    });

    try {
      const newStore = await store.save();
      res.status(201).json(newStore);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
});

module.exports = router;
