import { Router } from 'express';

class ItemsRoutes {
    public routes: Router;

    constructor() {
        this.routes = Router();
        this._init();
    }

    private _init() {
        this.routes.get('/', (req, res) => { console.log("Fetching item details...") });
    }
}

const itemsRoutes = new ItemsRoutes().routes;
export { itemsRoutes }