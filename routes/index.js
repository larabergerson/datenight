// Dependencies
const router = require('express').Router();
// const path = require('path');

// File Imports:
const apiRoutes = require('../routes/api')

// routes (localhost:3001/api)
router.use('/api', apiRoutes);

// send all other routes to index.html:
// router.use(function (req, res) {
//     res.sendFile(path.join(_dirname, 'index.html'));
//     // } GO BACK TO PAULS CODE- IN ROUTES FOLDER/index.js (out side of api folder)
// });
// export:
module.exports = router;