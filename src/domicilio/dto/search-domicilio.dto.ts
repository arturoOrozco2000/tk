import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class SearchDomicilio {
  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  @IsOptional()
  colonia?: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  @IsOptional()
  calle?: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  @IsOptional()
  noExterior?: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  @IsOptional()
  noInterior?: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  @IsOptional()
  pais?: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  @IsOptional()
  ciudad?: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsNumber()
  @IsOptional()
  cp?: number;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  @IsOptional()
  celular?: string;
}