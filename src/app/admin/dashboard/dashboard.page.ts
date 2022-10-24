import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public menu: MenuController
    ) { }

  ngOnInit() {
  }
  adminProfiles() {
    this.router.navigate(['/fbs-admin/dashboard/profiles'], {relativeTo: this.activatedRoute});
    this.menu.close();
  }
  adminCrypto() {
    this.router.navigate(['/fbs-admin/dashboard/crypto'], {relativeTo: this.activatedRoute});
    this.menu.close();
  }
  adminHome() {
    this.router.navigate(['/fbs-admin/dashboard/home'], {relativeTo: this.activatedRoute});
    this.menu.close();
  }
  adminNewsletter() {
    this.router.navigate(['/fbs-admin/dashboard/newsletter'], {relativeTo: this.activatedRoute});
    this.menu.close();
  }
  adminLogout() {
    this.menu.close();
    this.router.navigate(['/fbs-admin/'], {relativeTo: this.activatedRoute});
  }

}
