import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-rounting.module';
import { ReactiveFormsModule } from '@angular/forms';

// COMPONENTES
import { ComponentsModule } from './components/components.module'; // Importa el módulo de componentes


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
