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
% ng generate service shared/country
```


* Rajouter les champs

```
    id: number;
    name: string;
    capital: string;
```

:pushpin: Service APICall

```
% ng generate service shared/apicall
```

## :ab: Créer le formulaire


```
% ng generate service shared/apicall
```


# References:

https://docs.nativescript.org/angular/ng-framework-modules/http
