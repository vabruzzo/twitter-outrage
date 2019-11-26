import { MigrationInterface, getConnection, createConnection } from 'typeorm';
import nz from '../data/nz_shooting_clean';
import admissions from '../data/nz_shooting_clean';
import { Tweet } from '../entity/Tweet';

const tweets = nz.concat(admissions);

export class Init1559013086896 implements MigrationInterface {
  public async up(): Promise<any> {
    await createConnection();
    const connection = await getConnection();

    tweets.forEach(tweet => {
      const { tweet_id, text } = tweet;

      connection.query(
        `
          INSERT INTO "tweet" ("id", "text", "active", "metadata")
            VALUES ($1, $2, $3, $4)
        `,
        [tweet_id, text, true, {}]
      );
    });
  }

  public async down(): Promise<any> {}
}
