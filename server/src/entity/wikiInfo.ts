import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne,
} from 'typeorm';
import { PublicFigure } from './publicFigure';

@Entity()
export class WikiInfo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    link: string;

    @Column()
    text: string;

    @OneToOne(() => PublicFigure, (publicFigure) => publicFigure.wikiInfo, { nullable: true })
    publicFigure: PublicFigure;

    constructor(link: string) {
      super();
      this.link = link;
    }
}

// export default WikiInfo;
