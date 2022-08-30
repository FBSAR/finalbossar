import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(
    private menu: MenuController,
    private router: Router,
    ) {}

  openSideMenu() {
    console.log('Attempting to open side menu');
    
    this.menu.enable(true, 'side-menu');
    this.menu.open('side-menu');
  }
  closeSideMenu() {    
    this.menu.close('side-menu');
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
    this.menu.close('side-menu');
  }
  goToProjects() {
    let aboutSection = document.getElementById('projects');
    console.log('Scrolling to Projects Section')
    aboutSection.scrollIntoView({behavior: "smooth"})
    this.menu.close('side-menu');
  }

  goToTeam() {
    let teamSection = document.getElementById('team');
    console.log('Scrolling to Team Section')
    teamSection.scrollIntoView({behavior: "smooth"})
    this.menu.close('side-menu');

  }
  goToContact() {
    let contactSection = document.getElementById('contact');
    console.log('Scrolling to Contact Section')
    contactSection.scrollIntoView({behavior: "smooth"})
    this.menu.close('side-menu');

  }
  goToContribute() {
    let teamSection = document.getElementById('contribute');
    console.log('Scrolling to Contribute Section')
    teamSection.scrollIntoView({behavior: "smooth"})
    this.menu.close('side-menu');
    

  }
  goToBossCoin() {
    let teamSection = document.getElementById('boss-coin');
    console.log('Scrolling to BOSSCoin Section')
    teamSection.scrollIntoView({behavior: "smooth"})
    this.menu.close('side-menu');
    

  }

  
}
