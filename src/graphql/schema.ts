import { gql } from 'apollo-server';
import { userResolvers } from '../graphql/user/resolvers';
import { userTypeDefs } from '../graphql/user/typedefs';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs];
export const resolvers = [rootResolvers, userResolvers];
