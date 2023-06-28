import { EnumValueObject } from "../../../../shared/domain/value-object/EnumValueObject";
import { InvalidArgumentError } from "../../../../shared/domain/value-object/InvalidArgumentError";

enum UserRoles {
  ADMIN = 'admin',
  USER = 'user',
  AUDITOR = 'auditor'
}

class UserRole extends EnumValueObject<UserRoles> {
  constructor(value: UserRoles) {
    super(value, Object.values(UserRoles));
  }

  public static fromValue(value: string): UserRole {
    switch (value) {
      case UserRoles.ADMIN: {
        return new UserRole(UserRoles.ADMIN);
      }
      case UserRoles.USER: {
        return new UserRole(UserRoles.USER);
      }
      case UserRoles.AUDITOR: {
        return new UserRole(UserRoles.AUDITOR);
      }
      default: {
        throw new InvalidArgumentError(`The role ${value} is invalid`);
      }
    }
  }

  protected throwErrorForInvalidValue(value: UserRoles): void {
    throw new InvalidArgumentError(`The role ${value} is invalid`);
  }
}

export { UserRole, UserRoles };
