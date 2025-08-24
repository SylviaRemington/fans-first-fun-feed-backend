const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.hashedPassword;
  }
});

module.exports = mongoose.model('User', userSchema);




/*
Thanks to the verifyToken middleware function, all protected routes in this application will have access
 to an object representing the logged in user, through the req object. For these purposes, the most relevant 
 properties on the user object will be its ObjectId (_id) and the username. Additionally, the User model will 
 be referenced by funmoment documents.
*/


