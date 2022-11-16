const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/index.html'), err => {
      if (err) {
        res.status(500).send(err)
      }
   });
});

app.post("/test", (req, res) => {
    res.json({name: req.body.name, age: req.body.age});
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`app listening on ${port}`);
});