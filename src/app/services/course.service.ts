import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ICourse } from "../interfaces/course.interface";
import { environment } from "../environment";
import { BehaviorSubject, Observable, catchError, lastValueFrom, map, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CourseService {
    coursesList: ICourse[] = [];

    private coursesSubject: BehaviorSubject<ICourse[]> = new BehaviorSubject<ICourse[]>([]);
    coursesList$ = this.coursesSubject.asObservable();

    constructor(private http: HttpClient) {
        this.getAllCourses();
    }

    async getAllCourses() {
        const url: string = `${environment.LAMBDA_BACKEND_URL}/get_courses`;
        const token: string = '"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaXNfYWRtaW4iOm51bGwsInVuaXZlcnNpdHlfaWQiOjEsImNyYXRlZF9hdCI6IjIwMjQtMDktMDZUMjA6NTU6NDQuNDM0NzE2In0.LAEMOvafSdGYaXFXL9Gc5RMMeaCPT1OFoje6rE9saSg"';

        let headers: HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', token);

        try {
            const response = await lastValueFrom(this.http.get<any>(url, { headers: headers }));
            const courses = this.convertCoursesToObject(response);
            this.coursesSubject.next(courses);
        } catch (error) {
            console.error('Error al obtener los cursos:', error);
        }
    }

    getPrincipalCourses(): Observable<ICourse[]> {
        return this.coursesList$.pipe(
            map(courses => courses.filter(course => course.active))
        );
    }

    getCourseById(courseId: number): Observable<ICourse> {
        return this.coursesList$.pipe(
            map(courses => {
                const course: any = courses.find((courses: ICourse) => courses.id == courseId)
                if (!course) {
                    throw new Error(`Curso con ID ${courseId} no encontrado.`);
                }

                return course;
            })
        );
    }

    // private methods
    private convertCoursesToObject(response: any): ICourse[] {
        const coursesList: any = response?.data;
        const coursesListJson: any = JSON.parse(coursesList);
        let courses: ICourse[] = [];

        coursesListJson.map((course: any) => {
            courses.push(
                {
                    courseName: course?.course_name,
                    active: course?.active,
                    duration: course?.duration,
                    id: course?.id,
                    preiodicity: course?.periodicity,
                    initialDate: course?.initial_date,
                    schedule: course?.schedule,
                    sessionsNumber: course?.sessions_number
                }
            );
        });
        return courses;
    }
}