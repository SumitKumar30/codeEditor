import { Router } from 'express';
import { userRoutes } from './user/user.routes';
import { itemsRoutes } from './items/items.routes';

class AppRoutes {

    public routes: Router;
    constructor() {
        this.routes = Router();
        this._init()
    }

    private _init() {
        // connecting all sub routes
        this.routes.use('/user', userRoutes);
        this.routes.use('/items', itemsRoutes);
        this.routes.get('/', (req, res) => {
            console.log('POST: \'/\'');

            res.send('hello from server')
        })
    }
}

const appRoutes = new AppRoutes().routes;
export { appRoutes } 
