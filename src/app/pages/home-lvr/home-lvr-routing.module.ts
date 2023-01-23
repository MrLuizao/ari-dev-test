import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLvrPage } from './home-lvr.page';

const routes: Routes = [
  {
    path: '',
    component: HomeLvrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeLvrPageRoutingModule {}
