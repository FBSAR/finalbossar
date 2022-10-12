import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { MenuController } from '@ionic/angular';
import { ToastController, LoadingController } from '@ionic/angular';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  
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

  // Animation
  scrollPositionPrecentage = 0;
  aboutAnimTrigger: number;
  ARAnimTrigger: number;
  projectsAnimTrigger: number;
  teamAnimTrigger: number;
  contributeAnimTrigger: number;
  contactAnimTrigger: number;
  bottomOfPageAnimTrigger: number;
  redAboutObjectOneReverse;
  redAboutObjectBossCoin;

  // Forms
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private menu: MenuController,
    private router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public profileService: ProfileService,
  ) {
    this.initializeContactForm()
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.getScrollDetails();
    }, 2000);
    this.initializeSlantReverse();
    this.initializeSlantBossCoin();
  }

  ngOnInit() {
  }

  initializeSlantReverse() {
    this.redAboutObjectOneReverse = document.getElementById('Red-About-Object-One-Reverse');
    this.redAboutObjectOneReverse.style.animation = "about-object-slide-reverse 4s linear infinite";
  }
  initializeSlantBossCoin() {
    this.redAboutObjectBossCoin = document.getElementById('Red-About-Object-BossCoin');
    this.redAboutObjectBossCoin.style.animation = "about-object-slide 4s linear infinite";
  }

  // Animations
  getYPosition(e: Event) {
    let scrollPosition = e['detail'].scrollTop;    
    this.scrollPositionPrecentage = scrollPosition / (this.contactAnimTrigger);
    // console.log(scrollPosition)
    // console.log(this.scrollPositionPrecentage)
    let buttonClass = " md button button-clear in-toolbar ion-activatable ion-focusable hydrated"
    // TODO: Only fire off functions when near section
    
    this.trackNavbarLinkColors(scrollPosition, buttonClass);
  }

  getScrollDetails() {
    console.log(this.ionContent['el'].children);
    
    this.aboutAnimTrigger = this.ionContent['el'].children[1].offsetTop;
    this.ARAnimTrigger = this.ionContent['el'].children[3].offsetTop;
    this.projectsAnimTrigger = this.ionContent['el'].children[5].offsetTop;
    this.teamAnimTrigger = this.ionContent['el'].children[8].offsetTop;
    this.contributeAnimTrigger = this.ionContent['el'].children[10].offsetTop;
    this.contactAnimTrigger = this.ionContent['el'].children[13].offsetTop;
    this.bottomOfPageAnimTrigger = this.ionContent['el'].children[16].offsetTop;

    console.log(this.aboutAnimTrigger);
    
  }

  detroitSkylineAnim(scrollPosition: number) {
    let detroitSkylineSVG = document.getElementById('detroit-skyline-svg');
    let greenMoon = document.getElementById('Green-Moon');
    // console.log(greenMoon);
    

    if(scrollPosition > (this.aboutAnimTrigger)) {
      detroitSkylineSVG.style.animation = 'detroit-skyline-fade-up 1s ease forwards';
      greenMoon.style.animation = "green-moon 60s ease infinite";
    }
    if(scrollPosition < (this.aboutAnimTrigger)) {
      detroitSkylineSVG.style.animation = 'detroit-skyline-fade-down 1s ease forwards';
      greenMoon.style.animation = "none";

    }
  }

  // Change colors of navbar links depeding on
  // scroll position of the page.
  trackNavbarLinkColors(scrollPosition: number, buttonClass: string) {
    
    // Side Menu Buttons
    let aboutSideMenuButton = document.getElementById("about-side-menu");
    let ARSideMenuButton = document.getElementById("AR-side-menu");
    let projectsSideMenuButton = document.getElementById("projects-side-menu");
    let teamSideMenuButton = document.getElementById("team-side-menu");
    let contributeSideMenuButton = document.getElementById("contribute-side-menu");
    let contactSideMenuButton = document.getElementById("contact-side-menu");
    

    // About
    if(scrollPosition < this.aboutAnimTrigger ) {
      this.aboutNavLink['el'].className = `inactive-link + ${buttonClass}`;
    }

    if( scrollPosition > this.aboutAnimTrigger 
      && scrollPosition < this.ARAnimTrigger) {
      console.log("About Section !");
      this.detroitSkylineAnim(scrollPosition);
      
      // Active Link
      this.aboutNavLink['el'].className = `active-link + ${buttonClass}`
      
      // Side Menu Active Link
      aboutSideMenuButton.style.color = 'red';

      // Inactive Links
      this.ARNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.projectsNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.teamNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contributeNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contactNavLink['el'].className = `inactive-link + ${buttonClass}`

      // Inactive Side Menu Buttons
      ARSideMenuButton.style.color = '#999';
      projectsSideMenuButton.style.color = '#999';
      teamSideMenuButton.style.color = '#999';
      contributeSideMenuButton.style.color = '#999';
      contactSideMenuButton.style.color = '#999';
      
    }

    // AR
    if(scrollPosition < this.ARAnimTrigger ) {
      this.ARNavLink['el'].className = `inactive-link + ${buttonClass}`
    }

    if( scrollPosition > this.ARAnimTrigger 
      && scrollPosition < this.projectsAnimTrigger) {
      console.log("AR Section !");
      
      // Active Link
      this.ARNavLink['el'].className = `active-link + ${buttonClass}`
      
      // Side Menu Active Link
      ARSideMenuButton.style.color = 'red';

      // Inactive Links
      this.aboutNavLink['el'].className = `inactive-link + ${buttonClass}`;
      this.projectsNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.teamNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contributeNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contactNavLink['el'].className = `inactive-link + ${buttonClass}`

      // Inactive Side Menu Buttons
      aboutSideMenuButton.style.color = '#999';
      projectsSideMenuButton.style.color = '#999';
      teamSideMenuButton.style.color = '#999';
      contributeSideMenuButton.style.color = '#999';
      contactSideMenuButton.style.color = '#999';
      
    }

    // Projects
    if( scrollPosition > this.projectsAnimTrigger) {
      this.projectsNavLink['el'].className = `inactive-link + ${buttonClass}`
    }
    if( scrollPosition > this.projectsAnimTrigger 
      && scrollPosition < this.teamAnimTrigger) {
      console.log("Projects Section !");

      // Active Links
      this.projectsNavLink['el'].className = `active-link + ${buttonClass}`;
            
      // Side Menu Active Link
      projectsSideMenuButton.style.color = 'red';

      // Inactive Links
      this.ARNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.aboutNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.teamNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contributeNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contactNavLink['el'].className = `inactive-link + ${buttonClass}`

      // Inactive Side Menu Buttons
      aboutSideMenuButton.style.color = '#999';
      ARSideMenuButton.style.color = '#999';
      teamSideMenuButton.style.color = '#999';
      contributeSideMenuButton.style.color = '#999';
      contactSideMenuButton.style.color = '#999';

    }

    // Team
    if(scrollPosition < this.teamAnimTrigger ) {
      this.teamNavLink['el'].className = `inactive-link + ${buttonClass}`
    }
    if( scrollPosition > this.teamAnimTrigger
      && scrollPosition < this.contributeAnimTrigger) {
      console.log("Team Section !");
      this.teamMemberAnimations(scrollPosition);

      // Active Link
      this.teamNavLink['el'].className = `active-link + ${buttonClass}`;
            
      // Side Menu Active Link
      teamSideMenuButton.style.color = 'red';

      // Inactive Links
      this.ARNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.aboutNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.projectsNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contributeNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contactNavLink['el'].className = `inactive-link + ${buttonClass}`
      
      // Inactive Side Menu Buttons
      aboutSideMenuButton.style.color = '#999';
      ARSideMenuButton.style.color = '#999';
      projectsSideMenuButton.style.color = '#999';
      contributeSideMenuButton.style.color = '#999';
      contactSideMenuButton.style.color = '#999';
    }

    // Contribute 
    if( scrollPosition > this.contributeAnimTrigger) {
      this.contributeNavLink['el'].className = `inactive-link + ${buttonClass}`
    }

    if( scrollPosition > this.contributeAnimTrigger 
      && scrollPosition < this.contactAnimTrigger) {
      this.tierAnimations(scrollPosition);
      console.log("Contribute Section !");

      // Active Link
      this.contributeNavLink['el'].className = `active-link + ${buttonClass}`;
            
      // Side Menu Active Link
      contributeSideMenuButton.style.color = 'red';
      
      // Inactive Links
      this.ARNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.aboutNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.teamNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.projectsNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contactNavLink['el'].className = `inactive-link + ${buttonClass}` 

      // Inactive Side Menu Buttons
      aboutSideMenuButton.style.color = '#999';
      ARSideMenuButton.style.color = '#999';
      teamSideMenuButton.style.color = '#999';
      projectsSideMenuButton.style.color = '#999';
      contactSideMenuButton.style.color = '#999';
    }

    // Contact
    if( scrollPosition < this.contactAnimTrigger) {
      this.contactAnimTrigger['el'].className = `inactive-link + ${buttonClass}`
    }
    if( scrollPosition > this.contactAnimTrigger) {
      console.log("Contact Section !");

      // Active Link
      this.contactNavLink['el'].className = `active-link + ${buttonClass}`;
            
      // Side Menu Active Link
      contributeSideMenuButton.style.color = 'red';
            
      // Inactive Links
      this.ARNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.aboutNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.teamNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contributeNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.projectsNavLink['el'].className = `inactive-link + ${buttonClass}`
    
      // Inactive Side Menu Buttons
      aboutSideMenuButton.style.color = '#999';
      ARSideMenuButton.style.color = '#999';
      teamSideMenuButton.style.color = '#999';
      contributeSideMenuButton.style.color = '#999';
      projectsSideMenuButton.style.color = '#999';
    }
  }

  // Change background of landing page when scroll
  // position is at specific team members
  teamMemberAnimations(scrollPosition: number) {

    // If user has not scrolled to Team Section
    if( scrollPosition < this.teamAnimTrigger) {
    }

    // If user has scrolled passed Team Section
    if( scrollPosition > this.contributeAnimTrigger) {
    }

    // While user is scrolling in Team Section
    if( scrollPosition > this.teamAnimTrigger
      && scrollPosition < this.contributeAnimTrigger) {

      console.log("Team Section !");
      // console.log(this.teamAnimTrigger);
      
      // Height of entire Team Section.
      // Used to calculate animation triggers.
      let teamSectionHeight = this.teamBackground.nativeElement.offsetHeight - 400;

      // Needs to be updated every time a new member is added.
      let teamMemberCount = 5;

      // Team Card Animations
      let teamSectionAnimationTriggerBlock = teamSectionHeight / teamMemberCount;
      let eddieCard = document.getElementById('eddie-card');
      let keithCard = document.getElementById('keith-card');
      let meekCard = document.getElementById('meek-card');
      let richardCard = document.getElementById('richard-card');
      let aaronCard = document.getElementById('aaron-card');
      
      // Eddie
      if (scrollPosition > (this.teamAnimTrigger + (teamSectionAnimationTriggerBlock * 0.1))) {
        eddieCard.style.animation = 'card-in 0.5s ease-in forwards';
      }
      // Keith
      if (scrollPosition > (this.teamAnimTrigger + (teamSectionAnimationTriggerBlock * 1))) {
        keithCard.style.animation = 'card-in 0.5s ease-in forwards';
      }
      // Meek
      if (scrollPosition > (this.teamAnimTrigger + (teamSectionAnimationTriggerBlock * 2))) {
        meekCard.style.animation = 'card-in 0.5s ease-in forwards';
      }
      // Richard
      if (scrollPosition > (this.teamAnimTrigger + (teamSectionAnimationTriggerBlock * 3))) {
        richardCard.style.animation = 'card-in 0.5s ease-in forwards';
      }
      // Aaron
      if (scrollPosition > (this.teamAnimTrigger + (teamSectionAnimationTriggerBlock * 4))) {
        aaronCard.style.animation = 'card-in 0.5s ease-in forwards';
      }
    }
  }

  viewDemo(demo: HTMLDivElement) {
    console.log(demo);
    demo.style.animation = "overlay-fade-out 2s ease forwards";
  }

  tierAnimations(scrollPosition: number) {

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
    if( scrollPosition > (this.contributeAnimTrigger + (contributionSectionAnimationTriggerBlock * 0.2))) {
      tierOneTrigger.style.animation = 'tier-in 1s ease forwards';
    }
    if( scrollPosition > (this.contributeAnimTrigger + (contributionSectionAnimationTriggerBlock * 0.8))) {
      tierTwoTrigger.style.animation = 'tier-in 1s ease forwards';
    }
    if( scrollPosition > (this.contributeAnimTrigger + (contributionSectionAnimationTriggerBlock * 1.4))) {
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

  initializeContactForm() {
    this.contactForm = this.formBuilder.group({
      name: ['',],
      email: ['',],
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
    let teamSection = document.getElementById('contribute-lg');
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
