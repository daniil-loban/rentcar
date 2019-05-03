const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', async function(req, res, next) {
  fs.readFile('assets/jsons/cars.json', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

module.exports = router;
