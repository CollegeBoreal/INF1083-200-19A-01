
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { Country } from "~/app/shared/country";

@Injectable({
    providedIn: "root"
})
export class ApicallService {

    constructor(private httpClient: HttpClient) {}

    searchCountryByName(name: string): Observable<Array<Country>> {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append("Accept", "application/json");
        headers = headers.append(
            "X-RapidAPI-Key",
            "c9e162695cmsh7ed6029b76f07abp1c3076jsn91cd049b082f"
        );

        return this.httpClient.get(
            `https://restcountries-v1.p.rapidapi.com/capital/` + name,
            {headers}
        ).pipe(
            map((data: Array<Country>) => {
                return data;
            }), catchError((error) => {
                return throwError("Capital not found!");
            })
        );
    }

}
