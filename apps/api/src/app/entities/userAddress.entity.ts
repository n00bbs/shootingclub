import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser';
import { CityEntity, UserEntity } from '.';

@Entity()
export class UserAddressEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => UserEntity, (user) => user.id)
  //? is this right? why do the docs [https://typeorm.io/many-to-one-one-to-many-relations#] say @OneToMany requires @ManyToOne on the inverse side of the relationship but I get no error?
  userId: string;

  @Column({ type: 'varchar', length: 128, nullable: false })
  streetName: string;

  @Column({ type: 'varchar', length: 16, nullable: false })
  streetNumber: string;

  @ManyToOne(() => CityEntity)
  //? don't save duplicate city + postal code combo in database, check if already exists first
  cityId: string;
}
