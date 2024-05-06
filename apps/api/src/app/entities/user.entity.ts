import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoleEntity } from './role.entity';
import { UserAddressEntity } from './userAddress.entity';
import { UserDepartmentChangeEntity } from './userDepartmentChange.entity';
import { UserAttendanceEntity } from './userAttendance.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 254, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 64, nullable: false })
  firstName: string;

  @Column({ type: 'varchar', length: 64, nullable: false })
  lastName: string;

  @Column({ type: 'date', nullable: false })
  birthDate: Date;

  @OneToMany(() => UserDepartmentChangeEntity, (change) => change.user)
  departmentChanges: UserDepartmentChangeEntity[];

  @ManyToOne(() => RoleEntity)
  role: RoleEntity;

  @Column({ type: 'varchar', length: 64, nullable: true })
  passwordHash: string;

  @CreateDateColumn({ type: 'timestamp with time zone', nullable: false })
  joinedAt: Date;

  @ManyToOne(() => UserAddressEntity, (address) => address.users)
  address: UserAddressEntity;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => UserAttendanceEntity, (attendance) => attendance.user)
  attendances: UserAttendanceEntity[];
}
