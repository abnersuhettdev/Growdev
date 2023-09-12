import { randomUUID } from 'crypto';
import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'enderecos' })
export class EnderecoEntity {
	@PrimaryColumn({ type: 'uuid' })
	id!: string;

	@Column({ type: 'varchar', length: 255 })
	logradouro!: string;

	@Column({ type: 'varchar', length: 50, default: null })
	numero?: string;

	@Column({ type: 'varchar', length: 255 })
	cidade!: string;

	@Column({ type: 'varchar', length: 2 })
	uf!: string;

	@Column({ type: 'timestamp', name: 'criado_em' })
	criadoEm!: Date;

	@BeforeInsert()
	beforeInsert() {
		this.id = randomUUID();
		this.criadoEm = new Date();
	}
}
