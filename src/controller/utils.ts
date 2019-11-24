import { getConnection } from 'typeorm';

export const getRepository = (entity: any) =>
  getConnection().getRepository(entity);
