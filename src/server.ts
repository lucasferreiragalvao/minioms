import express, { Express } from 'express';
import bodyParser from 'body-parser';

class Server {
    app: Express;

    constructor() {
       this.app = express();
       this.addStartingMiddlewares();
       this.addRoutes();
    }

    private addStartingMiddlewares() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }

    private addRoutes() {
        this.app.get('/', (req, res) => {
            res.json({
                ok: 'Hello World!'
            })
        });
    }
}

export default new Server().app;


