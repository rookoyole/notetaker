const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

//Setup body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the port
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});