import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap, catchError } from 'rxjs/operators';

interface RegisteredUSer {
  fullName: string,
  email: string,
  password: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  BACKEND_URL = environment.url;
  TOKEN_KEY = 'access_token';
  user = null;
  userEmail: string;

  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private storage: Storage,
    private helper: JwtHelperService,
  ) { }

  register(user: RegisteredUSer) {
    return this.http.post(`${this.BACKEND_URL}/auth/register`, 
    {fullName: user.fullName, email: user.email, password: user.password})
    
  }



  /**
   * Send Register Code
   */
  sendRegisterCode(code: string, email: string) {
    return this.http.post(`${this.BACKEND_URL}/auth/send-register-code`, { code, email })
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
