import { Injectable } from '@angular/core';
import { IPerson } from '../../interfaces/person.interface';
import { Observable } from 'rxjs';
import { PersonService } from 'src/app/services/person.service';
import { DealService } from 'src/app/services/deal.service';
import { ICourse } from 'src/app/interfaces/course.interface';

@Injectable({
    providedIn: 'root'
})
export class CourseFormService {
    constructor(
        private personService: PersonService,
        private dealService: DealService
    ) { }

    createPipedriveDeal(Iperson: any) {
        const person$: Observable<any> = this.personService.createPipedrivePerson(Iperson);

        person$.subscribe({
            next: (value) => {
                console.log(value);
                // const courseName: string = this.buildCourseName(Iperson);
                // const deal$: Observable<any> = this.dealService.createPipedriveDeal(
                //     Iperson,
                //     value?.data?.id,
                //     courseName
                // );
                // deal$.subscribe({
                //     next: (value) => {
                //         console.log('deal complete', value);
                //     },
                //     error: (error) => {
                //         console.log('deal error', error);
                //     },
                //     complete: () => {

                //     }
                // });
            },
            error: (error) => { },
            complete: () => { }
        }
        );
    }
}