import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.page.html',
  styleUrls: ['./newsletter.page.scss'],
})
export class NewsletterPage implements OnInit {
  newsletterForm: FormGroup;
  scheduledModalOpen = false;
  userListModalOpen = false;
  getProfilesSub: Subscription;
  subbedUsers = [];
  subbedUsersCount: number;
  sendNewsletterSub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private admin: AdminService,
    private alert: AlertController,
    private loading: LoadingController,
    ) { }

  ngOnInit() {
    this.initializeFormGroups();
  }
  setScheduledOpen(isOpen: boolean) {
    this.scheduledModalOpen = isOpen;
  }
  setUserListOpen(isOpen: boolean) {
    this.userListModalOpen = isOpen;
  }
  initializeFormGroups() {
    this.newsletterForm = this.formBuilder.group({
      emailSubject: ['', [Validators.required,]],
      title: ['', [Validators.required,]],
      newsletter: ['', [Validators.required,]],
    })
  }
  async submitNewsletter() {
    let emailSubject = this.newsletterForm.controls.emailSubject.value;
    let title = this.newsletterForm.controls.title.value;
    let newsletter = this.newsletterForm.controls.newsletter.value;

    const alert = await this.alert.create({
      header: 'Are you sure?',
      subHeader: 'You cannot undue sending this Newsletter out.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Send',
          handler: async () => {
            const loading = await this.loading.create({
              message: 'Sending Newsletter...',
              duration: 3000,
              cssClass: 'custom-loading',
            });
        
            await loading.present();
            // succes
            this.sendNewsletterSub = this.admin.sendNewsletter(emailSubject, title, newsletter)
              .subscribe(res => {
              });

              const alert = await this.alert.create({
                header: 'Newsletter sent!',
                buttons: ['OK'],
              });
          
              setTimeout(() => {
                this.newsletterForm.reset();
                alert.present();
              }, 3500);
            setTimeout(() => {
              this.sendNewsletterSub.unsubscribe();
            }, 1000);
          }
        },
      ],
    });

    await alert.present();
  }
  async userList() {
    this.getProfilesSub = await this.admin.getProfiles()
      .subscribe(profiles => {
        // Find all users whom are subbed to newsletter.
        profiles['profiles'].forEach(profile => {
          if(profile.newsletter) {
            this.subbedUsers.push(profile.email);
          }
        });
        this.userListModalOpen = true;
        this.subbedUsersCount = this.subbedUsers.length;
        console.log(this.subbedUsers);
        console.log(this.subbedUsersCount);
        
      });
      setTimeout(() => {
        return this.getProfilesSub.unsubscribe();
      }, 1000);
  }

}
