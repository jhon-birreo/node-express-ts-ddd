import { PrismaClient } from '@prisma/client';

export class PrismaDBClientFactory {
	private static clients: PrismaClient;

	static async openClient(): Promise<PrismaClient> {
		let client = new PrismaClient();
		return client;
	}

}
