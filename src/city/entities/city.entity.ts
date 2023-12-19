import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'city' })
export class CityEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'state_id', nullable: false })
    stateId: number;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'uf', nullable: false })
    uf: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: number;

    @CreateDateColumn({ name: 'updated_at' })
    updatedAt: number;
}