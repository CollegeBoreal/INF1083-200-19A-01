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
            name: "FIFA20",
            description: "Jeux de Foot",
            avatar: "https://media.playstation.com/is/image/SCEA/fifa-20-standard-edition-01-ps4-us-05sep19?$native_nt$"
        },
        {
            id: 2,
            name: "Naruto",
            description: "Jeux d'Aventure",
            avatar: "http://image.jeuxvideo.com/medias/142892/1428916387-80-jaquette-avant.jpg"
        },
        {
            id: 3,
            name: "UFC 19",
            description: "Jeux de Combat",
            avatar: "https://media.gamestop.com/i/gamestop/10156108/EA-Sports-UFC-3?$pdp$"
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
