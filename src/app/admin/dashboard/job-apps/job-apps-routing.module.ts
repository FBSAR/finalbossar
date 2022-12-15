import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobAppsPage } from './job-apps.page';

const routes: Routes = [
  {
    path: '',
    component: JobAppsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobAppsPageRoutingModule {}
