import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity()
export class UserPaymentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @Column({ type: 'money', nullable: false })
  amount: number;

  @Column({ type: 'timestamp with time zone', nullable: false })
  date: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
