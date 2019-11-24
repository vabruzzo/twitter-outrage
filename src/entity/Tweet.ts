import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Rating } from './Rating';

@Entity()
export class Tweet {
  @PrimaryColumn()
  id: string;

  @Column()
  text: string;

  @Column()
  active: boolean;

  @Column({ type: 'json', nullable: true })
  metadata: string;

  @OneToMany(
    type => Rating,
    rating => rating.tweet
  )
  ratings: Rating[];
}
