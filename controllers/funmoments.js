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

// add routes here

module.exports = router;
