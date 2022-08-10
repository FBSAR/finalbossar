import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '../services/contact.service';


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
  ) {
    this.initializeContactForm()
  }

  initializeContactForm() {
    this.contactForm = this.formBuilder.group({
      name: ['Eddie Taliaferro',],
      email: ['eddie@journi.org',],
      message: ['Message',]
    })
  }

  submitContactMessage(form) {
    console.log(form);
    this.contactService.sendContactMessage(form.name, form.email, form.message).subscribe()
  }

  goToAbout() {
    let aboutSection = document.getElementById('about');
    console.log('Scrolling to About Section')
    aboutSection.scrollIntoView({behavior: "smooth"})
  }

  goToTeam() {
    let teamSection = document.getElementById('team');
    console.log('Scrolling to Team Section')
    teamSection.scrollIntoView({behavior: "smooth"})

  }
  goToContact() {
    let contactSection = document.getElementById('contact');
    console.log('Scrolling to Contact Section')
    contactSection.scrollIntoView({behavior: "smooth"})

  }

}
