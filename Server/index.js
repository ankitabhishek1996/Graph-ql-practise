const { ApolloServer } = require("apollo-server");

const { resolvers } = require("./resolver");
const { typeDefs } = require("./type-defs");
const server = new ApolloServer({ resolvers, typeDefs });
server.listen().then(({ url }) => {
  console.log(`The app is running ${url}`);
});
