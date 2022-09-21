const mongoose = require("mongoose");
require("dotenv/config");

const MONGO_CONNECTION = process.env.MONGO_CONNECTION;
mongoose.connect(
    MONGO_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected to mongo: ", MONGO_CONNECTION);
    }
);
