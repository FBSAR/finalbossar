import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { PopoverController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { JobAppFilterComponent } from '../../components/job-app-filter/job-app-filter.component';
import { JobAppSortComponent } from '../../components/job-app-sort/job-app-sort.component';

interface applyingUser {
  job: String,
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
    private toastController: ToastController,
    private alertController: AlertController
    ) { }

  ngOnInit() {
    this.getJobApps()
  }

  getJobAppsSub: Subscription;
  pendingJobApps: Array<applyingUser>;

  getJobApps() {
    this.getJobAppsSub = this.admin.getJobApps()
      .subscribe(apps => {
        return this.pendingJobApps = apps['applyingUsers'];
      })
    setTimeout(() => {
      this.getJobAppsSub.unsubscribe();
    }, 1000);
  }
  async filterPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: JobAppFilterComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  async sortPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: JobAppSortComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  async saveAppAlert(id) {
    const alert = await this.alertController.create({
      header: 'Save Application?',
      message: 'This app will be added to the Saved list.',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.admin.saveApp(id).subscribe(
              data => {
                console.log(data);
                return;
              }
              );
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

  async denyAppAlert(id) {
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
              return;
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
}
