import { Component, OnInit } from "@angular/core";

import {registerElement} from "nativescript-angular/element-registry";
registerElement("exoplayer", () => require("nativescript-exoplayer").Video);
// documentation: https://docs.nativescript.org/angular/plugins/angular-third-party.html#simple-elements

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
