import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeLvrPageRoutingModule } from './home-lvr-routing.module';

import { HomeLvrPage } from './home-lvr.page';
import { ComponentsModule } from 'src/app/components/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeLvrPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HomeLvrPage]
})
export class HomeLvrPageModule {}
