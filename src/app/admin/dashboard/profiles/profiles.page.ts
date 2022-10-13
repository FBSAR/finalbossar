import { Component, OnInit } from '@angular/core';

interface Profile {
  name: string,
  email: string,
  dateRegistered: string
}

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  profiles: Array<Profile> = [
    {
      name: "Test Name",
      email: "Test Email",
      dateRegistered: "00/00/00"
    },
    {
      name: "Test Name",
      email: "Test Email",
      dateRegistered: "00/00/00"
    },
    {
      name: "Test Name",
      email: "Test Email",
      dateRegistered: "00/00/00"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
