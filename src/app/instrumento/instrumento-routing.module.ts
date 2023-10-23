import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstrumentoPage } from './instrumento.page';

const routes: Routes = [
  {
    path: '',
    component: InstrumentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstrumentoPageRoutingModule {}
