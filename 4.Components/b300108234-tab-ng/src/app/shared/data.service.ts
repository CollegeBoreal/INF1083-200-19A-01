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
            name: "Hijab Style",
            description: "Fashion arabic style",
            avatar: "~/1.jpeg"
        },
        {
            id: 2,
            name: "Accessoires",
            description: "the latest hijab accessories",
            avatar: "~/2.jpeg"
        },
        {
            id: 3,
            name: "Print Hijab",
            description: "A wide variety of hijab print options",
            avatar: "~/3.png"

        },
        {
            id: 4,
            name: "Under Hijab",
            description: ""
            avatar: "~/4.png"
        },
       
       
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
