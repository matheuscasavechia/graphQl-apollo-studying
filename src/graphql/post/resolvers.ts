const posts = () => {
  return [
    {
      id: '1',
      title: 'Post working 1',
    },
    {
      id: '2',
      title: 'Post working 2',
    },
    {
      id: '3',
      title: 'Post working 3',
    },
  ];
};

const post = () => {
  return {
    id: '1',
    title: 'Post test',
  };
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
