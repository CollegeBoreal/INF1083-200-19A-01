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
            name: "Installations",
            description: "mise à jour windows "
            avatar:"http://secure-it.ch/sit/installation-forcee-de-windows-10/"
        },
        {
            id: 2,
            name: "Products",
            description: "router cisco"
            avatar:
        },
        {
            id: 3,
            name: "Solutions",
            description: "support technique"
            avatar: "http://secure-it.ch/sit/installation-forcee-de-windows-10/"
        },

    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
