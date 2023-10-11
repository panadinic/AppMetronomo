import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilActPageRoutingModule } from './perfil-act-routing.module';

import { PerfilActPage } from './perfil-act.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilActPageRoutingModule
  ],
  declarations: [PerfilActPage]
})
export class PerfilActPageModule {}
