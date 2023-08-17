import { Pizza } from "../models/pizza";
import { PizzaRepositoryI } from "../ports/pizzaRepository";
import { PizzaServiceI } from "../ports/pizzaService";

export class PizzaService implements PizzaServiceI {

    pizzaRepository: PizzaRepositoryI;

    constructor(pizzaRepository: PizzaRepositoryI) {
        this.pizzaRepository = pizzaRepository;
    }

    getPizzas(): Pizza[] {
        // Other business logic here
        const pizzas = this.pizzaRepository.getPizzas();
        return pizzas;
    }

}