import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AlertController, ToastController, LoadingController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  BACKEND_URL = environment.url;
  TOKEN_KEY = 'access_token';

  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private router: Router,
    private menu: MenuController,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private storage: Storage,
    private helper: JwtHelperService,) { }

    /**
    * Login
    * @returns 
    */
   adminLogin(email: string, password: string) {
     return this.http.post(`${this.BACKEND_URL}/api/ad/login`, 
     {
       email,
       password
     })
   }
   adminRegister() {
     return this.http.get(`${this.BACKEND_URL}/api/ad/register`)
   }
   getProfiles() {
     return this.http.get(`${this.BACKEND_URL}/api/ad/get-profiles`)
   }
   getJobApps() {
     return this.http.get(`${this.BACKEND_URL}/api/ad/get-job-apps`)
   }
   saveApp(id) {
     return this.http.post(`${this.BACKEND_URL}/api/ad/save-app`, {
      _id: id
    })
   }
   denyApp(id, emailMessage) {
     return this.http.post(`${this.BACKEND_URL}/api/ad/delete-app`, {
       _id: id,
       emailMessage
     })
   }
   sendNewsletter(emailSubject: string, title: string, newsletter: string) {
     return this.http.post(`${this.BACKEND_URL}/api/ad/send-newsletter`, {
      emailSubject,
      title,
      newsletter
     })
   }
   backToHomePage() {
    this.router.navigateByUrl("/home");
  }
}
