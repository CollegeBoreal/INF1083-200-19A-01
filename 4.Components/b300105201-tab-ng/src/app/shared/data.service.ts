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
            name: "Accordeon",
            description: "Description for Item 1",
            avatar: "https://musiquedepot.ca/pub/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/1/3/1303-red_l.jpg"
        },
        {
            id: 2,
            name: "Band",
            description: "Description for Item 2",
            avatar: "https://static.musiciansfriend.com/thehub/binaries/content/gallery/mf/buying-guides/beginner-band-instruments-header.jpg"
        },
        {
            id: 3,
            name: "Drums",
            description: "Description fo",
            avatar: "https://ca.yamaha.com/fr/files/absolute_hybrid_maple_1200x480_c51673ece1df0f7146814a5613ab8671.jpg"
        },
        {
            id: 4,
            name: "Guitar",
            description: "Description for Item 4",
            avatar: "https://www.vpl.ca/sites/vpl/public/styles/instrument/public/instrument-acoustic-guitar-grey.jpg?itok=m5cPZZn_"
        },
        {
            id: 5,
            name: "Keyboard",
            description: "Description for Item 5",
            avatar: "https://thehub.musiciansfriend.com/images/keyboardguide/Keyboard-Piano-Buying-Guide.jpg"
        },
        {
            id: 6,
            name: "Piano",
            description: "Description for Item 6",
            avatar: "http://mspmusique.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/y/a/yamaha-nu1x-nphotos.jpg"
        }
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
