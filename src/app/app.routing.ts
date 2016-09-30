import { Routes } from '@angular/router';

import { ProtectedComponent } from './protected/protected.component';
import { LoggedInGuard } from './guards/loggedIn.guard';

export const routes: Routes = [
    { path: 'protected', component: ProtectedComponent, canActivate: [LoggedInGuard] }
];
