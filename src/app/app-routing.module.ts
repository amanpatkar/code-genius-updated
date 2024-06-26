import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'page', loadChildren: () => import('../app/feature/page/page.module').then(m => m.PageModule) },
  { path: 'auth', loadChildren: () => import('../app/feature/auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
