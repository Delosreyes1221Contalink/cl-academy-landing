import { Component, OnInit } from '@angular/core';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private courseService: CourseService) {}

  title = 'cl-academy-landing';

  ngOnInit(): void{
    this.courseService.getAllCourses();
  }
}
