const users = () => {
  return [
    {
      id: '1',
      userName: 'Matheus Casavechia',
    },
    {
      id: '2',
      userName: 'Raphaela Casavechia',
    },
    {
      id: '3',
      userName: 'Maria',
    },
  ];
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
