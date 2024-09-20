import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarStylesService {

  constructor() { }
  
  $navbarStyles = new EventEmitter<'white' | 'transparent' | 'contalink-dark'>()
}
