import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-rounting.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselImageComponent } from "./components/carousel/carousel-image.component";
import { ProductSubmenuComponent } from './components/navbar/product-submenu/product-submenu.component';
import { ResourcesSubmenuComponent } from './components/navbar/resources-submenu/resources-submenu.component';
// import { CarouselImageComponent } from './components/carousel/carousel-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductSubmenuComponent,
    ResourcesSubmenuComponent
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
