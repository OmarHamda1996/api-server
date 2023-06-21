const express = require('express');
const Food = require('../models/food-model');
const FoodCollection = require('../models/food-collection');

const router = express.Router();
const foodModel = require('../models/food-model');

const foodCollection = new FoodCollection(foodModel);

router.post('/', async (req, res) => {
  try {
    const record = await foodCollection.create(req.body);
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const records = await foodCollection.read();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const record = await foodCollection.readOne(req.params.id);
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const record = await foodCollection.update(req.params.id, req.body);
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const record = await foodCollection.delete(req.params.id);
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
