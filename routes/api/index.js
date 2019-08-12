const path = require("path");
const router = require("express").Router();
const yelpRoutes = require("./yelp.js");

// API Routes
//we are already at /api
router.use("/yelp", yelpRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

module.exports = router;