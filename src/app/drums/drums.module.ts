import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrumsPageRoutingModule } from './drums-routing.module';

import { DrumsPage } from './drums.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrumsPageRoutingModule
  ],
  declarations: [DrumsPage]
})
export class DrumsPageModule {}
