var exampleFile = {
    createReadStream: function (opts) {
        var start = opts.start;
        var end = opts.end;
        // Return a readable stream that provides the bytes
        // between offsets "start" and "end" inclusive
    }
}

var VideoStream = require('videostream');

var elem = document.createElement('video');
var videostream = VideoStream(small.mp4, elem);

elem.addEventListener('error', function () {
    // listen for errors on the video/audio element directly
    var errorCode = elem.error
    var detailedError = videostream.detailedError
    // videostream.detailedError will often have a more detailed error message
})

