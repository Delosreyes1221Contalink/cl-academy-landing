import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
import { DemoInvitationCarouselService } from 'src/app/services/demo-invitation-carousel.service';

declare const fbq: any;

@Component({
  selector: 'app-demo-invitation-navbar',
  templateUrl: './demo-invitation-navbar.component.html',
  styleUrls: ['./demo-invitation-navbar.component.css']
})
export class DemoInvitationNavbarComponent implements OnInit {
  open: boolean = false

  constructor(
    private demoInvitationCarousel: DemoInvitationCarouselService,
    // private cookieService: CookieService
  ) { }

  ngOnInit(): void {    
    this.demoInvitationCarousel.$demoInvitationCarousel.subscribe((value: boolean) => {
      this.open = value
    })
  }

  closeInvitation() {
    // this.cookieService.set('demo-navbar', 'closed')
    this.demoInvitationCarousel.$demoInvitationCarousel.emit(false)
  }

  // Facebook Pixel
  // sendPixelEvent() {
  //   fbq('trackCustom', 'Click Demo Invitation')
  // }
}
