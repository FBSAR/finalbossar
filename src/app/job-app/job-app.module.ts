import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobAppPageRoutingModule } from './job-app-routing.module';

import { JobAppPage } from './job-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    JobAppPageRoutingModule
  ],
  declarations: [JobAppPage]
})
export class JobAppPageModule {}
