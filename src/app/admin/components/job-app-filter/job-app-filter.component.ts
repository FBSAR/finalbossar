import { Component, OnInit } from '@angular/core';
import { LoadingController, PopoverController, } from '@ionic/angular';

@Component({
  selector: 'app-job-app-filter',
  templateUrl: './job-app-filter.component.html',
  styleUrls: ['./job-app-filter.component.scss'],
})
export class JobAppFilterComponent implements OnInit {

  constructor(
    private loadingController: LoadingController,
    private popoverController: PopoverController
    ) { }

  ngOnInit() {
    this.jobType = 'all';
  }

  jobType: string;

  allApps() {
    this.jobType = 'all';
    this.triggerLoading();
    this.popoverController.dismiss('all');
  }
  gameDevs() {
    this.triggerLoading();
    this.jobType = 'Game Developer';
    this.popoverController.dismiss('game-devs');
  }
  interns() {
    this.triggerLoading();
    this.jobType = 'Interns';
    this.popoverController.dismiss('interns');
  }
  blockchainDevs() {
    this.triggerLoading();
    this.jobType = 'Blockchain Developer';
    this.popoverController.dismiss('bc-devs');
  }
  artist() {
    this.triggerLoading();
    this.jobType = 'Artist';
    this.popoverController.dismiss('artists');
  }
  designer() {
    this.triggerLoading();
    this.jobType = 'Designer';
    this.popoverController.dismiss('designers');
  }
  webDevs() {
    this.triggerLoading();
    this.jobType = 'Web Developer';
    this.popoverController.dismiss('web-dev');
  }
  finance() {
    this.triggerLoading();
    this.jobType = 'Finances';
    this.popoverController.dismiss('finance');
  }
  production() {
    this.triggerLoading();
    this.jobType = 'Production';
    this.popoverController.dismiss('production');
  }
  bizDev() {
    this.triggerLoading();
    this.jobType = 'Business Development';
    this.popoverController.dismiss('biz-dev');
  }
  marketing() {
    this.triggerLoading();
    this.jobType = 'Marketing';
    this.popoverController.dismiss('marketing');
  }
  sales() {
    this.triggerLoading();
    this.jobType = 'Sales';
    this.popoverController.dismiss('sales');
  }
  other() {
    this.triggerLoading();
    this.jobType = 'Other';
    this.popoverController.dismiss('other');
  }
  async triggerLoading() {
    const loading = await this.loadingController.create({
      spinner: 'circles',
      duration: 500,
    });
    await loading.present();
  }

}
