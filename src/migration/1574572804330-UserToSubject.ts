import {MigrationInterface, QueryRunner} from "typeorm";

export class UserToSubject1574572804330 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "vent" DROP CONSTRAINT "FK_5ce2e54f6391cb3498ad0cba50a"`);
        await queryRunner.query(`ALTER TABLE "rating" DROP CONSTRAINT "FK_a6c53dfc89ba3188b389ef29a62"`);
        await queryRunner.query(`ALTER TABLE "rating" RENAME COLUMN "userId" TO "subjectId"`);
        await queryRunner.query(`CREATE TABLE "subject" ("id" character varying NOT NULL, "firstName" character varying, "lastName" character varying, "age" integer, CONSTRAINT "PK_12eee115462e38d62e5455fc054" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vent" DROP COLUMN "subject"`);
        await queryRunner.query(`ALTER TABLE "vent" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "vent" ADD "subjectText" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vent" ADD "subjectId" character varying`);
        await queryRunner.query(`ALTER TABLE "vent" ADD CONSTRAINT "FK_cfc82d7b50e56687f83a2bf1669" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rating" ADD CONSTRAINT "FK_4b01a22829eafc9223f8b12d862" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "rating" DROP CONSTRAINT "FK_4b01a22829eafc9223f8b12d862"`);
        await queryRunner.query(`ALTER TABLE "vent" DROP CONSTRAINT "FK_cfc82d7b50e56687f83a2bf1669"`);
        await queryRunner.query(`ALTER TABLE "vent" DROP COLUMN "subjectId"`);
        await queryRunner.query(`ALTER TABLE "vent" DROP COLUMN "subjectText"`);
        await queryRunner.query(`ALTER TABLE "vent" ADD "userId" character varying`);
        await queryRunner.query(`ALTER TABLE "vent" ADD "subject" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "subject"`);
        await queryRunner.query(`ALTER TABLE "rating" RENAME COLUMN "subjectId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "rating" ADD CONSTRAINT "FK_a6c53dfc89ba3188b389ef29a62" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vent" ADD CONSTRAINT "FK_5ce2e54f6391cb3498ad0cba50a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
