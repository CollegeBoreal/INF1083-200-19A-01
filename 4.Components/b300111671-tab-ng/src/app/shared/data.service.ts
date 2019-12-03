import { Injectable } from "@angular/core";

export interface IDataItem {
    id: number;
    name: string;
    description1: string;
    description2: string;
    description3: string;
    avatar: string;
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    private items = new Array<IDataItem>(
        {
            id: 1,
            name: "Boubou traditionelle du Senegal",
            description1: "Genre dashiki",
            description2: "Homme",
            description3: "Femme",
            avatar:"https://i.pinimg.com/564x/25/06/fa/2506fa395e3d4956a1629d4202a7296d.jpg"

        },
        {
            id: 2,
            name: "Boubou traditionelle du Benin",
            description1: "Genre dashiki",
            description2: "Homme",
            description3: "Femme",
            avatar:"https://i.pinimg.com/originals/b8/4b/94/b84b94c8506f8da8619216953291b9a8.jpg"
        },
        {
            id: 3,
            name: "Boubou traditionelle du Mali",
            description1: "Genre dashiki  ",
            description2: "Homme",
            description3: "Femme",
            avatar:"https://i.pinimg.com/originals/b0/05/ff/b005ffac0cf04ade386414ed04f182ad.png"
        },

    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
