import app from '../../src/server/server';
import PizzaRouter from '../../src/routers/pizzaRouter';
import request from 'supertest';
import { Pizza } from "../../src/domain/models/pizza";
import { PizzaServiceI } from "../../src/domain/ports/pizzaService";

class MockPizzaService implements PizzaServiceI {
    getPizzas(): Pizza[] {
        throw new Error('Method not implemented.');
    }
}

describe('Pizza Router', () => {

    let mockPizzaService: PizzaServiceI;

    beforeAll(() => {
        mockPizzaService = new MockPizzaService();
        app.use('/pizzas', PizzaRouter(mockPizzaService));
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /pizzas', () => {
        const expectedPizzas = [
            {
                id: '1',
                name: 'Hawaiana',
                ingredients: ['Pineapple', 'Cheese', 'Ham']
            },
            {
                id: '2',
                name: 'Pepperoni',
                ingredients: ['Cheese', 'Pepperoni']
            },
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
        it('Should return pizzas', async () => {
            jest.spyOn(mockPizzaService, 'getPizzas').mockImplementation(() => expectedPizzas);
            const response = await request(app).get('/pizzas');
            expect(response.status).toBe(200);
            expect(mockPizzaService.getPizzas).toBeCalledTimes(1);
            expect(response.body).toStrictEqual(expectedPizzas);

        });
    });

});