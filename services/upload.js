const Image = require("../models/imageSchema");
const { uploader } = require("../middleware/cloudinary");

const upload = async (file) => {
    return uploader
        .upload(file)
        .then((result) => {
            const image = new Image({
                name: result.original_filename,
                url: result.url,
            });
            image.save();
            return result;
        })
        .catch((error) => {
            console.log("An error has occured", error);
        });
};

module.exports = upload;
