import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { ICourse } from 'src/app/interfaces/course.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private element: ElementRef,
    private homeService: HomeService,
    private router: Router,
    private courseService: CourseService
  ) { }

  private observer: IntersectionObserver | null = null;
  firstCourseInfo: ICourse | undefined;
  SecondCourseInfo: ICourse | undefined;

  // VARIABLES DEL VIDEOS
  isPlaying: boolean = false;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    emailPromotional: new FormControl(true)
  })

  ngOnInit(): void {
    this.initObserver();
    this.getCoursesInfo();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  onPlay() {
    this.isPlaying = true;
    this.videoPlayer.nativeElement.play();
  }

  onPause() {
    this.isPlaying = false;
    this.toggleControls();
  }

  toggleControls() {
    this.videoPlayer.nativeElement.controls = this.isPlaying;
  }

  clickToPlayAndPause(): void {
    console.log('si llega aqui');
    if (!this.isPlaying) this.onPlay();
    else this.onPause();
  }

  saveForm(): void {
    this.homeService.createPipedriveDeal(
      this.contactForm.value
    );
  }

  goToCourseForm(courseId: number | undefined): void {
    this.router.navigate(['/course-form', courseId]);
  }

  scrollToForm(): void {
    const formElement = document.getElementById('formRegister');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // PRIVATE METHODS
  private getCoursesInfo(): void {
    this.courseService.getPrincipalCourses().subscribe(
      courses => {
        this.firstCourseInfo = courses[0];
        this.SecondCourseInfo = courses[1];
      }
    );
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

  formatInitialDate(initialDate: string | undefined): string | undefined {
    let date;
    if (initialDate != undefined) date = new Date(initialDate.replace(' ', 'T'));

    if (date != undefined) {
      date = date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }

    return date;
  }
}
