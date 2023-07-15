import { Nullable } from '../../../../shared/domain/Nullable';
import { TimeLine } from '../../../../shared/domain/value-object/TimeLine';
import { User } from '../../domain/entity/User';
import { UserEmail } from '../../domain/entity/UserEmail';
import { UserEnabled } from '../../domain/entity/UserEnable';
import { UserFirstName } from '../../domain/entity/UserFirstName';
import { UserGender, UserGenderAvaibles } from '../../domain/entity/UserGender';
import { UserPassword } from '../../domain/entity/UserPassword';
import { UserRole, UserRoleAvaibles } from '../../domain/entity/UserRole';
import { UserUuid } from '../../domain/entity/UserUuid';
import { UserRepository } from '../../domain/interface/UserRepository';
import { UserRequest } from '../../domain/interface/UserRequest';

export class UserSuscribe {
	private readonly repository: UserRepository;
	constructor(userRepository: UserRepository) {
		this.repository = userRepository;
	}

	async run(request: UserRequest): Promise<Nullable<User>> {
		const user = User.create(
			null,
			UserUuid.random(),
			new UserFirstName(request.firstName),
			null,
			new UserEmail(request.email),
			new UserPassword(request.password),
			new UserGender(UserGenderAvaibles.UNDEFINED),
			new UserRole(UserRoleAvaibles.ADMIN),
			null,
			null,
			new UserEnabled(true),
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
