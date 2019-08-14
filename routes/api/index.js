const router = require('express').Router();
// const path = require('path');


// File Imports:
const eatsRoutes = require('./eats.js');

// API Routes:
router.use('/eats', eatsRoutes);


// router.use(function (req, res) {
//     res.sendFile(path.join(_dirname, "index.html"));
// });

module.exports = router;

