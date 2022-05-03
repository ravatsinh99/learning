import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxdemoRoutingModule } from './ngrxdemo-routing.module';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    NgrxdemoRoutingModule
  ]
})
export class NgrxdemoModule { }
