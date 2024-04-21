import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class DepartmentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 64, nullable: false })
  name: string;

  /**
   * @description 'as Eurocent'
   */
  @Column({ type: 'int', nullable: false })
  fee: number;

  @Column({ type: 'varchar', length: 6, nullable: false })
  color: string;

  @UpdateDateColumn()
  updatedAt: Date;
}
