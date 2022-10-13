import { Component, OnInit } from '@angular/core';

interface lastestProfile {
  name: string,
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
  latestProfiles: Array<lastestProfile> = [
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

  constructor() { }

  ngOnInit() {
  }

}
