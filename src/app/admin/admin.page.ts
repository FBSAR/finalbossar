import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  adminLoginForm: FormGroup;
  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initializeFormGroups();
  }
  initializeFormGroups() {
    this.adminLoginForm = this.formBuilder.group({
      email: ['admin@finalbossar.com', [Validators.required, Validators.email]],
      password: ['bossfinaL7$', [
        Validators.required,
        Validators.pattern,
        Validators.minLength(8),
        Validators.maxLength(8),
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ]]
    })
  }
  adminLogin() {
    this.router.navigateByUrl('fbs-admin/dashboard');
  }

}
