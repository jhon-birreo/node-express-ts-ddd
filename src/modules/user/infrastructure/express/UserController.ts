import { Request, Response } from 'express';
import { createServices } from '../../../../services/factory';
import { Ok } from '../../../../shared/application/helpers/http-helper';
import { HandlingExceptions } from '../../../../shared/infrastructure/errors/HandlingExceptions';
import { UserFind } from '../../application/use-case/FindUseCase';
import { UserSuscribe } from '../../application/use-case/SuscribeUseCase';

export class UserController {
	async suscribe(req: Request, res: Response): Promise<Response | void> {
		try {
			const body = req.body;
			// console.log(body);

			const service = <UserSuscribe>createServices('UserSuscribe');
			const users = await service.run(body);

			return res.status(200).json(Ok({ data: users?.toPrimitives() }));
		} catch (error) {
			HandlingExceptions.handle(error, res);
		}
	}
	// async findAll(res:Response, req: Request) : Promise<Response | void> => {

	//   try {
	//     const service = <UserFind>createServices('UserFind');

	//     const users = await service.find();
	//     const resultado =  users?.map(user => user.toPrimitives());
	//       console.log(resultado);

	// 		return res.status(200).json({ success: true, data: 'ok!' });
	// 		// return res.status(statusCode.OK).json(ok({}));
	// 	} catch (error) {
	// 		// if (error instanceof APIError) {
	// 		// 	return res.status(error.statusCode).json(errorResponse(error));
	// 		// }
	// 	}
	// }

	findAll = async (req: Request, res: Response): Promise<Response | void> => {
		try {
			const service = <UserFind>createServices('UserFind');

			const users = await service.find();
			// const resultado =  users?.map(user => user.toPrimitives());
			//   console.log(resultado);

			return res.status(200).json({ success: true, data: users });
			// return res.status(statusCode.OK).json(ok({}));
		} catch (error) {
			// if (error instanceof APIError) {
			// 	return res.status(error.statusCode).json(errorResponse(error));
			// }
		}
	};
}
