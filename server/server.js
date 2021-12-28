const express = require("express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");
// I think this is for tokens or auth func, must double check
// const logger = require("morgan");
// const mongoose = require("mongoose");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/book-search-db",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   }
// );

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
