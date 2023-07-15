import { PrismaClient } from '@prisma/client';
import { Nullable } from '../../../domain/Nullable';

export class PrismaDBClientFactory {
	private static clients: PrismaClient;

	static openClient(): PrismaClient {
		let client = PrismaDBClientFactory.getClient();

		if (!client) {
			client = PrismaDBClientFactory.createAndConnectClient();
		}

		return client;
	}

	private static getClient(): Nullable<PrismaClient> {
		return PrismaDBClientFactory.clients;
	}

	private static createAndConnectClient(): PrismaClient {
		const client = new PrismaClient();
		return client;
	}
}
