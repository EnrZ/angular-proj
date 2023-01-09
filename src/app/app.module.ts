import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//google maps
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';

import { environment } from 'environment';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: environment.API_KEY
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
