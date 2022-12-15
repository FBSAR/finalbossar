import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AlertController, ToastController, LoadingController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

interface applyingUser {
  job: String,
  availability: String,
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

@Injectable({
  providedIn: 'root'
})
export class JobAppService {
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private router: Router,
    private menu: MenuController,
    private toastController: ToastController,
    private loadingController: LoadingController) {

     }
    
  submitApp(user: applyingUser) {
    console.log(user)
    return this.http.post(`${this.BACKEND_URL}/api/job-app/submit-app`, 
    {
      job: user.job,
      availability: user.availability,
      firstName: user.firstName,
      lastName: user.lastName, 
      age: user.age,
      gender: user.gender,
      phone: user.phone, 
      email: user.email,
      addressOne: user.addressOne,
      addressTwo: user.addressTwo,
      city: user.city,
      state: user.state,
      zip: user.zip,
      resume: user.resume,
      goodFitReason: user.goodFitReason,
      favoriteGames: user.favoriteGames,
      strengthWeaknesses: user.strengthWeaknesses,
    })
    
  }


}
