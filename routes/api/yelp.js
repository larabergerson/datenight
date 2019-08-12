
const router = require('express').Router();

const yelpController = require('../../controllers/yelpController');
//we are already at /api/yelp
router.route('/').get(yelpController.findAll);

module.exports = router;