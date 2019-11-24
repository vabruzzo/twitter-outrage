import {MigrationInterface, QueryRunner} from "typeorm";

export class NullableMetadata1559015249643 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tweet" ALTER COLUMN "metadata" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tweet" ALTER COLUMN "metadata" SET NOT NULL`);
    }

}
