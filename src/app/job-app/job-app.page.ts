import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, IonSelect, LoadingController } from '@ionic/angular';
import { JobAppService } from '../services/job-app.service';
import { catchError, tap } from 'rxjs/operators';

interface applyingUser {
  job: String,
  firstName: String,
  lastName: String,
  age: String,
  gender: String,
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
  strengthWeaknesses: String,
}

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
    private jobApp: JobAppService,
    private alertController: AlertController,
    private loadingController: LoadingController,
  ) { 
    this.initializeFormGroups();
    // this.initializeTestFormGroups();
  }

  ngOnInit() {
  }
  backToHomePage() {
    this.router.navigateByUrl('home');
    this.jobAppForm.reset();
  }
  
  @ViewChild('jobSelectElement') jobSelectElement: IonSelect;
  @ViewChild('genderSelectElement') genderSelectElement: IonSelect;
  selectedJob: string;
  selectedGender: string;
  formattedResume = 'Need link'

  jobSelect(e: Event) {
    if(e['detail'].value == 'other') {
      // document.getElementById('other-input').style.height = '51.92px';
      // document.getElementById('other-input').style.opacity = '1';
    } else {
      console.log(e['detail'].value)

      this.jobAppForm.controls.job.reset();
      return this.selectedJob = e['detail'].value;
    }

  }
  genderSelect(e: Event) {
    if(e['detail'].value == 'other') {
      // document.getElementById('other-input').style.height = '51.92px';
      // document.getElementById('other-input').style.opacity = '1';
    } else {
      console.log(e['detail'].value)
      this.jobAppForm.controls.gender.reset();
      return this.selectedGender = e['detail'].value;
    }

  }
  initializeFormGroups() {
    this.jobAppForm = this.formBuilder.group({
      job: ['', [Validators.required]],
      availability: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      addressOne: ['', [Validators.required]],
      addressTwo: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      resume: ['', [Validators.required]],
      goodFitReason: ['', [Validators.required]],
      favoriteGames: ['', [Validators.required]],
      strengthWeaknesses: ['', [Validators.required]],
    })
  }
  testText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincid'
  initializeTestFormGroups() {
    this.jobAppForm = this.formBuilder.group({
      job: ['', [Validators.required]],
      availability: ['', [Validators.required]],
      firstName: ['Eddie', [Validators.required]],
      lastName: ['Taliaferro', [Validators.required]],
      age: ['30', [Validators.required]],
      gender: ['', [Validators.required]],
      phone: ['7342237792', [Validators.required]],
      email: ['eddie@journi.org', [Validators.required]],
      addressOne: ['750 Chene', [Validators.required]],
      addressTwo: ['Apt 705', [Validators.required]],
      city: ['Detroit', [Validators.required]],
      state: ['MI', [Validators.required]],
      zip: ['48207', [Validators.required]],
      resume: ['Needs Link', [Validators.required]],
      goodFitReason: [this.testText, [Validators.required]],
      favoriteGames: [this.testText, [Validators.required]],
      strengthWeaknesses: [this.testText, [Validators.required]],
    })
  }
  async submitApplication() {

    // Detect if all fields are completed
    if(   !this.selectedJob 
      ||  !this.selectedGender
      ||  !this.formattedResume
      ||  !this.jobAppForm.controls.availability.value
      ) {
        console.log('All field forms are needed');
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Please fill out the entire form!',
          buttons: ['OK']
        });
    
        await alert.present();
        return;
    }

    // Detect if the users has an 'Other' job added.
    if(this.jobAppForm.controls.job.touched) {
      this.selectedJob = 'Other - ' + this.jobAppForm.controls.job.value;
    }
    if(this.jobAppForm.controls.gender.touched) {
      this.selectedGender = 'Other - ' + this.jobAppForm.controls.gender.value;
    }
    this.jobApp.submitApp({
      job: this.selectedJob,
      gender: this.selectedGender,
      resume: this.formattedResume,
      availability: this.jobAppForm.controls.availability.value,
      firstName: this.jobAppForm.controls.firstName.value,
      lastName: this.jobAppForm.controls.lastName.value,
      age: this.jobAppForm.controls.age.value,
      phone: this.jobAppForm.controls.phone.value,
      email: this.jobAppForm.controls.email.value,
      addressOne: this.jobAppForm.controls.addressOne.value,
      addressTwo: this.jobAppForm.controls.addressTwo.value,
      city: this.jobAppForm.controls.city.value,
      state: this.jobAppForm.controls.state.value,
      zip: this.jobAppForm.controls.zip.value,
      goodFitReason: this.jobAppForm.controls.goodFitReason.value,
      favoriteGames: this.jobAppForm.controls.favoriteGames.value,
      strengthWeaknesses: this.jobAppForm.controls.strengthWeaknesses.value,
    })
      .pipe(
        tap(res => {
          console.log(res);
          if (!res) {
            console.log('There was no response.');
          } 
        },
        catchError(async e => {
          // Create Alert Instances
          async function presentDangerAlert(header: string) {
            const dangerAlert = await this.alertController.create({
              cssClass: 'danger-alert',
              header,
              buttons: [{
                text: 'Close'
              }]
            });
          }
        
          // Handle Errors
          if (e.error.msg === 'Backend Error') {
            await presentDangerAlert('Server Side Error. Please try again later.');
          }
          if (e.error.msg === 'There was no job app saved!') {
            await presentDangerAlert('Server Side Error. Please try again later.');
          } 
          else if (e) {
            await presentDangerAlert('Unknown Error. Please try again later');
            console.error(e);
            throw new Error(e);
          }

        })
        )
      )
      .subscribe(
      async data => {
        const loading = await this.loadingController.create({
          duration: 2000,
          spinner: 'circular'
        });

        const alert = await this.alertController.create({
          header: 'You application has been submitted',
          message: data['msg'],
          buttons: [{
            text: 'Done',
            role: 'cancel',
            handler: () => {
              this.jobAppForm.reset();
              this.jobSelectElement.value = null;
              this.genderSelectElement.value = null;
              this.router.navigateByUrl('home');
            }
          }]
        });
    
        await loading.present();
        setTimeout(() => {
          alert.present();
          console.log(data);
          return;
        }, 3000);
      }
      )
  }

}
