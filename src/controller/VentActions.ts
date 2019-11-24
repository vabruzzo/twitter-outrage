import { Context } from 'koa';
import { getConnection } from 'typeorm';
import { Vent } from '../entity/Vent';

const createVent = async (ctx: Context) => {
  const {
    text,
    subjectText,
    subjectId = 'default-subject-id',
  } = ctx.request.body;
  const repository = await getConnection().getRepository(Vent);

  await repository.query(
    `
      INSERT INTO vent ("text", "subjectText", "subjectId")
        VALUES ($1, $2, $3)
    `,
    [text, subjectText, subjectId]
  );

  ctx.body = { success: true };
};

export { createVent };
