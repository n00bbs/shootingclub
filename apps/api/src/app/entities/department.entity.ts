import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MemberEntity } from './member.entity';

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

  @ManyToMany(() => MemberEntity, (member) => member.departments)
  members: MemberEntity[];

  @Column({ type: 'varchar', length: 6, nullable: false })
  color: string;
}
