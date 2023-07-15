// export class ProviderException extends Error {
// 	statusCode = 500;
// 	constructor(message: string, statusCode?: number) {
// 		super(message);
// 		this.name = 'ProviderException';
// 		this.statusCode = statusCode || 500;
// 		Object.setPrototypeOf(this, ProviderException.prototype);
// 	}
// }
export class ProviderException extends Error {
	statusCode = 500;

	readonly message: string;

	constructor(message: string, statusCode?: number) {
		super(message);
		this.name = new.target.name;
		this.statusCode = statusCode || 500;
		this.message = message;
	}
}
