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
    return this.http.post(`${this.BACKEND_URL}/profile/register-profile`, 
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
    return this.http.post(`${this.BACKEND_URL}/profile/login-profile`, 
    {
      email,
      password,
      stayLoggedIn
    })
  }

  logout() {
    this.storage.remove(this.TOKEN_KEY).then((token) => {
      console.log('Logging out...');
      console.log(`Deleting token: ${token}`);
      this.user = null;
      this.menu.close('side-menu');
      this.authenticationState.next(false);
      
      // 
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
    return this.http.post(`${this.BACKEND_URL}/profile/send-register-code`, { code, email })
  }

    /**
   * Change User's name
   * @returns 
   */
  changeName(name, password, email) {
      console.log(name, password);
     return this.http.post(`${this.BACKEND_URL}/user-profile/change-name`, {fullName: name, password, email})
       .pipe(
         // 
       )
       .subscribe( async (response) => {
         console.log(response);
 
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
             // Change Name on Profile Page
             return;
           });
 
 
       });
  }
 
   /**
    * Change User's Email
    */
   changeEmail(newEmail, email, password) {
     return this.http.post(`${this.BACKEND_URL}/user-profile/change-email`, {newEmail, email, password})
       .pipe(
         // 
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
             // Change Name on Profile Page
             return;
           });
 
 
       });
 
   }
 
   /**
    * Change User's Picture
    */
   changePicture() {
 
   }
 
   /**
    * Change User's Password
    */
   changePassword(newPassword: string, oldPassword: string, email: string) {
     return this.http.post(`${this.BACKEND_URL}/user-profile/change-password`, {newPassword, oldPassword, email})
       .pipe(
         // 
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
           cssClass: 'forgot-password-loading',
           message: 'Updating Profile ..',
           duration: 2000
         });
     
         loading.present();
         loading.onDidDismiss()
           .then(() => {
             toast.present();
             return;
           });
 
 
       });
 
   }
}
