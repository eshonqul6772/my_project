const ENV = process.env;

const config = {
  app: {
    env: ENV.REACT_APP_ENV,
    version: ENV.REACT_APP_VERSION,
    technology: ENV.REACT_APP_TECHNOLOGY,
    isDev: ENV.REACT_APP_ENV !== 'production',
    publicUrl: ENV.PUBLIC_URL,
    editorApiKey: ENV.EDITOR_API_KEY,
  },
  api: {
    baseUrl: ENV.REACT_APP_API_BASE_URL,
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
