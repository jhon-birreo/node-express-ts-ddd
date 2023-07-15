/* spell-checker: disable */
import { randAvatar, randEmail, randFirstName, randLastName, randPhoneNumber } from '@ngneat/falso';
import { Prisma, PrismaClient, UserGenderAvaibles, UserRoleAvailables } from '@prisma/client';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

const CURRENT_DATE = new Date().toISOString();

const USERS: Prisma.UserCreateInput[] = [
	{
		uuid: randomUUID(),
		firstName: randFirstName(),
		lastName: randLastName(),
		email: randEmail(),
		gender: UserGenderAvaibles.UNDEFINED,
		password: '12345',
		phoneNumber: randPhoneNumber(),
		avatar: randAvatar(),
		enabled: true,
		roles: Array.of(UserRoleAvailables.ADMIN),
		timeLine: { created: CURRENT_DATE, updated: null, deleted: null }
	}
];

const main = async (): Promise<void> => {
	try {
		USERS.forEach(async user => {
			await prisma.user.create({
				data: user
			});
		});
	} catch {
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
};

main();
