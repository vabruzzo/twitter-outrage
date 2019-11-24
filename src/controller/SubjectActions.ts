import { Context } from 'koa';
import { getRepository } from './utils';
import { Subject } from '../entity/Subject';

const createSubject = async (ctx: Context) => {
  const { subjectId } = ctx.request.body;

  await getRepository(Subject).query(
    `
      INSERT INTO subject ("id")
        VALUES ($1)
    `,
    [subjectId]
  );

  ctx.body = { success: true };
};

export { createSubject };
