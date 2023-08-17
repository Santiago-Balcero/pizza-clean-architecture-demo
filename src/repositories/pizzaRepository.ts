import { Pizza } from "../domain/models/pizza";
import { PizzaDatasourceI } from "../domain/ports/pizzaDatasource";
import { PizzaRepositoryI } from "../domain/ports/pizzaRepository";

export class PizzaRepository implements PizzaRepositoryI {

    datasourceA: PizzaDatasourceI;
    datasourceB: PizzaDatasourceI;

    constructor(datasourceA: PizzaDatasourceI, datasourceB: PizzaDatasourceI) {
        this.datasourceA = datasourceA;
        this.datasourceB = datasourceB;
    }

    getPizzas(): Pizza[] {
        // Get data from different datasources
        // Write data to different datasources
        const pizzasA = this.datasourceA.getPizzas();
        const pizzasB = this.datasourceB.getPizzas();
        const allPizzas = pizzasA.concat(pizzasB);
        return allPizzas;
    }

}