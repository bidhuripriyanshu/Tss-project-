const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');

// Add a new schedule
router.post('/', async (req, res) => {
  try {
    const schedule = new Schedule(req.body);
    await schedule.save();
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, error });
  }
});

// Get all schedules
router.get('/', async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
