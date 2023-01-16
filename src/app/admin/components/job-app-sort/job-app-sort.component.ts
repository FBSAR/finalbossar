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

  ngOnInit() {}

  oldestApps() {
    this.triggerLoading();
    this.popoverController.dismiss('newest-apps');
  }
  newestApps() {
    this.triggerLoading();
    this.popoverController.dismiss('oldest-apps');
  }
  oldestAge() {
    this.triggerLoading();
    this.popoverController.dismiss('oldest-age');
  }
  youngestAge() {
    this.triggerLoading();
    this.popoverController.dismiss('youngest-age');
  }
  furthestAvail() {
    this.triggerLoading();
    this.popoverController.dismiss('soonest-avail');
  }
  soonestAvail() {
    this.triggerLoading();
    this.popoverController.dismiss('furthest-avail');
  }
  async triggerLoading() {
    const loading = await this.loadingController.create({
      spinner: 'circles',
      duration: 500,
    });
    await loading.present();
  }

}
