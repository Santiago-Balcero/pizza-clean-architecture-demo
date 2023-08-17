import { Pizza } from '../../src/domain/models/pizza';
import { PizzaDatasourceI } from '../../src/domain/ports/pizzaDatasource';
import { PizzaRepositoryI } from '../../src/domain/ports/pizzaRepository';
import { PizzaRepository } from '../../src/repositories/pizzaRepository';


class MockPizzaDatasourceA implements PizzaDatasourceI {
    getPizzas(): Pizza[] {
        throw new Error('Method not implemented.');
    }
}

class MockPizzaDatasourceB implements PizzaDatasourceI {
    getPizzas(): Pizza[] {
        throw new Error('Method not implemented.');
    }
}
    
describe('Pizza Repository', () => {

    let mockPizzaDatasourceA: PizzaDatasourceI;
    let mockPizzaDatasourceB: PizzaDatasourceI;

    beforeEach(() => {
        jest.clearAllMocks();
        mockPizzaDatasourceA = new MockPizzaDatasourceA();
        mockPizzaDatasourceB = new MockPizzaDatasourceB();
    });

    describe('getPizzas', () => {

        test('Should return pizzas', () => {
            const expectedPizzasA = [
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
            const expectedPizzasB = [
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
            const totalPizzas = expectedPizzasA.concat(expectedPizzasB);
            jest.spyOn(mockPizzaDatasourceA, 'getPizzas').mockImplementation(() => expectedPizzasA);
            jest.spyOn(mockPizzaDatasourceB, 'getPizzas').mockImplementation(() => expectedPizzasB);
            const pizzaRepository: PizzaRepositoryI = new PizzaRepository(mockPizzaDatasourceA, mockPizzaDatasourceB);
            const result = pizzaRepository.getPizzas();
            expect(result).toStrictEqual(totalPizzas);
        });
    });

});