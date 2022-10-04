import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private router: Router,
    public profileService: ProfileService,
    private formBuilder: FormBuilder,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.initializeProfileBSubjects();
    this.initializeFormGroups();
  }

  backToHomePage() {
    this.router.navigateByUrl('home')
  }

  initializeProfileBSubjects() {
    this.profileService.firstName.subscribe(
      value => {
        console.log(value);
        
      });
    this.profileService.lastName.subscribe(
      value => {
        console.log(value);
        
      });
    this.profileService.email.subscribe(
      value => {
        console.log(value);
        
      });
  }

  /**
   * Get User profile information from Behavior Subjects in Login Service
   */
  // getUserDetailsFromBehaviorSubjects() {
  //   this.loginService.userFullName.subscribe(
  //     (data) => {
  //       this.userFullName = data;
  //       let userFullNameArray = data.split(' ');
  //       this.userFirstName = userFullNameArray[0];
  //       this.userLastName = userFullNameArray[1];
  //     }
  //   )
  //   this.loginService.userEmail.subscribe(
  //     (data) => {
  //       this.userEmail = data;
  //     }
  //   )
  //   this.loginService.userPicture.subscribe(
  //     (data) => {
  //       this.userPicture = data;
  //     }
  //   )
  //   this.loginService.userType.subscribe(
  //     (data) => {
  //       this.userType = data;
  //     }
  //   )

  // }




  // 
  changeNameForm: FormGroup;
  changePasswordForm: FormGroup;
  changeEmailForm: FormGroup;

  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'password', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    ]
  };

  /**
   * Initializes all the FormBuilder groups for each Modal
   */
  initializeFormGroups() {
    this.changeNameForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])],
    })
    this.changeEmailForm = this.formBuilder.group({
      newEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      retypeNewPassword: ['', [Validators.required,]],
    })
  }

  // 
  changeNameSub: Subscription;
  changeNameModalOpen = false;

  changeNameModal() {
    this.changeNameModalOpen = true;
  }
  closeNameModal() {
    this.changeNameModalOpen = false;
  }

  /**
   * Attempt to Change the User's Name
   */
  async tryChangeName() {
    let firstName = this.changeNameForm.controls.firstName.value;
    let lastName = this.changeNameForm.controls.lastName.value;
    let password = this.changeNameForm.controls.password.value;
    this.changeNameSub = await this.profileService.changeName(firstName, lastName, password, this.profileService.email.value);
    await setTimeout(() => {
      
      this.changeNameSub.unsubscribe();
      this.closeNameModal();
      console.log('Unsubscribed from Change Name Subscription');
    }, 1000);
    return;
  } 


  // 
  changeEmailSub: Subscription;
  changeEmailModalOpen = false;

  /**
   * Attempt to Change the User's Email
   */
  async tryChangeEmail() {
    let newEmail = this.changeEmailForm.controls.newEmail.value;
    let password = this.changeEmailForm.controls.password.value;
    this.changeEmailSub = await this.profileService.changeEmail(newEmail, this.profileService.email.value, password);
    await setTimeout(() => {
      
      this.changeEmailSub.unsubscribe();
      this.closeEmailModal();
      console.log('Unsubscribed from Change Name Subscription');
      return;
    }, 1000);

  }
  changeEmailModal() {
    this.changeEmailModalOpen = true;
  }
  closeEmailModal() {
    this.changeEmailModalOpen = false;
  }


  changePasswordSub: Subscription;
  changePasswordModalOpen = false;

  /**
   * Attempt to Change the User's Password
   */
  async tryChangePassword() {
    let newPassword = this.changePasswordForm.controls.newPassword.value;
    let oldPassword = this.changePasswordForm.controls.oldPassword.value;
    this.changePasswordSub = await this.profileService.changePassword(newPassword, oldPassword, this.profileService.email.value);
    
    await setTimeout(() => {
      
      this.changePasswordSub.unsubscribe();
      this.closePasswordModal();
      console.log('Unsubscribed from Change Password Subscription');
      return;
    }, 1000);
    
  }
  changePasswordModal() {
    this.changePasswordModalOpen = true;
  }
  closePasswordModal() {
    this.changePasswordModalOpen = false;
  }


}
