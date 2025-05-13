const express = require('express');
const router = express.Router();
const scoresController = require('../controllers/scoresController');

// Define routes
router.get('/', scoresController.getAllScores);
router.post('/', scoresController.addScore);

module.exports = router;