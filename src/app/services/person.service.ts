import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { IPerson } from "../interfaces/person.interface";
import { PipedriveService } from "./pipedrive.service";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PersonService {
    constructor(private pipedriveService: PipedriveService) { }


    createPipedrivePerson(Iperson: IPerson): Observable<any> {
        const newHomeFormInterface = this.createInterfacePerson(Iperson);
        let response = this.pipedriveService.createPerson(newHomeFormInterface);
        console.log(response);
        return response;
    }

    private createInterfacePerson(IformGroup: IPerson): any {
        type IformHome = Omit<IPerson, 'emailPromotional'>; // SE ELIMINA EL emailPromotional de la interfaz
        const aceptEmailPromotionalCode: number = this.assignEmailPromotional(IformGroup.emailPromotional);
        const marketingStatus: string = this.assignMarketingStatus(aceptEmailPromotionalCode);
        const courseName: string = this.buildCourseName(IformGroup);

        const newInterface: IformHome = {
            name: IformGroup.name,
            email: IformGroup.email,
            phone: IformGroup.phone,
            visible_to: 3,
            a243bab7d886520a52373eae8408f1ad87bdc420: aceptEmailPromotionalCode,
            marketing_status: marketingStatus,
            ecf4c21c775216e445a7ec1f8a1473902796663c: courseName
        }
        return newInterface;
    }

    // PRIVATE METHODS
    private assignEmailPromotional(emailPromotional: boolean): number {
        if (emailPromotional) return 540;
        else return 541;
    }

    private assignMarketingStatus(emailPromotionalCode: number): string {
        if (emailPromotionalCode === 540) return 'subscribed';
        else return 'unsubscribed';
    }

    private buildCourseName(Iperson: any): string {
        if (Iperson?.courseName == null || Iperson?.courseName == null) return '';

        const croppedCourseName: string = this.getCourseName(Iperson?.courseName);
        const croppedInitialDate: string = this.getInitialDate(Iperson?.initialDate);

        return `${croppedCourseName}${croppedInitialDate}${Iperson?.sessionNumber}`;
    }

    private getCourseName(courseName: string): string {
        return courseName
            .split(' ')
            .filter(word => word.length > 0)
            .map(word => word[0].toUpperCase())
            .join('');
    }

    private getInitialDate(initialDate: string): string {
        let date: string | null = initialDate.substring(0, 10);
        let parts: string[] = date.split('-');
        const finalDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
        
        return finalDate.replace(/\//g, '');
    }
}