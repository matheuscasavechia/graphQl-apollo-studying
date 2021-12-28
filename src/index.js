import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
      queryExample: QueryExample!
    }

    type User {
      userId: ID!
      userName: String!
      userAge: Int!
    }

    type QueryExample {
      id: ID!
      name: String!
      age: Int!
      average: Float!
      marriege: Boolean!
      arrayString: [String!]!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          userId: 'kajhsd1i2h',
          userName: 'Matheus Casavechia',
          userAge: 24,
        };
      },
      users: () => {
        return [
          {
            userId: '1',
            userName: 'Matheus Casavechia',
            userAge: 24,
          },
          {
            userId: '2',
            userName: 'Raphaela',
            userAge: 24,
          },
          {
            userId: '3',
            userName: 'Antonio',
            userAge: 24,
          },
        ];
      },
      queryExample: () => {
        return {
          id: '1k2l3hj5h 12',
          name: 'Matheus Casavechia',
          age: 24,
          average: 50.55,
          marriege: true,
          arrayString: ['a', 'b'],
        };
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
