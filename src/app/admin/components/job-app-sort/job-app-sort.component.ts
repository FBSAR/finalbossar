import { Component, OnInit } from '@angular/core';
import { LoadingController, PopoverController, } from '@ionic/angular';

@Component({
  selector: 'app-job-app-sort',
  templateUrl: './job-app-sort.component.html',
  styleUrls: ['./job-app-sort.component.scss']
})
export class JobAppSortComponent implements OnInit {

  constructor(
    private loadingController: LoadingController,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.jobType = 'oldest-apps';
  }
  jobType: string;

  oldestApps() {
    this.triggerLoading();
    this.jobType = 'oldest-apps';
    this.popoverController.dismiss('newest-apps');
  }
  newestApps() {
    this.triggerLoading();
    this.jobType = 'newest-apps';
    this.popoverController.dismiss('oldest-apps');
  }
  oldestAge() {
    this.triggerLoading();
    this.jobType = 'oldest-age';
    this.popoverController.dismiss('oldest-age');
  }
  youngestAge() {
    this.triggerLoading();
    this.jobType = 'youngest-age';
    this.popoverController.dismiss('youngest-age');
  }
  furthestAvail() {
    this.triggerLoading();
    this.jobType = 'furthest-apps';
    this.popoverController.dismiss('furthest-avail');
  }
  soonestAvail() {
    this.triggerLoading();
    this.jobType = 'soonest-apps';
    this.popoverController.dismiss('soonest-avail');
  }
  async triggerLoading() {
    const loading = await this.loadingController.create({
      spinner: 'circles',
      duration: 500,
    });
    await loading.present();
  }

}
