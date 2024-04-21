import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { DepartmentEntity } from './department.entity';

@Entity()
export class UserDepartmentChangeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.departmentChanges)
  user: UserEntity;

  @ManyToOne(() => DepartmentEntity)
  department: DepartmentEntity;

  @Column({
    type: 'enum',
    enum: ['join', 'leave'],
    nullable: false,
  })
  changeType: 'join' | 'leave';

  @CreateDateColumn({ type: 'timestamp with time zone', nullable: false })
  createdAt: Date;
}
