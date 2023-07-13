import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-age-modal',
  templateUrl: './age-modal.component.html',
  styleUrls: ['./age-modal.component.scss'],
})
export class AgeModalComponent implements OnInit {

  constructor(
    private modal: ModalController,) { }

  ngOnInit() {
    this.styleIonModal()
  }
  
  // Hide the time option from ion-datetime (it's irrelevant)
  styleIonModal() {
    let timeShadowRoot = document.querySelector('ion-modal').shadowRoot;
    // console.clear();
    console.log(timeShadowRoot);
    timeShadowRoot.prepend(Object.assign( document.createElement("style") , {
      innerText : `
                   .modal-wrapper {
                                  --background: #ffffffd9;
                                }
                  `
    }))
  }

  close() {
    this.modal.dismiss();
    let headerVideo = document.getElementById('header-video-ref') as HTMLVideoElement;
    headerVideo.play();
  }

}
