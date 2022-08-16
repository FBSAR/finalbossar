import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { IonContent, MenuController } from '@ionic/angular';
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

  // Animation
  aboutAnimTrigger: number;
  projectsAnimTrigger: number;
  teamAnimTrigger: number;
  contributeAnimTrigger: number;
  bosscoinAnimTrigger: number;
  contactAnimTrigger: number;

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
    // console.log(scrollPosition);
    let buttonClass = " md button button-clear in-toolbar ion-activatable ion-focusable hydrated"
    this.trackNavbarLinkColors(scrollPosition, buttonClass);
  
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

  getScrollDetails() {
    this.aboutAnimTrigger = this.ionContent['el'].children[1].offsetTop - 300;
    this.projectsAnimTrigger = this.ionContent['el'].children[3].offsetTop - 300;
    this.teamAnimTrigger = this.ionContent['el'].children[6].offsetTop - 300;
    this.contributeAnimTrigger = this.ionContent['el'].children[8].offsetTop - 300;
    this.bosscoinAnimTrigger = this.ionContent['el'].children[10].offsetTop - 300;
    this.contactAnimTrigger = this.ionContent['el'].children[12].offsetTop - 300;
    
    // console.log(this.ionContent)
    // console.log("About Animation Trigger Offset Top: " + this.aboutAnimTrigger)
    // console.log("Projects Animation Trigger Offset Top: " + this.projectsAnimTrigger)
    // console.log("Team Animation Trigger Offset Top: " + this.teamAnimTrigger)
    // console.log("Contribute Animation Trigger Offset Top: " + this.contributeAnimTrigger)
    // console.log("Bosscoin Animation Trigger Offset Top: " + this.bosscoinAnimTrigger)
    // console.log("Contact Animation Trigger Offset Top: " + this.contactAnimTrigger)
  }

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
      .subscribe( res => {
        if(res) {
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
