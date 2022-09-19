import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss'],
})
export class LandingHeaderComponent implements OnInit {
  redBarOne;
  redBarTwo;
  redBarThree;

  constructor() { }

  ngOnInit() {
    this.findSVGElement();
    setTimeout(() => {
      this.animateF();
    }, 1000);
  }

  findSVGElement() {
    this.redBarOne = document.getElementById('Red-Bar-1');
    this.redBarTwo = document.getElementById('Red-Bar-2');
    this.redBarThree = document.getElementById('Red-Bar-3');
    console.log(this.redBarOne);
    console.log(this.redBarTwo);
    console.log(this.redBarThree);
    
  }

  animateF() {
    this.redBarOne.style.animation = "red-bar-slide 1s ease 1s forwards";
    this.redBarTwo.style.animation = "red-bar-slide 1s ease 1.5s forwards";
    this.redBarThree.style.animation = "red-bar-slide 1s ease 2s forwards";
  }

}
