import { DomainError } from "../../../../shared/domain/DomainError";
import { StringValueObject } from "../../../../shared/domain/value-object/StringValueObject";

export class UserId extends StringValueObject {
	constructor(value: string) {
		super(value);
		// this.validatePrefix(value);
	}
	// validatePrefix(value: string) {
	// 	if (value.length !== 24) {
	// 		throw new DomainError('Token no válido!');
	// 	}
	// }

}
