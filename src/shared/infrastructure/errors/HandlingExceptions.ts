import { Response } from 'express';
import { Unprocessable } from '../../application/helpers/http-helper';
import { DomainException, ProviderException } from '../../domain/exceptions';

export class HandlingExceptions {
	public static handle(error: unknown, res: Response): Response | void {
		if (error instanceof DomainException) {
			return res.status(error.statusCode).json(Unprocessable(error.message));
		}
		if (error instanceof ProviderException) {
			return res.status(error.statusCode).json(Unprocessable(error.message));
		}
		if (error instanceof Error) {
			return res.status(500).json(Unprocessable(error.message));
		}
	}
}
