import { PrismaDBRepository } from '../../../../shared/infrastructure/persistence/prisma/PrismaDBRepository';
import { User } from '../../domain/entity/User';
import { UserRepository } from '../../domain/interface/UserRepository';

export class PrismaDBUserRepository extends PrismaDBRepository implements UserRepository {
	protected moduleName(): string {
		throw new Error('Method not implemented.');
	}

	async save(data: User): Promise<any> {
		try {
			const resu = await this.client().user.create({ data: { ...data.toPrimitives() } });
			return resu;
		} catch (error) {
			throw this.errorHandling(error);
		}
	}

	async find(params: any): Promise<User[]> {
		const data = await this.client().user.findMany();

		return data.map((result: any) => User.fromPrimitives(result));
	}
	findOne(data: any): Promise<User> {
		throw new Error('Method not implemented.');
	}
	findbyId(id: string): Promise<User | User[]> {
		throw new Error('Method not implemented.');
	}
	update(data: User): Promise<User> {
		throw new Error('Method not implemented.');
	}
	delete(): Promise<void> {
		throw new Error('Method not implemented.');
	}
}
