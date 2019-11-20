# rxjs

https://rxjs-dev.firebaseapp.com/guide/overview


## Examples

https://www.pluralsight.com/guides/using-http-with-rxjs-observables

```
Comment implementer une recherche avec RxJS
```

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

```shell
$ ng generate class shared/country
CREATE src/app/shared/country.spec.ts (146 bytes)
CREATE src/app/shared/country.ts (22 bytes)
```

:warning: supprimer le fichier test `country.spec.test` ne marche pas sous NativeScript

```
$ rm src/app/shared/country.spec.ts
```

:bulb: Si la commande `ng` ne marche pas appliquer le [schematics](https://github.com/CollegeBoreal/Tutoriels/blob/master/3.Angular/M.Mobile/Schematics.md#m-nativescript-schematics)

:bookmark: Ajouter les champs ci-dessous à la classe `Country`

```typescript
export class Country {
    id: number;
    name: string;
    capital: string;
}
```

:pushpin: Créer le service `apicall` permettant de récuperer les données dans le répertoire `shared`

```shell
$ ng generate service shared/apicall
CREATE src/app/shared/apicall.spec.ts (146 bytes)
CREATE src/app/shared/apicall.ts (22 bytes)
```

:warning: supprimer le fichier test `apicall.spec.test` ne marche pas sous NativeScript

```
$ rm src/app/shared/apicall.spec.ts
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
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {Country} from "~/app/shared/country";
```

:star: Résultat final du service `Apicall` 

```typescript
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
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

:pushpin: Rajouter le module `NativeScriptFormsModule` au module `home.module.ts`

```typescript
import { NativeScriptFormsModule } from "nativescript-angular/forms"

@NgModule({
    imports: [
        NativeScriptFormsModule,
        ...
    ]
```

:bulb: Chaque module comportant des formulaires de saisie doivent importer le module `NativeScriptFormsModule`

:pushpin: Éditer le composant `home.component.ts`

:bookmark: Rajouter 2 variables 

```typescript
  name:string;
  countries: Array<Country>;
```

:bookmark: modifier le constructeur

```typescript
    constructor(private apiService: ApicallService){
        // Use the component constructor to inject providers.
    }
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
import {Country} from "~/app/shared/country";
import {ApicallService} from "~/app/shared/apicall.service";
```


:star: Résultat final du composant `home` 

```typescript
import { Component, OnInit } from "@angular/core";
import {Country} from "~/app/shared/country";
import {ApicallService} from "~/app/shared/apicall.service";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    name:string;
    countries: Array<Country>;

    constructor(private apiService: ApicallService){
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

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

:four: Remplacer le `GridLayout` du template `home.component.html` par le `StackLayout` suivant


```html
<StackLayout class="form" >

    <TextField class="input" hint="Capital" [(ngModel)]="name"></TextField>

    <Button text="Search" class="btn btn-primary" (tap)="searchCapital()"></Button>

    <ListView [items]="countries">
        <ng-template let-item="item">
            <StackLayout>
                <Label [text]="item.name"></Label>
                <Label [text]="item.capital"></Label>
            </StackLayout>
        </ng-template>
    </ListView>

</StackLayout>
```


# References:

| Site                     | URL                                                             |
|--------------------------|-----------------------------------------------------------------|
|                          | https://docs.nativescript.org/angular/ng-framework-modules/http |
| RapidAPI Open Weather Map| https://rapidapi.com/community/api/open-weather-map             |
