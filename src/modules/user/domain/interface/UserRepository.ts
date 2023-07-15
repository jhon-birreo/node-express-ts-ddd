import { User } from '../entity/User';
export interface UserRepository {
	save(data: User): Promise<void>;
	find(params: any): Promise<User[]>;
	findOne(data: any): Promise<User>;
	findbyId(id: string): Promise<User | User[]>;
	update(data: User): Promise<User>;
	delete(): Promise<void>;
}
