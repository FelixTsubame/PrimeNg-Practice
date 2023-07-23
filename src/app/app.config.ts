import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideAnimations } from '@angular/platform-browser/animations';
import { HomeRoutes } from './home-page/home.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideRouter(HomeRoutes), provideAnimations() ]
};
