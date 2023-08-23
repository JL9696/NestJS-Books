import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateAuthorDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 3)
  country: string;
}