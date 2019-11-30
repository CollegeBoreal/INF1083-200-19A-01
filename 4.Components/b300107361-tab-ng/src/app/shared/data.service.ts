import { Injectable } from "@angular/core";

export interface IDataItem {
    id: number;
    name: string;
    description: string;
    avatar: string;
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    private items = new Array<IDataItem>(
        {
            id: 1,
            name: "Acura GoodSon",
            description: "Description for Item 1",
            avatar: 'src="src/app/www/car_x/1.png"'
        },
        {
            id: 2,
            name: "Acura NSX",
            description: "Description for Item 2",
            avatar: ""
        },
        {
            id: 3,
            name: "Acura 2020",
            description: "Description for Item 3",
            avatar: ""
        },
        {
            id: 4,
            name: "Chevrolet Malibu",
            description: "Description for Item 4",
            avatar: ""
        },
        {
            id: 5,
            name: "Chevrolet Stingray",
            description: "Description for Item 5",
            avatar: ""
        },
        {
            id: 6,
            name: "Chevrolet 2020",
            description: "Description for Item 6",
            avatar: ""
        },
        {
            id: 7,
            name: "Corvette",
            description: "Description for Item 7",
            avatar: ""
        },
        {
            id: 8,
            name: "Honda Passport",
            description: "Description for Item 8",
            avatar: ""
        },
        {
            id: 9,
            name: "Jaguar iPace",
            description: "Description for Item 9",
            avatar: ""
        },
        {
            id: 10,
            name: "Jeep Wrangler",
            description: "Description for Item 10",
            avatar: ""
        },
        {
            id: 11,
            name: "Lamborghini Aventador",
            description: "Description for Item 11",
            avatar: ""
        }
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
