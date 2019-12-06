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
            name: "HARLEY-DAVIDSON®ELECTRIC LIVEWIRE®2020",
            description: "",
            avatar:"https://www.clipartwiki.com/clipimg/full/353-3537261_harley-davidson-2020-models.png"
        },
        {
            id: 2,
            name: "BMW F800 GS",
            description: "Maximum speed\t\n" +
                "Suppérieure à 200 km/h,Système rechargeable de stockage d’énergie (RESS) de 15,5 kWh",
            avatar:"https://www.clipartwiki.com/clipimg/full/203-2038177_bmw-f800gs-adventure-png-image-preco-da-moto.png"
        },
        {
            id: 3,
            name: "Motocross XZ250R",
            description: "",
            avatar:"https://www.clipartwiki.com/clipimg/full/144-1440452_banner-black-and-white-download-bike-transparent-motocross.png"
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
