import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { PopoverController, LoadingController, AlertController } from '@ionic/angular';
import { JobAppFilterComponent } from '../../components/job-app-filter/job-app-filter.component';
import { JobAppSortComponent } from '../../components/job-app-sort/job-app-sort.component';

interface applyingUser {
  _id: String,
  job: String,
  dateApplied: String,
  availability: String,
  firstName: String,
  lastName: String,
  age: String,
  phone: String,
  email: String,
  addressOne: String,
  addressTwo: String,
  city: String,
  state: String,
  zip: String,
  resume: String,
  goodFitReason: String,
  favoriteGames: String,
  strengthWeaknesses: String
}

@Component({
  selector: 'app-job-apps',
  templateUrl: './job-apps.page.html',
  styleUrls: ['./job-apps.page.scss'],
})
export class JobAppsPage implements OnInit {

  constructor(
    private admin: AdminService,
    private popoverController: PopoverController,
    private loadingController: LoadingController,
    private alertController: AlertController
    ) { 

    }

  ngOnInit() {
    this.filterJobApps()
  }
  
  getJobAppsSub: Subscription;
  pendingJobApps: applyingUser[];
  allAppsMutate:  [];
  savedApps: [];
  currentSort = 'oldest-applications';
  currentFilter = 'all';

  async filterPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: JobAppFilterComponent,
      event: ev,
      translucent: true
    });
    await popover.present();
    await popover.onDidDismiss()
      .then(data => {
        this.currentFilter = data.data;
        this.reloadApps(data.data);
      });
  }
  async sortPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: JobAppSortComponent,
      event: ev,
      translucent: true
    });
    await popover.present();
    await popover.onDidDismiss()
      .then(data => {
        this.reloadApps(data.data);
      });
  }
  async filterJobApps() {
    this.getJobAppsSub = this.admin.getJobApps()
      .subscribe(apps => {
        // Each Request, get new set of applying users
        let applyingUsers = apps['applyingUsers'];

        // Filtering
        if(this.currentFilter == 'all') {
          console.log('Filtering for All Jobs');
          return this.pendingJobApps = applyingUsers;
        }
        if(this.currentFilter == 'game-devs') {
          console.log('Filtering for Game Devs');
          return this.pendingJobApps = applyingUsers.filter((a) => {
            return a['job'].includes('Game Developer');
          });
        }
        if(this.currentFilter == 'interns') {
          console.log('Filtering for Interns');
          return this.pendingJobApps = applyingUsers.filter((a) => {
            return a['job'].includes('Intern');
          });
        }
        if(this.currentFilter == 'bc-devs') {
          console.log('Filtering for Blockchain Devs');
          return this.pendingJobApps = applyingUsers.filter((a) => {
            return a['job'].includes('BlockchainDeveloper');
          });
        }
        if(this.currentFilter == 'artists') {
          console.log('Filtering for Artists');
          return this.pendingJobApps = applyingUsers.filter((a) => {
            return a['job'].includes('artists');
          });
        }
        if(this.currentFilter == 'designers') {
          console.log('Filtering for Designers');
          return this.pendingJobApps = applyingUsers.filter((a) => {
            return a['job'].includes('Designer');
          });
        }
        if(this.currentFilter == 'web-devs') {
          console.log('Filtering for Art & Design');
          return this.pendingJobApps = applyingUsers.filter((a) => {
            return a['job'] .includes('web-devs');
          });
        }
        if(this.currentFilter == 'biz-dev') {
          console.log('Filtering for Business Development');
          return this.pendingJobApps = applyingUsers.filter((a) => {
            return a['job'] .includes('biz-dev');
          });
        }
        if(this.currentFilter == 'finance') {
          console.log('Filtering for Art & Design');
          return this.pendingJobApps = applyingUsers.filter((a) => {
            return a['job'].includes('finance');
          });
        }
        if(this.currentFilter == 'production') {
          console.log('Filtering for Production');
          return this.pendingJobApps = applyingUsers.filter((a) => {
            return a['job'].includes('Production');
          });
        }
        if(this.currentFilter == 'marketing') {
          console.log('Filtering for Marketing');
          return this.pendingJobApps = applyingUsers.filter((a) => {
            return a['job'].includes('marketing');
          });
        }
        if(this.currentFilter == 'sales') {
          console.log('Filtering for Sales');
          return this.pendingJobApps = applyingUsers.filter((a) => {
            return a['job'].includes('sales');
          });
        }
        if(this.currentFilter == 'other') {
          console.log('Filtering for Other');
          return this.pendingJobApps = applyingUsers.filter((a) => {
            return a['job'].includes('other');
          });
        }

        // Sorting
        if(this.currentSort == 'youngest-apps') {
          console.log('Sorting for Youngest Applicants');
          return this.pendingJobApps = applyingUsers.slice(0).sort(function (a, b){
            return a['dateApplied'] + b['dateApplied'];
          });
        }
        if(this.currentSort == 'oldest-apps') {
          console.log('Sorting for Oldest Applicants');
          return this.pendingJobApps = applyingUsers.slice(0).sort(function (a, b){
            return a['dateApplied'] - b['agdateAppliede'];
          });
        }
        if(this.currentSort == 'youngest-age') {
          console.log('Sorting for Oldest Applicants');
          return this.pendingJobApps = applyingUsers.slice(0).sort(function (a, b){
            return a['age'] + b['age'];
          });
        }
        if(this.currentSort == 'oldest-age') {
          console.log('Sorting for Oldest Applicants');
          return this.pendingJobApps = applyingUsers.slice(0).sort(function (a, b){
            return a['age'] - b['age'];
          });
        }
        if(this.currentSort == 'soonest-avail') {
          console.log('Sorting for Youngest Applicants');
          return this.pendingJobApps = applyingUsers.slice(0).sort(function (a, b){
            return a['availability'] + b['availability'];
          });
        }
        if(this.currentSort == 'furthest-avail') {
          console.log('Sorting for Oldest Applicants');
          return this.pendingJobApps = applyingUsers.slice(0).sort(function (a, b){
            return a['availability'] - b['availability'];
          });
        }

        

      })
    setTimeout(() => {
      this.getJobAppsSub.unsubscribe();
    }, 500);
  }
  async sortJobApps(apps) {
    // Sorting
    if(this.currentSort == 'youngest-age') {
      console.log('Sorting for Youngest Applicants');
      return this.pendingJobApps = apps.sort(function (a, b){
        return a['age'] - b['age'];
      });
    }
    if(this.currentSort == 'oldest-age') {
      console.log('Sorting for Oldest Applicants');
      return this.pendingJobApps = apps.sort(function (a, b){
        return a['age'] + b['age'];
      });
    }
  }
  async reloadApps(condition) {
    console.log(condition);

    // Sorting
    if(condition == "newest-apps") {
      this.currentSort = condition;
      return this.sortJobApps(this.pendingJobApps);
    }
    if(condition == "oldest-apps") {
      this.currentSort = condition;
      return this.sortJobApps(this.pendingJobApps);
    }
    if(condition == "oldest-age") {
      this.currentSort = condition;
      return this.sortJobApps(this.pendingJobApps);
    }
    if(condition == "youngest-age") {
      this.currentSort = condition;
      return this.sortJobApps(this.pendingJobApps);
    }
    if(condition == "soonest-avail") {
      this.currentSort = condition;
      return this.sortJobApps(this.pendingJobApps);
    }
    if(condition == "furthest-avail") {
      this.currentSort = condition;
      return this.sortJobApps(this.pendingJobApps);
    }

    // Filtering
    if(condition == "all") {
      this.currentFilter = condition;
      return this.filterJobApps();
    }
    if(condition == "game-devs") {
      this.currentFilter = condition;
      return this.filterJobApps();
    }
    if(condition == "interns") {
      this.currentFilter = condition;
      return this.filterJobApps();
    }
    if(condition == "bc-devs") {
      this.currentFilter = condition;
      return this.filterJobApps();
    }
    if(condition == "artists") {
      this.currentFilter = condition;
      return this.filterJobApps();
    }
    if(condition == "designers") {
      this.currentFilter = condition;
      return this.filterJobApps();
    }
    if(condition == "web-devs") {
      this.currentFilter = condition;
      return this.filterJobApps();
    }
    if(condition == "finance") {
      this.currentFilter = condition;
      return this.filterJobApps();
    }
    if(condition == "biz-dev") {
      this.currentFilter = condition;
      return this.filterJobApps();
    }
    if(condition == "production") {
      this.currentFilter = condition;
      return this.filterJobApps();
    }
    if(condition == "marketing") {
      this.currentFilter = condition;
      return this.filterJobApps();
    }
    if(condition == "sales") {
      this.currentFilter = condition;
      return this.filterJobApps();
    }
    if(condition == "other") {
      this.currentFilter = condition;
      return this.filterJobApps();
    }
  }
  async acceptAppAlert(id: String) {
    const alert = await this.alertController.create({
      header: 'Accept Job Application?',
      inputs: [{
        type: 'textarea',
        value: '',
        cssClass: 'deny-message-textarea'
      }],
      message: 'Type response here',
      buttons: [{
        text: 'Okay',
        handler: (e: Event) => {
          this.admin.denyApp(id, e[0]).subscribe(
            data => {
              console.log(data);
              console.log(e);
              this.triggerLoading();
              this.admin.getJobApps()
                .subscribe(apps => {
                  // Each Request, get new set of applying users
                  this.pendingJobApps = apps['applyingUsers'];
                    return;
                  }
                )
            }
          )
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
    });

    await alert.present();
  }
  denyMessage = "Under careful consideration, we have determined that your skillset isn't a good fit for our team at this time. Thank you for your interest.";
  async denyAppAlert(id: String) {
    const alert = await this.alertController.create({
      header: 'Deny Job Application?',
      inputs: [{
        type: 'textarea',
        value: this.denyMessage,
        cssClass: 'deny-message-textarea'
      }],
      message: 'This user will be emailed upon deletion.',
      buttons: [{
        text: 'Okay',
        handler: (e: Event) => {
          this.admin.denyApp(id, e[0]).subscribe(
            data => {
              console.log(data);
              console.log(e);
              this.triggerLoading();
              this.admin.getJobApps()
                .subscribe(apps => {
                  // Each Request, get new set of applying users
                  this.pendingJobApps = apps['applyingUsers'];
                    return;
                  }
                )
            }
          )
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
    });
    
    await alert.present();
  }
  async triggerLoading() {
    const loading = await this.loadingController.create({
      spinner: 'circles',
      duration: 2000,
    });
    await loading.present();
  }

  disabledAllAppsBtn = true;
  disabledSavedAppsBtn = false;

  allJobApps() {
    this.disabledAllAppsBtn = true;
    this.disabledSavedAppsBtn = false;
    this.triggerLoading();
  }
  savedJobApps() {
    this.disabledAllAppsBtn = false;
    this.disabledSavedAppsBtn = true;
    this.triggerLoading();
  }
}
