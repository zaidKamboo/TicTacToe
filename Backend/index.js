const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const gameDetailsRoutes = require("./Routes/gameDetails");
const contactUsRoutes = require("./Routes/contactUs");
const cors = require("cors");

// SERVER CREATION
const app = express();

app.use(bodyParser.json());
// CORS policy handling
app.use(cors());

app.use("/gameDetails", gameDetailsRoutes);
app.use("/contactUs", contactUsRoutes);

// DATABASE CONNECTION
const DB_URL =
  "mongodb+srv://zaidkamboo100:j9Xpvgoolat2owcd@cluster0.ady7zmr.mongodb.net/";
mongoose
  .connect(DB_URL)
  .then(console.log("Connected to Db successfully."))
  .catch((err) => {
    console.log(`Error : ${err}`);
  });

// SERVING THE SERVER ON LOCAL PC PORT.
const PORT = 5000;
// j9Xpvgoolat2owcd
app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
