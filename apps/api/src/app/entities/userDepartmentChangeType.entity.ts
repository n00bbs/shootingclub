import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserDepartmentChangeEntity } from './userDepartmentChange.entity';

@Entity()
export class UserDepartmentChangeTypeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 16, nullable: false })
  name: string;

  @OneToMany(
    () => UserDepartmentChangeEntity,
    (userDepartmentChange) => userDepartmentChange.userDepartmentChangeType,
  )
  userDepartmentChange: UserDepartmentChangeEntity;
}
