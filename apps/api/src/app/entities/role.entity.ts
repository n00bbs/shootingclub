import { Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity()
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 16, nullable: false })
  name: string;
}
