
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Message = require('./models/Message');

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('Connection error:', error.message);
  });

// Middleware for CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Middleware to parse JSON
app.use(express.json());

// Routes
app.post('/api/contact', (req, res) => {
  const message = new Message({
    ...req.body,
  });

  message
    .save()
    .then(() => res.status(201).json({ message: 'Message saved successfully!' }))
    .catch((error) => res.status(400).json({ error }));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
