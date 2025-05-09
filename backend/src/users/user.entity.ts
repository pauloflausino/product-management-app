/* User entity */
// users/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({ unique: true })
  username: string = '';

  @Column()
  password: string = '';
}