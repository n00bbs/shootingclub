import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { WeaponTypeEntity } from './weaponType.entity';

@Entity()
export class UserWeaponEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @ManyToOne(() => WeaponTypeEntity)
  weaponType: WeaponTypeEntity;

  @Column({ type: 'varchar', length: 64, nullable: false })
  serialNumber: string;

  @Column({ type: 'timestamp with time zone', nullable: false })
  createdAt: Date;
}
