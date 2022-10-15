import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  adminRegisterForm: FormGroup;
  email = "admin@finalbossar.com";
  code

  constructor(
    private formBuilder: FormBuilder,
    private admin: AdminService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initializeFormGroups();
  }
  initializeFormGroups() {
    this.adminRegisterForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.email]],
    })
  }
  backToHomepage() {
    this.router.navigateByUrl('fbs-admin');
  }
  adminRegister() {
    this.admin.adminRegister()
    .subscribe(res => {
      console.log(res);
      
    });
  }

}
