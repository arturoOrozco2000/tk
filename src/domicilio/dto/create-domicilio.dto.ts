import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateDomicilioDto {
  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  idUsuario: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  colonia: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  calle: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  noExterior: string;

  @ApiProperty({
    description: "",
    example: "",
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
  pais: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  ciudad: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsNumber()
  cp: number;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  celular: string;
}
