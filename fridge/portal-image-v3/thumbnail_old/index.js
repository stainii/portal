var Jimp = require("jimp");

module.exports = async function (context, req) {
    if (req.headers['content-type'] !== "application/octet-stream") {
        context.res = {
            status: 400,
            body: "Header Content-Type should be 'application/octet-stream'",
        }
    } else if (!req.body) {
        context.res = {
            status: 400,
            body: "Please provide an image in the body",
        }
    } else if (!req.query.width) {
        context.res = {
            status: 400,
            body: "Please provide a query parameter 'width'. For example '/thumbnail?width=200'",
        }
   } else {
        let width = parseInt(req.query.width);
        let height = req.query.height ? parseInt(req.query.height) : undefined;
        let crop = req.query.crop ? req.query.crop : false;

        await Jimp.read(req.body)
            .then((image) => {
                if (height && crop) {
                    let max = width > height ? width : height;
                    image.resize(max, Jimp.AUTO)
                         .crop((max - width) / 2, (max - height) / 2, width, height);
                } else {
                    image.resize(width, height ? height : Jimp.AUTO);
                }

                image.getBuffer(Jimp.MIME_PNG, (error, stream) => {
                        if (error) {
                            context.res = {
                                status: 500,
                                body: error,
                            }
                        } else {
                            context.res = {
                                status: 201,
                                body: stream,
                                headers: {
                                    "content-type": 'image/png'
                                }
                            }
                        }
                    });
            }).catch(e => {console.error(e)});
    }


};