import { Request, Response } from "express";
import { createServices } from "../../../../services/factory";
import { UserCreator } from "../../application/use-case/CreateUseCase";
import { UserFind } from "../../application/use-case/FindUseCase";

export class UserController {
  constructor() {}
  async create(res:Response, req: Request):  Promise<Response | void> {
    try {
      const service = <UserCreator>createServices('UserCreator');

			return res.status(200).json({ success: true, mesage: 'OK!' });
			// return res.status(statusCode.OK).json(ok({}));
		} catch (error) {
			// if (error instanceof APIError) {
			// 	return res.status(error.statusCode).json(errorResponse(error));
			// }
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