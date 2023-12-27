import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/assets/styles/main.scss';

import store from '@/store';
import config from '@/config';
import { i18n, http, storage } from '@/services';

i18n.init({
  languages: config.language.list,
  currentLanguage: storage.local.get(config.language.key),
  initialLanguage: config.language.initial,
  backend: {
    loadPath: `${config.api.baseUrl}/reference/translations/{{lng}}/CLIENT`,
  },
  onChange: language => storage.local.set('language', language),
});

http.init({
  configFn: () => {
    const state = store.getState();
    // @ts-ignore
    const token = state.auth.token;

    return {
      baseURL: config.api.baseUrl,
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    };
  },
});
