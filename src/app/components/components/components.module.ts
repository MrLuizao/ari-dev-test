import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockLvrComponent } from './mock-lvr/mock-lvr.component';



@NgModule({
  declarations: [
    MockLvrComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MockLvrComponent
  ]
})
export class ComponentsModule { }
