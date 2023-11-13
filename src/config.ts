const ENV = process.env;

const config = {
  app: {
    env: ENV.REACT_APP_ENV,
    isDev: ENV.REACT_APP_ENV !== 'production',
  },
  api: {
    baseUrl: ENV.REACT_APP_API_URL,
    downloadUrl: `${ENV.REACT_APP_API_URL}/references/download`,
  },
  language: {
    key: 'language',
    initial: 'uz',
    list: ['uz', 'ru', 'en'],
  },
  list: {
    perPage: 10,
  },
};

export default config;
