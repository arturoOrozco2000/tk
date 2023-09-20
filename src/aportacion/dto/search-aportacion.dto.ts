import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class SearchAportacion {
  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  @IsOptional()
  noCuenta?: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsNumber()
  @IsOptional()
  monto?: number;
}