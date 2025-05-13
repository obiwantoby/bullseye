const express = require('express');
const bodyParser = require('body-parser');
const shootersRoutes = require('./routes/shooters');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/shooters', shootersRoutes);

app.get('/', (req, res) => {
  res.send('Bullseye Backend is Running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});