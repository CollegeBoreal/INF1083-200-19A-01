import { Injectable } from "@angular/core";

export interface IDataItem {
    id: number;
    name: string;
    description: string;
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    private items = new Array<IDataItem>(
        {
            id: 1,
            name: "Waves",
            description: "Description for Item 1"
        },
        {
            id: 2,
            name: "Braid",
            description: "Description for Item 2"
        },
        {
            id: 3,
            name: "Shampoo",
            description: "Description for Item 3"
        },
        {
            id: 4,
            name: "Pins",
            description: "Description for Item 4"
        },
        {
            id: 5,
            name: "Ponytails",
            description: "Description for Item 5"
        },
        {
            id: 6,
            name: "Conditioner",
            description: "Description for Item 6"
        },
        {
            id: 7,
            name: "Conditioners",
            description: "Description for Item 7"
        },
        {
            id: 8,
            name: "Spray",
            description: "Description for Item 8"
        },
        {
            id: 9,
            name: "Hair Color",
            description: "Description for Item 9"
        },
        {
            id: 10,
            name: "Oil",
            description: "Description for Item 10"
        },
        {
            id: 11,
            name: "Brush",
            description: "Description for Item 11"
        },
        {
            id: 12,
            name: "Anti Breakage",
            description: "Description for Item 12"
        },
        {
            id: 13,
            name: "Item 13",
            description: "Description for Item 13"
        },
        {
            id: 14,
            name: "Comb",
            description: "Description for Item 14"
        },
        {
            id: 15,
            name: "Cream",
            description: "Description for Item 15"
        },
        {
            id: 16,
            name: "Item 16",
            description: "Description for Item 16"
        },
        {
            id: 17,
            name: "Item 17",
            description: "Description for Item 17"
        },
        {
            id: 18,
            name: "Item 18",
            description: "Description for Item 18"
        },
        {
            id: 19,
            name: "Item 19",
            description: "Description for Item 19"
        },
        {
            id: 20,
            name: "Item 20",
            description: "Description for Item 20"
        }
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
