"use strict";

const express = require("express");
const expressHandlbars = require("express-handlebars");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burger_db"
});

connection.connect(err => {
  if (err) {
    console.error("error connecting", err.stack);
    return;
  }

  console.log(`connected with id ${connection.threadId}`);
});
