import { MigrationInterface, getConnection, createConnection } from 'typeorm';
import tweets from '../data/tweets';
import { Tweet } from '../entity/Tweet';

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
          metadata: JSON.stringify(tweet.metadata),
        }))
      )
      .execute();
  }

  public async down(): Promise<any> {}
}
