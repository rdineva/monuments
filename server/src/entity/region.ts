import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany,
} from 'typeorm';
import { Monument } from './monument';

@Entity()
export class Region extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
	name: string;

    @OneToMany(() => Monument, (monument) => monument.region)
    monuments: Monument[];
}

// export default Region;
