import { StringValueObject } from '../../../../shared/domain/value-object/StringValueObject';

export class UserFirstName extends StringValueObject {
	constructor(value: string) {
		super(value);
	}
}
