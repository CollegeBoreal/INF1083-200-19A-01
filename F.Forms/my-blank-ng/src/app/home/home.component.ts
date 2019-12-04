import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    signUpForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.signUpForm = this.formBuilder.group({
            email: ["", Validators.required],
            username: ["", Validators.required],
        });
    }

    onButtonTap() {
        console.log(JSON.stringify(this.signUpForm.value));
    }
}
