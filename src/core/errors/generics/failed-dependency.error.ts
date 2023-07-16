import { StatusCodes } from 'http-status-codes';
import { BaseError } from '../base.error';

export class FailedDependencyException extends BaseError {
	constructor() {
		const messageKey = 'errors.generic.failedDependency';
		const statusCode = StatusCodes.FAILED_DEPENDENCY;

		super(statusCode, messageKey);
		this.statusCode = statusCode;
	}
}
