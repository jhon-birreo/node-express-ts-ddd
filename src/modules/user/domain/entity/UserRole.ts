import { EnumValueObject } from '../../../../shared/domain/value-object/EnumValueObject';
import { InvalidArgumentError } from '../../../../shared/domain/value-object/InvalidArgumentError';

export enum UserRoleAvaibles {
	ADMIN = 'ADMIN',
	USER = 'USER',
	AUDITOR = 'AUDITOR'
}

class UserRole extends EnumValueObject<UserRoleAvaibles> {
	constructor(value: UserRoleAvaibles) {
		super(value, Object.values(UserRoleAvaibles));
	}

	public static fromValue(value: string): UserRole {
		switch (value) {
			case UserRoleAvaibles.ADMIN: {
				return new UserRole(UserRoleAvaibles.ADMIN);
			}
			case UserRoleAvaibles.USER: {
				return new UserRole(UserRoleAvaibles.USER);
			}
			case UserRoleAvaibles.AUDITOR: {
				return new UserRole(UserRoleAvaibles.AUDITOR);
			}
			default: {
				throw new InvalidArgumentError(`The role ${value} is invalid`);
			}
		}
	}

	protected throwErrorForInvalidValue(value: UserRoleAvaibles): void {
		throw new InvalidArgumentError(`The role ${value} is invalid`);
	}
}

export { UserRole, UserRoleAvaibles as UserRoles };
