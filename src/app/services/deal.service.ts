import { Injectable } from "@angular/core";
import { PipedriveService } from "./pipedrive.service";
import { Observable } from 'rxjs';
import { IDeal } from "../interfaces/deal.interface";
import { IPerson } from "../interfaces/person.interface";

@Injectable({
    providedIn: 'root'
})

export class DealService {
    constructor(private pipedriveService: PipedriveService) { }
    createPipedriveDeal(Iperson: IPerson, personId: number, courseName?: string): Observable<any> {
        const IDeal: IDeal = this.createInterfaceDeal(Iperson, personId, courseName);
        return this.pipedriveService.createDeal(IDeal);
    }

    private createInterfaceDeal(Iperson: IPerson, person_id: number, courseName?: string): IDeal {
        // TODO Crear este metodo genercio para que pueda recibir distintas interfaces
        const dealInterface: IDeal = {
            title: Iperson.name,
            value: 0,
            currency: 'MXN',
            user_id: 5995501, //Gloria por defecto
            person_id,
            stage_id: 161,
            status: 'open',
            probability: 1,
            visible_to: 3,
            '8207a517ce2d1c382b32bc598141ea8cddf675d7': 100,
            'eaf8d47de8714896fff87d841884cc6a7d3367f9': 550,
            '1b2aa66ccef5fa6bc8a7ac45172cd8849fb16d21': 'Desconocido',
            '39f425f87fc043b3a7a82419cd11aa3187837eb8': 'Desconocido',
            '1ec1628154aca7d01b14638424caabfdc83834ea': 'Desconocido',
            '4937761f4424f56ffa951741551c94f81984c068': 'Desconocido',
            'af8131a623d0d6ff28b21155a12ed3598078c025': 'Desconocido',
            '0e777c9eba1880e260238f6698bf94a0223d860c': 'Desconocido', 
            '448a0af69a24744b729ba2c494bb172609cf30f3': 'Desconocido',
            '1fba77d95708dcb09f4be2adc40275eeb3479138': 'Desconocido',
            '449de59df20b61d303506ffc194f04582b296422': courseName ? courseName : ''
        };

        return dealInterface;
    }
}