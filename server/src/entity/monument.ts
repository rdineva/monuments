import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity, 
  OneToOne, JoinColumn, ManyToMany, JoinTable, ManyToOne,
} from 'typeorm';
import { Location } from './location';
import { Region } from './region';
import { PublicFigure } from './publicFigure';

@Entity()
export class Monument extends BaseEntity {
  @PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@OneToOne(() => Location, (loc) => loc.monument, { cascade: true })
	@JoinColumn()
	location: Location;

	@ManyToMany(() => PublicFigure, (publicFigure) => publicFigure.monuments)
	@JoinTable()
	publicFigures: PublicFigure[];

	@Column({
	  	length: 100,
	  	nullable: true,
	})
	inscription: string;

	@ManyToOne(() => Region, (region) => region.monuments)
	region: Region;
}

// export default Monument;