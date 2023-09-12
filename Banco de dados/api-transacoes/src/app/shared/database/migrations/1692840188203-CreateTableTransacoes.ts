import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableTransacoes1692840188203 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'transacoes',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isNullable: false,
						isPrimary: true,
						default: 'uuid_generate_v4()',
					},
					{
						name: 'valor',
						type: 'float8',
						isNullable: false,
					},
					{
						name: 'tipo',
						type: 'int4',
						isNullable: false,
					},
					{
						name: 'id_usuario',
						type: 'uuid',
						isNullable: false,
					},
					{
						name: 'criadoem',
						type: 'timestamp',
						isNullable: false,
						default: 'now()',
					},
				],
				foreignKeys: [
					{
						columnNames: ['id_usuario'],
						referencedTableName: 'usuarios',
						referencedColumnNames: ['id'],
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('transacoes', true, true, true);
	}
}

/*

-- DROP TABLE public.transacoes;

CREATE TABLE public.transacoes (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	valor float8 NOT NULL,
	tipo int4 NOT NULL,
	criadoem timestamp NOT NULL DEFAULT now(),
	id_usuario uuid NOT NULL,
	CONSTRAINT transacoes_pkey PRIMARY KEY (id)
);

*/
