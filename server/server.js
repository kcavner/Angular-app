const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes')
const app = express();
const db = require('../server/config/connection')

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve Angular files (replace 'angular' with your Angular project folder name)
app.use(express.static(path.join(__dirname, 'angular')));

// Handle API routes (if applicable)
app.use(routes);

// All other routes are handled by Angular (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'angular', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});