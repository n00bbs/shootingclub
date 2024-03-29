import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CityEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 64, nullable: false })
  postalCode: string;

  @Column({ type: 'varchar', length: 128, nullable: false })
  name: string;
}
