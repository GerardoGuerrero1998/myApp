import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Comp1Component } from '../../components/comp1/comp1.component';


@NgModule({
  declarations: [Comp1Component],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [Comp1Component]
})
export class Mod1Module { }
