const users = async (_: any, __: any, { fetch }: any) => {
  const users = await fetch('http://localhost:3000/users');
  return users.json();
};

const user = () => {
  return {
    id: '1',
    userName: 'Matheus Casavechia',
  };
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
