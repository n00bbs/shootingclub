import { Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity()
export class CityEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 64, nullable: false })
  postalCode: string;

  @Column({ type: 'varchar', length: 128, nullable: false })
  name: string;
}
