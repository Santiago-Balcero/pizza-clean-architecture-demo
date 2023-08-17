import { Pizza } from "../models/pizza";

export interface PizzaDatasourceI {
    getPizzas(): Pizza[];
}