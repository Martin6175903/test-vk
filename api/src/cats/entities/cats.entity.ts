import { Column, CreateDateColumn, Entity, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'favorites_cats' })
export class CatsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_cat: string;

  @Column()
  url_image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}