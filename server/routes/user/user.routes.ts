import { Router } from 'express';

class UserRoutes {
    public routes: Router;

    constructor() {
        this.routes = Router();
        this._init();
    }

    private _init() {
        this.routes.get('/', (req, res) => { console.log("Fetching user details...") });
        this.routes.post('/data', (req, res) => { });
        this.routes.get('/data', (req, res) => {
            res.send("Fetching user data from the server...")
        });
    }
}

const userRoutes = new UserRoutes().routes;
export { userRoutes }