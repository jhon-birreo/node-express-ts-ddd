import { BooleanValueObject } from '../../../../shared/domain/value-object/BooleanValueObject';

export class UserEnabled extends BooleanValueObject {
	constructor(value: boolean) {
		super(value);
	}
}
