import { Nullable } from '../../../../shared/domain/Nullable';
import { UserRepository } from '../../domain/interface/UserRepository';
import { UserRequest } from '../../domain/interface/UserRequest';

export class UserFind {
	private readonly repository: UserRepository;
	constructor(userRepository: UserRepository) {
		this.repository = userRepository;
	}

	async find(): Promise<Nullable<UserRequest[]>> {
		// console.log('find');

		// const user = await this.repository.find('');
		// const result = user?.map(user => user.toPrimitives());
		// console.log('result====');
		// console.log(user);

		// return result ? result : null;
		return null;
	}
}
