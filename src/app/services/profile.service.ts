import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AlertController, ToastController, LoadingController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

interface onboardingUser {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

interface User {
  firstName: string,
  lastName: string,
  email: string,
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  BACKEND_URL = environment.url;
  TOKEN_KEY = 'access_token';
  user: User = null;
  authenticationState = new BehaviorSubject(false);
  firstName = new BehaviorSubject('none');
  lastName = new BehaviorSubject('none');
  email = new BehaviorSubject('none');

  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private router: Router,
    private menu: MenuController,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private storage: Storage,
    private helper: JwtHelperService,
  ) { }
  
   /**
   * Register
   * @returns 
   */
  register(user: onboardingUser) {
    return this.http.post(`${this.BACKEND_URL}/api/profile/register-profile`, 
    {
      firstName: user.firstName, 
      lastName: user.lastName, 
      email: user.email, 
      password: user.password
    })
    
  }

   /**
   * Login
   * @returns 
   */
  login(email: string, password: string, stayLoggedIn: boolean) {
    return this.http.post(`${this.BACKEND_URL}/api/profile/login-profile`, 
    {
      email,
      password,
      stayLoggedIn
    })
  }

  logout() {
    this.storage.remove(this.TOKEN_KEY).then(async (token)  => {
      console.log('Logging out...');
      console.log(`Deleting token: ${token}`);
      this.firstName.next('none');
      this.lastName.next('none');
      this.email.next('none');
      this.menu.close('side-menu');
      this.authenticationState.next(false);

      // Logout Toast
      const toast =  await this.toastController.create({
        message: 'You haved logged out!',
        cssClass: 'danger-toast',
        duration: 2000
      });
      
      await toast.present();
      // window.location.reload();
    });
  }

  async checkToken() {
    console.log('Checking Token');
    this.storage.get(this.TOKEN_KEY).then(token => {
      if (token) {
        const decoded = this.helper.decodeToken(token);
        const isExpired = this.helper.isTokenExpired(token);

        // Check to see if token has expired.
        if (!isExpired) {
          // this.user = decoded;

          if((decoded.email !== '')) {
            console.log('Decoded Token: ');            
            console.log(decoded);
            this.user = {
              firstName: decoded.firstName,
              lastName: decoded.lastName,
              email: decoded.email,
              token
            }
            console.log(this.user);
            this.firstName.next(decoded.firstName);
            this.lastName.next(decoded.lastName);
            this.email.next(decoded.email);
            this.authenticationState.next(true);
          }
        } else {
          console.log('Token Removed from Storage');
          this.storage.remove(this.TOKEN_KEY);
        }
      }
    });
  }

  /**
   * Send Register Code
   */
  sendRegisterCode(code: string, email: string) {
    return this.http.post(`${this.BACKEND_URL}/api/profile/send-register-code`, { code, email })
  }

  sendForgotCode(email: string) {
    return this.http.post(`${this.BACKEND_URL}/api/profile/forgot-email-validation`, { email })
  }

    /**
   * Change User's name
   * @returns 
   */
  changeName(firstName, lastName, password, email) {
      console.log(password);
     return this.http.post(`${this.BACKEND_URL}/api/profile/change-name`, {firstName, lastName, password, email})
       .pipe(
         // 
       )
       .subscribe( async (res) => {
         console.log(res);
        this.firstName.next(res['firstName']);
        this.lastName.next(res['lastName']);
 
         // Create Toast
         const toast = await this.toastController.create({
           message: 'You have successfully changed your Name!',
           cssClass: 'success-toast',
           duration: 2000,
         });
 
         // Create Loading
         const loading = await this.loadingController.create({
           cssClass: 'default-loading',
           message: 'Updating Profile ..',
           duration: 2000
         });
     
         loading.present();
         loading.onDidDismiss()
           .then(() => {
             toast.present();
             this.router.navigateByUrl('profile');
             return;
           });
 
 
       });
  }
 
   /**
    * Change User's Email
    */
   changeEmail(newEmail, email, password) {
     return this.http.post(`${this.BACKEND_URL}/api/profile/change-email`, {newEmail, email, password})
       .pipe(
         tap(),
         catchError(async e => {
          console.log(e);
          
          const noEmailAlert = await this.alertController.create({
            cssClass: 'danger-alert',
            header: "You forgot to add an email.",
            buttons: [{
              text: 'Close'
            }]
          });
          const noPasswordAlert = await this.alertController.create({
            cssClass: 'danger-alert',
            header: "You forgot your password.",
            buttons: [{
              text: 'Close'
            }]
          });

          if (e.error === 'Request needs an email') {
            await noEmailAlert.present();
          }  
          if (e.error === 'Request needs a password') {
            await noPasswordAlert.present();
          }
          throw Error(e);
         })
       )
       .subscribe( async (response) => {
         console.log(response);
 
         // Create Toast
         const toast = await this.toastController.create({
           message: 'You have successfully changed your Email!',
           cssClass: 'success-toast',
           duration: 2000,
         });
 
         // Create Loading
         const loading = await this.loadingController.create({
           cssClass: 'default-loading',
           message: 'Updating Profile ..',
           duration: 2000
         });
     
         loading.present();
         loading.onDidDismiss()
           .then(() => {
             toast.present();
             this.email.next(newEmail);
             this.router.navigateByUrl('profile');
             return;
           });
 
 
       });
 
   }
   /**
    * Change User's Password in Forgot Password Page
    */
   forgotPassword(newPassword: string, email: string) {
     return this.http.post(`${this.BACKEND_URL}/api/profile/forgot-change-password`, {newPassword, email})
   }
 
   /**
    * Change User's Password in Forgot Password Page
    */
   changePassword(newPassword: string, oldPassword: string, email: string) {
     return this.http.post(`${this.BACKEND_URL}/api/profile/change-password`, {newPassword, oldPassword, email})
     .pipe(
      tap(),
      catchError(async e => {
       console.log(e);
    
       const noPasswordAlert = await this.alertController.create({
         cssClass: 'danger-alert',
         header: "You forgot your password.",
         buttons: [{
           text: 'Close'
         }]
       });

       if (e.error === 'Request needs a password') {
         await noPasswordAlert.present();
       }
       throw Error(e);
      })
    )
    .subscribe( async (response) => {
      console.log(response);

      // Create Toast
      const toast = await this.toastController.create({
        message: 'You have successfully changed your Password!',
        cssClass: 'success-toast',
        duration: 2000,
      });

      // Create Loading
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: 'Updating Profile ..',
        duration: 2000
      });
  
      loading.present();
      loading.onDidDismiss()
        .then(() => {
          toast.present();
          this.router.navigateByUrl('profile');
          return;
        });


    });
   }
}
