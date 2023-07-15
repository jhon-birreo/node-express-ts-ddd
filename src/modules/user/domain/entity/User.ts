import { AggregateRoot } from '../../../../shared/domain/AggregateRoot';
import { Nullable } from '../../../../shared/domain/Nullable';
import { TimeLine } from '../../../../shared/domain/value-object/TimeLine';
import { UserAvatar } from './UserAvatar';
import { UserEmail } from './UserEmail';
import { UserEnabled } from './UserEnable';
import { UserFirstName } from './UserFirstName';
import { UserGender } from './UserGender';
import { UserId } from './UserId';
import { UserLastName } from './UserLastName';
import { UserPassword } from './UserPassword';
import { UserPhoneNumber } from './UserPhoneNumber';
import { UserRole } from './UserRole';
import { UserUuid } from './UserUuid';

export class User extends AggregateRoot {
	id: Nullable<UserId>;
	uuid: UserUuid;
	firstName: UserFirstName;
	lastName: Nullable<UserLastName>;
	email: UserEmail;
	password: UserPassword;
	gender: UserGender;
	roles: UserRole;
	phoneNumber: Nullable<UserPhoneNumber>;
	avatar: Nullable<UserAvatar>;
	enabled: UserEnabled;
	timeLine: TimeLine;
	constructor(
		id: Nullable<UserId>,
		uuid: UserUuid,
		firstName: UserFirstName,
		lastName: Nullable<UserLastName>,
		email: UserEmail,
		password: UserPassword,
		gender: UserGender,
		roles: UserRole,
		phoneNumber: Nullable<UserPhoneNumber>,
		avatar: Nullable<UserAvatar>,
		enabled: UserEnabled,
		timeLine: TimeLine
	) {
		super();
		this.id = id;
		this.uuid = uuid;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.gender = gender;
		this.roles = roles;
		this.phoneNumber = phoneNumber;
		this.avatar = avatar;
		this.enabled = enabled;
		this.timeLine = timeLine;
	}
	static create(
		id: Nullable<UserId>,
		uuid: UserUuid,
		firstName: UserFirstName,
		lastName: Nullable<UserLastName>,
		email: UserEmail,
		password: UserPassword,
		gender: UserGender,
		roles: UserRole,
		phoneNumber: Nullable<UserPhoneNumber>,
		avatar: Nullable<UserAvatar>,
		enabled: UserEnabled,
		timeLine: TimeLine
	): User {
		const user = new User(
			id,
			uuid,
			firstName,
			lastName,
			email,
			password,
			gender,
			roles,
			phoneNumber,
			avatar,
			enabled,
			timeLine
		);
		return user;
	}

	toPrimitives() {
		return {
			id: this.id?.value,
			uuid: this.uuid.value,
			firstName: this.firstName.value,
			lastName: this.lastName?.value,
			email: this.email.value,
			password: this.password.value,
			gender: this.gender.value,
			roles: this.roles.value,
			phoneNumber: this.phoneNumber?.value,
			avatar: this.avatar?.value,
			enabled: this.enabled ? this.enabled.value : true,
			timeLine: this.timeLine.toPrimitives()
		};
	}

	static fromPrimitives(primitives: any): User {
		return new User(
			new UserId(primitives.id),
			new UserUuid(primitives.uuid),
			new UserFirstName(primitives.firsName),
			new UserLastName(primitives.lastName),
			new UserEmail(primitives.email),
			new UserPassword(primitives.password),
			new UserGender(primitives.gender),
			new UserRole(primitives.role),
			new UserPhoneNumber(primitives.phoneNumber),
			new UserAvatar(primitives.avatar),
			new UserEnabled(primitives.enabled),
			new TimeLine(
				primitives.timeLine.created,
				primitives.timeLine.updated || null,
				primitives.timeLine.deleted || null
			)
		);
	}

	updateFromPrimitives(plainData: any): User {
		return User.fromPrimitives({
			...this.toPrimitives(),
			...plainData,
			...{
				timeLine: {
					...this.timeLine.toPrimitives(),
					...{
						updated: new Date().toISOString()
					}
				}
			}
		});
	}

	delete(): User {
		const deletedUser = User.fromPrimitives({
			...this.toPrimitives(),
			...{
				timeLine: {
					...this.timeLine.toPrimitives(),
					...{
						deleted: new Date().toISOString()
					}
				}
			}
		});
		return deletedUser;
	}
}
