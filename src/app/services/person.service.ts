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
        return this.pipedriveService.createPerson(newHomeFormInterface);
    }

    private createInterfacePerson(IformGroup: IPerson): any {
        type IformHome = Omit<IPerson, 'emailPromotional'>; // SE ELIMINA EL emailPromotional de la interfaz
        const aceptEmailPromotionalCode: number = this.assignEmailPromotional(IformGroup.emailPromotional);
        const marketingStatus: string = this.assignMarketingStatus(aceptEmailPromotionalCode);

        const newInterface: IformHome = {
            name: IformGroup.name,
            email: IformGroup.email,
            phone: IformGroup.phone,
            visible_to: 3,
            a243bab7d886520a52373eae8408f1ad87bdc420: aceptEmailPromotionalCode,
            marketing_status: marketingStatus
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
}