import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('node-fetch');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      fetch,
    };
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
