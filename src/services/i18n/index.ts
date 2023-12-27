import i18n from 'i18next';
import HttpApi from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import * as Yup from '../yup';

interface IProps {
  languages: string[];
  currentLanguage: string;
  initialLanguage: string;
  backend?: {
    loadPath?: string;
  };
  debug?: boolean;
  onChange: (language: string) => void;
}

export const init = ({
  languages,
  currentLanguage,
  initialLanguage,
  backend,
  debug,
  onChange,
}: IProps) => {
  i18n.on('languageChanged', language => {
    Yup.init(i18n);
    onChange(language);
  });

  const checkedCurrentLanguage = languages.find(l => l === currentLanguage) || initialLanguage;

  i18n
    .use(initReactI18next)
    .use(HttpApi)
    .init({
      lowerCaseLng: true,
      lng: checkedCurrentLanguage,
      fallbackLng: checkedCurrentLanguage,
      debug,
      supportedLngs: languages,
      whitelist: languages,
      interpolation: {
        escapeValue: false,
      },
      ns: ['common'],
      defaultNS: 'common',
      backend: {
        loadPath: backend?.loadPath,
        crossDomain: true,
        allowMultiLoading: true,
      },
      react: {
        // useSuspense: true,
        // wait: true,
      },
    })
    .then();
};
