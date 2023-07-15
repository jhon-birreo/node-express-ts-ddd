export interface HttpResponse {
	success: boolean;
	message?: string;
	data?: [] | {} | undefined | any;
	token?: string | undefined;
}
