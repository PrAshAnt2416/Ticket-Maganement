const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ticketDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

// Basic route
app.get('/', (req, res) => {
    res.send('Ticket Management System API');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
