import { Column, Entity, ManyToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser';
import { UserEntity, WeaponTypeEntity } from '.';

@Entity()
export class UserWeaponEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity)
  userId: string;

  @ManyToOne(() => WeaponTypeEntity)
  weaponTypeId: string;

  @Column({ type: 'varchar', length: 64, nullable: false })
  serialNumber: string;

  @Column({ type: 'timestamp with time zone', nullable: false })
  createdAt: Date;
}
