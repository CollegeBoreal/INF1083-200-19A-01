import { Component, OnInit } from "@angular/core";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { Page } from "tns-core-modules/ui/page";
import { DataService, IDataItem } from "../shared/data.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
    styleUrls: ["./_app-component.scss"]
})
export class HomeComponent implements OnInit {
    items: Array<IDataItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
    
     onButtonTap(): void {
        console.log("Button was pressed");
    }
    
    searchPhrase: string;
    onSearchSubmit(args): void {
        let searchBar = <SearchBar>args.object;
        console.log("You are searching for " + searchBar.text);
    }

    textFieldValue: string = "";


    @ViewChild("rsd") rSideDrawer: ElementRef;

    cities: { index: number, name: string, city: string, state: string, temp: string, img: string }[] = [
        { index: 0, name: "Banff, AB", city: "Banff", state: "Alberta, Canada", temp: "21°C", img: "~/images/banff.jpg" },
        { index: 1, name: "Barrow, AK", city: "Barrow", state: "Alaska, USA", temp: "-5°F", img: "~/images/barrow.jpg" },
        { index: 2, name: "San Diego, CA", city: "San Diego", state: "California, USA", temp: "84°F", img: "~/images/sandiego.jpg" }
    ];

    city = this.cities[0].city;
    state = this.cities[0].state;
    temp = this.cities[0].temp;
    img = this.cities[0].img;

    constructor(private page: Page) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }

    drawerLoaded(args) {
        let drawer = <RadSideDrawer>args.object;

        if (isIOS) {
            // if your menu is drawn 'below' the hostview, do this:
            //drawer.ios.defaultSideDrawer.style.shadowMode = 1; // TKSideDrawerShadowMode.Hostview;
            drawer.ios.defaultSideDrawer.style.shadowMode = 2; // TKSideDrawerShadowMode.SideDrawer;
            // if you have shadowMode = 2, then you can add a little dim to the lower layer to add some depth. Keep it subtle though:
            drawer.ios.defaultSideDrawer.style.dimOpacity = 0.12;
            // then tweak the shadow to your liking:
            drawer.ios.defaultSideDrawer.style.shadowOpacity = 0.75; // 0-1, higher is darker
            drawer.ios.defaultSideDrawer.style.shadowRadius = 5; // higher is more spread
            // bonus feature: control the menu animation speed (in seconds)
            drawer.ios.defaultSideDrawer.transitionDuration = 0.25;
        }
    }

    onOpenDrawerTap(): void {
        this.rSideDrawer.nativeElement.toggleDrawerState();
    }

    chooseCity(args): void {
        let obj = this.cities[args.index];

        this.city = obj.city;
        this.state = obj.state;
        this.temp = obj.temp;
        this.img = obj.img;

        this.rSideDrawer.nativeElement.toggleDrawerState();
    }
}
