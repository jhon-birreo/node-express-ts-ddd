export class DomainException extends Error {
	statusCode = 404;

	readonly message: string;

	constructor(message: string, statusCode?: number) {
		super(message);
		this.name = new.target.name;
		this.statusCode = statusCode || 404;
		this.message = message;
	}
}
