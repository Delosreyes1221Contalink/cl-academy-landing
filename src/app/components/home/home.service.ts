import { Injectable } from '@angular/core';
import { IPerson } from '../../interfaces/person.interface';
import { Observable } from 'rxjs';
import { PersonService } from 'src/app/services/person.service';
import { DealService } from 'src/app/services/deal.service';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(
        private personService: PersonService,
        private dealService: DealService
    ) { }

    createPipedriveDeal(Iperson: IPerson) {
        const person$: Observable<any> = this.personService.createPipedrivePerson(Iperson);

        person$.subscribe({
            next: (value) => {
                const deal$: Observable<any> = this.dealService.createPipedriveDeal(Iperson, value?.data?.id)
                deal$.subscribe({
                    next: (value) => {
                        console.log('deal complete', value);
                    },
                    error: (error) => {
                        console.log('deal error', error);
                    },
                    complete: () => {

                    }
                });
            },
            error: (error) => { },
            complete: () => { }
        }
        );
    }
}