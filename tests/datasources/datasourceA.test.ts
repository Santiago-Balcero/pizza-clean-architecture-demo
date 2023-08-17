import { DatasourceA } from "../../src/datasources/datasourceA";
import { PizzaDatasourceI } from "../../src/domain/ports/pizzaDatasource";

describe('Datasource A', () => {

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
        }
    ];

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('getPizzas', () => {
        const datasource = new DatasourceA();
        jest.spyOn(datasource, 'getPizzas').mockImplementation(() => expectedPizzas);
        const result = datasource.getPizzas();
        expect(result).toStrictEqual(expectedPizzas);
    });
});