const express = require('express');
const router = express.Router();
const { MedicalRecord } = require('../models');


router.post('/', async (req, res) => {
  try {
    const { patientName, dateOfBirth, medicalHistory, allergies, medications } = req.body;
    const medicalRecord = await MedicalRecord.create({
      patientName,
      dateOfBirth,
      medicalHistory,
      allergies,
      medications,
    });
    res.status(201).json(medicalRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.get('/', async (req, res) => {
  try {
    const medicalRecords = await MedicalRecord.findAll();
    res.json(medicalRecords);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const medicalRecord = await MedicalRecord.findByPk(id);
    if (medicalRecord) {
      res.json(medicalRecord);
    } else {
      res.status(404).json({ message: 'Medical record not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { patientName, dateOfBirth, medicalHistory, allergies, medications } = req.body;
    const medicalRecord = await MedicalRecord.findByPk(id);
    if (medicalRecord) {
      await medicalRecord.update({ patientName, dateOfBirth, medicalHistory, allergies, medications });
      res.json(medicalRecord);
    } else {
      res.status(404).json({ message: 'Medical record not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const medicalRecord = await MedicalRecord.findByPk(id);
    if (medicalRecord) {
      await medicalRecord.destroy();
      res.json(medicalRecord);
    } else {
      res.status(404).json({ message: 'Medical record not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
