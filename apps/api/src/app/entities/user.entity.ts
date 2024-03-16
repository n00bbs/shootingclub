import { Column, Entity, PrimaryColumn } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 244,
  })
  email: string;
}
