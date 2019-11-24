import {MigrationInterface, QueryRunner} from "typeorm";

export class UserVent1574564858088 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "vent" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "subject" character varying NOT NULL, "userId" character varying, CONSTRAINT "PK_c9617ae11f31666a9b4bef3b091" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "rating" ADD "clientId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "rating" ADD "userId" character varying`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "vent" ADD CONSTRAINT "FK_5ce2e54f6391cb3498ad0cba50a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rating" ADD CONSTRAINT "FK_a6c53dfc89ba3188b389ef29a62" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "rating" DROP CONSTRAINT "FK_a6c53dfc89ba3188b389ef29a62"`);
        await queryRunner.query(`ALTER TABLE "vent" DROP CONSTRAINT "FK_5ce2e54f6391cb3498ad0cba50a"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "clientId"`);
        await queryRunner.query(`DROP TABLE "vent"`);
    }

}
