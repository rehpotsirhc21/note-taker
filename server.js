const {Router} = require("express");
const fs = require('fs');
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3001;
const router = require('express').Router();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const {notes} = require('./db/db.json')


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes)
app.listen(PORT, () => {
  console.log(`Application is running on PORT: ${PORT}`);
});
