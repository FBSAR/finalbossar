import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/services/web3.service';

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

  constructor(
    private web3: Web3Service,
  ) {
    this.getBossCTotalSupply();
   }

  ngOnInit() {
  }

  totalSupply: any;

  getBossCTotalSupply() {
    this.web3.bosscTotalSupply()
      .subscribe(a => {
        let format = Intl.NumberFormat('en-us');
        this.totalSupply = format.format(parseInt(a['supply'].hex));
        console.log(this.totalSupply);
        return;
      })
  }

}
