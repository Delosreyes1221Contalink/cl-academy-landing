import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-product-submenu',
  templateUrl: './product-submenu.component.html',
  styleUrls: ['./product-submenu.component.css']
})
export class ProductSubmenuComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>()
  initialPosition: number = 0
  initialPositionString: string = ``
  contalinkLiteUrl: string = 'https://lite.contalink.com?'
  contalinkLandingUrl: string = 'https://www.contalink.com';

  constructor(
    // private cookieService: CookieService
  ) { }

  getCookie(name: string) {
    // return this.cookieService.get(name);
  }

  ngOnInit(): void {
    const btn = document.getElementById('productBtn')
    const rect = btn?.getBoundingClientRect()

    if (rect) {
      this.initialPosition = rect?.left + (rect?.width / 2)
      this.initialPositionString = `left-[${this.initialPosition}px]`
    }

    // if (this.getCookie('utm_medium')) {
    //   this.contalinkLiteUrl += `utm_medium=${this.getCookie('utm_medium')}&`
    // } 
    // if (this.getCookie('utm_source')) {
    //   this.contalinkLiteUrl += `utm_source=${this.getCookie('utm_source')}&`
    // } 
    // if (this.getCookie('utm_campaign')) {
    // } 
    // if (this.getCookie('first_utm')) {
    //   this.contalinkLiteUrl += `first_utm=${this.getCookie('first_utm')}&`
    // } 
    // if (this.getCookie('first_visit_date')) {
    //   this.contalinkLiteUrl += `first_visit_date=${this.getCookie('first_visit_date')}&`
    // } 
  }

  closeResourcesSubmenu(event: any) {
    if (event?.target?.classList.contains('submenuBg')) {
      this.newItemEvent.emit(false)
    }
  }

  hardCloseProductSubmenu() {
    this.newItemEvent.emit(false)
  }

}
