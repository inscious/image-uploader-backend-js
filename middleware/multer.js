const multer = require("multer");
const DatauriParser = require("datauri/parser");
const path = require("path");
const { parse } = require("path");

const storage = multer.memoryStorage();

const multerUploads = multer({
    storage: storage,
    fileFilter: (req, res, cb) => {
        if (
            file.mimeType === "image/jpeg" ||
            file.mimeType === "image/jpg" ||
            file.mimeType === "image/png"
        ) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error("Files should be JPEG, JPG or PNG"));
        }
    },
}).single("myFile");

const parser = new DatauriParser();

const dataUri = (req) => {
    parser.format(
        path.extname(req.file.originalname).toString(),
        req.file.buffer
    );
};

module.exports = (multerUploads, dataUri);
