const multipart = require('parse-multipart');

module.exports.readFile = function readFile(request) {
    var bodyBuffer = Buffer.from(request.body);
    var boundary = multipart.getBoundary(request.headers['content-type']);
    var parts = multipart.Parse(bodyBuffer, boundary);

    var fileData = parts[0].data;         // Image buffer data
    var fileName = parts[0].filename;     // testImage.png

    const file = new File();
    file.name = fileName;
    file.data = fileData;
    return file;
}

class File {
    name;
    data;
}