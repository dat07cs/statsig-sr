import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {STATSIG_INIT_CONFIG} from '@statsig/angular-bindings';
import {StatsigConfig} from './statsig.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    {
      provide: STATSIG_INIT_CONFIG,
      useValue: StatsigConfig,
    }
  ]
};
