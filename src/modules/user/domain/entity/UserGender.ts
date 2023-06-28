import { InvalidParameterException } from "../../../../shared/domain/exceptions";
import { EnumValueObject } from "../../../../shared/domain/value-object/EnumValueObject";

enum UserGenders {
  UNDEFINED = 'undefined',
  MALE = 'male',
  FEMALE = 'female'
}

class UserGender extends EnumValueObject<UserGenders> {
  constructor(value: UserGenders) {
    super(value, Object.values(UserGenders));
  }

  public static fromValue(value: string): UserGender {
    switch (value) {
      case UserGenders.UNDEFINED: {
        return new UserGender(UserGenders.UNDEFINED);
      }
      case UserGenders.MALE: {
        return new UserGender(UserGenders.MALE);
      }
      case UserGenders.FEMALE: {
        return new UserGender(UserGenders.FEMALE);
      }
      default: {
        throw new InvalidParameterException(`The gender ${value} is invalid`);
      }
    }
  }

  protected throwErrorForInvalidValue(value: UserGenders): void {
    throw new InvalidParameterException(`The gender ${value} is invalid`);
  }
}

export { UserGender, UserGenders };