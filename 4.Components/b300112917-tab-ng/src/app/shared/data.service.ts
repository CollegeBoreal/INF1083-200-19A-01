import { Injectable } from "@angular/core";

export interface DataItem {
    id: number;
    name: string;
    description: string;
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    private items = new Array<DataItem>(
        {
            id: 1,
            name: "Shampoo",
            description: "Description for Item 1"
        },
        {
            id: 2,
            name: "Comb",
            description: "Description for Item 2"
        },
        {
            id: 3,
            name: "Spray",
            description: "Description for Item 3"
        },
        {
            id: 4,
            name: "Gel",
            description: "Description for Item 4"
        },
        {
            id: 5,
            name: "Wave",
            description: "Description for Item 5"
        },
        {
            id: 6,
            name: "Braid",
            description: "Description for Item 6"
        },
        {
            id: 20,
            name: "Item 20",
            description: "Description for Item 20"
        }
    );

    getItems(): Array<DataItem> {
        return this.items;
    }

    getItem(id: number): DataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
