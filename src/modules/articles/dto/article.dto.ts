import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class ArticleDto {
    @ApiProperty()
    @IsOptional()
    @IsNumber()
    id?: number;

    @ApiProperty()
    @IsString()
    name: string;
  
    @ApiProperty()
    @IsNumber()
    quantity: number;

    @ApiProperty()
    @IsString()
    registrationDate: string;

}