import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsInt,
  IsDateString,
} from 'class-validator';

export class CreateExpenseDto {
  @IsNumber() //значение должно быть числом
  @IsPositive() //число больше нуля
  amount: number;

  @IsString() //значение должно быть строкой
  @IsNotEmpty() //значение не должно быть пустым
  description: string;

  @IsDateString() //значение должно быть датой
  date: string;

  @IsInt() //значение должно быть целым числом
  categoryId: number;
}
