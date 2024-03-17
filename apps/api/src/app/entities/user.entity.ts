import { Column, CreateDateColumn, Entity, ManyToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser';
import { RoleEntity } from './role.entity';

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

  @ManyToOne(() => RoleEntity)
  roleId: RoleEntity;

  @Column({ type: 'varchar', length: 64, nullable: false })
  passwordHash: string;

  @Column({ type: 'varchar', length: undefined, nullable: false })
  passwordSalt: string;

  @CreateDateColumn({ type: 'timestamp with time zone', nullable: false })
  joinedAt: Date;
}
