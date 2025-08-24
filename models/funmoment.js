// importing mongoose library - Before we're able to define our model and schema, we first need to import the mongoose library.
const mongoose = require('mongoose');


// Creating the CommentSchema
const CommentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);


// Creating the FunMomentSchema
// My FunMomentSchema (I researched correct way to type schema and it says Pascal Case, so using that here.)
// (More notes on this below regarding Pascal case and naming conventions.)
const FunMomentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['Trick Plays', 'Cool Dances', 'Songs Sung', 'Individual Players', 'Dad Bod Squad', 'Princess', 'Umpire', 'Mascot'],
        // Could also add which specific team it's related to -- this could be a stretch goal
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},

    // This will give my funmoment documents createdAt and updatedAt properties.
    // Then, I can use the createdAt property when I display the funmoment post & the date it was made.
    { timestamps: true }
);


// Registering the model with mongoose
const FunMoment = mongoose.model('FunMoment', FunMomentSchema);


// Exporting the model so that the rest of the application has access to it
module.exports = FunMoment;






// NOTES ON NAMING CONVENTIONS & USING CAMEL CASE //PLUS ADDTL NOTES
// My FunMomentSchema (I researched correct way to type schema and it says Pascal Case, so using that here.)...
// My FunMomentSchema will consist of the following:
// title, text, and a category - They will be all required with a type of 'string'
// I want the category property to have preset values, so I'll use an enum of:
// Enum will have: ['Trick Plays', 'Dance Routines', 'Sing A Long', ...etc.]
// Another Enum Version: ['Trick Plays', 'Cool Dances', 'Songs Sung', 'Individual Players', 'Dad Bod Squad', 'Princess', 'Umpire', 'Mascot'],
// The FunMomentSchema will also have an author section/property, which will reference the user who created the fun moment.
// Also, making sure the CommentSchema is above the FunMomentSchema (since it will be referenced inside the FunMomentSchema object).
// I don't need to compile the CommentSchema into a model (or export it) because it will be embedded inside the parent FunMomentSchema. And the functionality of the comments section needs to go through the FunMomentSchema first.
// using Pascal case for FunMomentSchema since I think that's the best practice according to research.

/*
Also, I double checked this info with an AI tool and this is what it said on grok.com:

What My Model/Schema/Model Registration Should Be:
- Model File: FunMoment.js
- Schema Name: FunMomentSchema
- Model Registration: FunMoment

Notes
Why These Changes:
Model File: Change funmoment.js to FunMoment.js to use PascalCase, which is standard for Mongoose model 
files to match the model name and improve readability.

Schema Name: funMomentSchema is almost correct but should be FunMomentSchema for consistent PascalCase 
(capitalizing both words).

Model Registration: Change Funmoment to FunMoment for consistent PascalCase (capitalizing both words). 
Mongoose expects a singular, PascalCase name for models, as it pluralizes the collection name (e.g., FunMoments).


PascalCase in 2025: PascalCase is not outdated for Mongoose models/schemas in Node.js. It’s the 
standard convention in Mongoose documentation and most Express/MongoDB projects. 

For React components, PascalCase is also standard. If your class suggested otherwise, they might be referring 
to a specific style guide (e.g., preferring camelCase for variables), but for Mongoose models, PascalCase is 
best practice.

React Context: Since you mentioned a React app, these conventions apply to your backend (Node.js/Mongoose). 
For React components, also use PascalCase (e.g., FunMomentCard.js).
*/




