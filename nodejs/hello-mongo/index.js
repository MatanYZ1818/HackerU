const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const req = require('express/lib/request');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/hello-mongo');
    console.log('mongodb connection established on port 27017');
}

main().catch(err => console.log(err));

const app = express();

app.use(express.json());

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
}));

app.listen(4444);

app.get('/', (req, res) => {
    res.send("Welcome");
});

require('./handlers/users')(app);
require('./handlers/grades')(app);
require('./handlers/auth')(app);