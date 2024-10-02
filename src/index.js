const express = require("express");

// Load environment variables
require('dotenv').config();

const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");

const mongoose = require("mongoose");

app.use(express.json());

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res, next) => {
    res.send("Hello")
});

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(port, () => {
        console.log(`Server started on port no ${port}`);
    });
})
.catch((err) => {
    console.log(err);
});

