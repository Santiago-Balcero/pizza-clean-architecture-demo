import { Pizza } from "../domain/models/pizza";
import { PizzaDatasourceI } from "../domain/ports/pizzaDatasource";

export class DatasourceB implements PizzaDatasourceI{

    // For example Postgresql
    // database: Database;
    // constructor(a database) {
    //     this.database = database;
    // }
    
    getPizzas(): Pizza[] {
        const pizzas: Pizza[] = [
            {
                id: '3',
                name: 'Margarita',
                ingredients: ['Tomato', 'Cheese', 'Basil']
            },
            {
                id: '4',
                name: 'Cheese Mix',
                ingredients: ['Blue Cheese', 'Mozarella Cheese']
            }
        ];
        return pizzas;
    }

}