const router = require('express').Router()

// File Imports:
const yelpController = require('../../controllers/yelpController');

// matches with api/eats
router.route('/').get(yelpController.findAll);

// matches with '/api/eats/id from my db:
router.route('/:id').get(yelpController.findById);

module.exports = router;