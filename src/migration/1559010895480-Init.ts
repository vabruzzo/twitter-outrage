import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1559010895480 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "tweet" ("id" character varying NOT NULL, "text" character varying NOT NULL, "active" boolean NOT NULL, "metadata" json NOT NULL, CONSTRAINT "PK_6dbf0db81305f2c096871a585f6" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "rating" ("id" SERIAL NOT NULL, "outrageous" boolean NOT NULL, "tweetId" character varying, CONSTRAINT "PK_ecda8ad32645327e4765b43649e" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "rating" ADD CONSTRAINT "FK_bc433a37982dd73aebb512e635f" FOREIGN KEY ("tweetId") REFERENCES "tweet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "query-result-cache"`);
    await queryRunner.query(
      `ALTER TABLE "rating" DROP CONSTRAINT "FK_bc433a37982dd73aebb512e635f"`
    );
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "rating"`);
    await queryRunner.query(`DROP TABLE "tweet"`);
  }
}
