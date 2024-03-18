import { Column, Entity, ManyToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser';
import { UserEntity } from './user.entity';
import { DepartmentEntity } from './department.entity';
import { UserDepartmentChangeTypeEntity } from './userDepartmentChangeType.entity';

@Entity()
export class UserDepartmentChangeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @ManyToOne(() => DepartmentEntity)
  department: DepartmentEntity;

  @Column({ type: 'timestamp with time zone', nullable: false })
  date: Date;

  @ManyToOne(() => UserDepartmentChangeTypeEntity)
  userDepartmentChangeType: UserDepartmentChangeTypeEntity;
}
