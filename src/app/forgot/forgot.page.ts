import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { tap, catchError } from 'rxjs/operators';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  showCode = false;
  showPassword = false;
  code: string;
  email: string;

  @ViewChild('forgotCode') forgotCode: ElementRef;
  @ViewChild('forgotEmail') forgotEmail: ElementRef;
  @ViewChild('newPassword') newPassword: ElementRef;
  @ViewChild('confirmPassword') confirmPassword: ElementRef;

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private toastController: ToastController,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }
  showCodeSection(email: any) {
    console.log(email);
    // eddie@finalbossar.com
    this.profileService.sendForgotCode(email)
    .pipe(
      tap( res => {
        if (!res) {
          console.log('There was no response.');
        }
      }),
      catchError( e => {
        if(e) {
          console.log(e.error.msg);
        }
        throw new Error(e);
      })
    )
      .subscribe(res => {
        console.log(res);
        this.code = res['code'];
        this.email = email;
        this.showCode = true;
        
      })
      
  }
  showPasswordSection(userCode: any) {
    console.log(userCode);
    console.log(this.code);
    
    if(userCode === this.code) {
      this.showPassword = true;
    } else {

    }
  }
  async changePassword(newPassword: any, confirmPassword: any) {
    if(newPassword !== confirmPassword) {
      console.log('Passwords did not match');
      let mismatchedPasswordsToast = await this.toastController.create({
        message: "Passwords do not match",
        cssClass: "danger-toast"
      })
      return await mismatchedPasswordsToast.present();
    } else {
      this.profileService.forgotPassword(newPassword, this.email)
        .pipe(
          tap(),
          catchError(async e => {
            // Create Error Toast
            const previouslyUsedErrorToast = await this.toastController.create({
              message: 'You cannot use a previously used password',
              cssClass: 'danger-toast',
              duration: 2000,
            });

            if(e.error.msg === "Cannot have previously used password!") {
              await previouslyUsedErrorToast.present();
              throw Error(e);
            }
          })
        )
       .subscribe( async (response) => {
        console.log(response);

        // Create Success Toast
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
            this.forgotCode['value'] = '';
            this.forgotEmail['value'] = '';
            this.newPassword['value'] = '';
            this.confirmPassword['value'] = '';
            return this.router.navigateByUrl('login');
          });


      });
    }

  }

  backToLogin(){
    this.router.navigateByUrl('login');
  }

}
