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
  redObject;
  blueObject;
  greenObject;
  letterF;
  letterI;
  letterI2;
  letterN;
  letterA;
  letterL;
  letterB;
  letterO;
  letterO2;
  letterS;
  letterS2;
  letterS3;
  letterS4;
  letterT;
  letterU;
  letterD;

  constructor() { }

  ngOnInit() {
    this.findSVGElement();
    setTimeout(() => {
      this.animateF();
    }, 1000);
    setTimeout(() => {
      this.redObjectAnim();
    }, 1200);
    setTimeout(() => {
      this.blueObjectAnim();
    }, 1300);
    setTimeout(() => {
      this.greenObjectAnim();
    }, 1400);
    setTimeout(() => {
      this.lettersAnim();
    }, 1100);
  }

  findSVGElement() {
    this.redBarOne = document.getElementById('Red-Bar-1');
    this.redBarTwo = document.getElementById('Red-Bar-2');
    this.redBarThree = document.getElementById('Red-Bar-3');
    this.redObject = document.getElementById('red-object');
    this.blueObject = document.getElementById('blue-object');
    this.greenObject = document.getElementById('green-object');
    this.letterF = document.getElementById('F');
    this.letterI = document.getElementById('I');
    this.letterI2 = document.getElementById('I-2');
    this.letterN = document.getElementById('N');
    this.letterA = document.getElementById('A');
    this.letterL = document.getElementById('L');
    this.letterB = document.getElementById('B');
    this.letterO = document.getElementById('O');
    this.letterO2 = document.getElementById('O-2');
    this.letterS = document.getElementById('S');
    this.letterS2 = document.getElementById('S-2');
    this.letterS3 = document.getElementById('S-3');
    this.letterS4 = document.getElementById('S-4');
    this.letterT = document.getElementById('T');
    this.letterU = document.getElementById('U');
    this.letterD = document.getElementById('D'); 
  }

  animateF() {
    this.redBarOne.style.animation = "red-bar-slide 1s ease 1s forwards";
    this.redBarTwo.style.animation = "red-bar-slide 1s ease 1.5s forwards";
    this.redBarThree.style.animation = "red-bar-slide 1s ease 2s forwards";
  }

  redObjectAnim() {
    this.redObject.style.animation = "red-object-fly 5s linear 0.5s infinite";
  }

  blueObjectAnim() {
    this.blueObject.style.animation = "blue-object-fly 5s linear 1s infinite";
  }

  greenObjectAnim() {
    this.greenObject.style.animation = "green-object-fly 5s linear infinite";
  }

  lettersAnim() {
    this.letterF.style.animation  = "letter-fade-up 1s ease 1s forwards";
    this.letterI.style.animation  = "letter-fade-up 1s ease 1.2s forwards";
    this.letterN.style.animation  = "letter-fade-up 1s ease 1.4s forwards";
    this.letterA.style.animation  = "letter-fade-up 1s ease 1.6s forwards";
    this.letterL.style.animation  = "letter-fade-up 1s ease 1.8s forwards";
    this.letterB.style.animation  = "letter-fade-up 1s ease 2s forwards";
    this.letterO.style.animation  = "letter-fade-up 1s ease 2.2s forwards";
    this.letterS.style.animation  = "letter-fade-up 1s ease 2.4s forwards";
    this.letterS2.style.animation = "letter-fade-up 1s ease 2.6s forwards";
    this.letterS3.style.animation = "letter-fade-up 1s ease 2.8s forwards";
    this.letterT.style.animation  = "letter-fade-up 1s ease 3s forwards";
    this.letterU.style.animation  = "letter-fade-up 1s ease 3.2s forwards";
    this.letterD.style.animation  = "letter-fade-up 1s ease 3.4s forwards";
    this.letterI2.style.animation = "letter-fade-up 1s ease 3.6s forwards";
    this.letterO2.style.animation  = "letter-fade-up 1s ease 3.8s forwards";
    this.letterS4.style.animation = "letter-fade-up 1s ease 4s forwards";

  }

}
