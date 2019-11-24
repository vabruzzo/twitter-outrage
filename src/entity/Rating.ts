import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Tweet } from './Tweet';
import { Subject } from './Subject';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  outrageous: boolean;

  @ManyToOne(
    type => Tweet,
    tweet => tweet.ratings
  )
  tweet: Tweet;

  @ManyToOne(
    type => Subject,
    subject => subject.ratings
  )
  subject: Subject;
}
