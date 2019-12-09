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
            name: "FABRICE PORTRAIT",
            description: "Photographie d'étudiant pour affiche ",
            avatar: "https://github.com/8dbe/picasa/blob/master/pictures/p1.jpeg?raw=true"
        },
        {
            id: 2,
            name: "TOCHGALY PORTRAIT",
            description: "Photographie d'étudiant pour affiche ",
            avatar: "https://github.com/8dbe/picasa/blob/master/pictures/p2.jpeg?raw=true"
        },
        {
            id: 3,
            name: "STUDENT GROUP",
            description: "toch",
            avatar: "https://github.com/8dbe/picasa/blob/master/pictures/p3.jpeg?raw=true"
        },
        {
            id: 4,
            name: "FOOD",
            description: "food1",
            avatar: "https://github.com/8dbe/picasa/blob/master/pictures/p4.jpeg?raw=true"
        },
        {
            id: 5,
            name: "NATURE",
            description: "flowers",
            avatar: "https://github.com/8dbe/picasa/blob/master/pictures/p5.jpeg?raw=true"
        },
        {
            id: 6,
            name: "PHOTOSHOP",
            description: "",
            avatar: "https://github.com/8dbe/picasa/blob/master/pictures/p6.jpeg?raw=true"
        },
        {
            id: 7,
            name: "HAITIAN FOOD",
            description: "La meilleure cuisine de la caraibe ",
            avatar: "https://github.com/8dbe/picasa/blob/master/pictures/p7.jpeg?raw=true"
        },
        {
            id: 8,
            name: "WINTER",
            description: "Le canada a deux saisons l'hiver et Juillet ",
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
