import { Column, CreateDateColumn, Entity, UpdateDateColumn, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity({ name: 'favorites_cats' })
export class CatsEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  id_cat: string;

  @Column({
    unique: true
  })
  url: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}