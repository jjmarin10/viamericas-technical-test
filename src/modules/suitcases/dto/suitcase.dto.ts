import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class SuitcaseDto {
    @ApiProperty()
    @IsOptional()
    @IsNumber()
    id?: number;
  
    @ApiProperty()
    @IsNumber()
    weight: number;
  
    @ApiProperty()
    @IsString()
    registrationDate: string;
  }