# rxjs

https://rxjs-dev.firebaseapp.com/guide/overview


## Examples

https://www.pluralsight.com/guides/using-http-with-rxjs-observables

:one: Création du projet 

:pushpin: Remplacer `my` par votre `b` + :id: 

```
$ tns create my-blank-ng --template tns-template-blank-ng
```

:two: Création du service

:pushpin: Rajouter le module `NativeScriptHttpClientModule` au module de l'application `app.module.ts`

```typescript
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    imports: [
        NativeScriptHttpClientModule,
        ...
    ]
```

:pushpin: Créer la classe `country` permettant de capturer les données  dans le répertoire `shared`

```
$ ng generate class shared/country
```

:bulb: Si la commande `ng` ne marche pas appliquer le [schematics](https://github.com/CollegeBoreal/Tutoriels/blob/master/3.Angular/M.Mobile/Schematics.md#m-nativescript-schematics)

:bookmark: Ajouter les champs ci-dessous à la classe `Country`

```typescript
export class Country {
    id: number;
    name: string;
    capital:string;
}
```

:pushpin: Créer le service `apicall` permettant de récuperer les données dans le répertoire `shared`

```
% ng generate service shared/apicall
```

:bookmark: Remplacer le constructeur du service `Apicall` avec le code suivant 

```typescript
    constructor(private httpClient: HttpClient) {}
```

:bookmark: Ajouter la fonction  `searchCountryByName` au service `Apicall` avec le code suivant 

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

:bookmark: Ajouter les  `import` au service `Apicall` avec le code suivant 

```typescript
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/internal/operators";

import {Country} from "~/app/shared/country";
```

:star: Résultat final du service `Apicall` 

```typescript
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/internal/operators";

import {Country} from "~/app/shared/country";

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

:three: Modifier le composant `home` em formulaire de saisie

:pushpin: Rajouter le module `NativeScriptFormsModule` au module de l'application `home.module.ts`

:bulb: Chaque module comportant des formulaire de saisie doicent importer le module `NativeScriptFormsModule`

```typescript
import { NativeScriptFormsModule } from "nativescript-angular/forms"

@NgModule({
    imports: [
        NativeScriptFormsModule,
        ...
    ]
```

:pushpin: Éditer le composant `home.component.ts`

:bookmark: Rajouter 2 variables 

```typescript
  name:string;
  countries: Array<Country>;
```

:bookmark: modifier le constructeur

```typescript
   constructor(private apiService: ApicallService){}
```

:bookmark: Rajouter la fonction `searchCapital`

```typescript
  searchCapital() {
    this.apiService
    .searchCountryByName(this.name)
    .subscribe((data:Country[]) => {
      console.log(data);
      this.countries = data;
    });
  }
```

:bookmark: Rajouter les `import`

```typescript
import {ApicallService} from "~/app/shared/apicall.service";
import {Country} from "~/app/shared/country";
```


:star: Résultat du composant `home` 

```typescript
import { Component, OnInit } from "@angular/core";
import {ApicallService} from "~/app/shared/apicall.service";
import {Country} from "~/app/shared/country";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    name: string;
    countries: Array<Country>;

    ngOnInit(){
    }

    constructor(private apiService: ApicallService){}

    searchCapital() {
        this.apiService
            .searchCountryByName(this.name)
            .subscribe((data:Country[]) => {
                console.log(data);
                this.countries = data;
            });
    }
}

```


# References:

https://docs.nativescript.org/angular/ng-framework-modules/http
