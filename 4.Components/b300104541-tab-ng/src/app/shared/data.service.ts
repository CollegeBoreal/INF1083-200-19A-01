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
            name: "FIFA19",
            description: "Description for Item 1",
            avatar: "https://media.gamestop.com/i/gamestop/10164242/FIFA-19-Champions-Edition?$pdp$"
        },
        {
            id: 2,
            name: "Item 2",
            description: "Description for Item 2",
            avatar: ""
        },
        {
            id: 3,
            name: "Item 3",
            description: "Description for Item 3",
            avatar: ""
        },
        {
            id: 4,
            name: "Item 4",
            description: "Description for Item 4",
            avatar: ""
        },
        {
            id: 5,
            name: "Item 5",
            description: "Description for Item 5",
            avatar: ""
        },
        {
            id: 6,
            name: "Item 6",
            description: "Description for Item 6",
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
