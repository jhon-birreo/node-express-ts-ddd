import { Nullable } from '../../../../shared/domain/Nullable';

export interface UserRequest {
	id: number;
	uuid: string;
	firstName: string;
	lastName?: string;
	email: string;
	password: string;
	birthDate?: Date;
	gender?: string;
	phoneNumber?: string;
	address?: string;
	avatar?: string;
	roles?: string[];
	enabled: boolean;
}
