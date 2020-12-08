const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const keys = require("./keys");
const { unsplashRoutes } = require("./routes");
const errorHandler = require("./controllers/error");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors access
app.use(cors());

// routes
app.use("/unsplash", unsplashRoutes);

app.use((req, res, next) => {
    const error = new Error("not found");
    error.status = 404;
    next(error);
});

app.use(errorHandler);

app.listen(keys.PORT);
