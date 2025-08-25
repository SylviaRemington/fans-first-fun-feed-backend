// controllers/funmoments.js
// The purpose of this route is to handle data that will be sent along with a form submission.


// These are the specs for building the funmoments route:
// CRUD Action: CREATE
// Method: POST
// Path: /funmoments
// Response: JSON
// Success Status Code: 201 Created
// Success Response Body: A new funmoment object
// Error Status Code: 500 Internal Server Error
// Error Response Body: A JSON object with an error key and a message describing the error.

const express = require("express");
const verifyToken = require("../middleware/verify-token.js");
const FunMoment = require("../models/funmoment.js");
const router = express.Router();

// ADD ROUTES HERE

// CREATE FUNMOMENT - This is a POST ROUTE - URL ends with /funmoments
// We're defining the route here that listens for POST requests on /funmoments:
router.post("/", verifyToken, async (req, res) => {
  // new route
});
/*
NOTE:
Also, adding verifyToken directly to this route guarantees its protection, independent of the order 
in which middleware is applied elsewhere in the application. This approach is the recommended method 
for handling authentication when securing routes individually.
*/


module.exports = router;
