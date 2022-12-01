import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
export class createUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  post: 'string';
}
