const express = require('express');
const router = express.Router();
//const fs = require('fs');

router.post('/', function(req,res){
  const carId = +req.body.carId;
  const userData = req.body.userData;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  console.log(`Car Id = ${carId} start = ${startDate} end = ${endDate}, userData is ${JSON.stringify(userData)}`);
  res.statusCode = 200;
  res.end("Ваш закакз принят");
});

module.exports = router;
