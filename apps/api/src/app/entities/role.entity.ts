import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 16, nullable: false })
  name: string;

  @Column({ type: 'boolean', default: false })
  isDefault: boolean;

  @UpdateDateColumn()
  updatedAt: Date;
}
