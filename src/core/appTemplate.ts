import { Server } from 'http'
import { Express } from 'express-serve-static-core'
import express from 'express'
import bodyParser from 'body-parser'

import cors from './cors'
import log from './log'
import mongo from './db/mongo'
import sleep from './sleep'

const checkDbConnection = async (connectionString: string, wait = 2): Promise<void> => {
    log.info('Connecting to the database...')
    if (! await mongo.connect(connectionString)) {
        log.error(`No connection to the database. Shutting down the application in ${wait} seconds.`)
        await sleep(wait * 1000)
        process.exit(-1)
        return
    }
    log.info('Connection to the database established.')
}

const startServer = (routes: (app: Express) => void, port = 3000, isDev = false): void => {
    log.info('Starting a server...')
    const app: Express = express()
    app.use(bodyParser.json())
    app.use(cors)
    routes(app)
    const server: Server = app.listen(port, () => {
        if (isDev) {
            config.welcomeMessage()
        }
        log.info(`App listening on port ${port}!`)
    })

    // catch console ^C signal
    process.on('SIGINT', () => {
        server.close(() => { console.log(); log.info('Process stopped') }) // eslint-disable-line no-console
        mongo.disconnect()
        process.exit(0)
    })
    // catch kubernetes term signal
    process.on('SIGTERM', () => {
        server.close(() => { console.log(); log.info('Process terminated') }) // eslint-disable-line no-console
        mongo.disconnect()
        process.exit(0)
    })
}

export const checkDbAndListen = async (connectionString: string, routes: (app: Express) => void, port = 3000, isDev = false): void => {

}

//main().catch((e) => log.error(e))
