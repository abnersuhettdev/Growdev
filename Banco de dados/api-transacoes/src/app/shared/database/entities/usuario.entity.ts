import { BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { EnderecoEntity } from './endereco.entity';
import { TransacaoEntity } from './transacao.entity';

// PADRÃO => active records
// @Entity({ name: 'usuarios' })
// export class UsuarioEntity extends BaseEntity {
// 	@PrimaryColumn()
// 	id!: string;

// 	@Column({ unique: true, type: 'varchar', length: 150 })
// 	email!: string;

// 	@Column({ type: 'varchar', length: 255 })
// 	senha!: string;

// 	@Column({ name: 'criadoem' })
// 	criadoEm!: Date;

// 	@BeforeInsert()
// 	beforeInsert() {
// 		// this.id = randomUUID();
// 		this.criadoEm = new Date();
// 	}
// }

@Entity({ name: 'usuarios' })
export class UsuarioEntity {
	@PrimaryColumn()
	id!: string;

	@Column({ unique: true, type: 'varchar', length: 150 })
	email!: string;

	@Column({ type: 'varchar', length: 255 })
	senha!: string;

	@Column({ name: 'criadoem' })
	criadoEm!: Date;

	@Column({ name: 'id_endereco', nullable: true })
	idEndereco!: string | null;

	@OneToOne(() => EnderecoEntity) // { eager: true }
	@JoinColumn({ name: 'id_endereco', foreignKeyConstraintName: 'fk_enderecos', referencedColumnName: 'id' })
	endereco?: EnderecoEntity;

	@OneToMany(() => TransacaoEntity, (transacao) => transacao.usuario)
	transacoes!: TransacaoEntity[];

	@BeforeInsert()
	beforeInsert() {
		// this.id = randomUUID();
		this.criadoEm = new Date();
	}
}
