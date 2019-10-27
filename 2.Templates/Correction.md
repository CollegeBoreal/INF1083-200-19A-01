# Correction

## :one: Créer l'environemment de test

* Dans le répertoire de votre projet, lancer la commande suivante 

:bookmark: Choisir le `testing framework` `Jasmine`

```
% tns test init           
? Select testing framework: (Use arrow keys)
❯ jasmine 
```

* Faire un test préalable

```
% tns test ios
```

## :two: Préparer les fichiers de test

* Créer le fichier `tests/test-maint.ts`, comportant l'initialisation du TestBed,  avec le contenu suivant:

```
import "nativescript-angular/zone-js/testing.jasmine";
import { nsTestBedInit } from "nativescript-angular/testing";
nsTestBedInit();
```

# References (a ignorer)

* zsh

```
Set JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
Set ANDROID_HOME=/usr/local/share/android-sdk
Set ANDROID_SDK_ROOT=/usr/local/share/android-sdk

The ANDROID_HOME and JAVA_HOME environment variables have been added to your .bash_profile/.zprofile
Restart the terminal or run `source ~/.bash_profile` to use them.
```



* Angular CLI schematics

https://github.com/NativeScript/nativescript-schematics/issues/241

```
 % npm i --save-dev @nativescript/schematics
```

* Dependency on Angular 

```
% npm install -D @angular/cli
```
