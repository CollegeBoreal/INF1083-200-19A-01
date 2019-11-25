# rxjs

https://rxjs-dev.firebaseapp.com/guide/overview


## Examples

https://www.pluralsight.com/guides/using-http-with-rxjs-observables


# :o: Construire un accès à des données

### :a: Créer un projet, remplacer `my` dans `my-blank-ng` par b`<`votre :id:`>`

:pushpin: par example le nom du projet sera `b300098957-blank-ng` 

* Création utilisant un autre [template](https://github.com/NativeScript/nativescript-app-templates)

```
$ tns create my-blank-ng --template tns-template-blank-ng
```

:warning: Ne pas toucher le `routage` 

* le fichier `app.component.html` doit contenir plusieurs `<page-router-outlet></page-router-outlet>`

## :b: Créer le service

:pushpin: Créer la classe `Country`

* Créer la classe

```
% ng generate class shared/country
```


* Rajouter les champs

```typescript
export class Country {
    id: number;
    name: string;
    capital: string;
}
```

:pushpin: Service APICall

```
% ng generate service shared/apicall
```


* Rajouter le constructeur se connectant au Module `HttpModule`

```typescript
constructor(private httpClient: HttpClient) {}
```

* Rajouter la fonction search se connectant au Module `HttpModule`

```typescript
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
```

* Rajouter les autres modules par importer au debut du fichier

```typescript
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {Country} from "~/app/shared/country";
```

:bulb: Résultat final

```typescript
```




## :ab: Créer le formulaire




# References:

https://docs.nativescript.org/angular/ng-framework-modules/http
