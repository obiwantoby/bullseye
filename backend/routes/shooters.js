const express = require('express');
const router = express.Router();
const shootersController = require('../controllers/shootersController');

// Define routes
router.get('/', shootersController.getAllShooters);
router.post('/', shootersController.addShooter);

module.exports = router;