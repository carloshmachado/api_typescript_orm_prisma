import express from 'express'
import status from './status'
import routes from './route'
import bodyParser from 'body-parser'
import { Postgres } from './PrismaDB/Postgres'


class App {
    express: express.Application

    constructor() {
        this.express = express()
        this.status()
        this.middlewares()
        this.routes()
        this.connectDB()
    }

    private middlewares() {
        this.express.use(express.json({ limit: '20MB' }))
        this.express.use(bodyParser.urlencoded({ extended: false }))
        this.express.use(bodyParser.json())
    }

    private routes() {
        this.express.use(routes)
    }

    private connectDB() {
        Postgres.connect()
    }
    private status() {
        this.express.use(status)
    }
}

export default new App().express