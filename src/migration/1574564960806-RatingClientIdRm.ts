import {MigrationInterface, QueryRunner} from "typeorm";

export class RatingClientIdRm1574564960806 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "clientId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "rating" ADD "clientId" character varying NOT NULL`);
    }

}
