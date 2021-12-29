const users = async (_: any, __: any, { fetch }: any) => {
  const users = await fetch('http://localhost:3000/users');
  return users.json();
};

const user = async (_: any, { id }: any, { fetch }: any) => {
  const response = await fetch('http://localhost:3000/users/' + id);
  const user = await response.json();
  console.log(user);
  return user;
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
