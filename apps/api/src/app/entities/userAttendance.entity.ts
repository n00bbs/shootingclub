import { Column, Entity, ManyToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser';
import { UserEntity } from '.';

@Entity()
export class UserAttendanceEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity)
  userId: string;

  @Column({ type: 'timestamp with time zone', nullable: false })
  date: Date;
}
