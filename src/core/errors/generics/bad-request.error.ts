import { StatusCodes } from 'http-status-codes';
import { BaseError } from '../base.error';

export interface InputValidation {
	field: string;
	errors?: string[];
}
export class BadRequestException extends BaseError {
	errors: InputValidation[];

	constructor(errors?: InputValidation[]) {
		const messageKey = 'errors.generic.badRequest';
		const statusCode = StatusCodes.BAD_REQUEST;

		super(statusCode, messageKey, errors);
		this.statusCode = statusCode;
		this.errors = errors ? errors : [];
	}
}
