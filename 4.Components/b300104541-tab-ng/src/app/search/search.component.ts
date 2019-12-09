import { Component, OnInit } from "@angular/core";
import { Country } from "~/app/shared/country";
import { ApicallService } from "~/app/shared/apicall.service";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    name: string;
    countries: Array<Country>;

    constructor(private apiService: ApicallService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    searchCapital() {
        this.apiService
            .searchCountryByName(this.name)
            .subscribe((data: Array<Country>) => {
                console.log(data);
                this.countries = data;
            });
    }

}
