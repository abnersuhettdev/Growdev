import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUsuarios1692839384116 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'usuarios',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isNullable: false,
						isPrimary: true,
						default: 'uuid_generate_v4()',
					},
					{
						name: 'email',
						type: 'varchar',
						length: '150',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'senha',
						type: 'varchar',
						length: '255',
						isNullable: false,
					},
					{
						name: 'criadoem',
						type: 'timestamp',
						isNullable: false,
						default: 'now()',
					},
					{
						name: 'id_endereco',
						type: 'uuid',
						isNullable: true,
					},
				],
				foreignKeys: [
					{
						name: 'fk_enderecos',
						columnNames: ['id_endereco'],
						referencedTableName: 'enderecos',
						referencedColumnNames: ['id'],
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('usuarios', true, true, true);
	}
}

/*
-- DROP TABLE public.usuarios;

CREATE TABLE public.usuarios (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	email varchar(150) NOT NULL,
	senha varchar(255) NOT NULL,
	criadoem timestamp NOT NULL DEFAULT now(),
	id_endereco uuid NULL,
	CONSTRAINT usuarios_email_key UNIQUE (email),
	CONSTRAINT usuarios_pkey PRIMARY KEY (id)
);

ALTER TABLE public.usuarios ADD CONSTRAINT fk_enderecos FOREIGN KEY (id_endereco) REFERENCES public.enderecos(id);

*/
