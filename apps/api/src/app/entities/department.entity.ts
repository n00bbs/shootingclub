import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
