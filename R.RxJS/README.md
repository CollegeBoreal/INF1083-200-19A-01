# rxjs

https://rxjs-dev.firebaseapp.com/guide/overview


## Examples

https://www.pluralsight.com/guides/using-http-with-rxjs-observables


```
$ tns create my-blank-ng --template tns-template-blank-ng
```

```typescript
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    imports: [
        NativeScriptHttpClientModule
    ]
```

```
$ ng generate class shared/country
```

```typescript
export class Country {
    id: number;
    name: string;
    capital:string;
}
```

```
% ng generate service shared/apicall
```


```typescript
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
}

```

References:

https://docs.nativescript.org/angular/ng-framework-modules/http
