// importing mongoose library - Before we're able to define our model and schema, we first need to import the mongoose library.
const mongoose = require('mongoose');

const funMomentSchema = new mongoose.Schema({
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
    { timestamps: true }
);







































// Notes Below 







// -------------------------------------------------------------------------------

// INITIAL NOTES I WROTE BELOW. At first I thought Pascal case was most common 
// and widely used for Schema, but then I'm getting conflicting advice. Thus, I'm 
// choosing to stick with what is in the GA lessons and use camelCase.

// BELOW IS WHAT I INITIALLY FOUND ABOUT PASCAL CASE:
// My FunMomentSchema (I researched correct way to type schema and it says Pascal Case, so using that here.)...
// My FunMomentSchema will consist of the following:
// title, text, and a category - They will be all required with a type of 'string'
// I want the category property to have preset values, so I'll use an enum of:
// Enum will have: ['Trick Plays', 'Dance Routines', 'Sing A Long', ...etc.]
// The FunMomentSchema will also have an author section/property, which will reference the user who created the fun moment.
// Also, making sure the CommentSchema is above the FunMomentSchema (since it will be referenced inside the FunMomentSchema object).
// I don't need to compile the CommentSchema into a model (or export it) because it will be embedded inside the parent FunMomentSchema. And the functionality of the comments section needs to go through the FunMomentSchema first.
// using Pascal case for FunMomentSchema since I think that's the best practice according to research.

// AFTER EVERYTHING I WROTE ABOUT PASCAL CASE, SWITCHING BACK TO camelCase as per GA lesson materials.


