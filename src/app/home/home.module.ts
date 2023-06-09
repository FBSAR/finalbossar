import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { LandingHeaderComponent } from '../components/landing-header/landing-header.component';
import { HomePageRoutingModule } from './home-routing.module';
import { ConceptModalComponent } from '../components/concept-modal/concept-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, LandingHeaderComponent, ConceptModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
