// npm
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');

// Import routers
const authRouter = require('./controllers/auth');
const testJwtRouter = require('./controllers/test-jwt');
const usersRouter = require('./controllers/users');
const funmomentsRouter = require("./controllers/funmoments.js"); //adding funmomentsRouter to server.js

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {

  // keeping this console log in so that I know that my Mongo database is connected and working in my terminal for greatest awareness & troubleshooting
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// Routes
app.use('/auth', authRouter); //all routes with authRouter will begin with /auth including the sign-up & sign-in routes
app.use('/test-jwt', testJwtRouter);
app.use('/users', usersRouter);
app.use("/funmoments", funmomentsRouter); //this is called "mount the router"

const PORT= process.env.PORT
// Start the server and listen on port 3000
app.listen(PORT, () => {

  // keeping this console log in so that I'm aware that my express app is ready & isn't crashing. This is for awareness of terminal and of app working. This is necessary for an effective app!
  console.log('The express app is ready!');
});



































// Perhaps could update server.js to listening this way instead: app.listen(process.env.PORT || 3000)

// Because above listening on port 3000 in server.js...
// Will show output here: http://localhost:3000

// Notes for myself on Postman and using bearer tokens
/*
With this collection, I’ll be able to group a series of Postman requests, 
and reuse them as necessary. This will make it easier to return to previous 
requests later. The other advantage relates to authorization. For this, I’ll need 
to include a bearer token on all future requests for "FunMoment". By using a 
collection, all CRUD requests included in the collection will be able to share 
the same token. Dooode, that makes it so much easier!!!!
*/
