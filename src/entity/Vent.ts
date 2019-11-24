import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Subject } from './Subject';

@Entity()
export class Vent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  subjectText: string;

  @ManyToOne(
    type => Subject,
    subject => subject.vents
  )
  subject: Subject;
}
