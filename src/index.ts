const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./graphql/schema');
const { resolvers } = require('./graphql/resolvers');
require('dotenv').config();

export const server = new ApolloServer({
  typeDefs,
  resolvers
});

if (require.main === module) {
  server.listen().then(({ url }: { url: string }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}