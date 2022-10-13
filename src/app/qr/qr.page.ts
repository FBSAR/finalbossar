import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.addEventListener("arjs-nft-loaded", (event) => {
      console.log(event);
      
    });
  }
  backToHomepage() {
    this.router.navigateByUrl('home');
  }
  startQR() {
    console.log('Starting QR Experience');
  }

}
