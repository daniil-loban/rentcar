const express = require('express');
const router = express.Router();
const fs = require('fs');


/* GET users listing. */
router.get('/', async function(req, res, next) {
  fs.readFile('assets/jsons/cars.json', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

router.get('/img/:filename', function(req, res, next) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "image/jpeg");
  require("fs").readFile(`public/img/cars/${req.params.filename}`, (err, image) => {
    res.end(image);
  });
});

router.get('/img/min/:filename', function(req, res, next) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "image/jpeg");
  require("fs").readFile(`public/img/cars/min/${req.params.filename}`, (err, image) => {
    res.end(image);
  });
});

module.exports = router;
