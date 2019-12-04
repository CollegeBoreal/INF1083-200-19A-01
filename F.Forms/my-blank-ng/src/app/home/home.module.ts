import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import {ReactiveFormsModule} from "@angular/forms";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        NativeScriptFormsModule,
        ReactiveFormsModule,
        NativeScriptCommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
