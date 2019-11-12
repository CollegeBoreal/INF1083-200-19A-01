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
            name: "🆔 300104524",
            description: ":octocat: Echnaideurgeneus"
        },
        {
            id: 2,
            name: "🆔 300104541",
            description: "Romeomian"
        },
        {
            id: 3,
            name: "🆔 300105201",
            description: "BgbgL13"
        },
        {
            id: 4,
            name: "🆔 300106918",
            description: "AEKchaouche"
        },
        {
            id: 5,
            name: "Etudiant: 5",
            description: "Description for Item 5"
        },
        {
            id: 6,
            name: "Etudiant: 6",
            description: "Description for Item 6"
        },
        {
            id: 7,
            name: "Etudiant: 7",
            description: "Description for Item 7"
        },
        {
            id: 8,
            name: "Etudiant: 8",
            description: "Description for Item 8"
        },
        {
            id: 9,
            name: "Etudiant: 9",
            description: "Description for Item 9"
        },
        {
            id: 10,
            name: "Etudiant: 10",
            description: "Description for Item 10"
        },
        {
            id: 11,
            name: "Etudiant: 11",
            description: "Description for Item 11"
        },
        {
            id: 12,
            name: "Etudiant: 12",
            description: "Description for Item 12"
        }
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
