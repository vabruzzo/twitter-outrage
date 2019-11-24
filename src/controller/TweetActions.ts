import { Context } from 'koa';
import { getConnection } from 'typeorm';
const sampleSize = require('lodash.samplesize');
import { Tweet } from '../entity/Tweet';

const getTweets = async (ctx: Context) => {
  const tweets = await getConnection()
    .getRepository(Tweet)
    .createQueryBuilder('tweet')
    .cache(3600000)
    .limit(1000)
    .getMany();

  ctx.body = sampleSize(tweets, 30);
};

export { getTweets };
