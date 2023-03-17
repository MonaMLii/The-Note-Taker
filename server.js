//Import dependencies and built-in Node.js package 'path' to resolve path of files that are located on the server
const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./routes/index')

// Specify on which port the Express.js server will run
const PORT =process.env.PORT || 3001;
// Initialize an instance of Express.js
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// Static middleware pointing to the public folder
app.use(express.static('public'));

app.use('/api', api);



// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET Route for note page
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);


//listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
