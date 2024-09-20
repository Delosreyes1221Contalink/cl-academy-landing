import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoInvitationCarouselService {

  constructor() { }

  $demoInvitationCarousel = new EventEmitter<boolean>()
}
