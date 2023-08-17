export class Pizza {

    readonly id: string;
    readonly name: string;
    ingredients: string[];

    constructor(id: string, name: string, ingredients: string[]) {
        this.id = id;
        this.name = name;
        this.ingredients = ingredients;
    }

}