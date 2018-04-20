const express = require("express"),
  massive = require("massive"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  controller = require("./controller.js"),
  session = require("express-session"),
  passport = require("passport"),
  Auth0Strategy = require("passport-auth0");


