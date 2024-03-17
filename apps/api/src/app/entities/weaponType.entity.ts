import { Column, CreateDateColumn, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser';

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
}
