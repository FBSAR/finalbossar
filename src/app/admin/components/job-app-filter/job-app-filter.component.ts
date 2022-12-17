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

  ngOnInit() {}

  allApps() {
    this.triggerLoading();
    this.popoverController.dismiss('all');
  }
  gameDevs() {
    this.triggerLoading();
    this.popoverController.dismiss('game-devs');
  }
  interns() {
    this.triggerLoading();
    this.popoverController.dismiss('interns');
  }
  blockchainDevs() {
    this.triggerLoading();
    this.popoverController.dismiss('bc-devs');
  }
  artAndDesign() {
    this.triggerLoading();
    this.popoverController.dismiss('art-design');
  }
  webDevs() {
    this.triggerLoading();
    this.popoverController.dismiss('web-devs');
  }
  finance() {
    this.triggerLoading();
    this.popoverController.dismiss('finance');
  }
  production() {
    this.triggerLoading();
    this.popoverController.dismiss('production');
  }
  bizDev() {
    this.triggerLoading();
    this.popoverController.dismiss('biz-dev');
  }
  marketing() {
    this.triggerLoading();
    this.popoverController.dismiss('marketing');
  }
  sales() {
    this.triggerLoading();
    this.popoverController.dismiss('sales');
  }
  other() {
    this.triggerLoading();
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
