import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { MenuController } from '@ionic/angular';
import { ToastController, LoadingController } from '@ionic/angular';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private menu: MenuController,
    private router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public profileService: ProfileService,
    public web3: Web3Service
  ) {
    this.initializeContactForm()
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.getScrollDetails();
    }, 2000);
    this.initializeSlantReverse();
    this.initializeSlantBossCoin();
    this.getTotalSupplyBOSSC();
  }

  ngOnInit() {
  }

  @ViewChild('videoPlayerLg') videoPlayerLg: HTMLVideoElement;
  @ViewChild('videoPlayerSm') videoPlayerSm: HTMLVideoElement;
  @ViewChild('bgOverlay') bgOverlay: any;
  
  async ionViewWillEnter() {
    const videoLg = await this.videoPlayerLg;
    const videoSm = await this.videoPlayerSm
    // await videoLg.muted;
    // await videoLg.play
    // await videoSm.muted;
    // await videoSm.play;
}

  // BOSSC
  totalSupply: number;
  totalCoinsMinted = 120000000;
  totalCoinsInCirculation: number;
  totalSupplyFormatted: string;
  totalCoinsInCirculationFormatted: string;

  getTotalSupplyBOSSC() {
    this.web3.bosscTotalSupply()
      .subscribe(
        a => {
          let format = Intl.NumberFormat('en-us');
          this.totalSupply = parseInt(a['supply'].hex);
          this.totalCoinsInCirculation = this.totalCoinsMinted - this.totalSupply;
          this.totalSupplyFormatted = format.format(this.totalSupply);
          this.totalCoinsInCirculationFormatted = format.format(this.totalCoinsInCirculation);
          console.log(this.totalSupplyFormatted);
          console.log(this.totalCoinsInCirculationFormatted);
          return;
        }
      )
  }

  redAboutObjectOneReverse;
  redAboutObjectBossCoin;

  initializeSlantReverse() {
    this.redAboutObjectOneReverse = document.getElementById('Red-About-Object-One-Reverse');
    this.redAboutObjectOneReverse.style.animation = "about-object-slide-reverse 4s linear infinite";
  }
  initializeSlantBossCoin() {
    this.redAboutObjectBossCoin = document.getElementById('Red-About-Object-BossCoin');
    this.redAboutObjectBossCoin.style.animation = "about-object-slide 4s linear infinite";
  }

  scrollPositionPrecentage = 0;
  showFLogoAnim = false;
  aboutAnimTrigger: number;
  somethingCoolAnimTrigger: number;
  projectsAnimTrigger: number;
  teamAnimTrigger: number;
  contributeAnimTrigger: number;
  contactAnimTrigger: number;
  bottomOfPageAnimTrigger: number;

  scrollToTop() {
    document.getElementById('navbar-wrapper').scrollIntoView({behavior: "smooth"});
  }
  // Animations
  getYPosition(e: Event) {
    let scrollPosition = e['detail'].scrollTop; 
    console.log(scrollPosition);
    this.scrollPositionPrecentage = scrollPosition / (this.bottomOfPageAnimTrigger * 0.95);
    // console.log(this.bottomOfPageAnimTrigger);
    let buttonClass = " md button button-clear in-toolbar ion-activatable ion-focusable hydrated"
    
    this.pageAnimations(scrollPosition, buttonClass);
  }
  // Sets all the animation triggers for the Desktop Navbar
  getScrollDetails() {
    console.log(this.ionContent['el'].children);
    this.aboutAnimTrigger = this.ionContent['el'].children[1].offsetTop;
    this.projectsAnimTrigger = this.ionContent['el'].children[4].offsetTop;
    this.teamAnimTrigger = this.ionContent['el'].children[9].offsetTop;
    this.contributeAnimTrigger = this.ionContent['el'].children[12].offsetTop;
    this.contactAnimTrigger = this.ionContent['el'].children[16].offsetTop;
    this.bottomOfPageAnimTrigger = this.ionContent['el'].children[18].offsetTop;    
  }

  // detroitSkylineAnim(scrollPosition: number) {
  //   let detroitSkylineSVG = document.getElementById('detroit-skyline-svg');
  //   let greenMoon = document.getElementById('Green-Moon');
  //   // console.log(greenMoon);
    

  //   if(scrollPosition > (this.aboutAnimTrigger)) {
  //     detroitSkylineSVG.style.animation = 'detroit-skyline-fade-up 1s ease forwards';
  //     greenMoon.style.animation = "green-moon 60s ease infinite";
  //   }
  //   if(scrollPosition < (this.aboutAnimTrigger)) {
  //     detroitSkylineSVG.style.animation = 'detroit-skyline-fade-down 1s ease forwards';
  //     greenMoon.style.animation = "none";

  //   }
  // }
  
  // Change colors of navbar links depeding on
  // scroll position of the page.
  // Child Elements of Component
  @ViewChild('ionContent') ionContent: ElementRef;
  @ViewChild('aboutNavLink') aboutNavLink: ElementRef;
  @ViewChild('ARNavLink') ARNavLink: ElementRef;
  @ViewChild('projectsNavLink') projectsNavLink: ElementRef;
  @ViewChild('teamNavLink') teamNavLink: ElementRef;
  @ViewChild('contributeNavLink') contributeNavLink: ElementRef;
  @ViewChild('contactNavLink') contactNavLink: ElementRef;
  @ViewChild('loginNavLink') loginNavLink: ElementRef;
  @ViewChild('teamBackground') teamBackground: ElementRef;
  @ViewChild('contributeSection') contributeSection: ElementRef;

  pageAnimations(scrollPosition: number, buttonClass: string) {
    
    // Side Menu Buttons
    let aboutSideMenuButton = document.getElementById("about-side-menu");
    let projectsSideMenuButton = document.getElementById("projects-side-menu");
    let teamSideMenuButton = document.getElementById("team-side-menu");
    let contributeSideMenuButton = document.getElementById("contribute-side-menu");
    let contactSideMenuButton = document.getElementById("contact-side-menu");
    
    // VideoLg
    if(scrollPosition > 900) {
      this.videoPlayerLg.style.visibility = "hidden";
      this.bgOverlay.style.opacity = 0;
    } 

    if(scrollPosition < 900) {
      this.videoPlayerLg.style.visibility = "visible";
      this.bgOverlay.style.opacity = 1;
    }

    // About
    if(scrollPosition < this.aboutAnimTrigger ) {
      this.aboutNavLink['el'].className = `inactive-link + ${buttonClass}`;
    }

    // Show F Logo Animation in About Section
    if(scrollPosition > this.aboutAnimTrigger * 0.3) {
      this.showFLogoAnim = true;
      console.log("Showing F Logo Anim");
    }
    if( scrollPosition > this.aboutAnimTrigger * 0.9 
      && scrollPosition < this.projectsAnimTrigger * 0.9) {
      console.log("About Section !");
      // this.detroitSkylineAnim(scrollPosition);
      
      // Active Link
      this.aboutNavLink['el'].className = `active-link + ${buttonClass}`
      
      // Side Menu Active Link
      aboutSideMenuButton.style.color = '#999';

      // Inactive Links
      this.projectsNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.teamNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contributeNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contactNavLink['el'].className = `inactive-link + ${buttonClass}`

      // Inactive Side Menu Buttons
      projectsSideMenuButton.style.color = '#999';
      teamSideMenuButton.style.color = '#999';
      contributeSideMenuButton.style.color = '#999';
      contactSideMenuButton.style.color = '#999';
      
    }

    // Projects
    if( scrollPosition > this.projectsAnimTrigger * 0.9) {
      this.projectsNavLink['el'].className = `inactive-link + ${buttonClass}`
    }
    if( scrollPosition > this.projectsAnimTrigger * 0.9 
      && scrollPosition < this.teamAnimTrigger * 0.9) {
      console.log("Projects Section !");

      // Active Links
      this.projectsNavLink['el'].className = `active-link + ${buttonClass}`;
            
      // Side Menu Active Link
      projectsSideMenuButton.style.color = 'red';

      // Inactive Links
      this.aboutNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.teamNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contributeNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contactNavLink['el'].className = `inactive-link + ${buttonClass}`

      // Inactive Side Menu Buttons
      aboutSideMenuButton.style.color = '#999';
      teamSideMenuButton.style.color = '#999';
      contributeSideMenuButton.style.color = '#999';
      contactSideMenuButton.style.color = '#999';

    }

    // Team
    if(scrollPosition > this.teamAnimTrigger * 0.9 ) {
      this.teamNavLink['el'].className = `inactive-link + ${buttonClass}`
    }
    if( scrollPosition > this.teamAnimTrigger * 0.9
      && scrollPosition < this.contributeAnimTrigger * 0.9) {
      console.log("Team Section !");

      // Active Link
      this.teamNavLink['el'].className = `active-link + ${buttonClass}`;
            
      // Side Menu Active Link
      teamSideMenuButton.style.color = 'red';

      // Inactive Links
      this.aboutNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.projectsNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contributeNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contactNavLink['el'].className = `inactive-link + ${buttonClass}`
      
      // Inactive Side Menu Buttons
      aboutSideMenuButton.style.color = '#999';
      projectsSideMenuButton.style.color = '#999';
      contributeSideMenuButton.style.color = '#999';
      contactSideMenuButton.style.color = '#999';
    }

    // Contribute 
    if( scrollPosition > this.contributeAnimTrigger * 0.9) {
      this.contributeNavLink['el'].className = `inactive-link + ${buttonClass}`
    }
    if( scrollPosition > this.contributeAnimTrigger * 0.9 
      && scrollPosition < this.contactAnimTrigger * 0.9) {
      this.tierAnimations(scrollPosition);
      console.log("Contribute Section !");

      // Active Link
      this.contributeNavLink['el'].className = `active-link + ${buttonClass}`;
            
      // Side Menu Active Link
      contributeSideMenuButton.style.color = 'red';
      
      // Inactive Links
      this.aboutNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.teamNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.projectsNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contactNavLink['el'].className = `inactive-link + ${buttonClass}` 

      // Inactive Side Menu Buttons
      aboutSideMenuButton.style.color = '#999';
      teamSideMenuButton.style.color = '#999';
      projectsSideMenuButton.style.color = '#999';
      contactSideMenuButton.style.color = '#999';
    }
    // Contact
    if( scrollPosition > this.contactAnimTrigger * 0.9) {
      console.log(this.contactAnimTrigger);
      this.contactNavLink['el'].className = `inactive-link + ${buttonClass}`
    }
    if( scrollPosition > this.contactAnimTrigger * 0.9
      && scrollPosition < this.bottomOfPageAnimTrigger) {
      console.log("Contact Section !");
      console.log(this.contactAnimTrigger);

      // Active Link
      this.contactNavLink['el'].className = `active-link + ${buttonClass}`;
            
      // Side Menu Active Link
      contributeSideMenuButton.style.color = 'red';
            
      // Inactive Links
      this.aboutNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.teamNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contributeNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.projectsNavLink['el'].className = `inactive-link + ${buttonClass}`
    
      // Inactive Side Menu Buttons
      aboutSideMenuButton.style.color = '#999';
      teamSideMenuButton.style.color = '#999';
      contributeSideMenuButton.style.color = '#999';
      projectsSideMenuButton.style.color = '#999';
    }
  }

  tierAnimations(scrollPosition: number) {
    console.log('Tier Animations');
    let contributionSectionHeight = this.contributeSection.nativeElement.offsetHeight;
    let contributionSectionAnimationTriggerBlock = (contributionSectionHeight / 3);
    let tierOneTrigger = document.getElementById('tier-1');
    let tierTwoTrigger = document.getElementById('tier-2');
    let tierThreeTrigger = document.getElementById('tier-3');
    let tierOneTriggerLg = document.getElementById('tier-1-lg');
    let tierTwoTriggerLg = document.getElementById('tier-2-lg');
    let tierThreeTriggerLg = document.getElementById('tier-3-lg');

    // console.log(contributionSectionHeight);
    

    // If user has not scrolled to Contribution Section
    if( scrollPosition > (this.contributeAnimTrigger + (contributionSectionAnimationTriggerBlock * 0.1))) {
      tierOneTrigger.style.animation = 'tier-in 1s ease forwards';
    }
    if( scrollPosition > (this.contributeAnimTrigger + (contributionSectionAnimationTriggerBlock * 0.3))) {
      tierTwoTrigger.style.animation = 'tier-in 1s ease forwards';
    }
    if( scrollPosition > (this.contributeAnimTrigger + (contributionSectionAnimationTriggerBlock * 0.5))) {
      tierThreeTrigger.style.animation = 'tier-in 1s ease forwards';
    }

    if( scrollPosition > this.contributeAnimTrigger) {
      tierOneTriggerLg.style.animation = "tier-slide-up 1s ease forwards";
      tierTwoTriggerLg.style.animation = "tier-slide-up 1s ease forwards";
      tierThreeTriggerLg.style.animation = "tier-slide-up 1s ease forwards";
    }
  }
  // Contact Form
  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    // password: [
    //   // tslint:disable-next-line: max-line-length
    //   { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    // ]
  };

  // Forms
  contactForm: FormGroup;

  initializeContactForm() {
    this.contactForm = this.formBuilder.group({
      name: ['',],
      email: ['', [Validators.required, Validators.email]],
      message: ['',]
    })
  }

  submitContactMessage(form) {
    console.log(form);
    this.messageLoading(form)
  }

  // Navbar & Sidemenu (Mobile)
  openSideMenu() {
    console.log('Attempting to open side menu');
    this.menu.enable(true, 'side-menu');
    this.menu.open('side-menu');
  }
  goToLogin() {
    console.log('Opening to Login Page');
    this.menu.close('side-menu');
    this.router.navigateByUrl('login');
  }
  goToEtherScan() {
    window.open('https://goerli.etherscan.io/token/0x1894d683905276CE908511a22c134b9253Dd6A9c', '_blank');
  }
  goToJobApp() {
    console.log('Opening Job-App Page');
    this.menu.close('side-menu');
    this.router.navigateByUrl('job-app');
  }
  goToRegister() {
    console.log('Opening to Login Page');
    this.menu.close('side-menu');
    this.router.navigateByUrl('register');
  }
  goToProfile() {
    console.log('Opening to Profile Page');
    this.menu.close('side-menu');
    this.router.navigateByUrl('profile');
  }
  goToAbout() {
    let aboutSection = document.getElementById('about');
    console.log('Scrolling to About Section')
    aboutSection.scrollIntoView({behavior: "smooth"})
  }
  goToAR() {
    let ARSection = document.getElementById('AR');
    console.log('Scrolling to AR Section')
    ARSection.scrollIntoView({behavior: "smooth"})
  }
  goToProjects() {
    let aboutSection = document.getElementById('projects');
    console.log('Scrolling to Projects Section')
    aboutSection.scrollIntoView({behavior: "smooth"})
  }
  goToTeam() {
    let teamSection = document.getElementById('team');
    console.log('Scrolling to Team Section')
    teamSection.scrollIntoView({behavior: "smooth"})
  }
  goToContact() {
    let contactSection = document.getElementById('contact');
    console.log('Scrolling to Contact Section')
    contactSection.scrollIntoView({behavior: "smooth"})
  }
  goToContribute() {
    let teamSection = document.getElementById('contribute-anim-trigger');
    console.log('Scrolling to Contribute Section')
    teamSection.scrollIntoView({behavior: "smooth"})
  }
  goToContributeWebPage() {
    

  }

  // Loading Messages
  async messageLoading(form) {
    const loading = await this.loadingController.create({
      message: 'Sending Message ...',
      duration: 2000,
    });

    loading.present().then( () => {
      this.contactService.sendContactMessage(form.name, form.email, form.message)
      .pipe(
        tap(res => {
          if (!res) {
            console.log('There was no response.');
          }
        }),
        catchError(e => {
          console.error(e);
          if (e) {
              this.contactFailToast('Error', 'Sorry, our servers are down. Please try again later.');
          }
          throw new Error(e);
        })
      )  
      .subscribe( (res) => {
        if(res) {
          console.log(res);
          this.contactForm.reset();
          this.contactSuccessToast("Message Sent", "You message has been sent to Final Boss Studios. You will be contacted as soon as possible.")
        }
      })

    });
  }

  // Toasts
  async contactSuccessToast(header: string, message: string) {
    const toast = await this.toastController.create({
      header,
      message,
      duration: 5000,
      cssClass: 'contact-success'
    });
    toast.present();
  }

  async contactFailToast(header: string, message: string) {
    const toast = await this.toastController.create({
      header,
      message,
      duration: 5000,
      cssClass: 'contact-fail'
    });
    toast.present();
  }
}
