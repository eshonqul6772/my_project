import config from './config';

import { init } from './services/i18n/i18n';

init({
  languages: config.language.list,
  currentLanguage: localStorage.getItem(config.language.key),
  initialLanguage: config.language.initial,
  backend: {
    loadPath: `${process.env.REACT_APP_API_URL}/references/translations/CLIENT_CABINET/{{lng}}`,
  },
  onChange: (language: string) => localStorage.setItem('language', language),
});
