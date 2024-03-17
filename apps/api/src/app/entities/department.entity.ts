import { Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity()
export class DepartmentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 64, nullable: false })
  name: string;

  @Column({ type: 'money', nullable: false })
  // consider using int with magnifier and currency type instead (store amount as cents)
  fee: number;
}
