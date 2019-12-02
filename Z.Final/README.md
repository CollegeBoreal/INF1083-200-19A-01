# Final


### [3.GIT](../3.GIT)

### Programmation

 * Framework utilisé est `Angular` écrit par Google

 * Language utilisé est `TypeScript` écrit par Microsoft

### Entrée dans Nativescript:

 * Code Source se trouve dans répertoir `src` 
 
 * Fichier d'entrée au programme NS `main.ts`
 
 * Premier Module **bootstrap** est `app.module`
 
 * Fichier de configuration des modules externes se trouve dans `package.json`

### [Modules](https://angular.io/guide/architecture-modules)

* principal `app.module`

* modules externes `RxJS`, `Forms`,  `http` accédés par des `imports`

* les routes sont accessibles par les `Routing` modules

* les décorateurs d'un module se nomme `@NgModule`

* Un décorateur permet la configuration d'attributs

### [Component](https://angular.io/api/core/Component)

* les décorateurs d'un composant se nomme `@Component`

* les attibuts du décorateur `@Component` sont:

   - `selector` permet la déclaration de balise ou étiquette
   
   - `templateUrl` permet l'utilisation de HTML
   
   - `styleUrls` permet l'utilisation de CSS

:pushpin: Templates

* sont dans les fichiers `.html`

* utilise `XML` eXtended Markup Language

* Dans NS POUR `Header` Action Bar pour Body Layout (imbriqué)

### Forms [Template Driven Forms](https://angular.io/guide/template-syntax#template-reference-variables--var-)

* Input 

* Output

### RxJS et HttpModule

### NS CLI tns et ng Schematics


