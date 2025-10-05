import { TranslocoTestingModule, TranslocoTestingOptions } from '@jsverse/transloco';
import en from '../assets/i18n/en.json';
import pt from '../assets/i18n/pt.json';
import { ModuleWithProviders } from '@angular/core';

export function getTranslocoModule(
  options: TranslocoTestingOptions = {},
): ModuleWithProviders<TranslocoTestingModule> {
  return TranslocoTestingModule.forRoot({
    langs: { en, pt },
    translocoConfig: {
      availableLangs: ['en', 'es'],
      defaultLang: 'en',
    },
    preloadLangs: true,
    ...options,
  });
}
