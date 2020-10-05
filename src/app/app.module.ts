import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CesiumDirective } from './cesium.directive';
import { MapCesiumComponent } from './map-cesium/map-cesium.component';

@NgModule({
  declarations: [
    AppComponent,
    CesiumDirective,
    MapCesiumComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
