import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environment";

@Injectable({
    providedIn: 'root'
})

export class PipedriveService {
    constructor(private http: HttpClient) { }

    createPerson<T>(formPerson: T): Observable<any> {
        const params: HttpParams = this.getParams();
        const url: string = `${environment.PIPELINK_API_URL}/persons`;
        const formPersonJson = JSON.stringify(formPerson);

        return this.http.post<any>(
            url,
            formPersonJson,
            { params, headers: this.getHeaders() }
        );
    }

    createDeal<T>(deal: T): Observable<any> {
        const params: HttpParams = this.getParams();
        const url: string = `${environment.PIPELINK_API_URL}/deals`;
        const formDealJson = JSON.stringify(deal);

        let response = this.http.post<any>(
            url,
            formDealJson,
            { params, headers: this.getHeaders() }
        );
        return response;
    }

    // private methods
    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json'
        });
    }

    private getParams(): HttpParams {
        return new HttpParams().append(
            'api_token',
            environment.PIPELINK_API_TOKEN
        );
    }
}