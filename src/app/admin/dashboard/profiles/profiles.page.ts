import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';

interface Profile {
  firstName: string,
  lastName: string,
  newsletter: boolean,
  email: string,
  dateRegistered: string
}

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  getProfilesSub: Subscription;
  profiles: Array<Profile>;

  constructor(
    private admin: AdminService
  ) { 
    this.getProfiles();
  }

  ngOnInit() {
  }
  getProfiles() {
    this.getProfilesSub = this.admin.getProfiles()
      .subscribe(profiles => {
        return this.profiles = profiles['profiles'];
      })
    setTimeout(() => {
      this.getProfilesSub.unsubscribe();
    }, 1000);
  }

}
