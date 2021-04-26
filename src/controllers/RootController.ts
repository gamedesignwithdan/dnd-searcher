import { Request, Response, NextFunction } from 'express';
import { controller, get } from './decorators'

@controller("")
export class RootController {
    @get("/")
    getRoot(req: Request, res: Response) {
        debugger
        res.send({
            "name": "daniel glover"
        })
    }
}