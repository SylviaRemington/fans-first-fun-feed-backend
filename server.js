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

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
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

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('The express app is ready!');
});

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