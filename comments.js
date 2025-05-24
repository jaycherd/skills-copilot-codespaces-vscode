// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// In-memory storage for comments
let comments = [];

// Endpoint to add a comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    if (!comment.text || !comment.author) {
        return res.status(400).send('Comment must have text and author');
    }
    comments.push(comment);
    res.status(201).send(comment);
});

// Endpoint to retrieve all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});