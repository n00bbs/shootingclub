import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RoleEntity } from './role.entity';
import { UserAddressEntity } from './userAddress.entity';

@Entity()
export class MemberEntity {
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

  @CreateDateColumn({ type: 'timestamp with time zone', nullable: false })
  joinedAt: Date;

  @OneToOne(() => UserAddressEntity, (address) => address.user)
  address: UserAddressEntity;
}
