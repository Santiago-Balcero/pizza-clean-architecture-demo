import { Pizza } from '../../../src/domain/models/pizza';
import { PizzaRepositoryI } from '../../../src/domain/ports/pizzaRepository';
import { PizzaService } from '../../../src/domain/services/pizzaService';

describe('getPizzas from pizzaService', () => {

    class MockPizzaRepository implements PizzaRepositoryI {
        getPizzas(): Pizza[] {
            throw new Error('Method not implemented.');
        }
    }
    
    let mockPizzaRepository: PizzaRepositoryI;

    beforeEach(() => {
        jest.clearAllMocks();
        mockPizzaRepository = new MockPizzaRepository();
    });

    test('Should return pizzas', () => {
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
        jest.spyOn(mockPizzaRepository, 'getPizzas').mockImplementation(() => expectedPizzas);
        const pizzaService = new PizzaService(mockPizzaRepository);
        const result = pizzaService.getPizzas();
        expect(result).toStrictEqual(expectedPizzas);
    });
});