import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-job-app',
  templateUrl: './job-app.page.html',
  styleUrls: ['./job-app.page.scss'],
})
export class JobAppPage implements OnInit {
  jobAppForm: FormGroup;
  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ]
  };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController,
  ) { 
    this.initializeFormGroups();
  }

  ngOnInit() {
  }
  backToHomePage() {
    this.router.navigateByUrl('home');
    this.jobAppForm.reset();
  }
  initializeFormGroups() {
    this.jobAppForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

}
