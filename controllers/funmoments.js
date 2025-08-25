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
const FunMoment = require("../models/FunMoment.js");
const router = express.Router();

// ADD ROUTES HERE

// ---------------------------------------------------------------------------------------

// CREATE FUNMOMENT - This is a POST ROUTE - URL ends with /funmoments
// We're defining the route here that listens for POST requests on /funmoments:
router.post("/", verifyToken, async (req, res) => {
   try {
    // Adding logged-in user as the author
    req.body.author = req.user._id;
    // Creating the funmoment
    const funmoment = await FunMoment.create(req.body);
    funmoment._doc.author = req.user;
    // Sending a json response here
    res.status(201).json(funmoment);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});
/*
NOTE:
Also, adding verifyToken directly to this route guarantees its protection, independent of the order 
in which middleware is applied elsewhere in the application. This approach is the recommended method 
for handling authentication when securing routes individually.
*/

// ---------------------------------------------------------------------------------------

// VIEW FUNMOMENTS - This is a GET route - URL also ends in /funmoments - This is an index of all of the funmoments compiled in one place.
// Also, a user needs to be logged in to view all funmoments.
// This route listens for GET requests on /funmoments.
router.get("/", verifyToken, async (req, res) => {
    try {
        // Using find({}) method of the FunMoment model to retrieve all funmoments from the database
        const funmoments= await FunMoment.find({})
            // populating method - using this to populate the author property of each funmoment with a user object
            .populate("author")
            // sort method - using this method to sort funmoments in descending order (so that the most recent entries are at the top)
            .sort({ createdAt: "desc" });
        // After the new funmoments are retrieved, this is where we send a JSON response containing the funmoments array.
        res.status(200).json(funmoments);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

// ---------------------------------------------------------------------------------------

// VIEW FUNMOMENT / Like a Showpage when we did express and EJS - 
// This is a GET route - URL ends in the following /funmoments/:id

// FIRST SHOWPAGE BEFORE ADDING COMMENTS SECTION:
router.get("/:id", verifyToken, async (req, res) => {
    try {
        const funmoment = await FunMoment.findById(req.params.id).populate("author");
        res.status(200).json(funmoment);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});


// ---------------------------------------------------------------------------------------

module.exports = router;
