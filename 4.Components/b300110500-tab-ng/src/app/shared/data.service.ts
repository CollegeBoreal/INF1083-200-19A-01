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
            name: "Visa residence temporaire",
            description: "travailleurs qualifies",
            avatar: "https://fr.hespress.com/wp-content/uploads/2018/11/image.jpg"
        },
        {
            id: 1,
            name: "Visa etudiant",
            description: "etudes et recherche",
            avatar: "https://www.canada.ca/content/dam/ircc/migration/ircc/images/template/lp-study.jpg"
        },
        {
            id: 2,
            name: "Visa refugier",
            description: "Refugies et asile politique",
            avatar: "https://www.canada.ca/content/canadasite/fr/immigration-refugies-citoyennete/services/etudier-canada/_jcr_content/par/mwsfeatures_copy_cop/featureimage1.img.jpg/1569954309958.jpg"
        },
        {
            id: 3,
            name: " Visa tourisme",
            description: " tourisme",
            avatar: "https://img.over-blog-kiwi.com/1/18/77/42/20180909/ob_69cf00_lettre-motivation-visa-touriste.jpg"
        },
        {
            id: 4,
            name: "Visa temporaire",
            description: "visite",
            avatar: "http://tunisievisa.info/wp-content/uploads/2016/12/VISATHAI.jpg"
        },
        {
            id: 5,
            name: "Visa vert",
            description: "travailleur non qualifies",
            avatar: "https://avatars0.githubusercontent.com/u/43481043?s=400&v=4"
        },
        {
            id: 6,
            name: "Visa diplomatie",
            description: "visa diplomatique",
            avatar: "https://i1.wp.com/capitaineremi.com/wp-content/uploads/2017/06/cuba-visa-carte-touriste-1024x576.jpg?resize=1024%2C576"
        },

        {
            id: 8,
            name: " Visa rapatier",
            description: "rapatriement",
            avatar: "https://i1.wp.com/capitaineremi.com/wp-content/uploads/2017/06/cuba-visa-carte-touriste-1024x576.jpg?resize=1024%2C576"
        },

        {
            id: 9,
            name: " Visa evacuation",
            description: "urgence et evacuationr",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwtF9njoHG5tQBQEExgdv0QibynOrv_B_65ASzfS8ZcF1r1SNO&s"
        }
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
