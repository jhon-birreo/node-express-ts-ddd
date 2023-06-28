import { PrismaClient } from "@prisma/client";


// enum RepositoryAction {
//   CREATE = 'create',
//   UPDATE = 'update',
//   DELETE = 'delete'
// }
export abstract class PrismaDBRepository {
  constructor(private _client: Promise<PrismaClient>) {}

  protected async client(): Promise<PrismaClient> {
		return (await this._client);
	}
};

// abstract class BasePrismaRepository<T> {
//   protected getAuditablePersitenceModel(auditAction: RepositoryAction, persistenceModel?: T): T {

//     return {
//       ...((persistenceModel || {}) as T),
//       createdBy: Array.of(RepositoryAction.CREATE).includes(auditAction) ,
//       updatedBy: Array.of(RepositoryAction.CREATE, RepositoryAction.UPDATE).includes(auditAction),
       
//       deletedBy: Array.of(RepositoryAction.DELETE).includes(auditAction) ,
//       deletedAt: Array.of(RepositoryAction.DELETE).includes(auditAction),
//     };
//   }
// }
// export { BasePrismaRepository, RepositoryAction };