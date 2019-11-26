import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1574739083340 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "tweet" ("id" character varying NOT NULL, "text" character varying NOT NULL, "active" boolean NOT NULL, "metadata" json, CONSTRAINT "PK_6dbf0db81305f2c096871a585f6" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "vent" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "subjectText" character varying NOT NULL, "subjectId" character varying, CONSTRAINT "PK_c9617ae11f31666a9b4bef3b091" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "subject" ("id" character varying NOT NULL, "firstName" character varying, "lastName" character varying, "age" integer, CONSTRAINT "PK_12eee115462e38d62e5455fc054" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "rating" ("id" SERIAL NOT NULL, "outrageous" boolean NOT NULL, "tweetId" character varying, "subjectId" character varying, CONSTRAINT "PK_ecda8ad32645327e4765b43649e" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "vent" ADD CONSTRAINT "FK_cfc82d7b50e56687f83a2bf1669" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "rating" ADD CONSTRAINT "FK_bc433a37982dd73aebb512e635f" FOREIGN KEY ("tweetId") REFERENCES "tweet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "rating" ADD CONSTRAINT "FK_4b01a22829eafc9223f8b12d862" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "query-result-cache"`);
    await queryRunner.query(
      `ALTER TABLE "rating" DROP CONSTRAINT "FK_4b01a22829eafc9223f8b12d862"`
    );
    await queryRunner.query(
      `ALTER TABLE "rating" DROP CONSTRAINT "FK_bc433a37982dd73aebb512e635f"`
    );
    await queryRunner.query(
      `ALTER TABLE "vent" DROP CONSTRAINT "FK_cfc82d7b50e56687f83a2bf1669"`
    );
    await queryRunner.query(`DROP TABLE "rating"`);
    await queryRunner.query(`DROP TABLE "subject"`);
    await queryRunner.query(`DROP TABLE "vent"`);
    await queryRunner.query(`DROP TABLE "tweet"`);
  }
}
