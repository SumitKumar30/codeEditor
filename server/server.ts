import * as express from "express";
import * as bodyParser from "body-parser";
import { appRoutes } from './routes/app.routes';
import './config/config.ts';

const PORT = 3000;

class ExpressApp {

    public app: express.Application;

    constructor() {
        this.app = express();
        this._init();
    }

    private _init(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

const app = new ExpressApp().app;

app.use(appRoutes);     // connecting routes

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on port ${PORT}`);
})