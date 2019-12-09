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
            id: 0,
            name: "00 - 🆔 300098957",
            description: "setrar",
            avatar: "https://avatars0.githubusercontent.com/u/123704?s=400&v=4"
        },
        {
            id: 1,
            name: "01 - 🆔 300104524",
            description: "Echnaideurgeneus",
            avatar: "https://avatars2.githubusercontent.com/u/43045076?s=400&v=4"
        },
        {
            id: 2,
            name: "02 - 🆔 300104541",
            description: "Romeomian",
            avatar: "https://avatars1.githubusercontent.com/u/43684024?s=400&v=4"
        },
        {
            id: 3,
            name: "03 - 🆔 300105201",
            description: "BgbgL13",
            avatar: "https://avatars2.githubusercontent.com/u/43278130?s=400&v=4"
        },
        {
            id: 4,
            name: "04 - 🆔 300106918",
            description: "AEKchaouche",
            avatar: "https://avatars2.githubusercontent.com/u/43480300?s=400&v=4"
        },
        {
            id: 5,
            name: "05 - 🆔 300107361",
            description: "toch90",
            avatar: "https://avatars0.githubusercontent.com/u/43481043?s=400&v=4"
        },
        {
            id: 6,
            name: "06 - 🆔 300108234",
            description: "halimabzn",
            avatar: "https://avatars2.githubusercontent.com/u/43480203?s=400&v=4"
        },
        {
            id: 7,
            name: "07 - 🆔 300110500",
            description: "didier300110500",
            avatar: "https://avatars2.githubusercontent.com/u/43076393?s=400&v=4"
        },
        {
            id: 8,
            name: "08 - 🆔 300111671",
            description: "AbbasSadissou",
            avatar: "https://avatars2.githubusercontent.com/u/43480195?s=400&v=4"
        },
        {
            id: 9,
            name: "09 - 🆔 300111766",
            description: "Cheikhthiam",
            avatar: "https://avatars3.githubusercontent.com/u/44683625?s=400&v=4"
        },
        {
            id: 10,
            name: "10 - 🆔 300112017",
            description: "ordenrosae",
            avatar: "https://avatars0.githubusercontent.com/u/43898171?s=400&v=4"
        },
        {
            id: 11,
            name: "11 - 🆔 300112687",
            description: "jthn9022",
            avatar: "https://avatars2.githubusercontent.com/u/43135622?s=400&v=4"
        },
        {
            id: 12,
            name: "12 - 🆔 300112917",
            description: "djumaster",
            avatar: "https://avatars1.githubusercontent.com/u/43040182?s=400&v=4"
        },
        {
            id: 13,
            name: "13 - 🆔 300113775",
            description: "widby",
            avatar: "https://avatars0.githubusercontent.com/u/43479739?s=400&v=4"
        }
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
