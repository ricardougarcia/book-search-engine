const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");
const controller = require("./controllers/user-controller");
// I added this but I am not sure it is needed if it was functional before?
// const { authMiddleware } = require("./utils/auth");

// I think this is for tokens or auth func, must double check
// const logger = require("morgan");
// const mongoose = require("mongoose");

const compression = require("compression");

const { typeDefs, resolvers } = require("./schemas");

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // added context
  context: authMiddleware,
});
server.applyMiddleware({ app });

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
