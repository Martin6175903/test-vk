import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsEntity } from './entities/cats.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatsEntity])],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
