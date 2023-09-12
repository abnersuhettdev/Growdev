import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableEnderecos1692838404764 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'enderecos',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						isNullable: false,
					},
					{
						name: 'logradouro',
						type: 'varchar',
						length: '255',
						isNullable: false,
					},
					{
						name: 'numero',
						type: 'varchar',
						length: '50',
						isNullable: true,
					},
					{
						name: 'cidade',
						type: 'varchar',
						length: '255',
						isNullable: false,
					},
					{
						name: 'uf',
						type: 'varchar',
						length: '2',
						isNullable: false,
					},
					{
						name: 'criado_em',
						type: 'timestamp',
						isNullable: false,
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('enderecos', true, true, true);
	}
}

/*

-- DROP TABLE public.enderecos;

CREATE TABLE public.enderecos (
	id uuid NOT NULL,
	logradouro varchar(255) NOT NULL,
	numero varchar(50) NULL,
	cidade varchar(255) NOT NULL,
	uf varchar(2) NOT NULL,
	criado_em timestamp NOT NULL,
	CONSTRAINT enderecos_pkey PRIMARY KEY (id)
);

*/
