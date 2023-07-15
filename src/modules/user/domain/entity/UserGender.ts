import { InvalidParameterException } from '../../../../shared/domain/exceptions';
import { EnumValueObject } from '../../../../shared/domain/value-object/EnumValueObject';

export enum UserGenderAvaibles {
	UNDEFINED = 'UNDEFINED',
	MALE = 'MALE',
	FEMALE = 'FEMALE'
}

export class UserGender extends EnumValueObject<UserGenderAvaibles> {
	constructor(value: UserGenderAvaibles) {
		super(value, Object.values(UserGenderAvaibles));
	}

	static fromValue(value: string): UserGender {
		switch (value) {
			case UserGenderAvaibles.UNDEFINED: {
				return new UserGender(UserGenderAvaibles.UNDEFINED);
			}
			case UserGenderAvaibles.MALE: {
				return new UserGender(UserGenderAvaibles.MALE);
			}
			case UserGenderAvaibles.FEMALE: {
				return new UserGender(UserGenderAvaibles.FEMALE);
			}
			default: {
				throw new InvalidParameterException(`The gender ${value} is invalid`);
			}
		}
	}

	protected throwErrorForInvalidValue(value: UserGenderAvaibles): void {
		throw new InvalidParameterException(`The gender ${value} is invalid`);
	}
}
