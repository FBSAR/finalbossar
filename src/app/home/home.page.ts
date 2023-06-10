import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { MenuController, ModalController } from '@ionic/angular';
import { ToastController, LoadingController } from '@ionic/angular';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { Web3Service } from '../services/web3.service';
import { ConceptModalComponent } from "../components/concept-modal/concept-modal.component";

interface paradoxCharConcept {
  name: string,
  photo: string,
  details: string,
}
interface teamMember {
  name: string,
  photo: string,
  position: string,
  favoriteGame: string,
  details: string,
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit { 

  teamMembers: teamMember[] = [
    {
      name: "Eddie Taliaferro II",
      photo: "../../assets/team-photos/fbs-eddie.png",
      details: "Eddie is an Educator & Software Engineer with the non-profit Journi, where he taught Web Development, Business Development, Design, and Video Game Development.  Also designed and built this website, the initial BOSSCOIN (BOSSC) Cryptocurrency, as well as the Final Boss Logo 🔥. Day to day, Eddie works as a Game Designer & Software Engineer with Final Boss. <br><br> The program <a target='_blank' href='https://www.youtube.com/watch?v=YpltgM5oBSw&t=1s'>“Unreal Basecamp”</a> that Eddie taught with Demonshea Glover & Edward Kim in 2022 with Journi was the catalyst for Final Boss Studios. The class dealt with introducing students to Augmented Reality (AR) Development by learning a video game engine known as Unreal Engine. <a href='https://www.youtube.com/watch?v=LToaHLlFqkY&t=2s'>Here is the graduation</a> for that class!",
      position: "CEO",favoriteGame: "Metal Gear Solid",
    },
    {
      name: "Keith Dunklin",
      photo: "../../assets/team-photos/fbs-keith.png",
      details: "Keith has worked as a software technician, supervising technicians, and collaborating with software developers on diverse projects for more than ten years. Prior to that, Keith studied Network Engineering & Administration at Southwest Florida College. <br><br>His interest in computer software has led to many wonderful opportunities. His self-taught approach and dedication have helped him gain the position as Chief Operations Officer at Final Boss Studios.",
      position: "COO",
      favoriteGame: "--",
    },
    {
      name: "Aaron Goodson",
      photo: "../../assets/team-photos/fbs-aaron.png",
      details: "Aaron passionate in many aspects of technology, whether it's programming, gaming, or just tinkering with computers. For me, it's always been exciting to learn about new technologies. My goal is to build my software development skills so that I can make great contributions to the world of technology.<br><br>Aaron has experience as a Backend Engineer & Instructor with the educational Non profit Journi, where we worked with Eddie on various classes and web development projects.",
      position: "Senior Software Dev",
      favoriteGame: "--",
    },
    {
      name: "Richard Davis III",
      photo: "../../assets/team-photos/fbs-richard.png",
      details: "",
      position: "Game Dev / Sound Engineer",
      favoriteGame: "--",
    },
    {
      name: "Jesus",
      photo: "../../assets/team-photos/fbs-jesus.jpg",
      details: "Jesus Esra studied Creative Writing at the University of Guadalajara, Mexico. He has participated in short story anthologies, literary contests, and online magazines in his country. Currently, he works as a creative consultant on projects of all kinds, helping with character creation, plot development, and dialogues. His passion for stories and video games has led him to work with Final Boss Studios. <br><br> His creative goal is to help create a gaming experience that blends gameplay with the narrative aspects of the project. Professionally, his goal is to create stories that resonate with the audience, create immersive worlds and believable plots",
      position: "Creative Associate",
      favoriteGame: "--",
    },
    {
      name: "Tim Bates",
      photo: "../../assets/team-photos/fbs-tim.jpeg",
      details: "Tim is a seasoned IT Professional with an inspiring, innovative thinking reputation. He is the Chief Technical Officer of Lenovo, a Fortune 500 company, and one of the top technology companies in the world. Tim brings a wealth of knowledge and success stories across security solutions, application development, virtual adoption, and infrastructure consulting. Tim is future-focused, leveraging next-gen technologies to exceed client expectations while maximizing productivity to deliver economic value to his partners.br><br> His previous experience with General Motors, Deloitte & Touché LLP, Price Waterhouse Coopers, Dow Chemical, the US Marshal’s Office, and the US Marine Corp enable Tim to draw upon 30 years of experience to solve the complex challenges facing large organizations today.",
      position: "Business Advisor",
      favoriteGame: "",
    },
    {
      name: "Edward Kim",
      photo: "../../assets/team-photos/fbs-kim.jpeg",
      details: "Experienced Executive with Entrepreneurial and Global Market Growth Experience.Proven, executive-level leadership experience across multiple sectors including Fortune 100 corporations, tech startups, venture capitals and research institutions.Excellent ability to foster solid working relationships with diverse constituencies including Board of Directors, cross-functional leadership teams, strategic partner organizations, universities and other key stakeholders",
      position: "Business Advisor",
      favoriteGame: "",
    },
    {
      name: "Terrell Thomas",
      photo: "../../assets/team-photos/fbs-terrell.jpeg",
      details: "Terrell is a highly accomplished legal counsel with a diverse background rooted in a passion for law and entrepreneurship. Having obtained his education at the prestigious University of Michigan and University of Detroit Mercy, he embarked on a successful career practicing law. Beyond his legal expertise, Terrell's enterprising spirit led him to establish and operate businesses in the fitness and energy sectors. <br><br>With a keen eye for emerging trends, Terrell also delves into the world of cryptocurrency, investing and actively engaging with the ever-evolving digital currency landscape. Through his multifaceted pursuits, Terrell combines his legal acumen, business acuity, and technological curiosity to provide comprehensive guidance and strategic counsel to his clients.",
      position: "Legal Council",
      favoriteGame: "",
    },
    {
      name: "Help Wanted  👋",
      photo: "../../assets/team-photos/fbs-help-wanted.png",
      details: "We are looking for an Unreal/Unity Dev with at least 2 years of experience.",
      position: "Game Dev",
      favoriteGame: "",
    },
  ];
  paradoxCharConcepts: paradoxCharConcept[] = [
    {
      name: "The AI known as Y",
      photo: "../../assets/concepts/y-concept.jpg",
      details: "<b>Y</b> is an humanoid AI created by the legendary Engineer Eli Nakamura. <b>Y</b> was designed to be proficient with the Physical sciences of Chemistry, Geology, Physics, Astronomy, and Mathematics. Due to his ancestor (Eli) and the data <b>Y</b> was trained with, he evolves with a high desire to establish order, order he hasn’t observed during the ongoing crisis around the world that humans have caused.<br><br>After <b>X</b>, <b>Y's</b> technological, yet non-identical twin, was attacked in the conflict of 2035, <b>Y</b>, believing that <b>X</b> was destroyed, goes into a mode of his programming that exceeds the expectations of Dr. Eli. <br><br><b>Y</b> not only wages a war against seemingly the entire globe, but also designs and engineers a time traveling system called “The Order” that allows for travelers to travel and interact with different moments in time without destroying the overall timeline. This does not, however, eliminate the possibility of a paradox."
    },
    {
      name: "The AI known as X",
      photo: "../../assets/concepts/x-concept.jpg",
      details: "X is a humanoid AI created by the legendary Engineer Eli Nakamura. X was designed to be proficient with the Biological and Social Sciences of Biology & Microbiology, Genetics, Human Sociology & Psychology.<br><br>In relation to her twin, Y, she is one of the only beings throughout time that can actually take down Y due to her own programming and knowledge of Y and her ancestor, Eli Nakamura.<br><br>After she is discovered by Scott in 2035, she is a catalyst for Iona’s group, The Liberators, to take down Y’s Order once and for all."
    },
    {
      name: "Eli Nakamura",
      photo: "../../assets/concepts/eli-concept.png",
      details: "The creator of the innovative humanoid AIs, codenamed <b> 'X' & 'Y'</b> which are based on the genetic patterns present in human beings. <b>X & Y</b> are also based off of his own neurological patterns and data, meaning <b>X & Y</b> function based off of his own memories and ideology. <br><br>He created both AIs in the early 2000s to combat Earth's worsening climate crisis, which has also spiraled into an economic, political, philoshopical, and nuclear crisis as a result.<br><br><b>X & Y </b>are his personal greatest achievements, regardless of how his work has reshaped time - and even himself."
    },
    {
      name: "Falcon",
      photo: "../../assets/concepts/falcon-concept.png",
      details: "Living in ancient Egypt around 2,500 BC, Falcon, known as Ra Ramses in Egypt, was living as a common peasant in Egypt before he met the mysterious woman Iona Eliziveta, who looked to be in bad shape before he offered to help. <br><br>Falcon and Iona’s collaboration leads to Falcon discovering time travel - the system that Y has created in the far, far distant future. <br><br>Iona also helps develop his signature wings, something that will be synonymous with the Legend of the Sun God, Ra, for thousands of years to come."
    },
    {
      name: "Iona Eliziveta",
      photo: "../../assets/concepts/iona-concept.png",
      details: "Iona is the leader of a rebel group called The Liberators, whose mission is to take down Y and end his regime of almost 1,500 years. Iona, nor her ancestors of the last 1,500 years, have ever seen a time where Y wasn’t in complete control, a time where he never executes “The Order” - a time traveling mechanism Y designs that allows for its users to travel and manipulate time without affecting the main timeline.<br><br>Iona is a mechanical engineer and combat artist, which enables her to escape from Y in 3,500, and travel all the way to Egypt in 2,500 - 6,000 years before her time, which may possibly be the biggest solo time leap committed by an individual in observable history."
    },
    {
      name: "Scott Roberts",
      photo: "../../assets/concepts/scott-concept.jpg",
      details: "Scott is a tech genius/nerd from the year 2035. After Y gains control of Earth, Scott is forced to live a nomadic lifestyle, living from city to city as the world goes deeper into chaos from the war on Y and his Order.<br><br>Scott decides to go back to his hometown of Detroit, MI, a city that was largely destroyed. There he finds the torso of a humanoid AI, which fascinates him. He takes the broken down robot with him to an old workshop he observes in his travels. As he repairs the AI, he notices one thing - it's still alive, and its program is still active. This AI awakes and abruptly introduces herself as X to Scott's surprise.<br><br>X is the technological twin of Y, public enemy number #1 across the entire planet in 2035. X tells Scott of Ys plan, and the rest is history."
    },
    {
      name: "Colonel Dixon",
      photo: "../../assets/concepts/output__1_.jpg",
      details: "Colonel Dixon is an extremist driven by drastic ideas, seeking to exploit political conflicts both globally and within his own country to enforce his own ideologies and models of governance. His uncompromising nature leads him to adopt a you're either with me or against me mentality, firmly believing he knows what is wrong with the world. Dixon's stance rests on the perception that the current government is weak, burdened with futile ideals. Furthermore, he harbors a deep disdain for artificial intelligences, viewing them as tools of global control orchestrated by the opposing faction. Ironically, unbeknownst to Dixon, he unwittingly becomes a pawn in the hands of Y, an artificial intelligence. Y manipulates Dixon to prove its point about the necessity of implementing a stringent regime. Dixon's charismatic leadership attracts followers who share his ideology, and his preferred methods involve force and weaponry. The turmoil plaguing the world serves as a catalyst for his motivations, fostering a belief that the orchestrated chaos is the result of secret elites. Dixon is firmly entrenched in the realm of conspiracy theories, possibly driven by personal experiences such as the loss of his family due to social instability. These underlying motives add depth to his character, fueling his unwavering commitment to his cause."
    },
    {
      name: "Seth",
      photo: "../../assets/concepts/output__1_.jpg",
      details: "Seth serves as the formidable nemesis to Falcon. As an Egyptian Pharaoh, Seth shares the same ambition as Falcon—to change the world. Driven by an insatiable hunger for power, Seth envisions the creation of the greatest empire in history. His plans involve the construction of magnificent pyramids in his honor, the establishment of an invincible army, and an expansion that spans across both land and sea. <br><br> Having experienced a childhood of enslavement and destitution, Seth's journey towards freedom fueled his determination never to be subdued again. He embarked on a path to become the most dominant and feared ruler, instilling fear in all who dare to oppose him.Although Seth's intentions are fueled by his desire to protect his people from subjugation by a greater empire, his allegiance takes a fateful turn when he encounters Y, an enigmatic figure who intercepts his path. Believing Y to be a divine representation capable of granting him the means to fulfill his destiny, Seth joins forces with them, convinced that he is on the right path."
    },
    {
      name: "Abaddon",
      photo: "../../assets/concepts/output__1_.jpg",
      details: "Program 7.2.1, known as Abaddon, is a recurring enemy in the game, created by Y to serve as a formidable robotic bodyguard. Inspired by the legendary automaton of Greek mythology, Talos embodies immense strength and resilience. Adorned with a commanding helmet, wielding a powerful sword, and clad in formidable metal armor, Talos presents a visually striking presence within the game. In a clever twist, Talos becomes a symbol of a past encounter—a defeated Y prototype that has returned, more advanced and relentless than ever before. <br><br>With each appearance, Talos poses an escalating challenge to the player, representing the enduring might and technological prowess of Y's creations. As players confront Talos repeatedly throughout their journey, they must devise new strategies to overcome this recurring adversary and unravel the secrets behind its resurgence."
    },
  ]

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private menu: MenuController,
    private modal: ModalController,
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

async openModal(name: string, photo: string, details: string) {
  const modal = await this.modal.create({
    componentProps: {
      name, photo, details
    },
    component: ConceptModalComponent,
  });
  modal.present();
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

    // These need to be adjusted whenever you added elements to the page unforunately. 
    // I have to change this in an update.
    // ~ This is needed for the scroll percentage bar.    this.aboutAnimTrigger = this.ionContent['el'].children[1].offsetTop;
    this.aboutAnimTrigger = this.ionContent['el'].children[1].offsetTop;
    this.projectsAnimTrigger = this.ionContent['el'].children[4].offsetTop;
    this.contributeAnimTrigger = this.ionContent['el'].children[11].offsetTop;
    this.teamAnimTrigger = this.ionContent['el'].children[13].offsetTop;
    this.contactAnimTrigger = this.ionContent['el'].children[17].offsetTop;
    this.bottomOfPageAnimTrigger = this.ionContent['el'].children[20].offsetTop;    
  }

  
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
      aboutSideMenuButton.style.color = '#dd0000';

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
      && scrollPosition < this.contributeAnimTrigger * 0.9) {
      console.log("Projects Section !");

      // Active Links
      this.projectsNavLink['el'].className = `active-link + ${buttonClass}`;
            
      // Side Menu Active Link
      projectsSideMenuButton.style.color = '#dd0000';

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

    // Contribute 
    if( scrollPosition > this.contributeAnimTrigger * 0.9) {
      this.contributeNavLink['el'].className = `inactive-link + ${buttonClass}`
    }
    if( scrollPosition > this.contributeAnimTrigger * 0.9 
      && scrollPosition < this.teamAnimTrigger * 0.9) {
      console.log("Contribute Section !");

      // Active Link
      this.contributeNavLink['el'].className = `active-link + ${buttonClass}`;
            
      // Side Menu Active Link
      contributeSideMenuButton.style.color = '#dd0000';
      
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

    // Team
    if(scrollPosition > this.teamAnimTrigger * 0.9 ) {
      this.teamNavLink['el'].className = `inactive-link + ${buttonClass}`
    }
    if( scrollPosition > this.teamAnimTrigger * 0.9
      && scrollPosition < this.contactAnimTrigger * 0.9) {
      console.log("Team Section !");

      // Active Link
      this.teamNavLink['el'].className = `active-link + ${buttonClass}`;
            
      // Side Menu Active Link
      teamSideMenuButton.style.color = '#dd0000';

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
      contactSideMenuButton.style.color = '#dd0000';
            
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
