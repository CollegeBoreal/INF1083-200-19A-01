# Correction

## :one: Modifier les composants à tester 

:bulb: Malheureusement, les composants NativeScript ne suivent pas le DOM

* Ajouter au constructeur du composant `HomeComponent`, le parametre public suivant:

```typescript
    constructor(public elementRef: ElementRef) {
        // Use the component constructor to inject providers.
    }
```

## :two: Créer l'environnement de test

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

## :three: Ajouter les outils de tests (Testing Tools incluant le TestBed et la visualisation)

* Créer le fichier `tests/test-maint.ts`, comportant l'initialisation du TestBed,  avec le contenu suivant:

```typescript
import "nativescript-angular/zone-js/testing.jasmine";
import { nsTestBedInit } from "nativescript-angular/testing";
nsTestBedInit();
```

* Créer le fichier `tests/test-utils.ts`, comportant la visualisation des composants non-DOM,  avec le contenu suivant:

```typescript
import { View } from "tns-core-modules/ui/core/view";
import { TextBase } from "tns-core-modules/ui/text-base";
import { Device } from "tns-core-modules/platform";

function getChildren(view: View): Array<View> {
    let children: Array<View> = [];
    (<any>view).eachChildView((child) => {
        children.push(child);
        return true;
    });
    return children;
}

export function dumpView(view: View, verbose: boolean = false): string {
    let nodeName: string = (<any>view).nodeName;
    if (!nodeName) {
        // Strip off the source
        nodeName = view.toString().replace(/(@[^;]*;)/g, '');
    }
    nodeName = nodeName.toLocaleLowerCase();

    let output = ["(", nodeName];
    if (verbose) {
        if (view instanceof TextBase) {
            output.push("[text=", view.text, "]");
        }
    }

    let children = getChildren(view).map((c) => dumpView(c, verbose)).join(", ");
    if (children) {
        output.push(" ", children);
    }

    output.push(")");
    return output.join("");
}

export function createDevice(os: string): Device {
    return {
        os: os,
        osVersion: "0",
        deviceType: "Phone",
        language: "en",
        uuid: "0000",
        sdkVersion: "0",
        region: "US",
        manufacturer: "tester",
        model: "test device"
    };
}
```

## :four: Créer le test

```typescript

import "reflect-metadata";
import { nsTestBedBeforeEach, nsTestBedAfterEach, nsTestBedRender }     from "nativescript-angular/testing";

import {Component, ComponentRef} from "@angular/core";

import {dumpView} from './test-utils';
import {HomeComponent} from "~/app/home/home.component";

describe("HomeComponent", () => {

    // const result = "(proxyviewcontainer (stacklayout (label), (label), (image)))";
    const label = "(label)";
    const image = "(image)";

    beforeEach(nsTestBedBeforeEach([HomeComponent]));
    afterEach(nsTestBedAfterEach());

    describe("HomeComponent", () => {
        it("should contain: label and image", () => {
            return nsTestBedRender(HomeComponent).then((fixture) => {
                const componentRef: ComponentRef<HomeComponent> = fixture.componentRef;
                const componentRoot = componentRef.instance.elementRef.nativeElement;
                const view = dumpView(componentRoot);
                expect(view).toContain(label);
                expect(view).toContain(image);
            });
        });
    });

});

```




# References (à ignorer)

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
