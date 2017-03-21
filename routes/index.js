var express = require('express');
var path = require('path');
var router = express.Router();

var cv = require('opencv');

// camera properties
var camWidth = 320 * 2;
var camHeight = 240 * 2;
var camFps = 10;
var camInterval = 1000 / camFps;

// face detection properties
var rectColor = [0, 255, 0];
var rectThickness = 2;

// initialize camera
var camera = new cv.VideoCapture(0);
camera.setWidth(camWidth);
camera.setHeight(camHeight);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})




module.exports = router;
