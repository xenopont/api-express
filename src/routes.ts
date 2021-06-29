import { Express } from 'express-serve-static-core'
import { Request, Response } from 'express'

export default (app: Express): void => {
    app.get('/heartbeat', (request: Request, response: Response) => response.status(204).send())
}
