var cv = require('opencv');

// camera properties
var camWidth = 320;
var camHeight = 240;
var camFps = 10;
var camInterval = 1000 / camFps;

// face detection properties
var rectColor = [0, 255, 0];
var rectThickness = 2;

// initialize camera
var camera = new cv.VideoCapture(0);
camera.setWidth(camWidth);
camera.setHeight(camHeight);

module.exports = function (socket) {
    setInterval(function () {
        camera.read(function (err, im) {
            if (err) throw err;
            socket.emit('frame', { buffer: im.toBuffer() });
        });
    }, camInterval);
};
