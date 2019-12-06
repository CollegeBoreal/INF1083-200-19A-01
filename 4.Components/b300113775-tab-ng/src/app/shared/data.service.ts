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
            name: "portrait1",
            description: "fabrice",
            avatar: "https://github.com/8dbe/picasa/blob/master/pictures/p1.jpeg?raw=true"
        },
        {
            id: 2,
            name: "portrait2",
            description: "toch",
            avatar: "https://github.com/8dbe/picasa/blob/master/pictures/p2.jpeg?raw=true"
        },
        {
            id: 3,
            name: "portrait3",
            description: "toch",
            avatar: "https://github.com/8dbe/picasa/blob/master/pictures/p3.jpeg?raw=true"
        },
        {
            id: 4,
            name: "Food",
            description: "food1",
            avatar: "https://github.com/8dbe/picasa/blob/master/pictures/p4.jpeg?raw=true"
        },
        {
            id: 5,
            name: "Nature",
            description: "flowers",
            avatar: "https://github.com/8dbe/picasa/blob/master/pictures/p5.jpeg?raw=true"
        },
        {
            id: 6,
            name: "Photoshop",
            description: "edit",
            avatar: "https://github.com/8dbe/picasa/blob/master/pictures/p6.jpeg?raw=true"
        },
        {
            id: 7,
            name: "Haitian Food",
            description: "mets haitiens",
            avatar: "https://github.com/8dbe/picasa/blob/master/pictures/p7.jpeg?raw=true"
        },
        {
            id: 8,
            name: "hiver",
            description: "Winter In Canada",
            avatar: "https://github.com/8dbe/picasa/blob/master/pictures/p8.jpeg?raw=true"
        }

    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
