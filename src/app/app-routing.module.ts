import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/public/views/home/home.component';

// export const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: '**', redirectTo: '', pathMatch: 'full' }
// ];
const routes: Routes = [

  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full',
  },

  // {
  //   path: 'detailsP',
  //   loadChildren: () =>
  //     import('./features/public/public.module').then((m) => m.PublicModule),
  // },

  {
    path: 'public',
    loadChildren: () =>
      import('./features/public/public.module').then((m) => m.PublicModule),
  },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./features/admin/admin.module').then((m) => m.AdminModule),
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./features/auth/auth.module').then((m) => m.AuthModule),
  // },
  // {
  //   path: 'payment',
  //   // canActivate:[isAuthenticatedGuard],
  //   loadChildren: () =>
  //     import('./features/payment/payment.module').then((m) => m.PaymentModule),
  // },
  // {
  //   title:"404",
  //   path: 'not-found',
  //   component: NotFoundView,
  // },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
