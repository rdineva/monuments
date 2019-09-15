import {
	Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToOne, JoinColumn,
} from 'typeorm';
import { Monument } from './monument';
import { WikiInfo } from './wikiInfo';

@Entity()
export class PublicFigure extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	name: string;

	@Column('date')
	dateOfBirth: Date;

	@Column('date')
	dateOfDeath: Date;

	@Column({
	  	length: 1000,
	  	nullable: true,
	})
	biography: string;

	@Column({
	  	length: 50,
	  	nullable: true,
	})
	townOfBirth: string;

	@ManyToMany(() => Monument, (monument) => monument.publicFigures)
	monuments: Monument[];

	@OneToOne(() => WikiInfo, (wikiInfo) => wikiInfo.publicFigure, { nullable: true })
	@JoinColumn()
	wikiInfo: WikiInfo;
}

// export default PublicFigure;
