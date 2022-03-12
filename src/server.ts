import express, { Express } from 'express';
import bodyParser from 'body-parser';
import createCustomerRoute from './api/customer/customer-route';
import { errors } from 'celebrate';
import { Sequelize } from 'sequelize-typescript';
import { sequelize } from './sequelize';

class Server {
    app: Express;
    sequelize: Sequelize;

    constructor() {
       this.app = express();
       this.sequelize = sequelize;
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


