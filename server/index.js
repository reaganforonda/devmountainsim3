require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  controller = require("./controller.js"),
  session = require("express-session"),
  passport = require("passport"),
  Auth0Strategy = require("passport-auth0");

const app = express();

// .env Desconstructor
const {
  CONNECTION_STRING,
  CONNECTION_PORT,
  SESSION_SECRET,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  CALLBACK_URL
} = process.env;

app.use(bodyParser.json());
app.use(cors());


// SERVER STATIC FILES
app.use(express.static(__dirname + '../../build'));

// ######################
// ###### SESSIONS ######
// ######################
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

// ######################
// ###### Database ######
// ######################

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(e => console.log(`Error: ${e}`));

// ######################
// ###### Endpoints ######
// ######################
app.post('/api/register', controller.addUser);
app.post('/api/login', controller.login);
app.get('/api/posts/:userId');





app.listen(CONNECTION_PORT, () => {
  console.log(`Creeping on Port: ${CONNECTION_PORT}`);
});


