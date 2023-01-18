import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobAppPage } from './job-app.page';

const routes: Routes = [
  {
    path: '',
    component: JobAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobAppPageRoutingModule {}
