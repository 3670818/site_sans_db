require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5001; // Changez 5000 à 5001 ou un autre port disponible

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB using Mongoose
const uri = process.env.MONGODB_URI;

mongoose.connect(uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Define a route to handle form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const result = await newContact.save();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
