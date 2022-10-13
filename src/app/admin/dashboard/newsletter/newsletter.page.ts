import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.page.html',
  styleUrls: ['./newsletter.page.scss'],
})
export class NewsletterPage implements OnInit {
  newsletterForm: FormGroup;
  isModalOpen = false;

  constructor(
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.initializeFormGroups();
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  initializeFormGroups() {
    this.newsletterForm = this.formBuilder.group({
      emailSubject: ['', [Validators.required,]],
      newsletterTitle: ['', [Validators.required,]],
      newsletter: ['', [Validators.required,]],
    })
  }

}
