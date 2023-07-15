import { DomainException } from '../../../../shared/domain/exceptions';

class UserNotExistsException extends DomainException {
	constructor(uuid: string) {
		super(`User with UUID <${uuid}> does not exists`);
	}
}

export { UserNotExistsException };
