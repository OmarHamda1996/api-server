const express = require('express');
const MedicalRecord = require('../models/medicalrecord-model');
const MedicalRecordCollection = require('../models/medicalrecord-collection');

const router = express.Router();
const medicalRecordModel = require('../models/medicalrecord-model');

const medicalRecordCollection = new MedicalRecordCollection(medicalRecordModel);

router.post('/', async (req, res) => {
  try {
    const record = await medicalRecordCollection.create(req.body);
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const records = await medicalRecordCollection.read();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const record = await medicalRecordCollection.readOne(req.params.id);
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const record = await medicalRecordCollection.update(req.params.id, req.body);
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const record = await medicalRecordCollection.delete(req.params.id);
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
