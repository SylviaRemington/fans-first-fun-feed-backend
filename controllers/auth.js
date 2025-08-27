const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/verify-token');

const User = require('../models/User');

const saltRounds = 12;

// SIGN-UP ROUTE
router.post('/sign-up', async (req, res) => { //sign-up route //as a result of this with Postman will be making requests to POST /auth/sign-up
  try {
    const userInDatabase = await User.findOne({ username: req.body.username });
    
    if (userInDatabase) {
      return res.status(409).json({err: 'Username already taken.'});
    }
    
    const user = await User.create({
      username: req.body.username,
      hashedPassword: bcrypt.hashSync(req.body.password, saltRounds)
    });

    const payload = { username: user.username, _id: user._id };

    const token = jwt.sign({ payload }, process.env.JWT_SECRET);

    res.status(201).json({ token }); //the response issued by the sign-up route & the route returns a token
    // As per note in last line: the fact that the route returns a token is important because then all other features in this application will be protected, requiring authenticated requests to access them.
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// SIGN-IN ROUTE
router.post('/sign-in', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json({ err: 'Invalid credentials.' });
    }

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password, user.hashedPassword
    );
    if (!isPasswordCorrect) {
      return res.status(401).json({ err: 'Invalid credentials.' });
    }

    const payload = { username: user.username, _id: user._id };

    const token = jwt.sign({ payload }, process.env.JWT_SECRET);

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// SIGN-OUT ROUTE
// Adding sign-out route to fulfill project 3 requirements & also so this is a fully functioning app
router.post('/sign-out', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Signed out successfully' });
});

module.exports = router;

