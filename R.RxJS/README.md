# rxjs

https://rxjs-dev.firebaseapp.com/guide/overview


## Examples

https://www.pluralsight.com/guides/using-http-with-rxjs-observables


# :o: Construire un accès à des données

* Le projet utilise deux modules externes `HttpModule` et `FormsModule`

<image src="images/httpmodule.png" width="630" heigth="347"></image>

* Récupérer votre clé [RapidAPI](https://rapidapi.com/) pour l'accès aux bases de données

<image src="images/RapidAPIKey.png" width="453" heigth="283"></image>


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

:pushpin: Créer le service `APICall`

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

:pushpin: Rajouter le module `NativeScriptHttpClientModule` à `app.module.ts`

```
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
```

le rajouter à `@NgModule` le champ `import`

```
    imports: [
        NativeScriptHttpClientModule,
```

## :ab: Créer le formulaire



:pushpin: Éditer le composant `Home` - `home.component.ts`

* Ajouter les variables `name` et `countries`

```typescript
    name: string;
    countries: Array<Country>;
```

* Modifier le constructeur en lui passant le service `Apicall`

```typescript
    constructor(private apiService: ApicallService){
        // Use the component constructor to inject providers.
    }
```

* Importer le service `Apicall` dans le component `home`

```typescript
import {ApicallService} from "~/app/shared/apicall.service";
```

* Ajouter la fonction `searchCapital` permettant l'appel au service en passant la capitale

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

:bulb: Résultat final


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

:pushpin: Éditer le `template` du composant `Home` - `home.component.html`

Remplacer :

```html
<GridLayout>
    <!-- Add your page content here -->
</GridLayout>
```

avec :

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

:tada: Observez l'utilisation de la variable `name`, `countries` et la fonction `searchCapital`

Binding with [Template Reference Variable](https://angular.io/guide/template-syntax#template-reference-variables--var-) usually called #name

⚠️ #name reference variable can only be used in the template not by the controller

🔖 ngForm is used to link the reference variable to the entire form (i.e. form.invalid)

🔖 ngModel is used to link the reference variable to the <Input> form field (i.e. phone.touched)

:pushpin: Finalement rajouter le module `NativeScriptFormsModule` à `home.module.ts`

```
import { NativeScriptFormsModule } from "nativescript-angular/forms"
```

le rajouter à `@NgModule` le champ `import`

```
    imports: [
        NativeScriptFormsModule,
```

# References:

https://docs.nativescript.org/angular/ng-framework-modules/http

https://discourse.nativescript.org/t/reactive-forms-not-working/3044/5
