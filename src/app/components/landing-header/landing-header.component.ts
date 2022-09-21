import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss'],
})
export class LandingHeaderComponent implements OnInit {
  fBody;
  redBarOne;
  redBarTwo;
  redBarThree;
  greenBar;
  greenStripe;
  greenStripeTwo;
  purpleStripe;
  purpleStripeTwo;
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
    this.initializeElements();
    this.animationSequence();
  }

  initializeElements() {
    this.redBarOne = document.getElementById('Red-Bar-1');
    this.redBarTwo = document.getElementById('Red-Bar-2');
    this.redBarThree = document.getElementById('Red-Bar-3');
    this.fBody = document.getElementById('F-Body');
    this.purpleStripe = document.getElementById('Purple-Stripe-1');
    this.purpleStripeTwo = document.getElementById('Purple-Stripe-2');
    this.greenBar = document.getElementById('Green-Bar');
    this.greenStripe = document.getElementById('Green-Stripe-1');
    this.greenStripeTwo = document.getElementById('Green-Stripe-2');
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
  animationSequence() {
    setTimeout(() => {
      this.animateRedBars();
    }, 1000);
    setTimeout(() => {
      this.animateGreenBar();
    }, 1000);
    setTimeout(() => {
      this.animateGreenStripeOne();
    }, 1000);
    setTimeout(() => {
      this.animateGreenStripeTwo();
    }, 1000);
    setTimeout(() => {
      this.animatePurpleStripeOne();
    }, 1000);
    setTimeout(() => {
      this.animatePurpleStripeTwo();
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
    setTimeout(() => {
      this.animateFBody();
    }, 1100);
  }
  animateRedBars() {
    this.redBarOne.style.animation = "red-bar-slide 1s ease 1s forwards";
    this.redBarTwo.style.animation = "red-bar-slide 1s ease 1.5s forwards";
    this.redBarThree.style.animation = "red-bar-slide 1s ease 2s forwards";
  }
  animateGreenBar() {
    this.greenBar.style.animation = "green-bar-slide 1s ease 3s forwards"; 
  }
  animateGreenStripeOne() {
    this.greenStripe.style.animation = "green-stripe-one-slide 1s ease 3s forwards"; 
  }
  animateGreenStripeTwo() {
    this.greenStripeTwo.style.animation = "green-stripe-two-slide 1s ease 2.8s forwards"; 
  }
  animatePurpleStripeOne() {
    this.purpleStripe.style.animation = "purple-stripe-one-slide 1s ease 3s forwards"; 
  }
  animatePurpleStripeTwo() {
    this.purpleStripeTwo.style.animation = "purple-stripe-two-slide 1s ease 2.8s forwards"; 
  }
  animateFBody() {
    this.fBody.style.animation = "f-body-anim 1.5s ease forwards";
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
    this.letterF.style.animation  = "letter-fade-up 1s ease 4s forwards";
    this.letterI.style.animation  = "letter-fade-up 1s ease 4.2s forwards";
    this.letterN.style.animation  = "letter-fade-up 1s ease 4.4s forwards";
    this.letterA.style.animation  = "letter-fade-up 1s ease 4.6s forwards";
    this.letterL.style.animation  = "letter-fade-up 1s ease 4.8s forwards";
    this.letterB.style.animation  = "letter-fade-up 1s ease 5s forwards";
    this.letterO.style.animation  = "letter-fade-up 1s ease 5.2s forwards";
    this.letterS.style.animation  = "letter-fade-up 1s ease 5.4s forwards";
    this.letterS2.style.animation = "letter-fade-up 1s ease 5.6s forwards";
    this.letterS3.style.animation = "letter-fade-up 1s ease 5.8s forwards";
    this.letterT.style.animation  = "letter-fade-up 1s ease 6s forwards";
    this.letterU.style.animation  = "letter-fade-up 1s ease 6.2s forwards";
    this.letterD.style.animation  = "letter-fade-up 1s ease 6.4s forwards";
    this.letterI2.style.animation = "letter-fade-up 1s ease 6.6s forwards";
    this.letterO2.style.animation  = "letter-fade-up 1s ease 6.8s forwards";
    this.letterS4.style.animation = "letter-fade-up 1s ease 7s forwards";

  }

}
