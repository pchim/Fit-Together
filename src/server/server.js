const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const db = require('./db/connection.js');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const FitbitPassport = require('./authentication/FitbitPassport');
const MovesPassport = require('./authentication/MovesPassport');
const fileHelper = require(__dirname + '/fileHelper.js');
const config = require(fileHelper.apiKeyPath);
const app = express();
const port = process.env.PORT || 3000;

// const redisClient = require('./db/redisConnection.js');

// Socket.io Config
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});

app.use(express.static(path.join(__dirname, '../client')));
app.use(cookieParser(config.session.secret));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ 
  secret: config.session.secret,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

server.listen(port, () => console.log('Server is listening on port ', port, '\nRefresh the browser '));

module.exports = app;
