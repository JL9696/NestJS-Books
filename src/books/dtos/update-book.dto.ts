import { IsNotEmpty, IsString, Length, IsInt, Min, Max, IsUUID } from 'class-validator';

export class UpdateBookDTO{
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(1000)
  price: number;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  authorId: string;
}