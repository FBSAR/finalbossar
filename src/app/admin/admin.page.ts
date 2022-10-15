import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AdminService } from '../services/admin.service';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  adminLoginForm: FormGroup;
  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private admin: AdminService,
    private alert: AlertController,
    private toast: ToastController,
  ) { }

  ngOnInit() {
    this.initializeFormGroups();
  }
  initializeFormGroups() {
    this.adminLoginForm = this.formBuilder.group({
      email: ['admin@finalbossar.com', [Validators.required, Validators.email]],
      password: ['bossfinaL7$', [
        Validators.required,
        Validators.pattern,
        Validators.minLength(8),
        Validators.maxLength(8),
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ]]
    })
  }
  adminLogin(formData: FormGroup) {
    console.log();
    let email = formData.controls.email.value;
    let password = formData.controls.password.value;
    this.admin.adminLogin(email, password)
      .pipe(
        tap(res => {
          if (!res) {
            console.log('There was no response.');
          }
        }),
        catchError(async e => {
          console.error(e);
          if (e) {
            const alert = await this.alert.create({
              header: 'Invalid Login',
              buttons: ['OK'],
            });
        
            await alert.present();
          }
          throw new Error(e);
        })
      )
      .subscribe( async data => {
        console.log(data);
        if(data['isMatch']) {
          this.adminSuccessToast('Admin has logged in!');
          this.router.navigateByUrl('fbs-admin/dashboard');
        }
      })
  }

   // Toasts
   async adminSuccessToast(message: string) {
    const toast = await this.toast.create({
      message,
      duration: 5000,
      cssClass: 'contact-success'
    });
    toast.present();
  }
}
