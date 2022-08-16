import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(
    private menu: MenuController) {}

  openSideMenu() {
    console.log('Attempting to open side menu');
    
    this.menu.enable(true, 'side-menu');
    this.menu.open('side-menu');
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
