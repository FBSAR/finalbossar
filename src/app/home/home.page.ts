import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { MenuController } from '@ionic/angular';
import { ToastController, LoadingController } from '@ionic/angular';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private menu: MenuController,
    public loadingController: LoadingController,
    public toastController: ToastController,
  ) {
    this.initializeContactForm()
  }

  initializeContactForm() {
    this.contactForm = this.formBuilder.group({
      name: ['',],
      email: ['',],
      message: ['',]
    })
  }

  submitContactMessage(form) {
    console.log(form);
    this.messageLoading(form)
  }

  openSideMenu() {
    console.log('Attempting to open side menu');
    this.menu.enable(true, 'side-menu');
    this.menu.open('side-menu');
  }
  goToContributeWebPage() {
    

  }

  async messageLoading(form) {
    const loading = await this.loadingController.create({
      message: 'Sending Message ...',
      duration: 2000,
    });

    loading.present().then( () => {
      this.contactService.sendContactMessage(form.name, form.email, form.message)
      .pipe(
        tap(res => {
          if (!res) {
            console.log('There was no response.');
          }
        }),
        catchError(e => {
          console.error(e);
          if (e) {
              this.contactFailToast('Error', 'Sorry, our servers are down. Please try again later.');
          }
          throw new Error(e);
        })
      )  
      .subscribe( res => {
        if(res) {
          this.contactSuccessToast("Message Sent", "You message has been sent to Final Boss Studios. You will be contacted as soon as possible.")
        }
      })

    });
  }

  async contactSuccessToast(header: string, message: string) {
    const toast = await this.toastController.create({
      header,
      message,
      duration: 2000,
      cssClass: 'contact-success'
    });
    toast.present();
  }

  async contactFailToast(header: string, message: string) {
    const toast = await this.toastController.create({
      header,
      message,
      duration: 2000,
      cssClass: 'contact-fail'
    });
    toast.present();
  }
}
