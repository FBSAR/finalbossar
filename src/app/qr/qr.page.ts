import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {
  aSceneLoaded = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.loadAScene();
  }
  loadAScene() {
    setTimeout(() => {
      this.aSceneLoaded = true;
    }, 1000);
  }
  backToHomepage() {
    this.router.navigateByUrl('home');
  }
  startQR() {
    console.log('Starting QR Experience');
  }

}
