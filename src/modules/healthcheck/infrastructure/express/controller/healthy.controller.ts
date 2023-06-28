import { Request, Response } from 'express';
export class HealthyController {
	constructor() {}
	healthy = async (req: Request, res: Response): Promise<Response | void> => {
		try {
			return res.status(200).json({ success: true, mesage: 'OK!' });
			// return res.status(statusCode.OK).json(ok({}));
		} catch (error) {
			// if (error instanceof APIError) {
			// 	return res.status(error.statusCode).json(errorResponse(error));
			// }
		}
	};
}
