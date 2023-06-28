import { Nullable } from "../../../../shared/domain/Nullable";
import { TimeLine } from "../../../../shared/domain/value-object/TimeLine";
import { User } from "../../domain/entity/User";
import { UserEmail } from "../../domain/entity/UserEmail";
import { UserId } from "../../domain/entity/UserId";
import { UserIsActive } from "../../domain/entity/UserIsActive";
import { UserName } from "../../domain/entity/UserName";
import { UserPassword } from "../../domain/entity/UserPassword";
import { UserRepository } from "../../domain/interface/UserRepository";
import { UserRequest } from "../../domain/interface/UserRequest";

export class UserCreator {
	private readonly repository: UserRepository;
	constructor(userRepository: UserRepository) {
		this.repository = userRepository;
	}

	async run(request: UserRequest): Promise<Nullable<User>> {
		console.log('-----user run -----');

		const user = User.create(
			new UserId(''),
			new UserName(request.name),
			new UserEmail(request.email),
			new UserPassword(request.password),
			new UserIsActive(true),
			TimeLine.fromPrimitives({
				created: new Date().toISOString(),
				updated: null,
				deleted: null
			})
		);
		await this.repository.save(user);
		return user;
	}
}