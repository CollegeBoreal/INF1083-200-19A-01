import { Component, OnInit } from "@angular/core";
import {ApicallService} from "~/app/shared/apicall.service";
import {Country} from "~/app/shared/country";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    name: string;
    countries: Array<Country>;
    constructor(private apiService: ApicallService) {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    searchCapital() {
        this.apiService
            .searchCountryByName(this.name)
            .subscribe((data:Country[]) => {
                console.log(data);
                this.countries = data;
            });
    }
}
