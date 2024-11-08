import i18next from 'i18next';
import I18NextVue from 'i18next-vue';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import { getLS, KEYS } from '../helpers/storageHelper';

export const LANGUAGES = ['ja', 'en'];
export const DEFAULT_LANGUAGE = 'ja';

export const currentLang = (): string => {
  const browserLanguage = navigator.languages?.filter((element) => LANGUAGES.includes(element));

  return browserLanguage?.length ? browserLanguage[0] : DEFAULT_LANGUAGE;
};

i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    lng: getLS(KEYS.I18_NEXT_LNG) || currentLang() || DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    ns: 'common',
    defaultNS: 'common',
    backend: {
      loadPath: '/i18n/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default function (app) {
  app.use(I18NextVue, { i18next });
  return app;
}
