const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Define Middleware
if (process.env.NODE_ENV === "production") {
    app.use(express.static('./client/build'));
}
else {
    process.env = require('./env.json');
}

const PORT = process.env.PORT;

// Connect to the Mongo DB
mongoose.connect(
    // Use MONGODB URI from environment, otherwise use local database
    process.env.MONGODB_URI,
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
).then(({ connections }) => { console.log('Database connected on port', connections[0].port + '...'); });

// API Routes
require('./routes/apiRoutes');

// Send every HTML route to React App
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Listen on env port
app.listen(PORT, () => {
    console.log("Listening on port", PORT + "...");
});