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
            name: "Hijab Style",
<<<<<<< HEAD
            description:"Fashion arabic style",
            avatar: "https://i.pinimg.com/564x/2b/0f/7f/2b0f7fd9c9f4b25fc114e88e9fdd0c00.jpg"
=======
            description: "Fashion arabic style",
            avatar: "![image](1.jpg)"
>>>>>>> bf3c1a8c4fd2aa6a0b0b577999922f73e315378c
        },
        {
            id: 2,
            name: "Accessoires",
<<<<<<< HEAD
            description:"the latest hijab accessories",
            avatar: "https://i.pinimg.com/originals/35/27/8a/35278adaa57349ad933722cd79c3fc91.jpg"
=======
            description: "the latest hijab accessories",
            avatar: "![image](2.jpg)"
>>>>>>> bf3c1a8c4fd2aa6a0b0b577999922f73e315378c
        },
        {
            id: 3,
            name: "Print Hijab",
<<<<<<< HEAD
            description:"A wide variety of hijab print options",
            avatar: "https://i.pinimg.com/564x/9c/56/4b/9c564b9f7cc63997409b2651f70a987d.jpg"
=======
            description: "A wide variety of hijab print options",
            avatar: "![image](3.jpg)"
>>>>>>> bf3c1a8c4fd2aa6a0b0b577999922f73e315378c

        },
        {
            id: 4,
            name: "Under Hijab",
<<<<<<< HEAD
            description:"High Quality Under Scarf Hijab",
            avatar: "https://i.pinimg.com/564x/ad/46/02/ad4602044cbfd7c32cb1f5ad7f585659.jpg"
=======
            description: "High Quality Under Scarf Hijab",
            avatar: "![image](4.jpg)"
>>>>>>> bf3c1a8c4fd2aa6a0b0b577999922f73e315378c
        }
       
       
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
