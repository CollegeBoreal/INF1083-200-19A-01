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
            name: "Assurance vie",
            description: "5000.000.00$"
        },
        {
            id: 2,
            name: "Assurance santé",
            description: "2000.000.00$"
        },
        {
            id: 3,
            name: "Assurance Maison",
            description: "5000.00.0$"
        },
        {
            id: 4,
            name: "Assurance voyage",
            description: "150.000.00$"
        },
        {
            id: 5,
            name: "Assurance incendie",
            description: "2000.000.00$"
        },
        {
            id: 6,
            name: "Item 6",
            description: "Description for Item 6"
        },
        {
            id: 7,
            name: "Item 7",
            description: "Description for Item 7"
        },
        {
            id: 8,
            name: "Item 8",
            description: "Description for Item 8"
        },
        {
            id: 9,
            name: "Item 9",
            description: "Description for Item 9"
        },
        {
            id: 10,
            name: "Item 10",
            description: "Description for Item 10"
        },
        {
            id: 11,
            name: "Item 11",
            description: "Description for Item 11"
        },
        {
            id: 12,
            name: "Item 12",
            description: "Description for Item 12"
        },
        {
            id: 13,
            name: "Item 13",
            description: "Description for Item 13"
        },
        {
            id: 14,
            name: "Item 14",
            description: "Description for Item 14"
        },
        {
            id: 15,
            name: "Item 15",
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
