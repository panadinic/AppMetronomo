import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilDeletePageRoutingModule } from './perfil-delete-routing.module';

import { PerfilDeletePage } from './perfil-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilDeletePageRoutingModule
  ],
  declarations: [PerfilDeletePage]
})
export class PerfilDeletePageModule {}
