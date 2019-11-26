import { MigrationInterface, getConnection, createConnection } from 'typeorm';
import nz from '../data/nz_shooting_clean';
import admissions from '../data/nz_shooting_clean';
import { Tweet } from '../entity/Tweet';

const tweets = nz.concat(admissions);

export class Init1559013086896 implements MigrationInterface {
  public async up(): Promise<any> {
    await createConnection();
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Tweet)
      .values(
        tweets.map(tweet => ({
          id: tweet.tweet_id,
          text: tweet.text,
          active: true,
          //@ts-ignore
          metadata: JSON.stringify(tweet.metadata || {}),
        }))
      )
      .execute();
  }

  public async down(): Promise<any> {}
}
