import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

interface lastestProfile {
  firstName: string,
  lastName: string,
  newsletter: boolean,
  email: string,
  dateRegistered: string
}
interface lastestTransactions {
  amount: string,
  note: string,
  datePosted: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  totalProfiles: Array<lastestProfile>;
  totalProfilesCount: number;
  totalTransactions: number;
  latestProfiles: Array<lastestProfile>;
  // latestProfiles: Array<lastestProfile> = [
  //   {
  //     name: "Test Name",
  //     email: "Test Email",
  //     dateRegistered: "00/00/00"
  //   },
  //   {
  //     name: "Test Name",
  //     email: "Test Email",
  //     dateRegistered: "00/00/00"
  //   },
  //   {
  //     name: "Test Name",
  //     email: "Test Email",
  //     dateRegistered: "00/00/00"
  //   }
  // ]
  latestTransactions: Array<lastestTransactions> = [
    {
      amount: "100 BC",
      note: "User completed Paradox Hazard Campaign.",
      datePosted: "00/00/00"
    },
    {
      amount: "100 BC",
      note: "User completed Paradox Hazard Campaign.",
      datePosted: "00/00/00"
    },
    {
      amount: "100 BC",
      note: "User completed Paradox Hazard Campaign.",
      datePosted: "00/00/00"
    }
  ]

  constructor(
    private admin: AdminService
  ) { 
    this.getLatestProfiles();
  }

  ngOnInit() {
  }

  getLatestProfiles() {
    this.admin.getProfiles()
      .subscribe(res => {
        console.log(res);
        this.totalProfilesCount = res['profileCount'];
        // Get last 3 profiles registered.
        this.latestProfiles = res['profiles'].slice(-3).reverse();
      })
  }

}
