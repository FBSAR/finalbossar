import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoPageRoutingModule } from './crypto-routing.module';

import { CryptoPage } from './crypto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoPageRoutingModule
  ],
  declarations: [CryptoPage]
})
export class CryptoPageModule {}
