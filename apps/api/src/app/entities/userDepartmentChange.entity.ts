import { Column, Entity, ManyToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser';
import { DepartmentEntity, UserEntity } from '.';

@Entity()
export class UserDepartmentChangeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity)
  userId: string;

  @ManyToOne(() => DepartmentEntity)
  departmentId: string;

  @Column({ type: 'timestamp with time zone', nullable: false })
  date: Date;

  @Column({ type: 'uuid', nullable: false })
  userDepartmentChangeTypeId: string;
}
