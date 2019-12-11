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
            name: "Huawei",
            description: "The best phone in town",
            avatar: "https://www.cdsolution.ca/wp-content/uploads/2019/05/huawei-p20-pro.png"
        },
        {
            id: 2,
            name: "Iphone 6",
            description: "best price",
            avatar: "https://images-na.ssl-images-amazon.com/images/I/412jWjEIzKL.jpg"
        },
        {
            id: 3,
            name: "Iphone 7",
            description: "red colour, best price",
            avatar: "https://i5.walmartimages.ca/images/Large/264/655/6000197264655.jpg"
        },
        {
            id: 4,
            name: "Iphone 8",
            description: "obtenir a 0$",
            avatar: "https://s7.s-sfr.fr/mobile/uc/device/j7j5cjt0/iphone8-back-noir-400x540.png?ts=1505314463328"
        },
        {
            id: 5,
            name: "Iphone X",
            description: "nice phone",
            avatar: "https://images-na.ssl-images-amazon.com/images/I/618ZI2Xyw%2BL._SY445_.jpg"
        },

        {
            id: 6,
            name: "Iphone XI",
            description: "obtenir a credit",
            avatar: "https://www.3u.com//upload/20190115/1547519932922067602.png"
        },
        {
            id: 7,
            name: "LG",
            description: "nouveau model",
            avatar: "https://images-na.ssl-images-amazon.com/images/I/81uw7rANIlL._SX425_.jpg"
        },
        {
            id: 8,
            name: "Samsung ",
            description: "noir, blanc",
            avatar: "https://www.bell.ca/Styles/wireless/all_languages/all_regions/catalog_images/Samsung-Galaxy-S10-Plus/Samsung_Galaxy_S10-plus_black_lrg1.png"
        },
        {
            id: 9,
            name: "galaxyA50",
            description: "blanc, nouveau model",
            avatar: ""
        },

        {
            id: 10,
            name: "galaxyS10",
            description: "a bas prix",
            avatar: "https://assets.pcmag.com/media/images/547224-samsung-galaxy-smartphones.jpg?width=333&height=245"
        }
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
