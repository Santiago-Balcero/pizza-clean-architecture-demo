import { Pizza } from "../models/pizza";

export interface PizzaServiceI {
    getPizzas(): Pizza[];
    // getPizza(): Pizza;
    // createPizza(): string;
    // updatePizza(): string;
    // deletePizza(): string;
}