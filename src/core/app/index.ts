import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express, { Application } from 'express';
import morgan from 'morgan';
import router from '../../shared/router';
import { env } from '../setting/environment.setting';
export class App {
	private app: Application;
	constructor() {
		this.app = express();
		this.environment();
		this.middleware();
		this.routes();
	}
	async listen() {
		await this.app.listen(env.SERVER_PORT, () => {
			console.log(`The ${env.SERVICE_NAME} running in : ${env.SERVER_HOST}:${env.SERVER_PORT}`);
		});
	}

	middleware() {
		this.app.use(urlencoded({ extended: true }));
		this.app.use(json());
		this.app.use(morgan('dev'));
		this.app.use(cors());
		// this.app.use(responseEnhancer());
	}

	async database() {
		// db initialized
	}

	async redis() {
		// redis cache initialized
	}

	environment() {
		dotenv.config();
	}

	routes() {
		this.app.use(`${env.SERVER_PATH}`, router);
	}
}