import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
@NgModule({
    imports: [
        NativeScriptHttpClientModule
    ]

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {AppRoutingModule} from "~/app/app-routing.module";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
