import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class EmployeeRequestDto {
  @IsNotEmpty()
  @IsNumber()
  id: Number;

  @IsNotEmpty()
  @IsString()
  name: string;
}