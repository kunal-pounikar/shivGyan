import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '', redirectTo: 'shared', pathMatch: 'full'
  // },
 { path: 'shared', loadChildren: () => import('./shared-layout/shared-layout.module').then(m => m.SharedLayoutModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
