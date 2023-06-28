/* spell-checker: disable */
import { randAvatar, randFullAddress, randPastDate, randPhoneNumber, randUserName, randFirstName, randLastName, randEmail } from '@ngneat/falso';
import { Gender, Prisma, PrismaClient, Role } from '@prisma/client';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

const CURRENT_DATE = new Date().toISOString();

const USERS: Prisma.UserCreateInput[] = [
  {
    uuid: randomUUID(),
    gender: Gender.UNDEFINED,
    firstName: randFirstName(),
    lastName: randLastName(),
    birthDate: randPastDate(),
    username: randUserName(),
    email: randEmail(),
    phoneNumber: randPhoneNumber(),
    address: randFullAddress(),
    profilePicUrl: randAvatar(),
    password: '12345',
    verified: true,
    enabled: true,
    roles: Array.of(Role.ADMIN),
    createdAt: CURRENT_DATE,
    updatedAt: CURRENT_DATE,
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
