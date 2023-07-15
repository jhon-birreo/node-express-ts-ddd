import { HttpResponse } from '../../domain/HttpResponse';
export interface oks {
	data?: [] | {} | undefined | any;
	message?: string | undefined;
	token?: string | undefined;
}
export const Ok = ({ data, token, message }: oks): HttpResponse => ({
	success: true,
	data,
	token,
	message
});

export const errorResponse = (error: Error): HttpResponse => ({
	success: false,
	message: error.message
});

export const Unprocessable = (message: string): HttpResponse => ({
	success: false,
	message
});

export const Unauthorized = (message: string): HttpResponse => ({
	success: false,
	message
});

export const NotFound = (message: string): HttpResponse => ({
	success: false,
	message
});
