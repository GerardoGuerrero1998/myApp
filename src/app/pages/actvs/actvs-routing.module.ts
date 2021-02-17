import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActvsPage } from './actvs.page';

const routes: Routes = [
  {
    path: '',
    component: ActvsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActvsPageRoutingModule {}
