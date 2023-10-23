import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrumsPage } from './drums.page';

const routes: Routes = [
  {
    path: '',
    component: DrumsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrumsPageRoutingModule {}
