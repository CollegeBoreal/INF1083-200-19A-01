import { Injectable } from "@angular/core";

export interface DataItem {
    id: number;
    name: string;
    description: string;
    avatar: string;
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    private items = new Array<DataItem>(
        {
            id: 1,
            name: "Acura GoodSon",
            description: "God's favorite car",
            avatar: "~/car_x/5.png"
        },
        {
            id: 2,
            name: "Acura NSX",
            description: "Summer's out! Hop in!",
            avatar: "~/car_x/6.png"
        },
        {
            id: 3,
            name: "Acura 2020",
            description: "Wanna know if it's real, Try it!",
            avatar: "~/car_x/11.png"
        },
        {
            id: 4,
            name: "Chevrolet Malibu",
            description: "Take your family with you and roll all night...",
            avatar: "~/car_x/4.png"
        },
        {
            id: 5,
            name: "Chevrolet Stingray",
            description: "Straight from Venus!",
            avatar: "~/car_x/3.png"
        },
        {
            id: 6,
            name: "Chevrolet 2020",
            description: "The city is not your limit",
            avatar: "~/car_x/7.png"
        },
        {
            id: 7,
            name: "Corvette",
            description: "Best way to keep your girl nearby",
            avatar: "~/car_x/2.png"
        },
        {
            id: 8,
            name: "Honda Passport",
            description: "It's more than a simple car",
            avatar: "~/car_x/8.png"
        },
        {
            id: 9,
            name: "Jaguar iPace",
            description: "Never been so close to realise your dream.",
            avatar: "~/car_x/0.png"
        },
        {
            id: 10,
            name: "Jeep Wrangler",
            description: "Try not to like it! IMPOSSIBLE!",
            avatar: "~/car_x/1.png"
        },
        {
            id: 11,
            name: "Lamborghini Aventador",
            description: "Make your Boss Jealous!",
            avatar: "~/car_x/10.png"
        },
        {
            id: 12,
            name: "Lamborghini Palm Beach",
            description: "Pull up Proudly!",
            avatar: "~/car_x/9.png"
        }
    );

    getItems(): Array<DataItem> {
        return this.items;
    }

    getItem(id: number): DataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
