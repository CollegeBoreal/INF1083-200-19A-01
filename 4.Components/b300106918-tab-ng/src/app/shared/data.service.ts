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
            name: "Solutions",
            description: "technical support",
            avatar: "https://www.patton.com/images/support/boxes/supportservice.png"
        },
        {
            id: 2,
            name: "Products",
            description: "cisco device",
            avatar: "https://images-na.ssl-images-amazon.com/images/I/71l57pr9pUL._SX679_.jpg"
        },
        {
            id: 3,
            name: "installation",
            description: "processus d'installation",
            avatar: "https://i.ytimg.com/vi/44RQGA2To5E/maxresdefault.jpg"
        },

    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
