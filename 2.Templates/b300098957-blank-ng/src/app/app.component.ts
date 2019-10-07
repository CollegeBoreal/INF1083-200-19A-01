import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { map, flatMap } from 'rxjs/operators';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    pokemon: Array<any>;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .pipe(
            map( result => result ),
            flatMap(result => result    )
            )
            .subscribe(
                result => {
                    this.pokemon.push(result);
                },
                error => {
                    console.error(error);
                }
            );
    }
}
