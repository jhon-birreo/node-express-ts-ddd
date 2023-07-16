import { StatusCodes } from 'http-status-codes';
import { BaseError } from './base.error';

export class SecretNotFoundException extends BaseError {
	constructor() {
		const messageKey = 'errors.custom.secretNoFound';
		const statusCode = StatusCodes.FAILED_DEPENDENCY;

		super(statusCode, messageKey);
		this.statusCode = statusCode;
	}
}
