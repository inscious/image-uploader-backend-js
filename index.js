const express = require("express");
const cors = require("cors");
require("./database/databaseConnection");
const Routes = require("./routes/imageRoutes");
const { cloudinaryConfig } = require("./middleware/cloudinary");

const app = express();
app.use(cors());
app.use("*", cloudinaryConfig);
app.use("/routes/images", Routes);

app.get("/", (req, res) => {
    res.send("Image Uploader Backend");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is runnig on port: ${PORT}`);
});
