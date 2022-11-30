// Imports & requires
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors())

// Connect to db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Schema and model creation
const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: { 
    rate: Number,
    count: Number 
  }
});

const ProductModel = mongoose.model("products", productSchema);

// App.use
app.use(bodyParser.urlencoded({ extended: false }));

// App.get
app.get('/products', (req, res) => {
  const productos = ProductModel.find({}, (err, docs) => {
    if (!err) res.send(docs);
  });
})

app.post('/create', (req, res) => {
  res.json({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category
    }
  )
});

// App.post

const port = process.env.PORT || 5000;

// App.listen
app.listen(port, () => {
    console.log(`app listening on ${port}`);
});