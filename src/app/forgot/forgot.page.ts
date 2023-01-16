import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { tap, catchError } from 'rxjs/operators';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';

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

  // Contact Form
  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    // password: [
    //   // tslint:disable-next-line: max-line-length
    //   { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    // ]
  };
  @ViewChild('forgotCode') forgotCode: ElementRef;
  @ViewChild('forgotEmail') forgotEmail: ElementRef;
  @ViewChild('newPassword') newPassword: ElementRef;

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController,
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
      catchError( async e => {
        if(e.error.msg == "The Profile does not exist") {
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'User with that email does not exist.',
            buttons: [
              {
                text: 'Okay',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                },
              },
            ],
          });
      
          await alert.present();
        }
        if(e.error.msg == "There was an error sending code your email.") {
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'There was an error sending code to email. Please try again later. :(',
            buttons: [
              {
                text: 'Okay',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                },
              },
            ],
          });
      
          await alert.present();
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
  async showPasswordSection(userCode: any) {
    console.log(userCode);
    console.log(this.code);
    
    if(userCode === this.code) {
      this.showPassword = true;
    } else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'The code does not match',
        buttons: [
          {
            text: 'Okay',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
            },
          },
        ],
      });
  
      await alert.present();
    }
  }
  async changePassword(newPassword: any) {
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
            return this.router.navigateByUrl('login');
          });


      });

  }

  togglePasswordDisplay() {
    const password = document.getElementById('password-forgot') as HTMLInputElement;
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  }

  backToLogin(){
    this.router.navigateByUrl('login');
  }

}
