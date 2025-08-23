// importing mongoose library - Before we're able to define our model and schema, we first need to import the mongoose library.
const mongoose = require('mongoose');

// My FunMomentSchema (I researched correct way to type schema and it says Pascal Case, so using that here.)...
// My FunMomentSchema will consist of the following:
// title, text, and a category - They will be all required with a type of 'string'
// I want the category property to have preset values, so I'll use an enum of:
// Enum will have: ['Trick Plays', 'Dance Routines', 'Sing A Long', ...etc.]
// The FunMomentSchema will also have an author section/property, which will reference the user who created the fun moment.
// Also, making sure the CommentSchema is above the FunMomentSchema (since it will be referenced inside the FunMomentSchema object).
// I don't need to compile the CommentSchema into a model (or export it) because it will be embedded inside the parent FunMomentSchema. And the functionality of the comments section needs to go through the FunMomentSchema first.

