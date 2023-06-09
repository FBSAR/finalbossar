import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-concept-modal',
  templateUrl: './concept-modal.component.html',
  styleUrls: ['./concept-modal.component.scss'],
})
export class ConceptModalComponent implements OnInit {
  name: string;
  photo: string;
  details: string;

  constructor(
    private modal: ModalController
  ) { }

  cancel() {
    return this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modal.dismiss(this.name, 'confirm');
  }

  ngOnInit() {
    console.clear();
    console.log(this.details);
    console.log(document.getElementById('character-description'));
    document.getElementById('character-description').innerHTML = this.details;
  }

}
