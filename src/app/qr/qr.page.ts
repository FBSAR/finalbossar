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
    document.querySelector('a-scene').addEventListener('loaded', function(e) { 
      console.log(e);
      
    });
  }
  backToHomepage() {
    this.router.navigateByUrl('home');
  }
  startQR() {
    console.log('Starting QR Experience');
  }

}
