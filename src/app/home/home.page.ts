import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { MenuController } from '@ionic/angular';
import { ToastController, LoadingController } from '@ionic/angular';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewChecked {
  
  // Child Elements of Component
  @ViewChild('ionContent') ionContent: ElementRef;

  @ViewChild('aboutNavLink') aboutNavLink: ElementRef;
  @ViewChild('projectsNavLink') projectsNavLink: ElementRef;
  @ViewChild('teamNavLink') teamNavLink: ElementRef;
  @ViewChild('contributeNavLink') contributeNavLink: ElementRef;
  @ViewChild('BOSSCoinNavLink') BOSSCoinNavLink: ElementRef;
  @ViewChild('contactNavLink') contactNavLink: ElementRef;

  @ViewChild('teamBackground') teamBackground: ElementRef;
  @ViewChild('contributeSection') contributeSection: ElementRef;

  // Animation
  scrollPositionPrecentage = 0;
  aboutAnimTrigger: number;
  projectsAnimTrigger: number;
  teamAnimTrigger: number;
  contributeAnimTrigger: number;
  bosscoinAnimTrigger: number;
  contactAnimTrigger: number;
  bottomOfPageAnimTrigger: number;

  // Forms
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private menu: MenuController,
    public loadingController: LoadingController,
    public toastController: ToastController,
  ) {
    this.initializeContactForm()
  }
  ngAfterViewChecked(): void {
    this.getScrollDetails()
  }

  ngOnInit() {
  }

  getYPosition(e: Event) {
    let scrollPosition = e['detail'].scrollTop;
    this.scrollPositionPrecentage = scrollPosition / (this.bottomOfPageAnimTrigger);
    // console.log(scrollPosition)
    // console.log(this.scrollPositionPrecentage)
    let buttonClass = " md button button-clear in-toolbar ion-activatable ion-focusable hydrated"
    this.trackNavbarLinkColors(scrollPosition, buttonClass);
    this.teamMemberAnimations(scrollPosition);
    this.tierAnimations(scrollPosition);
  }

  getScrollDetails() {
    console.log(this.ionContent);
    
    this.aboutAnimTrigger = this.ionContent['el'].children[1].offsetTop - 300;
    this.projectsAnimTrigger = this.ionContent['el'].children[3].offsetTop - 300;
    this.teamAnimTrigger = this.ionContent['el'].children[6].offsetTop - 300;
    this.contributeAnimTrigger = this.ionContent['el'].children[8].offsetTop - 300;
    this.bosscoinAnimTrigger = this.ionContent['el'].children[10].offsetTop - 300;
    this.contactAnimTrigger = this.ionContent['el'].children[11].offsetTop - 300;
    this.bottomOfPageAnimTrigger = this.ionContent['el'].children[12].offsetTop;
  }
  
  // Change colors of navbar links depeding on
  // scroll position of the page.
  trackNavbarLinkColors(scrollPosition: number, buttonClass: string) {
    
    // Side Menu Buttons
    let aboutSideMenuButton = document.getElementById("about-side-menu");
    let projectsSideMenuButton = document.getElementById("projects-side-menu");
    let teamSideMenuButton = document.getElementById("team-side-menu");
    let contributeSideMenuButton = document.getElementById("contribute-side-menu");
    let bossCoinSideMenuButton = document.getElementById("boss-coin-side-menu");
    let contactSideMenuButton = document.getElementById("contact-side-menu");
    

    // About
    if(scrollPosition < this.aboutAnimTrigger ) {
      this.aboutNavLink['el'].className = `inactive-link + ${buttonClass}`
    }

    if( scrollPosition > this.aboutAnimTrigger 
      && scrollPosition < this.projectsAnimTrigger) {
      console.log("About Section !");
      
      // Active Link
      this.aboutNavLink['el'].className = `active-link + ${buttonClass}`
      
      // Side Menu Active Link
      aboutSideMenuButton.style.color = 'red';

      // Inactive Links
      this.projectsNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.teamNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contributeNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.BOSSCoinNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contactNavLink['el'].className = `inactive-link + ${buttonClass}`

      // Inactive Side Menu Buttons
      projectsSideMenuButton.style.color = '#999';
      teamSideMenuButton.style.color = '#999';
      contributeSideMenuButton.style.color = '#999';
      bossCoinSideMenuButton.style.color = '#999';
      contactSideMenuButton.style.color = '#999';
      
    }

    // Projects
    if( scrollPosition > this.projectsAnimTrigger
      && scrollPosition < this.teamAnimTrigger) {
      console.log("Projects Section !");

      // Active Links
      this.projectsNavLink['el'].className = `active-link + ${buttonClass}`;
            
      // Side Menu Active Link
      projectsSideMenuButton.style.color = 'red';

      // Inactive Links
      this.aboutNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.teamNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contributeNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.BOSSCoinNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contactNavLink['el'].className = `inactive-link + ${buttonClass}`

      // Inactive Side Menu Buttons
      aboutSideMenuButton.style.color = '#999';
      teamSideMenuButton.style.color = '#999';
      contributeSideMenuButton.style.color = '#999';
      bossCoinSideMenuButton.style.color = '#999';
      contactSideMenuButton.style.color = '#999';

    }

    // Team
    if( scrollPosition > this.teamAnimTrigger
      && scrollPosition < this.contributeAnimTrigger) {
      console.log("Team Section !");

      // Active Link
      this.teamNavLink['el'].className = `active-link + ${buttonClass}`;
            
      // Side Menu Active Link
      teamSideMenuButton.style.color = 'red';

      // Inactive Links
      this.aboutNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.projectsNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contributeNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.BOSSCoinNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contactNavLink['el'].className = `inactive-link + ${buttonClass}`
      
      // Inactive Side Menu Buttons
      aboutSideMenuButton.style.color = '#999';
      projectsSideMenuButton.style.color = '#999';
      contributeSideMenuButton.style.color = '#999';
      bossCoinSideMenuButton.style.color = '#999';
      contactSideMenuButton.style.color = '#999';
    }

    // Contribute 
    if( scrollPosition > this.contributeAnimTrigger
      && scrollPosition < this.bosscoinAnimTrigger) {
      console.log("Contribute Section !");

      // Active Link
      this.contributeNavLink['el'].className = `active-link + ${buttonClass}`;
            
      // Side Menu Active Link
      contributeSideMenuButton.style.color = 'red';
      
      // Inactive Links
      this.aboutNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.teamNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.projectsNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.BOSSCoinNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contactNavLink['el'].className = `inactive-link + ${buttonClass}` 

      // Inactive Side Menu Buttons
      aboutSideMenuButton.style.color = '#999';
      teamSideMenuButton.style.color = '#999';
      projectsSideMenuButton.style.color = '#999';
      bossCoinSideMenuButton.style.color = '#999';
      contactSideMenuButton.style.color = '#999';
    }

    // Contact
    if( scrollPosition > this.bosscoinAnimTrigger
      && scrollPosition < this.contactAnimTrigger) {
      console.log("BossCoin Section !");

      // Active Link
      this.BOSSCoinNavLink['el'].className = `active-link + ${buttonClass}`;
            
      // Side Menu Active Link
      bossCoinSideMenuButton.style.color = 'red';
            
      // Inactive Links
      this.aboutNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.teamNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contributeNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.projectsNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contactNavLink['el'].className = `inactive-link + ${buttonClass}`
    
      // Inactive Side Menu Buttons
      aboutSideMenuButton.style.color = '#999';
      teamSideMenuButton.style.color = '#999';
      contributeSideMenuButton.style.color = '#999';
      projectsSideMenuButton.style.color = '#999';
      contactSideMenuButton.style.color = '#999';
    }
    
    if( scrollPosition > this.contactAnimTrigger) {
      console.log("Contact Section !");

      // Active Link
      this.contactNavLink['el'].className = `active-link + ${buttonClass}`;
            
      // Side Menu Active Link
      contactSideMenuButton.style.color = 'red';

      // Inactive Links
      this.aboutNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.teamNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.contributeNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.BOSSCoinNavLink['el'].className = `inactive-link + ${buttonClass}`
      this.projectsNavLink['el'].className = `inactive-link + ${buttonClass}`

      // Inactive Side Menu Buttons
      aboutSideMenuButton.style.color = '#999';
      teamSideMenuButton.style.color = '#999';
      contributeSideMenuButton.style.color = '#999';
      bossCoinSideMenuButton.style.color = '#999';
      projectsSideMenuButton.style.color = '#999';
    }
  }

  // Change background of landing page when scroll
  // position is at specific team members
  teamMemberAnimations(scrollPosition: number) {

    // If user has not scrolled to Team Section
    if( scrollPosition < this.teamAnimTrigger) {
      this.teamBackground.nativeElement.className = "team-background-none"
    }

    // If user has scrolled passed Team Section
    if( scrollPosition > this.contributeAnimTrigger) {
      this.teamBackground.nativeElement.className = "team-background-none"
    }

    // While user is scrolling in Team Section
    if( scrollPosition > this.teamAnimTrigger
      && scrollPosition < this.contributeAnimTrigger) {

      // console.log("Team Section !");
      // console.log(this.teamAnimTrigger);
      
      // Height of entire Team Section.
      // Used to calculate animation triggers.
      let teamSectionHeight = this.teamBackground.nativeElement.offsetHeight;

      // Needs to be updated every time a new member is added.
      let teamMemberCount = 5;

      // Team Card Animations
      let teamSectionAnimationTriggerBlock = (teamSectionHeight / teamMemberCount) * 0.5;
      let eddieCard = document.getElementById('eddie-card');
      let keithCard = document.getElementById('keith-card');
      let meekCard = document.getElementById('meek-card');
      let richardCard = document.getElementById('richard-card');
      let aaronCard = document.getElementById('aaron-card');
      
      // Eddie
      if (scrollPosition > (this.teamAnimTrigger + teamSectionAnimationTriggerBlock)) {
        eddieCard.style.animation = 'card-in 0.5s ease-in forwards';
      }
      // Keith
      if (scrollPosition > (this.teamAnimTrigger + (teamSectionAnimationTriggerBlock * 2))) {
        keithCard.style.animation = 'card-in 0.5s ease-in forwards';
      }
      // Meek
      if (scrollPosition > (this.teamAnimTrigger + (teamSectionAnimationTriggerBlock * 4))) {
        meekCard.style.animation = 'card-in 0.5s ease-in forwards';
      }
      // Richard
      if (scrollPosition > (this.teamAnimTrigger + (teamSectionAnimationTriggerBlock * 6))) {
        richardCard.style.animation = 'card-in 0.5s ease-in forwards';
      }
      // Aaron
      if (scrollPosition > (this.teamAnimTrigger + (teamSectionAnimationTriggerBlock * 8))) {
        aaronCard.style.animation = 'card-in 0.5s ease-in forwards';
      }

      // Change TEAM Section background color
      let teamSectionThird = teamSectionHeight / 3
      this.teamBackground.nativeElement.className = "team-background-green"
      
      if(scrollPosition > (this.teamAnimTrigger + teamSectionThird)) {
        this.teamBackground.nativeElement.className = "team-background-purple"
      }

      if(scrollPosition > (this.teamAnimTrigger + teamSectionThird  + teamSectionThird)) {
        this.teamBackground.nativeElement.className = "team-background-red"
      }
      

    }
  }

  tierAnimations(scrollPosition: number) {

    let contributionSectionHeight = this.contributeSection.nativeElement.offsetHeight;
    let contributionSectionAnimationTriggerBlock = (contributionSectionHeight / 3);
    let tierOneTrigger = document.getElementById('tier-1');
    let tierTwoTrigger = document.getElementById('tier-2');
    let tierThreeTrigger = document.getElementById('tier-3');

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
  }


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

  openSideMenu() {
    console.log('Attempting to open side menu');
    this.menu.enable(true, 'side-menu');
    this.menu.open('side-menu');
  }
  goToAbout() {
    let aboutSection = document.getElementById('about');
    console.log('Scrolling to About Section')
    aboutSection.scrollIntoView({behavior: "smooth"})
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
  goToBossCoin() {
    let teamSection = document.getElementById('boss-coin');
    console.log('Scrolling to BOSSCoin Section')
    teamSection.scrollIntoView({behavior: "smooth"})
  }
  goToContribute() {
    let teamSection = document.getElementById('contribute');
    console.log('Scrolling to Contribute Section')
    teamSection.scrollIntoView({behavior: "smooth"})
  }
  goToContributeWebPage() {
    

  }

  viewDemo(demo: HTMLDivElement) {
    console.log(demo);
    demo.style.animation = "overlay-fade-out 2s ease forwards";
  }

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
          this.contactSuccessToast("Message Sent", "You message has been sent to Final Boss Studios. You will be contacted as soon as possible.")
        }
      })

    });
  }

  async contactSuccessToast(header: string, message: string) {
    const toast = await this.toastController.create({
      header,
      message,
      duration: 2000,
      cssClass: 'contact-success'
    });
    toast.present();
  }

  async contactFailToast(header: string, message: string) {
    const toast = await this.toastController.create({
      header,
      message,
      duration: 2000,
      cssClass: 'contact-fail'
    });
    toast.present();
  }
}
