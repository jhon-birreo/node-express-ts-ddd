import messages from '../locales/es/messages.json';

export class BaseError extends Error {
	statusCode: number;
	errors?: unknown[];

	constructor(statusCode: number, messageKey: string, errors?: unknown[]) {
		const [key1, key2, key3] = messageKey.split('.');

		const message = messages[key1][key2][key3];

		super(message);

		Object.setPrototypeOf(this, new.target.prototype);
		this.statusCode = statusCode;
		this.message = message;
		s;
		this.errors = errors;

		Error.captureStackTrace(this);
	}
}
