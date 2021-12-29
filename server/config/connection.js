const mongoose = require("mongoose");

mongoose.connect(
  // unsure if I need to keep mongodb://localhost/googlebooks??
  process.env.MONGODB_URI || "mongodb://localhost/book-search-db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
