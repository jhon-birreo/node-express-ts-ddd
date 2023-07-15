import { UserFind } from '../modules/user/application/use-case/FindUseCase';
import { UserSuscribe } from '../modules/user/application/use-case/SuscribeUseCase';
import { PrismaDBUserRepository } from '../modules/user/infrastructure/persistence/PrismaDBUserRepository';
import { PrismaDBClientFactory } from '../shared/infrastructure/persistence/prisma/PrismaDBClientFactory';

export function createServices(serviceName: string): any {
	switch (serviceName) {
		case 'PrismaDBUserRepository':
			const res = new PrismaDBUserRepository(PrismaDBClientFactory.openClient());
			return res;
			break;

		case 'UserSuscribe':
			return new UserSuscribe(<PrismaDBUserRepository>createServices('PrismaDBUserRepository'));
			break;
		case 'UserFind':
			return new UserFind(<PrismaDBUserRepository>createServices('PrismaDBUserRepository'));
			break;
		default:
			break;
	}
}
