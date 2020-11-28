import { Resolvers } from "./generated";
import { users } from "./data";

export const resolvers: Resolvers = {
  Query: {
    userList: () => ({
      total_count: users.length,
      users: users
    })
  }
};
