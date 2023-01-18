import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'profiles',
        loadChildren: () => import('./profiles/profiles.module').then( m => m.ProfilesPageModule)
      },
      {
        path: 'crypto',
        loadChildren: () => import('./crypto/crypto.module').then( m => m.CryptoPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'newsletter',
        loadChildren: () => import('./newsletter/newsletter.module').then( m => m.NewsletterPageModule)
      },
      {
        path: 'job-apps',
        loadChildren: () => import('./job-apps/job-apps.module').then( m => m.JobAppsPageModule)
      }
    ]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
