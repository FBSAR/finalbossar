import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobAppsPageRoutingModule } from './job-apps-routing.module';

import { JobAppsPage } from './job-apps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobAppsPageRoutingModule
  ],
  declarations: [JobAppsPage]
})
export class JobAppsPageModule {}
