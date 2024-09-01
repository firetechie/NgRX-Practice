import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { appState } from './store/global/app.store';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { BlogEffects } from './store/blog/blog.effects';
import { AppEffects } from './shared/model/global/app.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideStore(appState),
    provideEffects([BlogEffects, AppEffects]),
    provideHttpClient(),
    provideStoreDevtools({ maxAge: false, logOnly: !isDevMode() }), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()
  ],
};
