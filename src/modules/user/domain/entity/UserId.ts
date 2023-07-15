import { DomainError } from '../../../../shared/domain/DomainError';
import { NumberValueObject } from '../../../../shared/domain/value-object/IntValueObject';
import { StringValueObject } from '../../../../shared/domain/value-object/StringValueObject';

export class UserId extends NumberValueObject {
	constructor(value: number) {
		super(value);
		// this.validatePrefix(value);
	}
	// validatePrefix(value: string) {
	// 	if (value.length !== 24) {
	// 		throw new DomainError('Token no válido!');
	// 	}
	// }
}
