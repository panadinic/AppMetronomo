import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilReadPageRoutingModule } from './perfil-read-routing.module';

import { PerfilReadPage } from './perfil-read.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilReadPageRoutingModule
  ],
  declarations: [PerfilReadPage]
})
export class PerfilReadPageModule {}
