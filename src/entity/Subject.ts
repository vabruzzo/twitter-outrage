import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Rating } from './Rating';
import { Vent } from './Vent';

@Entity()
export class Subject {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  age: number;

  @OneToMany(
    type => Rating,
    rating => rating.subject
  )
  ratings: Rating[];

  @OneToMany(
    type => Vent,
    vent => vent.subject
  )
  vents: Vent[];
}
