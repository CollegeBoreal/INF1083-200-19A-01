import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {Country} from "~/app/shared/country";
<<<<<<< HEAD

=======
>>>>>>> 8464e04e6234e740c4475b4b9edb89728b8e7819

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
    
    constructor(private httpClient: HttpClient) {}

    searchCountryByName(name: string): Observable<Country[]>{
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append(
            'X-RapidAPI-Key',
            '1108554cc1mshf11c17c4fea2b3dp179054jsn2446fb7a8965'
        );
        return this.httpClient.get(
            `https://restcountries-v1.p.rapidapi.com/capital/` + name,
            {headers: headers}
        ).pipe(
            map((data: Country[]) => {
                return data;
            }), catchError( error => {
                return throwError( 'Capital not found!' );
            })
                )
    }

<<<<<<< HEAD
    constructor(private httpClient: HttpClient) {}

    searchCountryByName(name: string): Observable<Country[]> {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append(
            'X-RapidAPI-Key',
            '1108554cc1mshf11c17c4fea2b3dp179054jsn2446fb7a8965'
        );
        return this.httpClient.get(
            `https://restcountries-v1.p.rapidapi.com/capital/` + name,
            {headers: headers}
        ).pipe(
            map((data: Country[]) => {
                return data;
            }), catchError(error => {
                return throwError('Capital not found!');
            })
        )


    }

=======
}
>>>>>>> 8464e04e6234e740c4475b4b9edb89728b8e7819
