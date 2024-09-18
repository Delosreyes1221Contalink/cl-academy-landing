import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy
{
  constructor(private element: ElementRef) { }
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    this.initObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initObserver(): void {
    this.videoContainerObserver();
    this.courseContainerObserver();
    this.certificateContainerObserver();
  }

  private videoContainerObserver(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;

          target.classList.add('title-text-second-container-animation');
          target.addEventListener('animationend', () => {
            target.classList.remove('title-text-second-container-animation');
          }, { once: true });
        }
      });
    });
    const elementTitle = this.element.nativeElement.querySelector('.title-text-second-container');
    const elementDescription = this.element.nativeElement.querySelector('.description-text-second-container');
   
    this.observer.observe(elementTitle);
    this.observer.observe(elementDescription);
  }

  private courseContainerObserver(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;

          target.classList.add('cursos-text-title-animation');
          target.addEventListener('animationend', () => {
            target.classList.remove('cursos-text-title-animation');
          }, { once: true });
        }
      });
    });
    const elementTitle = this.element.nativeElement.querySelector('.cursos-text-title');
    const elementDescription = this.element.nativeElement.querySelector('.cursos-text-description');
   
    this.observer.observe(elementTitle);
    this.observer.observe(elementDescription);
  }

  private certificateContainerObserver(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;

          target.classList.add('certificate-card-animation');
          target.addEventListener('animationend', () => {
            target.classList.remove('certificate-card-animation');
          }, { once: true });
        }
      });
    });
    const elementTitle = this.element.nativeElement.querySelector('.title-text-certificate');
    const elementSecondTitle = this.element.nativeElement.querySelector('.title-second-text-certificate');
    const elementImageCertificate = this.element.nativeElement.querySelector('#certificate-image'); 
    const elementLinkedinImage = this.element.nativeElement.querySelector('.linkedin-logo'); 
    
    this.observer.observe(elementTitle);
    this.observer.observe(elementSecondTitle);
    this.observer.observe(elementImageCertificate);
    this.observer.observe(elementLinkedinImage);
  }
}
