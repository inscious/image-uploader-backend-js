const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    name: String,
    url: String,
});

module.exports = new mongoose.Model("Image", imageSchema);
