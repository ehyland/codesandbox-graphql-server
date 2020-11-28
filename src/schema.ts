import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    ip_address: String!
  }

  type UserList {
    total_count: Int!
    users: [User!]!
  }

  type Query {
    userList: UserList!
  }
`;
