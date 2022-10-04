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
  redAboutObjectOne;
  redAboutObjectTwo;
  redAboutObjectThree;
  greenAboutObject;
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
    this.greenAboutObject = document.getElementById('Green-About-Object');
    this.redAboutObjectOne = document.getElementById('Red-About-Object-One');
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
      this.animateFBody();
    }, 500);
    setTimeout(() => {
      this.animateRedBars();
    }, 550);
    setTimeout(() => {
      this.animateGreenBar();
    }, 600);
    setTimeout(() => {
      this.animateGreenStripeOne();
    }, 700);
    setTimeout(() => {
      this.animateGreenStripeTwo();
    }, 800);
    setTimeout(() => {
      this.animatePurpleStripeOne();
    }, 700);
    setTimeout(() => {
      this.animatePurpleStripeTwo();
    }, 800);
    setTimeout(() => {
      this.lettersAnim();
    }, 900);
    setTimeout(() => {
      this.aboutAboutsAnim();
    }, 1000);
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
  aboutAboutsAnim() {
    this.redAboutObjectOne.style.animation = "about-object-slide 4s linear 7s infinite";

  }

}
