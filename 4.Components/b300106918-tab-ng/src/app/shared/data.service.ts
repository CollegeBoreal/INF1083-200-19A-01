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
            name: "Insttalations",
            description: "Description for Item 1"
            avatar:"https://extr3metech.files.wordpress.com/2012/10/cisco_1841_2.jpg"
          },
        {
            id: 2,
            name: "Products",
            description: "Description for Item 2"
        },
        {
            id: 3,
            name: "Solutions",
            description: "Description for Item 3"
        },

    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
