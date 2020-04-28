var Jimp = require("jimp");

module.exports = async function (context) {
    const width = parseInt(context.bindingData.width);
    const height = context.bindingData.height ? parseInt(context.bindingData.height) : undefined;
    const crop = context.bindingData.crop ? context.bindingData.crop : false;
    const fileData = context.bindingData.fileData;

    await Jimp.read(fileData)
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
};