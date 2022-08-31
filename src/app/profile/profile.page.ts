import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private router: Router,
    private profileService: ProfileService,
  ) { }

  ngOnInit() {
  }

  backToHomePage() {
    this.router.navigateByUrl('home')
  }

}
