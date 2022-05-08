import { BaseEntity } from 'type/BaseEntity';
import { Column, CreateDateColumn, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 255,
  })
  lastName!: string;


  @Column({
    type: 'varchar',
    length: 255,
  })
  firstName!: string;


  public name(): string {
    return `${this.firstName} ${this.lastName}`;
  }


  @Column({
    type: 'varchar',
    length: 255,
  })
  email!: string;

  //
  @Column({
    type: 'varchar',
    length: 255,
  })
  password!: string;


  @CreateDateColumn()
  startDate!: Date;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  image?: string;
}
