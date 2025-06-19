import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  @IsString()
  id_cat: string;

  @IsNotEmpty()
  @IsString()
  url: string;
}