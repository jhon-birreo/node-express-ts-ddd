import { UserCreator } from "../modules/user/application/use-case/CreateUseCase";
import { UserFind } from "../modules/user/application/use-case/FindUseCase";
import { PrismaDBUserRepository } from "../modules/user/infrastructure/persistence/PrismaDBUserRepository";
import { PrismaDBClientFactory } from "../shared/infrastructure/router/persistence/prisma/PrismaDBClientFactory";

export function createServices(serviceName:string) : any{
  switch (serviceName) {
    case 'PrismaDBUserRepository':
      console.log('in -> PrismaDBUserRepository');
      return new PrismaDBUserRepository(
				PrismaDBClientFactory.openClient()
			);
      break;
  
    case 'UserCreator':
      return new UserCreator(<PrismaDBUserRepository>createServices('PrismaDBUserRepository'));
      break;
    case 'UserFind':
      console.log('UserFind');
      
      return new UserFind(<PrismaDBUserRepository>createServices('PrismaDBUserRepository'));
      break;
    default:
      break;
  }
  
}