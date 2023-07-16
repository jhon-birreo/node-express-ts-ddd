import { StatusCodes } from 'http-status-codes';
import { BaseError } from '../base.error';

export class InternalServerException extends BaseError {
	constructor() {
		const messageKey = 'errors.generic.internalServer';
		const statusCode = StatusCodes.INTERNAL_SERVER_ERROR;

		super(statusCode, messageKey);
		this.statusCode = statusCode;
	}
}
