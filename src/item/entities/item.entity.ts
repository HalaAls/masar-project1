import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("Item")
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column('decimal')
    price: number;
}
