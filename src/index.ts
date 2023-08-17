import app from './server/server';
import PizzaRouter from './routers/pizzaRouter';
import { config } from 'dotenv';
import { PizzaService } from './domain/services/pizzaService';
import { PizzaRepository } from './repositories/pizzaRepository';
import { DatasourceA } from './datasources/datasourceA';
import { DatasourceB } from './datasources/datasourceB';


function main() {

    // Put everything together

    // Get database connection and then...
    const datasourceA = new DatasourceA();
    const datasourceB = new DatasourceB();
    const pizzaRepository = new PizzaRepository(datasourceA, datasourceB);
    const pizzaService = new PizzaService(pizzaRepository);
    const pizzaRouter = PizzaRouter(pizzaService);
    config();
    const port = process.env.PORT;
    app.use('/pizzas', pizzaRouter);
    app.listen(3000, () => console.log('Want pizzas? Pizza server running on port', port))

}

main();