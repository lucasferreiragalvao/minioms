import express, { Express } from 'express';
import bodyParser from 'body-parser';
import createCustomerRoute from './api/customer/customer-route';
import { errors } from 'celebrate';

class Server {
    app: Express;

    constructor() {
       this.app = express();
       this.addStartingMiddlewares();
       this.addRoutes();
       this.addEndingMiddlwares();
    }

    private addStartingMiddlewares() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }

    private addEndingMiddlwares() {
        this.app.use(errors());
    }

    private addRoutes() {
        this.app.use(createCustomerRoute);
    }
}

export default new Server().app;


