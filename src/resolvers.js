import { tasks } from "./sample";
import User from "./models/User";

export const resolvers = {
  Query: {
    hello: () => {
      return "Hello world with graphql";
    },
    greet: (root, { name }, ctx) => {
      return `Hello ${name}!!`;
    },
    tasks: () => {
      return tasks;
    },
    users: async () => {
      return await User.find();
    },
  },
  Mutation: {
    createTask: (_, { input }) => {
      tasks.push({ ...input, _id: tasks.length });
      return tasks;
    },
    createUser: async (_, { input }) => {
      const newUser = new User(input);
      await newUser.save();
      return newUser;
    },
    deleteUser: async (_, { _id }) => {
      const newUser = await User.findByIdAndDelete(_id);
      return newUser;
    },
    updateUser: async (_, { _id, input }) => {
      const newUser = await User.findByIdAndUpdate(_id, input, { new: true });
      return newUser;
    },
  },
};
