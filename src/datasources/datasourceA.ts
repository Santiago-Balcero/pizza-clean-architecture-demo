import { Pizza } from "../domain/models/pizza";
import { PizzaDatasourceI } from "../domain/ports/pizzaDatasource";

export class DatasourceA implements PizzaDatasourceI{

    // For example: MongoDB
    // database: Database;
    // constructor(a database) {
    //     this.database = database;
    // }
    
    getPizzas(): Pizza[] {
        // Database logic
        const pizzas: Pizza[] = [
            {
                id: '1',
                name: 'Hawaiana',
                ingredients: ['Pineapple', 'Cheese', 'Ham']
            },
            {
                id: '2',
                name: 'Pepperoni',
                ingredients: ['Cheese', 'Pepperoni']
            }
        ];
        return pizzas;
    }

}