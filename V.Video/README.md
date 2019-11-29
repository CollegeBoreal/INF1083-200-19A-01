# nativescript-evoplayer

:one: create a project, replace `my` in `my-blank-ng` by b`<`your :id:`>`

:pushpin: for example the project name will be `b300098957-blank-ng` 

```
$ tns create my-blank-ng --template tns-template-blank-ng && cd my-blank-ng
```

:two: Add the [exoplayer](https://github.com/google/ExoPlayer) plugin

```
$ tns plugin add nativescript-exoplayer
```

:three: Add some code

:pushpin: Add the below `import` and `registration` to the `home` component file `home.component.ts`

```typescript
// somewhere at top of your component or bootstrap file
import {registerElement} from "nativescript-angular/element-registry";
registerElement("exoplayer", () => require("nativescript-exoplayer").Video);
// documentation: https://docs.nativescript.org/angular/plugins/angular-third-party.html#simple-elements
```

:pushpin: Add the below snippet to the `home` template file `home.component.html`


```html
    <!-- Add your page content here -->
    <exoplayer
            src="https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
            autoplay="true"
            height="300"></exoplayer>
```

:four: Run the app

:pushpin: Using local `Playground`

```
% tns run
```

:pushpin: Using Preview

```
% tns preview
```
