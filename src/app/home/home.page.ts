import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { MenuController } from '@ionic/angular';

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
    private menu: MenuController
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
    this.contactService.sendContactMessage(form.name, form.email, form.message).subscribe()
  }

  openSideMenu() {
    console.log('Attempting to open side menu');
    this.menu.enable(true, 'side-menu');
    this.menu.open('side-menu');
  }
  goToContributeWebPage() {
    

  }
}
