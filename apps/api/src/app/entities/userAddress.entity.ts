import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CityEntity } from './city.entity';
import { UserEntity } from './user.entity';

@Entity()
export class UserAddressEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => UserEntity, (user) => user.address, {
    onDelete: 'CASCADE',
  })
  users: UserAddressEntity[];

  @Column({ type: 'varchar', length: 128, nullable: false })
  streetName: string;

  @Column({ type: 'varchar', length: 16, nullable: false })
  streetNumber: string;

  @ManyToOne(() => CityEntity)
  city: CityEntity;

  @UpdateDateColumn()
  updatedAt: Date;
}
