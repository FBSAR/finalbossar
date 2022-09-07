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
  forgotPasswordModal = false;

  config: SwiperOptions = {
    slidesPerView: 1,
    allowSlideNext: false,
    allowSlidePrev: false,
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    ]
  };
  swiper: any;
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

    // this.userEmailSub = this.loginService.userEmail.subscribe(data => {
    //   this.userEmail = data;
    // });
  }

  backToHomePage() {
    this.router.navigateByUrl('home')
  }

  // @HostListener('unload')

  /**
   * 
   */
  async login(email, password) {
    let loggedInToast = await this.toastController.create({
      header: "Logged In!",
      cssClass: "success-toast",
      position: "bottom",
      icon: "information-circle"
    });
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
      email: ['eddie@finalbossar.com', [Validators.required, Validators.email]],
      password: ['finalboss7', [
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

  /**
   * 
   */
  closeForgotPasswordModal() {
    this.forgotPasswordModal = false;
    return;
  }

  /**
   * 
   */
  resendCode() {
    
  }

  /**
   * 
   */
  onSwiper(swiper) {
    console.log(swiper);
    return this.swiper = swiper;
  }

  // Forgot Password Slide Functions

  /**
   * Get User's Email on Slide 1
   */
   getEmail() {
    console.clear()
    console.log(this.enterEmailForm.value)
    this.userEmail = this.enterEmailForm.value.emailForgot;
     this.generateCode(4);
    //  this.loginService.sendForgetCode(this.userEmail, this.code)
    //   .subscribe( data => {

    //     console.log('Send Forgot Password 200 Response.');
    //     this.swiper.allowSlideNext = true;

    //      this.swiper.slideNext();
    //      setTimeout(() => {
    //       this.swiper.allowSlideNext = false;
    //     }, 800);
    //   });
    
  }

  async generateCode(length: number) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;

    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log('Generated Code: ' + result);
    return this.code = result;
  }

  /**
   * Track the User's Code Input to be able to navigate to next slide.
   */
   async codeInput(e: any) {
    let userInputCode = e.detail.value;

    if(userInputCode == this.code) {
      const toast = await this.toastController.create({
        message: 'Your Code Matched!',
        cssClass: 'success-toast',
        duration: 2000
      });
      await toast.present();
      this.swiper.allowSlideNext = true;

      
      await setTimeout(() => {
          this.swiper.slideNext();

          setTimeout(() => {
            this.swiper.allowSlideNext = false;
          }, 800);
      }, 2000);

    }
   }

  /**
   * Track the User's Password and ReTypePassword Input to successfully change password.
   */
  newPasswordInput(e: any) {
    let newPassword= e.detail.value;
    this.newPassword = newPassword;
    console.log('New Password: ' + newPassword);

    if(this.newPassword == this.reTypeNewPassword) {
      console.log('Passwords Match!');
    }
  }

  /**
   * Track the User's Password and ReTypePassword Input to successfully change password.
   */

  passwordsMatched = false; 

  async retypeNewPasswordInput(e: any) {
    let reTypeNewPassword = e.detail.value;
    this.reTypeNewPassword = reTypeNewPassword;
    console.log('Retyped New Password: ' + reTypeNewPassword);

    if(this.newPassword == this.reTypeNewPassword) {
      console.log('Passwords Match!');
      const toast = await this.toastController.create({
        message: 'Your Passwords Matched!',
        cssClass: 'success-toast',
        duration: 2000
      });
      await toast.present();
      this.passwordsMatched = true;

    }
  }

  /**
   * 
   */
  async resetPassword() {
    console.clear();
    console.log(this.userEmail);

    if(!this.passwordsMatched) {

      const toast = await this.toastController.create({
        message: 'Your Passwords do not Match!!',
        cssClass: 'danger-toast',
        duration: 2000
      });
      await toast.present();
    }

    if(this.passwordsMatched) {
      // await this.profileService.changePassword(
      //   this.newPassword, 
      //   this.newPasswordForm.value.currentPassword, 
      //   this.userEmail)

      await this.enterEmailForm.reset();
      await this.enterCodeForm.reset();
      await this.newPasswordForm.reset();

      await setTimeout(() => {
        this.closeForgotPasswordModal();
      }, 800);

    }
  }

}
