import { Prisma, PrismaClient } from '@prisma/client';
import { ProviderException } from '../../../domain/exceptions';
import { DomainException } from '../../../domain/exceptions/domain.exception';

export abstract class PrismaDBRepository {
	constructor(private _client: PrismaClient) {}

	protected client(): PrismaClient {
		return this._client;
	}

	protected errorHandling(error: any): Error {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			switch (error.code) {
				case 'P2002':
					throw new ProviderException('Unique constraint failed', 409);
					break;
				case 'P2003':
					throw new ProviderException('Foreign key constraint failed on the field', 409);
					break;
				case 'P2008':
					throw new ProviderException('Failed to parse the query', 409);
					break;
				case 'P1015':
					throw new ProviderException('Prisma schema not supported for the version of the database');
					break;
				case 'P2021':
					throw new ProviderException('The table does not exist in the current database');
					break;
				case 'P2023':
					throw new ProviderException('Inconsistent column data');
					break;
				case 'P2024':
					throw new ProviderException('Timed out fetching a new connection from the connection pool');
					break;
				case 'P2028':
					throw new ProviderException('Transaction API error');
					break;
				case 'P2034':
					throw new ProviderException('Transaction failed due to a write conflict or a deadlock');
					break;
				default:
					throw new ProviderException('Database error!');
					break;
			}
		} else {
			throw new ProviderException('Database error!');
		}
	}
}
