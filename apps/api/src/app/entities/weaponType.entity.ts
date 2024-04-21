import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class WeaponTypeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  photoPath: string;

  @CreateDateColumn({ type: 'timestamp with time zone', nullable: false })
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
