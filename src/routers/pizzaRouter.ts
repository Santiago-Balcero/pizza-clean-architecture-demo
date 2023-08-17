import express, { Router, Request, Response } from "express";
import { PizzaServiceI } from "../domain/ports/pizzaService";
import { Pizza } from "../domain/models/pizza";


export default function PizzaRouter(pizzaService: PizzaServiceI) {

    const router: Router = express.Router();

    router.get('', (req: Request, res: Response) => {
        const pizzas = pizzaService.getPizzas();
        res.send(pizzas);
    });

    return router;
}