import { Pizza } from "../models/pizza";

export interface PizzaRepositoryI {
    getPizzas(): Pizza[];
    // getPizza(): Pizza;
    // createPizza(): boolean;
    // updatePizza(): boolean;
    // deletePizza(): boolean;
}