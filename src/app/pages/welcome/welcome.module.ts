import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';

import { WelcomePage } from './welcome.page';
import { RiveModule, RIVE_FOLDER } from 'ng-rive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePageRoutingModule,
    RiveModule
  ],
  declarations: [WelcomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: RIVE_FOLDER,
    useValue: 'assets/rive'
  }]
})
export class WelcomePageModule { }
