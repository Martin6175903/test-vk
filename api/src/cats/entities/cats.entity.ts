import { Column, CreateDateColumn, Entity, UpdateDateColumn, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity({ name: 'favorites_cats' })
export class CatsEntity {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
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