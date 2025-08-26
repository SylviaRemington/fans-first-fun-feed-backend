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

// VIEW FUNMOMENTS (plural) - This is a GET route - URL also ends in /funmoments - This is an index of all of the funmoments compiled in one place.
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

// VIEW FUNMOMENT (individual) / Like a Showpage when we did express and EJS - 
// This is a GET route - URL ends in the following /funmoments/:id

// FIRST SHOWPAGE BEFORE ADDING COMMENTS SECTION:
// A user needs to be logged in to view the funmoment details.
router.get("/:id", verifyToken, async (req, res) => {
    try {
        // findById method passing in the req.params.id & populating the author of the funmoment detail
        const funmoment = await FunMoment.findById(req.params.id).populate("author");
        // once fun moment is retrieved, sending a json response with the funmoment object
        res.status(200).json(funmoment);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

// ---------------------------------------------------------------------------------------

// UPDATE FUNMOMENT - This is a PUT route - URL ends in this format /funmoments/:id

router.put("/:id", verifyToken, async (req, res) => {
    // add route
    try {
        // Finding the funmoment & retrieving the funmoment from the database so we can update it:
        const funmoment = await FunMoment.findById(req.params.id);

        // Checking permissions - checking if user has permission to update the funmoment:
        if (!funmoment.author.equals(req.user._id)) {
            // If condition and values don't match, responding with a 403 status and message to user.
            return res.status(403).send("Incorrect permissions - You don't have clearance to update this Fun Moment.");
        }

        // Updating the funmoment - If user has permission to update, calling on FunMoment model & findByIdAndUpdate method:
        const updatedFunMoment = await FunMoment.findByIdAndUpdate(

            // this argument below locates the funmoment:
            req.params.id,

            // this argument below is used to update the funmoment document
            req.body,

            // this argument says that we want this method to return the updated document
            { new: true }
        );

        // Appending a complete user to the updatedFunMoment document(req.user):
        updatedFunMoment._doc.author = req.user;

        // This is the issuing of a json response with the updatedFunMoment object:
        res.status(200).json(updatedFunMoment);

    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

// As an extra layer of protection, I'm using conditional rendering in my React app 
// to limit access to this functionality so that only the author of a hoot can view the 
// UI elements that allow editing.

// ---------------------------------------------------------------------------------------

// DELETE FUNMOMENT - This is a DELETE route - URL ends in /funmoments/:id - also make sure put an actual id in POSTMAN for the web url too
// User needs to be logged in to delete a hoot, so including verifyToken middleware
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        const funmoment = await FunMoment.findById(req.params.id);

        if (!funmoment.author.equals(req.user._id)) {
            return res.status(403).send("You don't have clearance to delete this Fun Moment.");
        }

        const deletedFunMoment = await FunMoment.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedFunMoment);

    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

// ---------------------------------------------------------------------------------------

module.exports = router;
