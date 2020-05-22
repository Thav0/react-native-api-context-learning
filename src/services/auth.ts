interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'fsadfsdfsfds',
        user: {
          name: 'Gustavo',
          email: 'gustavo@gmail.com',
        },
      });
    }, 2000);
  });
}
