import {Routes} from "@angular/router";
import {AuthGuard} from "./modules/core/helpers/auth.guard";

export const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    data: {showShell: false}
  },
];

