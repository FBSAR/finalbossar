import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { JobAppFilterComponent } from './job-app-filter/job-app-filter.component';
import { JobAppSortComponent } from './job-app-sort/job-app-sort.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  declarations: [JobAppFilterComponent, JobAppSortComponent]
})
export class CustomComponentModule {}
