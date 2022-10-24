import { Component, OnInit } from '@angular/core';

interface Transaction {
  amount: string,
  note: string,
  datePosted: string
}

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.page.html',
  styleUrls: ['./crypto.page.scss'],
})
export class CryptoPage implements OnInit {
  transactions: Array<Transaction> = [
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
