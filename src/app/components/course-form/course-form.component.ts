import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from 'src/app/interfaces/course.interface';
import { CourseService } from 'src/app/services/course.service';
import { CourseFormService } from './course-form.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})

export class CourseFormComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private courseFormService: CourseFormService,
    private sweetAlertService: SweetAlertService,
    private router: Router
  ) { }
  courseId: number = 0;
  courseInfo: ICourse | undefined;
  // LOADING CIRCLE
  isLoading: boolean = false;

  courseForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    ocupation: new FormControl(null, [Validators.required]),
    initialDate: new FormControl(),
    sessionNumber: new FormControl(),
    schedule: new FormControl(),
    courseName: new FormControl(),
    usedContalink: new FormControl(false)
  });

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
    });

    this.fillFormInputs();
  }

  saveForm(): void {
    this.courseForm.patchValue({
      initialDate: this.courseInfo?.initialDate,
      sessionNumber: this.courseInfo?.sessionsNumber,
      schedule: this.courseInfo?.schedule,
      courseName: this.courseInfo?.courseName,
    });


    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      // this.courseFormService.createPipedriveDeal(
      //   this.courseForm.value
      // );
      setTimeout(() => {
        this.sweetAlertService.sendCourseInvitation();
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 4000);
      }, 1000);
    }, 3000);
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

  // private methods
  private async fillFormInputs(): Promise<void> {
    await this.courseService.getAllCourses();
    this.courseService.getCourseById(this.courseId).subscribe(
      courses => {
        this.courseInfo = courses
      }
    );
  }
}
