import { NxWelcomeComponent } from './nx-welcome.component';
import {loadRemoteModule} from "@nx/angular/mf";
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
