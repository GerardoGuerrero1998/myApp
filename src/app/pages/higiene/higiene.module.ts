import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HigienePageRoutingModule } from './higiene-routing.module';

import { HigienePage } from './higiene.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HigienePageRoutingModule
  ],
  declarations: [HigienePage]
})
export class HigienePageModule {}
