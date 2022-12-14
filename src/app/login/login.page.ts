import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { SwiperOptions } from 'swiper';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  TOKEN_KEY = 'access_token';
  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    ]
  };
  enterEmailForm: FormGroup;
  enterCodeForm: FormGroup;
  newPasswordForm: FormGroup;
  userStayLoggedIn = false;
  userEmail: string;
  code: string;
  newPassword: string;
  reTypeNewPassword: string;
  userEmailSub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private storage: Storage,
    private helper: JwtHelperService,
    private router: Router,
    private profileService: ProfileService,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
    this.initializeFormGroups();
  }

  backToHomePage() {
    this.router.navigateByUrl('home')
  }

  // @HostListener('unload')

  /**
   * 
   */
  async login(email, password) {
    await this.profileService.login(email, password, this.userStayLoggedIn)
    .pipe(
      tap(res => {
        if (!res) {
          console.log('There was no response.');
        } 
      }),
      catchError(async e => {
        
        // Create Alert Instances
        const badPasswordAlert = await this.alertController.create({
          cssClass: 'danger-alert',
          header: "Bad Email/Password combination.",
          buttons: [{
            text: 'Close'
          }]
        });
        const noProfileAlert = await this.alertController.create({
          cssClass: 'danger-alert',
          header: "There is no profile with that email.",
          buttons: [{
            text: 'Close'
          }]
        });
        const noEmailOrPasswordAlert = await this.alertController.create({
          cssClass: 'danger-alert',
          header: "No Email or No Password.",
          buttons: [{
            text: 'Close'
          }]
        });
        const serverErrorAlert = await this.alertController.create({
          cssClass: 'danger-alert',
          header: "Server Error. Please try again later.",
          buttons: [{
            text: 'Close'
          }]
        });
        
        // Handle Errors
        if (e.error.msg === 'The email and password don\'t match.') {
          await badPasswordAlert.present();
        }  
        if (e.error.msg === 'The Profile does not exist') {
          await noProfileAlert.present();
        }  
        if (e.error.msg === 'There was No Email or No Password in the Request!') {
          await noEmailOrPasswordAlert.present();
        }
        if (e.statusText === "Unknown Error") {
          await serverErrorAlert.present();
        }
        console.error(e);
        throw new Error(e);
      })
    )
    .subscribe( async res => {
      console.log(res);

      this.profileService.firstName.next(res['firstName']);
      this.profileService.lastName.next(res['lastName']);
      this.profileService.walletAddress.next(res['walletAddress']);
      this.profileService.email.next(res['email']);
     
      if(this.userStayLoggedIn) {
        this.storage.set(this.TOKEN_KEY, res['token']);
        // this.profileService.user.token = this.helper.decodeToken( res['token']);
      }
      // Success Login Toast
      const toast = await this.toastController.create({
        message: 'You are now logged in!',
        cssClass: 'success-toast',
        duration: 2000
      });
      await toast.present();
      this.router.navigateByUrl('home');
    })
    
  }

  stayLoggedIn(e) {
    console.log(e.detail);
    let checkBoxValue = e.detail;
    if(checkBoxValue) {
      this.userStayLoggedIn = true;
      return;
    } else {
      this.userStayLoggedIn = false;
      return;
    }
  }

  togglePasswordDisplay() {
    const password = document.getElementById('password-login') as HTMLInputElement;
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  }

  /**
   * 
   */
  goToRegisterPage() {
    this.router.navigateByUrl("/register");
    return;
  }

  /**
   * 
   */
  goHome() {
    this.router.navigateByUrl("/home");
    return;
  }

  /**
   * 
   */
  initializeFormGroups() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern,
        Validators.minLength(8),
        Validators.maxLength(8),
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ]]
    })

    // Slide 1 / Enter Email
    this.enterEmailForm = this.formBuilder.group({
      emailForgot: ['eddielacrosse2@gmail.com', [Validators.required, Validators.email]],
    })

    // Slide 2 / Enter Code
    this.enterCodeForm = this.formBuilder.group({
      code: ['', [Validators.required]],
    })

    // Slide 3 / New Password
    this.newPasswordForm = this.formBuilder.group({
     newPassword: ['', Validators.compose([
      Validators.minLength(8),
      Validators.maxLength(8),
      Validators.required,
      // at least 1 number, 1 uppercase letter, and one lowercase letter
   ])],
    reTypeNewPassword: ['', Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.required,
        // at least 1 number, 1 uppercase letter, and one lowercase letter
     ])],
    currentPassword: ['', Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.required,
        // at least 1 number, 1 uppercase letter, and one lowercase letter
     ])],
    })



    this.enterCodeForm.valueChanges.subscribe( data => {
      console.log(data);
    })
  }

  /**
   * 
   */
   forgot() {
    this.router.navigateByUrl('forgot');
  }
}
