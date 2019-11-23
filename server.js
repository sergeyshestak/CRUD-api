const app = require('express')();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const webSocket = require('ws');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const dbConfig = require('./config/database.config');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
}).then(() => {
    console.log('Successfully connected to the database.');
}).catch((err) => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes.' });
});

require('./app/routers/note.routers')(app);

http.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

const wss = new webSocket.Server({ port: 3333 });

wss.on('connection', (ws) => {
    console.log('a user connected');
    ws.on('close', () => {
        console.log('a user disconnected');
    });
    ws.on('message', (e) => {
        console.log(e);
    });
});
