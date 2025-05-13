const express = require('express');
const router = express.Router();
const matchesController = require('../controllers/matchesController');

// Define routes
router.get('/', matchesController.getAllMatches);
router.post('/', matchesController.addMatch);

module.exports = router;