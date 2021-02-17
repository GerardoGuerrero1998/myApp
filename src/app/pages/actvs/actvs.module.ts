import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActvsPageRoutingModule } from './actvs-routing.module';

import { ActvsPage } from './actvs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActvsPageRoutingModule
  ],
  declarations: [ActvsPage]
})
export class ActvsPageModule {}
