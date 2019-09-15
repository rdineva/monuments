import {
  Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToOne,
} from 'typeorm';
import { Monument } from './monument';

@Entity()
export class Location extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('float')
    latitude: number;

    @Column('float')
    longitude: number;

    @OneToOne(() => Monument, (monument) => monument.location)
    monument: Monument;

    constructor(latitude: number, longitude: number) {
      super();
      this.latitude = latitude;
      this.longitude = longitude;
    }
}
