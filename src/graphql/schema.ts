import { gql } from 'apollo-server';
import { userResolvers } from './user/resolvers';
import { userTypeDefs } from './user/typedefs';
import { postResolvers } from './post/resolvers';
import { postTypeDefs } from './post/typedefs';

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

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];
