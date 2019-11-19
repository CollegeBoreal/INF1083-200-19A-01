import { Component, OnInit } from "@angular/core";
import {ApicallService} from "~/app/shared/apicall.service";
import {Country} from "~/app/shared/country";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    name: string;
    countries: Array<Country>;

    ngOnInit(){
    }

    constructor(private apiService: ApicallService){}

    searchCapital() {
        this.apiService
            .searchCountryByName(this.name)
            .subscribe((data:Country[]) => {
                console.log(data);
                this.countries = data;
            });
    }
}
