import { Server } from 'http'
import { Express } from 'express-serve-static-core'
import express, { RequestHandler } from 'express'

import config from './config/'
import cors from './core/http/cors'
import log from './core/log'
import mongo from './core/db/mongo'
import routes from './routes'
import sleep from './core/sleep'

const app: Express = express()

const exitApp = (server: Server, mongo: { disconnect(): Promise<void> }, message: string ): void => {
    server.close((): void => {
        void (async () => {
            await mongo.disconnect()
            console.log() // eslint-disable-line no-console
            log.info(message)
            process.exit(0)
        })()
    })
}

const main = async (): Promise<void> => {
    // check the db connection
    log.info('Connecting to the database...')
    if (! await mongo.connect(config.db.connectionString)) {
        const wait = 2
        log.error(`No connection to the database. Shutting down the application in ${wait} seconds.`)
        await sleep(wait * 1000)
        process.exit(-1)
        return
    }
    log.info('Connection to the database established.')

    // start a server
    log.info('Starting a server...')
    app.use(express.json({ strict: false }) as RequestHandler)
    app.use(cors)
    routes(app)
    const server: Server = app.listen(config.PORT, () => {
        log.info(`App listening on port ${config.PORT}!`)
    })

    // catch console ^C signal
    process.on('SIGINT', () => {
        exitApp(server, mongo, 'Process stopped')
    })
    // catch kubernetes term signal
    process.on('SIGTERM', () => {
        exitApp(server, mongo, 'Process terminated')
    })
}

main().catch((e) => log.error(e))
