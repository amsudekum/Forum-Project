const express = require("express");
const app = express(); 
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const PORT = process.env.PORT || 5000;