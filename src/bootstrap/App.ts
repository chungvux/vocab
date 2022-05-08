import config from '@config/index';
import { loggerConfig } from '@utils/logger';
import cookieParser from 'cookie-parser';
import express, { Express } from 'express';
import expressWinston from 'express-winston';
import http, { Server } from 'http';
import { createConnection } from 'typeorm';
import cors from 'cors';
import { MainRouter } from '@modules/index';
// @see https://www.apollographql.com/docs/apollo-server/integrations/middleware/#apollo-server-express
export class App {
    public readonly port: number;
    public readonly app: Express;
    public readonly httpServer: Server;

    public constructor() {
        this.port = config.PORT;
        this.app = express();
        this.httpServer = http.createServer(this.app);
    }

    protected async bootstrap(): Promise<void> {
        await this.middlewares();
        await createConnection();
    }

    protected async middlewares(): Promise<void> {
        this.app.use(cookieParser());
        this.app.use(express.urlencoded());
        this.app.use(express.json());
        this.app.use(expressWinston.logger(loggerConfig));
        if (config.env !== 'production') {
            this.app.use(cors({ origin: '*', exposedHeaders: ['Content-Disposition'] }));
        }
      this.app.use(MainRouter())
    }

    public async start(): Promise<void> {
        try {
            await this.bootstrap();
            await new Promise((resolve) => {
                this.httpServer.listen(this.port, () => resolve(true));
            });
            console.log(`Server started on http://localhost:${this.port}`);
        } catch (error) {
            console.log('Start error: ', error);
        }
    }
}
