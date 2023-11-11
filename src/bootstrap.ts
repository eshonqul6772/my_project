import '@/assets/styles/main.scss';

import config from 'config';
import { http, i18n, storage } from 'services';

if (config.app.isDev) {
  console.log('DEVELOPMENT');
} else {
  console.log('PRODUCTION');
}

i18n.init({
  languages: config.language.list,
  currentLanguage: storage.local.get(config.language.key),
  initialLanguage: config.language.initial,
  backend: {
    loadPath: `${config.api.baseUrl}/reference/translations/{{lng}}/BACK_ADMIN`,
  },
  onChange: language => storage.local.set('language', language),
});

http.init({
  configFn: () => {
    return {
      baseURL: config.api.baseUrl,
    };
  },
});
