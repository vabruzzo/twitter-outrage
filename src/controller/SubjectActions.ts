import { Context } from 'koa';
import { getConnection } from 'typeorm';
import { Subject } from '../entity/Subject';

const createSubject = async (ctx: Context) => {
  const { subjectId } = ctx.request.body;
  const repository = await getConnection().getRepository(Subject);

  await repository.query(
    `
      INSERT INTO subject ("id")
        VALUES ($1)
    `,
    [subjectId]
  );

  ctx.body = { success: true };
};

export { createSubject };
