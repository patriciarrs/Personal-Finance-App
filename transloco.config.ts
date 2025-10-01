import { TranslocoGlobalConfig } from '@jsverse/transloco-utils';

/**
 * This config is used by tools & plugins such as the scoped lib extractor and the keys' manager.
 */
const config: TranslocoGlobalConfig = {
  rootTranslationsPath: 'src/assets/i18n/',
  langs: ['en', 'pt'],
  keysManager: {},
};

export default config;
