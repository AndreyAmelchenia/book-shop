import { InjectionToken } from '@angular/core';

export interface App {
  App: string;
  ver: string;
}

export const NAME_APP_VERSION = new InjectionToken<App>('NAME_APP_VERSION');
