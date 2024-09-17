import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-rounting.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselImageComponent } from "./components/carousel/carousel-image.component";
// import { CarouselImageComponent } from './components/carousel/carousel-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselImageComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
