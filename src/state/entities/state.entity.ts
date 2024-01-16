import { CityEntity } from '../../city/entities/city.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'state' })
export class StateEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'uf', nullable: false })
  uf: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: number;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: number;

  @OneToMany(() => CityEntity, (city) => city.state)
  cities?: CityEntity[];
}
