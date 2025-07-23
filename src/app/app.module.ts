import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ComponentsModule } from './components/component-module';
import { FormsModule } from '@angular/forms';
import { GraphQLModule } from './graphql.module';
import { Apollo } from 'apollo-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'ios',
      swipeBackEnabled: false
    }),
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    GraphQLModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    Apollo,
    provideHttpClient(),
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
