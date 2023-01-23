import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-lvr',
    pathMatch: 'full'
  },
  {
    path: 'home-lvr',
    loadChildren: () => import('./pages/home-lvr/home-lvr.module').then( m => m.HomeLvrPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
