import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CityEntity } from './city.entity';
import { UserEntity } from './user.entity';

@Entity()
export class UserAddressEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => UserEntity, (user) => user.address)
  user: UserAddressEntity;

  @Column({ type: 'varchar', length: 128, nullable: false })
  streetName: string;

  @Column({ type: 'varchar', length: 16, nullable: false })
  streetNumber: string;

  @ManyToOne(() => CityEntity)
  city: CityEntity;
}
