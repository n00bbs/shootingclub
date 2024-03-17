export * from './user.entity';
export * from './city.entity';
export * from './department.entity';
export * from './role.entity';
export * from './userAddress.entity';
export * from './userAttendance.entity';
export * from './userDepartmentChange.entity';
export * from './userDepartmentChangeType.entity';
export * from './userPayment.entity';
export * from './userWeapon.entity';
export * from './weaponType.entity';

import { UserEntity } from './user.entity';
import { CityEntity } from './city.entity';
import { DepartmentEntity } from './department.entity';
import { RoleEntity } from './role.entity';
import { UserAddressEntity } from './userAddress.entity';
import { UserAttendanceEntity } from './userAttendance.entity';
import { UserDepartmentChangeEntity } from './userDepartmentChange.entity';
import { UserDepartmentChangeTypeEntity } from './userDepartmentChangeType.entity';
import { UserPaymentEntity } from './userPayment.entity';
import { UserWeaponEntity } from './userWeapon.entity';
import { WeaponTypeEntity } from './weaponType.entity';

export const entities = [
  UserEntity,
  CityEntity,
  DepartmentEntity,
  RoleEntity,
  UserAddressEntity,
  UserAttendanceEntity,
  UserDepartmentChangeEntity,
  UserDepartmentChangeTypeEntity,
  UserPaymentEntity,
  UserWeaponEntity,
  WeaponTypeEntity,
];
