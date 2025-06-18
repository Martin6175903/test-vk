import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CatsEntity } from './entities/cats.entity';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(CatsEntity) private readonly catsRepository: Repository<CatsEntity>) {}

  async findAll(): Promise<CatsEntity[]> {
    return await this.catsRepository.find({
      order: {
        createdAt: 'desc'
      }
    });
  }

  async create(dto: CreateCatDto): Promise<CatsEntity> {
    const cat = await this.catsRepository.create(dto);

    return await this.catsRepository.save(cat);
  }

  async delete(id: number) {
    const cat =  await this.catsRepository.delete(id);

    if (cat.affected === 0) throw new NotFoundException('Cat not found and not deleted');

    return cat;
  }
}
